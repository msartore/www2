<template>
  <header class="nav">
    <a class="brand" href="/" @click.prevent="select('0')" aria-label="msartore.dev — home">
      <img class="brand-mark" :src="favicon" alt="" width="26" height="26" />
      <span class="brand-name">msartore.dev</span>
    </a>

    <nav class="links" aria-label="Main">
      <div v-for="page in ps_i" :key="page.index" class="group">
        <button
          type="button"
          class="link"
          :class="{ 'is-active': String(currentPage).startsWith(`${page.index}-`) }"
        >
          {{ page.label }}
          <Icon class="chev" name="chevron" :size="10" />
        </button>
        <div class="menu">
          <a
            v-for="subpage in page.items"
            :key="subpage.index"
            href="#"
            @click.prevent="select(`${page.index}-${subpage.index}`)"
          >
            {{ subpage.label }}
          </a>
        </div>
      </div>

      <a
        v-for="page in ps_n"
        :key="page.index"
        class="link"
        :class="{ 'is-active': currentPage === page.index }"
        href="#"
        @click.prevent="select(page.index)"
      >
        {{ page.label }}
      </a>

      <button type="button" class="theme" @click="changeDark" :aria-label="dark ? 'Switch to light theme' : 'Switch to dark theme'">
        <Icon :name="dark ? 'sun' : 'moon'" :size="14" />
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { toggleDark, isDark } from "~/composables";
import Icon from "~/components/Icon.vue";
import favicon from "~/assets/favicon.png";

const props = defineProps({
  pages: Array,
  currentPage: String,
});

const ps_n = props.pages.filter((it) => it.items == undefined);
const ps_i = props.pages.filter((it) => it.items != undefined);
const emit = defineEmits(["navigateTo"]);
const dark = ref(isDark.value);

function select(key) {
  emit("navigateTo", key);
}

function changeDark() {
  toggleDark();
  dark.value = isDark.value;
}
</script>

<style scoped lang="scss">
.nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 58px;
  padding: 0 40px;
  border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(14px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--title);
  text-decoration: none;
}

.brand-mark {
  border-radius: 6px;
}

.brand-name {
  font-family: var(--mono);
  font-size: 12.5px;
  letter-spacing: -0.01em;
  color: var(--dim);
}

.brand:hover .brand-name {
  color: var(--accent);
}

.links {
  display: flex;
  align-items: center;
  gap: 6px;
}

.link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 30px;
  padding: 0 10px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dim);
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease;
}

.link:hover {
  color: var(--title);
  background: var(--panel);
}

.link.is-active {
  color: var(--title);
}

.link.is-active::after {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: -14px;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
}

.chev {
  opacity: 0.55;
}

.group {
  position: relative;
}

.menu {
  position: absolute;
  top: 38px;
  left: 0;
  min-width: 180px;
  padding: 6px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--panel);
  box-shadow: 0 24px 48px -24px rgba(0, 0, 0, 0.85);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;
}

.group:hover .menu,
.group:focus-within .menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.menu a {
  display: block;
  padding: 8px 10px;
  border-radius: 6px;
  color: var(--dim);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}

.menu a:hover {
  color: var(--title);
  background: var(--panel-2);
}

.theme {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-left: 6px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: transparent;
  color: var(--dim);
  cursor: pointer;
}

.theme:hover {
  color: var(--title);
  border-color: var(--line-strong);
}

@media (max-width: 900px) {
  .nav {
    padding: 0 20px;
  }
}
</style>
