import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Atagui from "../views/projects/ATA-GUI.vue";
import Ata from "../views/projects/ATA.vue";
import Ares from "../views/projects/Ares.vue";
import NotFoundComponent from "../views/NotFoundComponent.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/projects/ata-gui", component: Atagui },
  { path: "/projects/ata", component: Ata },
  { path: "/projects/ares", component: Ares },
  {
    path: "/:catchAll(.*)*",
    component: NotFoundComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
