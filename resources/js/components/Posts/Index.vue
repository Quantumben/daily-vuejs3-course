<template>
    <div class="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
        <div class="min-w-full align-middle">
            <table class="min-w-full divide-y divide-gray-200 border">
                <thead>
                    <tr>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span
                                class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                >ID</span
                            >
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span
                                class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                >Title</span
                            >
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span
                                class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                >Content</span
                            >
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span
                                class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                >Created at</span
                            >
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                    <tr v-for="post in posts.data" :key="post.id">
                        <td
                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                        >
                            {{ post.id }}
                        </td>

                        <td
                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                        >
                            {{ post.title }}
                        </td>

                        <td
                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                        >
                            {{ post.content }}
                        </td>

                        <td
                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                        >
                            {{ post.created_at }}
                        </td>
                    </tr>
                </tbody>
            </table>
     
            <Pagination :data="posts" @pagination-change-page="getPosts" />
        </div>
    </div>
</template>
<!-- /*
This code defines a Vue.js component called "Post" and uses the Vue.js composition API to fetch and display a list of posts.

The import { onMounted } from 'vue' statement imports the onMounted function from the Vue.js package.

The import usePosts from '../../composables/posts' statement imports a custom composable function called usePosts from the posts.js file located in the composables directory.

The const { posts, getPosts } = usePosts() statement calls the usePosts() function to get the posts data and getPosts function from the posts.js file.

The onMounted(getPosts) statement calls the getPosts function when the component is mounted.

The return { posts } statement returns the posts data object to be used in the template of the component.
*/ -->
<script>
import { onMounted } from 'vue';
import usePosts from '../../composables/posts'

export default {
    name: "Post",
    setup(){
        const { posts, getPosts } = usePosts()

        onMounted(getPosts)

        return { posts, getPosts }
    },
};
</script>
