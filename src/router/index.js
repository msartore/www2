import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Donate from "../views/Donate.vue";
import Atagui from "../views/projects/ATA-GUI.vue";
import Ata from "../views/projects/ATA.vue";
import Ares from "../views/projects/Ares.vue";
import NotFound from "../views/NotFound.vue";
import AresPrivacy from "../views/projects/privacy/Ares.vue";
import BCPrivacy from "../views/projects/privacy/Battery-Calibrator.vue";
import BCPTerms from "../views/projects/terms/Battery-Calibrator.vue";
import ATABTerms from "../views/projects/terms/ATA-Bridge.vue";
import ATABPrivacy from "../views/projects/privacy/ATA-Bridge.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/projects/ata-gui", component: Atagui },
  { path: "/projects/ata", component: Ata },
  { path: "/projects/ares", component: Ares },
  { path: "/donate", component: Donate },
  { path: "/projects/ares/privacy", component: AresPrivacy },
  { path: "/projects/battery-calibrator/privacy", component: BCPrivacy },
  { path: "/projects/battery-calibrator/terms", component: BCPTerms },
  { path: "/projects/ata-bridge/privacy", component: ATABPrivacy },
  { path: "/projects/ata-bridge/terms", component: ATABTerms },
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
