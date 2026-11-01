<template>
  <div class="site home">
    <section class="hero">
      <div class="hero-copy">
        <h1>Android, desktop, web.</h1>

        <p class="lead">
          Three surfaces, one set of habits. Kotlin and Compose in the apps, Rust and Tauri in
          the tooling, Vue and Vite on the web — the same taste applied at three different
          altitudes.
        </p>

        <div class="pills">
          <span class="pill">android</span>
          <span class="pill">desktop</span>
          <span class="pill">web</span>
        </div>

        <p class="type-line" aria-live="polite">
          <span class="prompt">~$</span>
          <span class="typed">{{ message }}</span>
          <span class="caret" aria-hidden="true"></span>
        </p>

        <div class="btn-row">
          <a class="btn btn-primary" href="#projects">See the projects</a>
          <a class="btn" href="mailto:me@msartore.dev">Get in touch</a>
        </div>
      </div>

      <dl class="facts">
        <div>
          <dt>Based in</dt>
          <dd>Italy</dd>
        </div>
        <div>
          <dt>Now</dt>
          <dd>Verizon Connect<span>Android Engineer, Android Team Lead</span></dd>
        </div>
        <div>
          <dt>Range</dt>
          <dd>Android · desktop · web<span>Kotlin/Compose · Rust/Tauri · Vue</span></dd>
        </div>
        <div>
          <dt>Open to</dt>
          <dd>Freelance<span>and collaborations</span></dd>
        </div>
      </dl>
    </section>

    <section id="projects" class="site-section">
      <div class="section-head">
        <div>
          <p class="eyebrow"><span>01 — Projects</span></p>
          <h2>Things I ship.</h2>
        </div>
        <a class="section-link" href="https://github.com/msartore">All repositories <Icon name="external" :size="10" /></a>
      </div>

      <div class="projects">
        <a
          v-for="project in projectCards"
          :key="project.label"
          class="project"
          :href="project.path"
          @click.prevent="navigateTo(project.path)"
        >
          <span class="project-media">
            <img :src="project.img" :alt="`${project.label} preview`" loading="lazy" />
          </span>
          <span class="project-body">
            <span class="project-title">{{ project.label }}</span>
            <span class="project-tagline">{{ project.tagline }}</span>
          </span>
          <Icon class="project-arrow" name="arrow" :size="12" />
        </a>
      </div>
    </section>

    <section class="site-section">
      <div class="section-head">
        <div>
          <p class="eyebrow"><span>02 — Experience &amp; education</span></p>
          <h2>Where I have been.</h2>
        </div>
      </div>

      <ol class="timeline">
        <li v-for="item in ew_list" :key="item.course_name" class="role">
          <div class="role-when">
            <img v-if="item.logo" class="role-logo" :src="item.logo" :alt="item.company_name" />
            <span class="role-date">{{ item.date }}</span>
          </div>
          <div class="role-body">
            <h3>{{ item.course_name }}</h3>
            <p class="role-company">{{ item.company_name }}</p>
            <ul class="role-points">
              <li v-for="(point, i) in item.highlights.slice(0, 3)" :key="i" v-html="point" />
            </ul>
            <details v-if="item.highlights.length > 3" class="role-more">
              <summary>Show {{ item.highlights.length - 3 }} more</summary>
              <ul class="role-points">
                <li
                  v-for="(point, i) in item.highlights.slice(3)"
                  :key="`more-${i}`"
                  v-html="point"
                />
              </ul>
            </details>
          </div>
        </li>
      </ol>
    </section>

    <div class="divider"></div>

    <section class="closing">
      <div>
        <h2>Open to interesting problems.</h2>
        <p>Android architecture, desktop tooling, or anything that has to talk to a device.</p>
      </div>
      <div class="btn-row">
        <a class="btn btn-primary" href="mailto:me@msartore.dev">me@msartore.dev</a>
        <a class="btn" href="https://github.com/msartore">GitHub</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import its from "~/assets/company/its.jpg";
import nextage from "~/assets/company/nextage.jpg";
import uoc from "~/assets/company/uoc.jpg";
import verizon_connect from "~/assets/company/verizon_connect.svg";
import { useRouter } from "vue-router";
import Icon from "~/components/Icon.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { useHead } from "@unhead/vue";

const welcome_msg_list = [
  "welcome to my website",
  "explore the projects",
  "need to customise your Android? try ATA-GUI",
  "open to collaborations",
];

const taglines = {
  "ATA-GUI": "adb & fastboot, behind one calm window",
  Ares: "local file sharing, no cloud",
  APKM: "the APK workbench, on your phone",
};

const message = ref("hi, I'm Massimiliano");
const router = useRouter();
const props = defineProps({
  projects: Array,
  isMobile: Boolean,
});

const projectCards = ref([]);

let messageIndex = 0;
let phase = "holding";
let holdUntil = Date.now() + 2400;
let timer = null;

function navigateTo(path) {
  router.push(path);
  window.scrollTo(0, 0);
}

/**
 * Typewriter: type the next sentence from empty, hold it, delete it, move on.
 * Phases are explicit — appending to whatever text was left over produced
 * words with a stray first letter and a truncated tail.
 */
function messenger() {
  const target = welcome_msg_list[messageIndex];

  if (phase === "typing") {
    if (message.value.length < target.length) {
      message.value = target.slice(0, message.value.length + 1);
    } else {
      phase = "holding";
      holdUntil = Date.now() + 2200;
    }
    return;
  }

  if (phase === "holding") {
    if (Date.now() >= holdUntil) phase = "deleting";
    return;
  }

  if (message.value.length > 0) {
    message.value = message.value.slice(0, -1);
    return;
  }

  messageIndex = (messageIndex + 1) % welcome_msg_list.length;
  phase = "typing";
}

const ew_list = [
  {
    company_name: "Verizon Connect",
    course_name: "Android Engineer, Android Team Lead",
    highlights: [
      "<strong>Architecture Modernization:</strong> Leading the core platform's architecture overhaul: migrating UI from <strong>XML to Jetpack Compose (MVVM/MVI)</strong> and replacing legacy reactive patterns with <strong>Kotlin Coroutines</strong>, <strong>Flow</strong>, and <strong>Hilt-based dependency injection</strong>",
      "<strong>Map Platform Overhaul:</strong> Architected the migration of the primary <strong>Google Maps</strong> integration from XML to Compose, rewriting custom clustering, real-time location streaming, and overlay systems as high-performance declarative components shipped to a flagship app with <strong>120,000+ installs</strong>",
      "<strong>Accessibility & UX Implementation:</strong> Translated design specifications into <strong>pixel-perfect Compose UI</strong> with dedicated accessibility support (<strong>TalkBack</strong>, contrast, scalable fonts), partnering directly with design and product stakeholders to align on interaction patterns before implementation",
      "<strong>Data-Driven Quality Improvements:</strong> Mined crash and ANR telemetry to prioritize the <strong>20+ highest-impact defects</strong>, lifting <strong>crash-free users from 95.1% to 99.5%</strong>, and optimized the network layer (REST API integration) to reduce unnecessary backend calls",
      "<strong>Engineering Excellence & Testing:</strong> Designed a <strong>5-layer testing strategy</strong> from the ground up; unit tests, Espresso UI testing, and <strong>Roborazzi screenshot testing</strong> integrated into CI, catching regressions before release",
      "<strong>CI/CD & Platform Scalability:</strong> Built and maintained <strong>GitHub Actions pipelines</strong> and defined module extraction standards, reducing <strong>build times by ~30%</strong> and enabling parallel development across multiple teams",
      "<strong>Technical Leadership:</strong> Authored <strong>5+ architecture blueprints</strong>, migration guides, and engineering playbooks to unify development patterns, and led design reviews with cross-functional stakeholders to align on technical decisions",
    ],
    logo: verizon_connect,
    date: "May 2025 — Present",
  },
  {
    company_name: "Universitat Oberta de Catalunya",
    course_name: "BSc, Techniques for Software Application Development",
    highlights: [
      "Comprehensive education covering the full <strong>software development life cycle</strong>: requirements, design, implementation, maintenance, and upgrades",
      "Applied <strong>agile methodologies</strong> for cross-functional collaboration, ensuring quality and timely delivery",
      "Proficiency across <strong>programming languages, tools, and technologies</strong> for building software on different platforms",
      "Experience administering systems, networks, and applications both locally and in the <strong>cloud</strong>",
    ],
    logo: uoc,
    date: "Feb 2022 — Feb 2025",
  },
  {
    company_name: "Nextage S.R.L.",
    course_name: "Mobile Android Developer · Internship",
    highlights: [
      "Designed and developed <strong>medical Android applications</strong> for healthcare professionals using <strong>Kotlin</strong> and <strong>Java</strong>",
      "Integrated <strong>third-party libraries and APIs</strong> to build robust, high-performing applications for the medical area",
      "Contributed to <strong>testing, releasing, and supporting</strong> production applications to ensure their continued success",
      "Collaborated in cross-functional teams to deliver <strong>user-friendly, efficient, and patient-centric</strong> solutions",
    ],
    logo: nextage,
    date: "Apr 2021 — Dec 2021",
  },
  {
    company_name: "ITS per le Tecnologie dell'Informazione e della Comunicazione",
    course_name: "Development of Software Systems for Industry 4.0",
    highlights: [
      "Specialized in analyzing, designing, developing, and managing <strong>software and hardware systems</strong> for <strong>Industry 4.0</strong>",
      "Covers all phases from <strong>client briefings and programming</strong> activities through to <strong>testing and release</strong>",
      "Implemented <strong>application security and data protection</strong> best practices, ensuring robust data safeguarding",
    ],
    logo: its,
    date: "2019 — 2021",
  },
];

onMounted(() => {
  projectCards.value = (props.projects ?? []).map((project) => ({
    ...project,
    tagline: taglines[project.label] ?? "Open source",
  }));

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    message.value = "open to collaborations";
    return;
  }

  timer = setInterval(messenger, 70);
});

onUnmounted(() => {
  if (timer) clearTimeout(timer);
});

useHead({
  title: "Massimiliano Sartore — Android, desktop and web software",
  meta: [
    {
      name: "description",
      content:
        "Massimiliano Sartore — software developer from Italy working across Android, desktop and web: Kotlin and Compose in the apps, Rust and Tauri in the desktop tooling, Vue and Vite on this site. Open-source projects such as ATA-GUI, Ares and APKM.",
    },
    {
      property: "og:title",
      content: "Massimiliano Sartore — Android, desktop and web software",
    },
    {
      property: "og:description",
      content:
        "Android, desktop and web: Compose in the apps, Rust and Tauri in the tooling, Vue on this site — plus open-source projects such as ATA-GUI and Ares.",
    },
    { property: "og:url", content: "https://msartore.dev/" },
    { property: "og:type", content: "website" },
  ],
});
</script>

<style scoped lang="scss">
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 264px;
  gap: 56px;
  align-items: start;
  padding-top: 24px;
}

.facts {
  display: grid;
  gap: 18px;
  margin: 16px 0 0;
  padding-left: 22px;
  border-left: 1px solid var(--line);
}

.facts dt {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--mute);
}

.facts dd {
  margin: 5px 0 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.35;
  color: var(--text);
  text-wrap: pretty;
}

.facts dd span {
  display: block;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 500;
  color: var(--mute);
}

.hero h1 {
  margin-top: 16px;
  max-width: 19ch;
  text-wrap: balance;
}

.hero .lead {
  margin-top: 22px;
}

.type-line {
  display: flex;
  align-items: baseline;
  gap: 8px;
  min-height: 18px;
  margin-top: 26px;
  font-family: var(--mono);
  font-size: 12.5px;
  color: var(--mute);
}

.type-line .prompt {
  color: var(--accent);
}

.type-line .typed {
  color: var(--dim);
}

.caret {
  width: 7px;
  height: 14px;
  background: var(--accent);
  transform: translateY(2px);
  animation: blink 1.1s steps(2, start) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.section-link {
  font-family: var(--mono);
  font-size: 11.5px;
  color: var(--mute);
  text-decoration: none;
  border-bottom: 1px solid var(--line);
  padding-bottom: 2px;
}

.section-link:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px;
}

.project {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 14px;
  padding: 12px 12px 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
  color: inherit;
  text-decoration: none;
  transition: border-color 0.18s ease, transform 0.18s ease, background 0.18s ease;
}

.project:hover {
  border-color: var(--line-strong);
  background: var(--panel-2);
  transform: translateY(-2px);
}

.project-media {
  display: block;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid var(--line);
  aspect-ratio: 16 / 10;
  background: var(--bg);
}

.project-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-body {
  display: grid;
  gap: 6px;
  padding: 0 6px;
}

.project-title {
  font-size: 15px;
  font-weight: 800;
  color: var(--title);
  letter-spacing: -0.01em;
}

.project-tagline {
  font-size: 12.5px;
  color: var(--mute);
}

.project-arrow {
  justify-self: end;
  padding: 0 8px 4px;
  color: var(--mute);
  transition: color 0.18s ease, transform 0.18s ease;
}

.project:hover .project-arrow {
  color: var(--accent);
  transform: translateX(3px);
}

.timeline {
  display: grid;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--line);
}

.role {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 28px;
  padding: 26px 0;
  border-bottom: 1px solid var(--line);
}

.role-when {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding-top: 2px;
}

.role-date {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--mute);
  white-space: nowrap;
}

.role-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
  border-radius: 5px;
  opacity: 0.85;
}

.role-company {
  margin-top: 6px;
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--mute);
}

.role-points {
  margin: 14px 0 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
}

.role-points li {
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--dim);
}

.role-points :deep(strong) {
  color: var(--text);
  font-weight: 700;
}

.role-more {
  margin-top: 10px;
}

.role-more summary {
  cursor: pointer;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  list-style: none;
}

.role-more summary::-webkit-details-marker {
  display: none;
}

.role-more[open] summary {
  display: none;
}

.role-more[open] {
  margin-top: 6px;
}

.closing {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 32px 34px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--panel);
}

.closing h2 {
  font-size: clamp(22px, 2.4vw, 28px);
}

.closing p {
  margin-top: 8px;
  font-size: 14px;
}

.closing .btn-row {
  margin-top: 0;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }

  .facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-left: 0;
    padding-top: 22px;
    border-left: 0;
    border-top: 1px solid var(--line);
  }

  .projects {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .role {
    grid-template-columns: minmax(0, 1fr);
    gap: 10px;
  }
}

@media (max-width: 620px) {
  .projects {
    grid-template-columns: minmax(0, 1fr);
  }

  .closing {
    padding: 24px;
  }
}
</style>
