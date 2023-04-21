<template>
    <Head title="Log in" />
    <AuthLayout>
        <p>Login form coming soon.</p>
    </AuthLayout>
</template>

<script>
import AuthLayout from "../../Layouts/Auth.vue"
import { Head } from "@inertiajs/vue3"

export default {
    name:'Login',
    components: {
        AuthLayout, Head
    }
}
</script>
