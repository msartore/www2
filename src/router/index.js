import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Donation from "../views/Donation.vue";
import Atagui from "../views/projects/ATA-GUI.vue";
import Ata from "../views/projects/ATA.vue";
import Ares from "../views/projects/Ares.vue";
import NotFound from "../views/NotFound.vue";
import AresPrivacy from "../views/projects/privacy/Ares.vue";
import BCPrivacy from "../views/projects/privacy/Battery-Calibrator.vue";
import BCPTerms from "../views/projects/terms/Battery-Calibrator.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/projects/ata-gui", component: Atagui },
  { path: "/projects/ata", component: Ata },
  { path: "/projects/ares", component: Ares },
  { path: "/donation", component: Donation },
  { path: "/projects/ares/privacy", component: AresPrivacy },
  { path: "/projects/battery-calibrator/privacy", component: BCPrivacy },
  { path: "/projects/battery-calibrator/terms", component: BCPTerms },
  {
    path: "/:catchAll(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
