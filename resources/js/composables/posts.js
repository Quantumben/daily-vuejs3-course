/*
This code defines a function called usePosts that returns an object with two properties: posts and getPosts.

The usePosts function uses the ref function from the Vue library to create a reactive variable called posts that initially holds an empty array.

The getPosts function is defined to retrieve posts from an API endpoint using the axios library. Once the posts are retrieved,

the posts variable is updated with the retrieved data.

The usePosts function is meant to be used as a composition function in Vue components to provide them with access

to the posts data and the getPosts function to retrieve posts from the API.

*/

import axios from "axios";
import { ref, inject } from "vue";
import { useRouter } from "vue-router";

export default function usePosts() {
    const posts = ref({});
    const post = ref({});
    const router = useRouter();
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')


    const getPosts = async(
        page = 1,
        search_category = '',
        search_id = '',
        search_title = '',
        search_content = '',
        search_global = '',
        order_column = 'created_at',
        order_direction = 'desc'
    ) => {
        axios.get('/api/posts?page=' + page +
                '&search_category=' + search_category +
                '&search_id=' + search_id +
                '&search_title=' + search_title +
                '&search_content=' + search_content +
                '&search_global=' + search_global +
                '&order_column=' + order_column +
                '&order_direction=' + order_direction)
            .then(response => {
                posts.value = response.data;
            });
    };

    const getPost = async(id) => {
        axios.get('/api/posts/' + id)
            .then(response => {
                post.value = response.data.data;
            })
    }

    const storePost = async(post) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        let serializedPost = new FormData()
        for (let item in post) {
            if (post.hasOwnProperty(item)) {
                serializedPost.append(item, post[item])
            }
        }

        axios.post('/api/posts', serializedPost)
            .then(response => {
                router.push({ name: 'posts.index' })
                swal({
                    icon: 'success',
                    title: 'Post saved successfully'
                })
            })
            .catch(error => {
                if (error && error.response && error.response.data) {
                    validationErrors.value = error.response.data.errors;
                }

            })
            .finally(() => isLoading.value = false)
    }

    const updatePost = async(post) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/posts/' + post.id, post)
            .then(response => {
                router.push({ name: 'posts.index' })
                swal({
                    icon: 'success',
                    title: 'Post updated successfully'
                })
            })
            .catch(error => {
                if (error && error.response && error.response.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const deletePost = async(id) => {
        swal({
                title: 'Are you sure?',
                text: 'You won\'t be able to revert this action!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                confirmButtonColor: '#ef4444',
                timer: 20000,
                timerProgressBar: true,
                reverseButtons: true
            })
            .then(result => {
                if (result.isConfirmed) {
                    axios.delete('/api/posts/' + id)
                        .then(response => {
                            getPosts()
                            router.push({ name: 'posts.index' })
                            swal({
                                icon: 'success',
                                title: 'Post deleted successfully'
                            })
                        })
                        .catch(error => {
                            swal({
                                icon: 'error',
                                title: 'Something went wrong'
                            })
                        })
                }
            })
    }

    return {
        posts,
        post,
        getPosts,
        getPost,
        storePost,
        updatePost,
        deletePost,
        validationErrors,
        isLoading
    }
}
