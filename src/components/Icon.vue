<template>
  <span
    class="icon"
    :style="{ width: `${size}px`, height: `${size}px` }"
    aria-hidden="true"
    v-html="markup"
  />
</template>

<script setup>
import { computed } from "vue";

// Bootstrap Icons ships one SVG per glyph; importing the files we use keeps the
// bundle at a couple of kB instead of pulling the whole icon font.
import list from "bootstrap-icons/icons/list.svg?raw";
import xLg from "bootstrap-icons/icons/x-lg.svg?raw";
import sun from "bootstrap-icons/icons/sun.svg?raw";
import moonStars from "bootstrap-icons/icons/moon-stars.svg?raw";
import chevronDown from "bootstrap-icons/icons/chevron-down.svg?raw";
import arrowRight from "bootstrap-icons/icons/arrow-right.svg?raw";
import arrowUpRight from "bootstrap-icons/icons/arrow-up-right.svg?raw";
import check2 from "bootstrap-icons/icons/check2.svg?raw";
import clipboard from "bootstrap-icons/icons/clipboard.svg?raw";
import people from "bootstrap-icons/icons/people.svg?raw";
import shieldCheck from "bootstrap-icons/icons/shield-check.svg?raw";
import phone from "bootstrap-icons/icons/phone.svg?raw";
import listTask from "bootstrap-icons/icons/list-task.svg?raw";
import lock from "bootstrap-icons/icons/lock.svg?raw";
import download from "bootstrap-icons/icons/download.svg?raw";
import globe2 from "bootstrap-icons/icons/globe2.svg?raw";
import fileEarmarkText from "bootstrap-icons/icons/file-earmark-text.svg?raw";

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 13 },
});

const GLYPHS = {
  menu: list,
  close: xLg,
  sun,
  moon: moonStars,
  chevron: chevronDown,
  arrow: arrowRight,
  external: arrowUpRight,
  check: check2,
  copy: clipboard,
  users: people,
  shield: shieldCheck,
  screen: phone,
  tasks: listTask,
  lock,
  download,
  world: globe2,
  file: fileEarmarkText,
};

const markup = computed(() => GLYPHS[props.name] ?? arrowRight);
</script>

<style scoped>
.icon {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  vertical-align: -0.1em;
}

.icon :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
