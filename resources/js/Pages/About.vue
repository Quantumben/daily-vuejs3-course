<template>
     <Head title="About us" />
    <AppLayout>
        <h2 class="mt-4 text-2xl">About us</h2>
        <p>Text about us.</p>
    </AppLayout>
</template>
<script>
import AppLayout from "../Layouts/App.vue";
import { Head } from "@inertiajs/vue3";

export default {
    name: "About",
    components: {
        AppLayout,
        Head
    },
};
</script>
