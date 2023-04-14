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

export default function usePosts() {
    const posts = ref([]);

    const getPosts = async() => {
        axios.get("api/posts").then((response) => {
            posts.value = response.data.data;
        });
    };

    return { posts, getPosts };
}