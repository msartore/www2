<template>
  <div class="site contact">
    <header class="contact-hero">
      <h1>Say hello.</h1>
      <p class="lead">
        Questions about ATA-GUI, Android architecture, or something you think I should
        build — email is the fastest way to reach me.
      </p>
    </header>

    <div class="cards">
      <div class="card mail">
        <span class="card-label">Email</span>
        <a class="mail-address" href="mailto:me@msartore.dev">me@msartore.dev</a>
        <div class="mail-actions">
          <a class="btn" href="mailto:me@msartore.dev"><Icon name="external" :size="12" /> Write an email</a>
          <button class="btn btn-ghost" type="button" @click="copy">
            <Icon :name="copied ? 'check' : 'copy'" :size="12" />
            {{ copied ? "Copied" : "Copy address" }}
          </button>
        </div>
      </div>

      <div class="card">
        <span class="card-label">Elsewhere</span>
        <ul class="links">
          <li><a href="https://github.com/msartore">GitHub<span>repositories and issues</span><Icon class="go" name="arrow" :size="12" /></a></li>
          <li><a href="https://www.linkedin.com/in/massimilianosartore/">LinkedIn<span>work history</span><Icon class="go" name="arrow" :size="12" /></a></li>
          <li><a href="https://x.com/msartore_">X<span>short updates</span><Icon class="go" name="arrow" :size="12" /></a></li>
        </ul>
      </div>
    </div>

    <section class="site-section">
      <p class="eyebrow"><span>Good reasons to write</span></p>
      <ul class="ticks">
        <li>Bug reports for ATA-GUI, Ares or ATA — a log and the device model help</li>
        <li>Freelance or contract work on Android, desktop apps or developer tooling</li>
        <li>Talks, articles or reviews about Compose architecture and device tooling</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useHead } from "@unhead/vue";
import Icon from "~/components/Icon.vue";

const copied = ref(false);

async function copy() {
  try {
    await navigator.clipboard.writeText("me@msartore.dev");
    copied.value = true;
    setTimeout(() => (copied.value = false), 1600);
  } catch {
    /* clipboard blocked: the mailto link is still there */
  }
}

useHead({
  title: "Contact — Massimiliano Sartore",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with Massimiliano Sartore about ATA-GUI, Android architecture, freelance work or collaborations: me@msartore.dev",
    },
    { property: "og:title", content: "Contact — Massimiliano Sartore" },
    { property: "og:description", content: "Reach out about projects, bugs or collaborations." },
    { property: "og:url", content: "https://msartore.dev/contact" },
    { property: "og:type", content: "website" },
  ],
});
</script>

<style scoped lang="scss">
.contact-hero {
  padding-top: 24px;
}

.contact-hero h1 {
  margin-top: 16px;
}

.contact-hero .lead {
  margin-top: 18px;
}

.cards {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 16px;
  margin-top: 44px;
}

.card {
  display: grid;
  gap: 10px;
  padding: 24px;
}

.card-label {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--mute);
}

.mail {
  align-content: start;
}

.mail-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.btn-ghost {
  background: transparent;
}

.mail-address {
  font-size: clamp(22px, 2.6vw, 30px);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--title);
}

.mail-address {
  text-decoration: none;
}

.mail-address:hover {
  color: var(--accent);
}

.links {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 2px;
}

.links a {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 0;
  border-top: 1px solid var(--line);
  color: var(--text);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.links li:first-child a {
  border-top: 0;
}

.links a span {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--mute);
}

.links a .go {
  color: var(--mute);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.links a:hover .go {
  opacity: 1;
  transform: translateX(0);
  color: var(--accent);
}

.links a:hover {
  color: var(--accent);
}

@media (max-width: 800px) {
  .cards {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
