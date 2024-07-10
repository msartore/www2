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
    <div v-for="page in props.pages">
      <el-menu-item v-if="page.items == undefined" :index="page.index">
        {{ page.label }}
      </el-menu-item>
      <el-sub-menu v-else :index="page.index">
        <template #title>{{ page.label }}</template>
        <el-menu-item
          v-for="subpage in page.items"
          :index="`${page.index}-${subpage.index}`"
        >
          {{ subpage.label }}
        </el-menu-item>
      </el-sub-menu>
    </div>
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

.ep-menu-item {
  margin-right: 0px;
}

.is-active {
  border-bottom: 2px solid var(--ep-menu-active-color);
  height: 100%;
}
</style>
