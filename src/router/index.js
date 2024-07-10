import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
import Atagui from "../views/projects/ATA-GUI.vue";
import Ata from "../views/projects/ATA.vue";
import Ares from "../views/projects/Ares.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/projects", component: Projects },
  { path: "/projects/ata-gui", component: Atagui },
  { path: "/projects/ata", component: Ata },
  { path: "/projects/ares", component: Ares },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
