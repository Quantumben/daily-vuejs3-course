// import { createApp } from "vue";
// import PostsIndex from "./components/Posts/Index.vue";

// const app = createApp({});
// app.component('posts-index', PostsIndex);
// app.mount('#app');

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { InertiaProgress } from '@inertiajs/progress'


createInertiaApp({
    resolve: (name) => {
        const pages =
            import.meta.glob("./Pages/**/*.vue", { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mixin({ methods: { route: window.route } })
            .mount(el);
    },
});

InertiaProgress.init({
    //The delay after which the progress bar will
    //appear during navigation, in milliseconds
    delay: 250,

    //The color of the progress bar
    color: '#29d',

    //Whether to include the default Nprogress styles
    includeCss: true,

    //Whether the Nprogress spinner will be shown
    showSpinner: true
});
