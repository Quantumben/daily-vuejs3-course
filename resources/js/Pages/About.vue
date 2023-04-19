<template>
     <div class="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
        <div class="min-w-full align-middle">
            <Link href="../posts">Post</Link>
            <Link href="../about" class="ml-2">About</Link>

            <h2 class="mt-4 text-2xl">About us</h2>
            <p>Text about us.</p>
        </div>
    </div>
</template>
<script>
import { Link } from "@inertiajs/vue3";
export default {
    name: "About",
    components: {
        Link,
    }
};
</script>
