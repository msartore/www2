<template>
  <el-config-provider namespace="ep">
    <el-container>
      <el-header>
        <BaseHeader
          :currentPage="currentPage"
          :pages="pages"
          @navigate-to="navigateTo"
        />
      </el-header>
      <el-container>
        <el-main class="main-container">
          <div style="width: 70%">
            <RouterView :projects="pages[0].items" />
          </div>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

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
        img: "/src/assets/banner1.png",
      },
      {
        label: "Ares",
        path: "/projects/ares",
        index: "1",
        img: "/src/assets/banner4.png",
      },
      {
        label: "ATA",
        path: "/projects/ata",
        index: "2",
        img: "/src/assets/banner3.png",
      },
      {
        label: "Material Gallery",
        path: "/projects/material-gallery",
        index: "3",
        img: "/src/assets/banner2.png",
      },
    ],
  },
  { index: "2", label: "Contact", path: "/contact" },
]);

function navigateHome() {
  router.push("/");
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
}
</script>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  display: flex;
  justify-content: center;
}
</style>
