import axios from "axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//createApp(App).use(router).use(store).mount("#app");
const app = createApp(App);
app.config.globalProperties.$axis = axios;
app.use(router).use(store).mount("#app");
