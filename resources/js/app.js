// import { createApp } from "vue";
// import PostsIndex from "./components/Posts/Index.vue";

// const app = createApp({});
// app.component('posts-index', PostsIndex);
// app.mount('#app');

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
    resolve: name => {
        const pages =
            import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})