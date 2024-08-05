<template>
  <el-config-provider namespace="ep">
    <div class="common-layout">
      <el-container>
        <header class="navbar">
          <el-row class="navbar-smartphone" v-if="isMobile">
            <a @click="toggleMenu" class="menu-icon">
              <svg
                v-if="isMenuOpen"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="35px"
                height="35px"
                stroke-width="1.5"
                fill="currentColor"
              >
                <path
                  d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"
                ></path>
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="35px"
                height="35px"
                fill="currentColor"
              >
                <path
                  d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"
                ></path>
              </svg>
            </a>
            <img @click="navigateHome" class="logo" :src="favicon" />
          </el-row>
          <BaseHeader
            v-else
            :currentPage="currentPage"
            :pages="pages"
            @navigate-to="navigateTo"
          />
          <BaseSide
            v-if="isMenuOpen && isMobile"
            :currentPage="currentPage"
            :pages="pages"
            @navigate-to="navigateTo"
          />
        </header>
        <main>
          <div class="main-container">
            <RouterView :isMobile="isMobile" :projects="pages[0].items" />
          </div>
        </main>
        <el-footer class="footer">
          <hr />
          <el-row justify="center">
            <a href="https://github.com/msartore"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                /></svg
            ></a>
            <a href="https://www.linkedin.com/in/massimilianosartore/"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                /></svg
            ></a>
            <a href="https://x.com/msartore_"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                /></svg
            ></a>
          </el-row>
          <el-row>
            <el-text tag="p" style="text-align: center; width: 100%"
              >Copyright © 2024 Massimiliano Sartore</el-text
            >
          </el-row>
        </el-footer>
      </el-container>
    </div>
  </el-config-provider>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import favicon from "@/assets/favicon.png";
import banner1 from "@/assets/banner1.png";
import banner4 from "@/assets/banner4.png";
import banner3 from "@/assets/banner3.png";

const windowWidth = ref(window.innerWidth);
const onWidthChange = () => (windowWidth.value = window.innerWidth);
const isMenuOpen = ref(false);
const isMobile = computed(() => {
  if (windowWidth.value < 850) return true;
  else return false;
});
const router = useRouter();
const currentPage = ref("0");
const pages = ref([
  {
    index: "1",
    label: "Projects",
    items: [
      {
        label: "ATA-GUI",
        path: "/projects/ata-gui",
        index: "0",
        img: banner1,
      },
      {
        label: "Ares",
        path: "/projects/ares",
        index: "1",
        img: banner4,
      },
      {
        label: "ATA",
        path: "/projects/ata",
        index: "2",
        img: banner3,
      },
    ],
  },
  { index: "2", label: "Donation", path: "/donation" },
  { index: "3", label: "Contact", path: "/contact" },
]);

function navigateHome() {
  router.push("/");
  isMenuOpen.value = false;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function navigateTo(index) {
  if (index === "0") navigateHome();
  else if (index.includes("-")) {
    let iS = index.split("-");
    router.push(
      pages.value
        .find((it) => it.index == iS[0])
        ?.items.find((it) => it.index == iS[1]).path
    );
  } else router.push(pages.value.find((it) => it.index == index).path);

  isMenuOpen.value = false;
}

onMounted(() => window.addEventListener("resize", onWidthChange));
onUnmounted(() => window.removeEventListener("resize", onWidthChange));
</script>

<style lang="scss" scoped>
.menu-icon {
  position: absolute;
  left: 10px;
  height: 35px;
}

.logo {
  width: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.navbar-smartphone {
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
}

main {
  margin: 50px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
}

.hamburger {
  margin-left: 10px;
  position: absolute;
  align-content: center;
  height: 100%;
  color: var(--ep-text-color-primary);
}

.main-container {
  max-width: 1000px;
  width: max-content;
}

.navbar {
  position: fixed;
  height: 60px;
  width: 100%;
  z-index: 1000;
  background-color: var(--ep-bg-color);
  border-bottom: solid 1px var(--ep-menu-border-color);
}

p {
  text-align: justify;
}

.footer {
  margin-top: 10%;
  width: 100%;
}

.footer a {
  color: var(--ep-text-color-primary);
  margin: 8px;
}
</style>
