import { createApp } from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";
import "./assets/style.css";
import store from "./store/index";
import router from "./router/index";
const app = createApp(App);
app.component("app-header", Header);
app.use(store);
app.use(router);
app.mount("#app");
