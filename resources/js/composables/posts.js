/*
This code defines a function called usePosts that returns an object with two properties: posts and getPosts.

The usePosts function uses the ref function from the Vue library to create a reactive variable called posts that initially holds an empty array.

The getPosts function is defined to retrieve posts from an API endpoint using the axios library. Once the posts are retrieved,

the posts variable is updated with the retrieved data.

The usePosts function is meant to be used as a composition function in Vue components to provide them with access

to the posts data and the getPosts function to retrieve posts from the API.

*/

import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function usePosts() {
    const posts = ref({});
    const post = ref({});
    const router = useRouter();
    const validationErrors = ref({})
    const isLoading = ref(false)

    const getPosts = async(
        page = 1,
        category = '',
        order_column = 'created_at',
        order_direction = 'desc'
    ) => {
        axios.get(
                `api/posts?page=${page}` +
                '&category=' + category +
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
            })
            .catch(error => {
                if (error && error.response && error.response.data) {
                    validationErrors.value = error.response.data.errors;
                }

            })
            .finally(() => isLoading.value = false)
    }

    return { posts, post, getPosts, getPost, storePost, validationErrors, isLoading }
}