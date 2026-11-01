<template>
  <div class="site project">
    <header class="project-hero">
      <h1>{{ title }}</h1>
      <p class="lead">{{ tagline }}</p>

      <div class="btn-row">
        <a
          v-for="(link, i) in links"
          :key="link.href"
          class="btn"
          :class="{ 'btn-primary': i === 0 }"
          :href="link.href"
        >
          {{ link.label }}
        </a>
      </div>
    </header>

    <figure v-if="banner" class="project-banner">
      <img :src="banner" :alt="`${title} artwork`" />
    </figure>

    <section class="site-section project-body">
      <div class="project-copy">
        <p class="eyebrow"><span>01 — Overview</span></p>
        <h2>What it does.</h2>
        <p v-for="(paragraph, i) in paragraphs" :key="i">{{ paragraph }}</p>
      </div>

      <div class="project-features">
        <p class="eyebrow"><span>02 — Features</span></p>
        <ul class="ticks">
          <li v-for="feature in features" :key="feature">{{ feature }}</li>
        </ul>
      </div>
    </section>

    <div class="divider"></div>

    <section class="closing">
      <div>
        <h2>{{ title }}</h2>
        <p>{{ license }} · © 2024–{{ year }} Massimiliano Sartore</p>
      </div>
      <div class="btn-row">
        <a class="btn" :href="links[0].href">{{ links[0].label }}</a>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  tagline: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: Array, default: () => [] },
  links: { type: Array, default: () => [] },
  platforms: { type: Array, default: () => [] },
  license: { type: String, default: "GPL-3.0" },
  banner: { type: String, default: "" },
});

const year = new Date().getFullYear();
const paragraphs = props.description.split("\n").filter(Boolean);
</script>

<style scoped lang="scss">
.project-hero {
  padding-top: 24px;
}

.project-hero h1 {
  margin-top: 18px;
  max-width: 18ch;
}

.project-hero .lead {
  margin-top: 18px;
}

.project-banner {
  margin: 52px 0 0;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  background: var(--panel);
}

.project-banner img {
  display: block;
  width: 100%;
  height: auto;
}

.project-body {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 56px;
  align-items: start;
}

.project-copy h2,
.project-features h2 {
  margin: 12px 0 16px;
}

.project-copy p + p {
  margin-top: 14px;
}

.project-features .ticks {
  margin-top: 14px;
}

.project-features {
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
}

.closing {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 28px 32px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--panel);
}

.closing h2 {
  font-size: clamp(20px, 2.2vw, 26px);
}

.closing p {
  margin-top: 6px;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--mute);
}

.closing .btn-row {
  margin-top: 0;
}

@media (max-width: 900px) {
  .project-body {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }
}
</style>
