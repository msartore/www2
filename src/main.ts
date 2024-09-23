import { createApp } from "vue";
import { createHead } from "@unhead/vue";
import App from "./App.vue";
import "~/styles/index.scss";
import "uno.css";
import "element-plus/theme-chalk/src/message.scss";
import router from "~/router/index.js";

createApp(App).use(createHead()).use(router).mount("#app");
