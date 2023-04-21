<template>
    <Head title="Post list" />

    <AppLayout>
        <Link :href="route('posts.create')" class="inline-block px-4 py-3 bg-blue-500 text-white rounded mb-4">Add new post</Link>
        <table class="mt-4 min-w-full divide-y divide-gray-200 border">
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
                <tr v-for="post in posts" :key="post.id">
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
    </AppLayout>
</template>

<script>
import AppLayout from "../../Layouts/App.vue";
import { Head, Link } from "@inertiajs/vue3";

export default {
    name: "Post",
    components: {
        AppLayout,
        Head,
        Link,
    },
    props: {
        posts: Object,
    },
};
</script>
