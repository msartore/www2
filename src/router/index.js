import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Donation from "../views/Donation.vue";
import Atagui from "../views/projects/ATA-GUI.vue";
import Ata from "../views/projects/ATA.vue";
import Ares from "../views/projects/Ares.vue";
import NotFoundComponent from "../views/NotFoundComponent.vue";
import AresPrivacy from "../views/projects/privacy/Ares.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/projects/ata-gui", component: Atagui },
  { path: "/projects/ata", component: Ata },
  { path: "/projects/ares", component: Ares },
  { path: "/donation", component: Donation },
  { path: "/projects/ares/privacy", component: AresPrivacy },
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
