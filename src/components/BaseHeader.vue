<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item :index="'0'">
      <img style="width: 30px" :src="favicon" alt="Element logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu v-for="page in ps_i" :index="page.index" :key="page.index">
      <template #title>{{ page.label }}</template>
      <el-menu-item
        v-for="subpage in page.items"
        :key="subpage.index"
        :index="`${page.index}-${subpage.index}`"
      >
        {{ subpage.label }}
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item v-for="page in ps_n" :index="page.index" :key="page.index">
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
import favicon from "@/assets/favicon.png";

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
  emit("navigateTo", key);
};

function changeDark() {
  toggleDark();
  dark.value = isDark.value;
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.is-active {
  border-bottom: 2px solid var(--ep-menu-active-color);
}
</style>
