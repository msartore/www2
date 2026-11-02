<template>
  <el-config-provider namespace="ep">
    <div class="app-shell">
      <BaseHeader
        v-if="!isMobile"
        :currentPage="currentPage"
        :pages="pages"
        @navigate-to="navigateTo"
      />

      <div v-else class="mobile-bar">
        <button
          class="icon-btn"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Menu"
          @click="toggleMenu"
        >
          <Icon :name="isMenuOpen ? 'close' : 'menu'" :size="15" />
        </button>
        <a class="mobile-brand" href="/" @click.prevent="navigateHome">msartore.dev</a>
        <button class="icon-btn" type="button" @click="changeDark" aria-label="Toggle theme">
          <Icon :name="isDark ? 'sun' : 'moon'" :size="14" />
        </button>
      </div>

      <MobileMenu
        :open="isMenuOpen"
        :current="currentPage"
        :pages="pages"
        @close="toggleMenu"
        @navigate="navigateToPath"
      />

      <main>
        <RouterView :isMobile="isMobile" :projects="pages[0].items" />
      </main>

      <footer class="foot">
        <div class="foot-inner">
          <p>© 2024–{{ year }} Massimiliano Sartore</p>
          <nav class="foot-links">
            <a href="https://github.com/msartore">GitHub</a>
            <a href="https://www.linkedin.com/in/massimilianosartore/">LinkedIn</a>
            <a href="https://x.com/msartore_">X</a>
            <a href="mailto:me@msartore.dev">Email</a>
          </nav>
        </div>
      </footer>
    </div>
  </el-config-provider>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import banner1 from "~/assets/banner1.png";
import banner4 from "~/assets/banner4.png";
import bannerApkm from "~/assets/banner-apkm.png";
import bannerOpenColorHub from "~/assets/banner-opencolorhub.png";
import Icon from "~/components/Icon.vue";
import MobileMenu from "~/components/MobileMenu.vue";
import { isDark, toggleDark } from "~/composables";

const year = new Date().getFullYear();
const windowWidth = ref(window.innerWidth);
const onWidthChange = () => {
  windowWidth.value = window.innerWidth;
  // a drawer left open while the window grows would sit over the desktop layout
  if (windowWidth.value >= 850) isMenuOpen.value = false;
};
const isMenuOpen = ref(false);
const isMobile = computed(() => windowWidth.value < 850);
const router = useRouter();
const currentPage = ref("0");

const PAGE_BY_PATH = {
  "/": "0",
  "/projects/ata-gui": "1-0",
  "/projects/ares": "1-1",
  "/projects/apkm": "1-2",
  "/projects/ata": "1-3",
  "/projects/opencolorhub": "1-4",
  "/donate": "2",
  "/contact": "3",
};

watch(
  () => router.currentRoute.value.path,
  (path) => {
    currentPage.value = PAGE_BY_PATH[path] ?? "0";
  },
  { immediate: true }
);

const pages = ref([
  {
    index: "1",
    label: "Projects",
    items: [
      { label: "ATA-GUI", path: "/projects/ata-gui", index: "0", img: banner1 },
      { label: "Ares", path: "/projects/ares", index: "1", img: banner4 },
      { label: "APKM", path: "/projects/apkm", index: "2", img: bannerApkm },
      {
        label: "OpenColorHub",
        path: "/projects/opencolorhub",
        index: "3",
        img: bannerOpenColorHub,
      },
    ],
  },
  { index: "2", label: "Donate", path: "/donate" },
  { index: "3", label: "Contact", path: "/contact" },
]);

function navigateHome() {
  router.push("/");
  isMenuOpen.value = false;
  window.scrollTo(0, 0);
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function changeDark() {
  toggleDark();
}

function navigateToPath(path) {
  router.push(path);
  isMenuOpen.value = false;
  window.scrollTo(0, 0);
}

function navigateTo(index) {
  if (index === "0") navigateHome();
  else if (index.includes("-")) {
    const [parent, child] = index.split("-");
    const path = pages.value
      .find((it) => it.index === parent)
      ?.items.find((it) => it.index === child)?.path;
    if (path) router.push(path);
  } else {
    const page = pages.value.find((it) => it.index === index);
    if (page?.path) router.push(page.path);
    else if (index === "2") router.push("/donate");
    else if (index === "3") router.push("/contact");
  }

  isMenuOpen.value = false;
  window.scrollTo(0, 0);
}

onMounted(() => {
  window.addEventListener("resize", onWidthChange);
  if (!isDark.value) toggleDark();
});
onUnmounted(() => window.removeEventListener("resize", onWidthChange));
</script>

<style lang="scss" scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
}

main {
  flex: 1 1 auto;
  padding-top: 58px;
}

.mobile-bar {
  position: fixed;
  inset: 0 0 auto;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  padding: 0 14px;
  border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(14px);
}

.mobile-brand {
  font-family: var(--mono);
  font-size: 12.5px;
  color: var(--dim);
  text-decoration: none;
}

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: transparent;
  color: var(--dim);
  cursor: pointer;
}

.foot {
  margin-top: 96px;
  border-top: 1px solid var(--line);
}

.foot-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  max-width: calc(var(--wrap) + 80px);
  margin: 0 auto;
  padding: 26px 40px 34px;
}

.foot p {
  font-family: var(--mono);
  font-size: 11.5px;
  color: var(--mute);
}

.foot-links {
  display: flex;
  gap: 18px;
}

.foot-links a {
  font-family: var(--mono);
  font-size: 11.5px;
  color: var(--mute);
  text-decoration: none;
}

.foot-links a:hover {
  color: var(--accent-2);
}

@media (max-width: 900px) {
  main {
    padding-top: 54px;
  }

  .foot-inner {
    padding: 22px 20px 28px;
  }
}
</style>
