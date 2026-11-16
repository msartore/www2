import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import "~/styles/index.scss";
import "uno.css";
import "element-plus/theme-chalk/src/message.scss";
import { routes } from "~/router/index.js";

export const createApp = ViteSSG(App, { routes });
