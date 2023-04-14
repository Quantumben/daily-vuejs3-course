import { createApp } from "vue";
import PostsIndex from "./components/Post.vue";

const app = createApp();
app.component('index', PostsIndex);
app.mount('#app');