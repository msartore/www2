<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div v-if="open" class="drawer" role="dialog" aria-modal="true" aria-label="Menu">
        <button class="scrim" type="button" tabindex="-1" aria-label="Close menu" @click="close" />

        <nav ref="panelRef" class="panel">
          <header class="panel-head">
            <a class="brand" href="/" @click.prevent="go('/')">msartore.dev</a>
            <button ref="closeRef" class="close" type="button" aria-label="Close menu" @click="close">
              <Icon name="close" :size="12" />
            </button>
          </header>

          <div class="panel-body">
            <ul class="links">
              <li>
                <a
                  href="/"
                  class="link"
                  :class="{ 'is-active': current === '0' }"
                  :aria-current="current === '0' ? 'page' : undefined"
                  @click.prevent="go('/')"
                >
                  Home
                </a>
              </li>

              <li v-for="group in groups" :key="group.index" class="group">
                <p class="group-label">{{ group.label }}</p>
                <a
                  v-for="item in group.items"
                  :key="item.index"
                  :href="item.path"
                  class="project"
                  :class="{ 'is-active': current === `${group.index}-${item.index}` }"
                  :aria-current="current === `${group.index}-${item.index}` ? 'page' : undefined"
                  @click.prevent="go(item.path)"
                >
                  <img class="thumb" :src="item.img" alt="" width="46" height="30" loading="lazy" />
                  <span class="project-label">{{ item.label }}</span>
                  <Icon class="chev" name="arrow" :size="11" />
                </a>
              </li>

              <li v-for="page in leaves" :key="page.index">
                <a
                  :href="page.path"
                  class="link"
                  :class="{ 'is-active': current === page.index }"
                  :aria-current="current === page.index ? 'page' : undefined"
                  @click.prevent="go(page.path)"
                >
                  {{ page.label }}
                </a>
              </li>
            </ul>
          </div>

          <footer class="panel-foot">
            <button class="theme" type="button" @click="toggleDark()">
              <span class="theme-label">Dark mode</span>
              <span class="switch" :class="{ 'is-on': isDark }" aria-hidden="true">
                <span class="knob" />
              </span>
            </button>

            <nav class="social" aria-label="Elsewhere">
              <a href="https://github.com/msartore">GitHub</a>
              <a href="https://www.linkedin.com/in/massimilianosartore/">LinkedIn</a>
              <a href="https://x.com/msartore_">X</a>
              <a href="mailto:me@msartore.dev">Email</a>
            </nav>
          </footer>
        </nav>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, nextTick, onUnmounted, ref, watch } from "vue";
import Icon from "~/components/Icon.vue";
import { isDark, toggleDark } from "~/composables";

const props = defineProps({
  open: { type: Boolean, default: false },
  pages: { type: Array, default: () => [] },
  current: { type: String, default: "0" },
});

const emit = defineEmits(["close", "navigate"]);

const panelRef = ref(null);
const closeRef = ref(null);

const groups = computed(() => props.pages.filter((page) => page.items?.length));
const leaves = computed(() => props.pages.filter((page) => !page.items?.length && page.path));

function close() {
  emit("close");
}

function go(path) {
  emit("navigate", path);
}

let previousOverflow = "";

function lock(on) {
  if (on) {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = previousOverflow;
  }
}

function onKeydown(event) {
  if (!props.open) return;

  if (event.key === "Escape") {
    event.preventDefault();
    close();
    return;
  }

  if (event.key !== "Tab" || !panelRef.value) return;

  const items = panelRef.value.querySelectorAll(
    'a[href], button:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'
  );
  if (!items.length) return;

  const first = items[0];
  const last = items[items.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

watch(
  () => props.open,
  async (open) => {
    lock(open);
    if (!open) return;
    await nextTick();
    closeRef.value?.focus();
  },
  { immediate: true }
);

document.addEventListener("keydown", onKeydown);
onUnmounted(() => {
  document.removeEventListener("keydown", onKeydown);
  lock(false);
});
</script>

<style scoped lang="scss">
.drawer {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: flex;
}

.scrim {
  position: absolute;
  inset: 0;
  border: 0;
  padding: 0;
  background: rgba(4, 7, 6, 0.62);
  backdrop-filter: blur(3px);
  cursor: default;
}

.panel {
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(86vw, 340px);
  height: 100%;
  background: var(--bg);
  border-right: 1px solid var(--line);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.55);
}

/* ------------------------------------------------------------------ head */
.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--line);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text);
}

.close {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--dim);
  cursor: pointer;
}

.close:hover {
  color: var(--text);
  border-color: var(--mute);
}

/* ------------------------------------------------------------------ links */
.panel-body {
  flex: 1;
  overflow-y: auto;
  padding: 14px 10px 18px;
  -webkit-overflow-scrolling: touch;
}

.links {
  margin: 0;
  padding: 0;
  list-style: none;
}

.link {
  display: flex;
  align-items: center;
  height: 42px;
  padding: 0 12px;
  border-radius: 9px;
  font-size: 15px;
  font-weight: 600;
  color: var(--dim);
  text-decoration: none;
}

.link:hover {
  background: var(--panel);
  color: var(--text);
}

.link.is-active {
  color: var(--text);
  font-weight: 700;
  background: color-mix(in srgb, var(--text) 9%, transparent);
}

.group {
  margin-top: 16px;
}

.group-label {
  margin: 0 0 6px;
  padding: 0 12px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--mute);
}

.project {
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 10px;
  color: var(--text);
  text-decoration: none;
}

.project:hover {
  background: var(--panel);
}

.project.is-active {
  background: color-mix(in srgb, var(--text) 9%, transparent);
}

.project.is-active .project-label {
  font-weight: 750;
}

.project.is-active .chev {
  color: var(--text);
}

.thumb {
  width: 46px;
  height: 30px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid var(--line);
}

.project-label {
  font-size: 14px;
  font-weight: 650;
}

.chev {
  color: var(--mute);
}

/* ------------------------------------------------------------------ foot */
.panel-foot {
  border-top: 1px solid var(--line);
  padding: 10px 10px 14px;
}

.theme {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  padding: 0 12px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: var(--dim);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.theme:hover {
  background: var(--panel);
  color: var(--text);
}

.switch {
  position: relative;
  width: 38px;
  height: 22px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--panel-2);
  transition: background 0.18s ease, border-color 0.18s ease;
}

.switch.is-on {
  background: var(--accent);
  border-color: transparent;
}

.knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--text);
  transition: transform 0.18s ease, background 0.18s ease;
}

.switch.is-on .knob {
  transform: translateX(16px);
  background: var(--accent-ink);
}

.social {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 16px;
  margin-top: 6px;
  padding: 8px 12px 0;
  border-top: 1px solid var(--line);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.06em;
}

.social a {
  color: var(--mute);
  text-decoration: none;
}

.social a:hover {
  color: var(--text);
}

/* ------------------------------------------------------------------ motion */
.drawer-enter-active .panel,
.drawer-leave-active .panel {
  transition: transform 0.26s cubic-bezier(0.32, 0.72, 0, 1);
}

.drawer-enter-active .scrim,
.drawer-leave-active .scrim {
  transition: opacity 0.24s ease;
}

.drawer-enter-from .panel,
.drawer-leave-to .panel {
  transform: translateX(-100%);
}

.drawer-enter-from .scrim,
.drawer-leave-to .scrim {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .drawer-enter-active .panel,
  .drawer-leave-active .panel,
  .drawer-enter-active .scrim,
  .drawer-leave-active .scrim {
    transition: none;
  }
}
</style>
