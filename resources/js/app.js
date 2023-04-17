import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import PostsIndex from "./components/Posts/Index.vue";
import { TailwindPagination } from 'laravel-vue-pagination';


const routes = [
    { path: '/', component: PostsIndex }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp({});
app.use(router);
app.component('Pagination', TailwindPagination);
app.mount('#app');