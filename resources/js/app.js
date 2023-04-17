import { createApp } from "vue";
import App from "./layouts/App.vue";
import { TailwindPagination } from "laravel-vue-pagination";
import router from "./routes/index";

const app = createApp(App);
app.use(router);
app.component("Pagination", TailwindPagination);
app.mount("#app");
