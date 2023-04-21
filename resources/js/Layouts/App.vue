<template>
    <div class="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
        <div class="min-w-full align-middle">
            <Link :href="route('posts.index')">Post</Link>
            <Link :href="route('pages.about')" class="ml-2">About</Link>

            <slot />
        </div>
    </div>
</template>

<script>
import { Link } from "@inertiajs/vue3";

export default {
    name: "App",
    components: {
        Link,
    },
};
</script>
