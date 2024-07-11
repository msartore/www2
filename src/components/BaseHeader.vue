<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item :index="'0'">
      <img style="width: 30px" src="../assets/favicon.png" alt="Element logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu v-for="page in ps_i" :index="page.index">
      <template #title>{{ page.label }}</template>
      <el-menu-item
        v-for="subpage in page.items"
        :index="`${page.index}-${subpage.index}`"
      >
        {{ subpage.label }}
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item v-for="page in ps_n" :index="page.index">
      {{ page.label }}
    </el-menu-item>
    <el-menu-item @click="changeDark">
      <el-switch
        v-model="dark"
        style="--ep-menu-icon-width: 12px"
        :active-action-icon="Moon"
        :inactive-action-icon="Sunny"
      />
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { toggleDark, isDark } from "~/composables";
import { Moon, Sunny } from "@element-plus/icons-vue";

const props = defineProps({
  pages: Array,
  currentPage: String,
});

const ps_n = props.pages.filter((it) => it.items == undefined);
const ps_i = props.pages.filter((it) => it.items != undefined);
const emit = defineEmits(["navigateTo"]);
const dark = ref(isDark.value);
const activeIndex = ref(props.currentPage);
const handleSelect = (key, keyPath) => {
  console.log(key);
  emit("navigateTo", key);
  console.log("test1");
};

function changeDark() {
  toggleDark();
  dark.value = isDark.value;
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}

.ep-menu-item,
ep-sub-menu {
  margin-right: 0px;
  height: 100%;
}

.is-active {
  border-bottom: 2px solid var(--ep-menu-active-color);
}
</style>
