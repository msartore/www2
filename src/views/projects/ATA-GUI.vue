<template>
  <div class="site ata">
    <!-- ------------------------------------------------------------ hero -->
    <header class="hero">
      <h1>Android,<br />under control.</h1>

      <p class="lead">
        ATA-GUI puts <code>adb</code>, <code>fastboot</code>, sideload, logcat and screen
        mirroring behind one calm desktop window. Remove the bloatware you never asked
        for, flash a boot image with progress you can trust, and watch the device in real
        time — without memorising a single command.
      </p>

      <div class="cta">
        <a class="btn btn-primary" href="https://github.com/msartore/ATA-GUI/releases/latest">
          Download ATA-GUI
          <span class="btn-note">v4.0.0 · 2.5 MB</span>
        </a>
        <a class="btn" href="https://github.com/msartore/ATA-GUI">View source</a>
      </div>

      <ul class="hints">
        <li>Portable ZIP, no install</li>
        <li>No account, no ads</li>
        <li>Upgrades over 3.x in place</li>
      </ul>

      <figure class="shot hero-shot">
        <img
          src="/ata/hero-system.png"
          width="1440"
          height="900"
          alt="ATA-GUI main window for a connected Android device: device information, reboot menu, ADB over network and the app manager"
          fetchpriority="high"
        />
        <figcaption>
          One window per device: system apps, wireless ADB, reboot targets and the app
          manager, with the live log underneath.
        </figcaption>
      </figure>
    </header>

    <!-- ------------------------------------------------------------ strip -->
    <section class="strip" aria-label="Compatibility">
      <p>
        Powered by the official <strong>SDK Platform Tools</strong> — the same
        <code>adb</code> and <code>fastboot</code> binaries you would run by hand.
        Works with any device that speaks adb: Pixel, Samsung, Xiaomi, OnePlus, Motorola,
        Sony and the rest.
      </p>
    </section>

    <!-- ------------------------------------------------------------ feature 01 -->
    <section id="debloat" class="feature">
      <div class="feature-copy">
        <p class="eyebrow">01 — Debloat</p>
        <h2>Remove what you never asked for.</h2>
        <p>
          Every installed package, per user, with the Universal Android Debloater list
          beside it so you know what is safe to remove. Disable, uninstall or restore —
          no root, no scripts, no copy-pasting package names.
        </p>
        <ul class="ticks">
          <li>System and user apps, across every Android user</li>
          <li>Bloatware verdicts from the UAD database</li>
          <li>Batch actions with a per-package result you can read</li>
          <li>Install APKs by drag and drop</li>
        </ul>
      </div>
      <figure class="shot">
        <img
          src="/ata/apps.png"
          width="1200"
          height="760"
          loading="lazy"
          alt="App manager listing installed packages with bloatware markers, search field and bulk actions"
        />
      </figure>
    </section>

    <!-- ------------------------------------------------------------ feature 02 -->
    <section id="flash" class="feature is-reverse">
      <div class="feature-copy">
        <p class="eyebrow">02 — Flash</p>
        <h2>Flash, and see it happen.</h2>
        <p>
          Queue boot, recovery, vbmeta or a full set of partitions, pick the slot, and
          flash. The panel follows the tool — sending, writing, done — with the transfer
          size, the elapsed time and the raw fastboot output, one line at a time.
        </p>
        <ul class="ticks">
          <li>Queue several images and flash them in one run</li>
          <li>Both slots at once, or a single one</li>
          <li>Sideload an OTA zip from recovery, with progress</li>
          <li>Cancel mid-flight — the child process dies with it</li>
        </ul>
      </div>
      <figure class="shot">
        <img
          src="/ata/flash.png"
          width="1200"
          height="760"
          loading="lazy"
          alt="Flashing panel showing queued partitions, the sending and writing phases and live fastboot output"
        />
      </figure>
    </section>

    <!-- ------------------------------------------------------------ feature 03 -->
    <section id="observe" class="feature">
      <div class="feature-copy">
        <p class="eyebrow">03 — Observe</p>
        <h2>The whole device, live.</h2>
        <p>
          Logcat with filters and level colours, a terminal that streams and takes Ctrl+C,
          and screen mirroring through scrcpy — all of it batched and buffered so a chatty
          device never freezes the window.
        </p>
        <ul class="ticks">
          <li>Logcat and GetEvent with 6 000 lines of scrollback</li>
          <li>Terminal with Tab completion for adb and fastboot</li>
          <li>Mirror the screen or the camera, drive it from the desktop</li>
          <li>Task manager, device info and a reboot menu</li>
        </ul>
      </div>
      <div class="feature-media is-pair">
        <figure class="shot">
          <img
            src="/ata/logcat.png"
            width="1000"
            height="640"
            loading="lazy"
            alt="Logcat window streaming device logs with level colours and a filter box"
          />
        </figure>
        <figure class="shot">
          <img
            src="/ata/terminal.png"
            width="1000"
            height="640"
            loading="lazy"
            alt="Terminal window running adb commands with an inline prompt and streaming output"
          />
        </figure>
      </div>
    </section>

    <!-- ------------------------------------------------------------ feature 04 -->
    <section id="wireless" class="feature is-reverse">
      <div class="feature-copy">
        <p class="eyebrow">04 — Wireless</p>
        <h2>Cable optional.</h2>
        <p>
          Pair a phone over Wi-Fi by scanning a QR code, or point ATA-GUI at an IP and
          port. Endpoints are remembered and reconnected on the next launch, and every
          window tells you which transport it is talking over.
        </p>
        <ul class="ticks">
          <li>QR pairing with Android 11+ wireless debugging</li>
          <li>Manual <code>ip:port</code> connect and disconnect</li>
          <li>Saved endpoints reconnect by themselves</li>
        </ul>
      </div>
      <figure class="shot">
        <img
          src="/ata/wireless.png"
          width="1000"
          height="640"
          loading="lazy"
          alt="ADB over network card showing a connected wireless endpoint, pairing button and QR code"
        />
      </figure>
    </section>

    <!-- ------------------------------------------------------------ grid -->
    <section class="grid-section">
      <h2>Everything else, already there.</h2>
      <div class="grid">
        <div v-for="item in extras" :key="item.title" class="cell">
          <span class="cell-mark"><Icon :name="item.icon" :size="14" /></span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </div>
      </div>
    </section>

    <!-- ------------------------------------------------------------ install -->
    <section id="install" class="install">
      <div class="install-head">
        <h2>Install</h2>
        <p>
          The same app, packaged for every platform — no bundled runtime beyond the system
          webview. The portable build writes <code>config.json</code> next to the
          executable, so it travels on a USB stick.
        </p>
      </div>

      <div class="platforms">
        <div v-for="platform in platforms" :key="platform.name" class="platform">
          <p class="platform-name">{{ platform.name }}</p>
          <p class="platform-req">{{ platform.requirement }}</p>
          <ul>
            <li v-for="format in platform.formats" :key="format.label">
              <a class="platform-file" href="https://github.com/msartore/ATA-GUI/releases/latest">
                <span>{{ format.label }}</span>
                <code>{{ format.file }}</code>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p class="install-note">
        Everything is published on
        <a href="https://github.com/msartore/ATA-GUI/releases">GitHub Releases</a>. New
        tags ship as pre-releases first: installs still on 3.x keep being offered the last
        stable build until a 4.x version is promoted.
      </p>
    </section>

    <!-- ------------------------------------------------------------ faq -->
    <section id="faq" class="faq">
      <h2>Questions</h2>
      <details v-for="item in faq" :key="item.q">
        <summary>{{ item.q }}</summary>
        <p>{{ item.a }}</p>
      </details>
    </section>

    <!-- ------------------------------------------------------------ closing -->
    <section class="closing">
      <div>
        <h2>Ready when the phone is.</h2>
        <p>Download the installer, plug the device in, and the window fills itself.</p>
      </div>
      <div class="cta">
        <a class="btn btn-primary" href="https://github.com/msartore/ATA-GUI/releases/latest">
          Download ATA-GUI
        </a>
        <a class="btn" href="https://github.com/msartore/ATA-GUI">GitHub</a>
      </div>
    </section>

    <footer class="legal">
      <p>
        ATA-GUI is licensed under the Apache License 2.0. Android is a trademark of
        Google LLC.
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@unhead/vue";
import Icon from "~/components/Icon.vue";

const title = "ATA-GUI — adb & fastboot desktop app for Android";
const description =
  "Open-source desktop app for Android: remove bloatware without root, flash boot and recovery images with real progress, sideload OTA zips, read logcat, mirror the screen and pair over wireless ADB. Windows, Linux and macOS.";
const url = "https://msartore.dev/projects/ata-gui";

const extras = [
  {
    title: "Multi-user",
    body: "Every Android user on the device, switchable per action.",
    icon: "users",
  },
  {
    title: "Permissions",
    body: "Grant WRITE_SECURE_SETTINGS or DUMP, and check what is already granted.",
    icon: "shield",
  },
  {
    title: "Screen mirroring",
    body: "scrcpy, bundled and downloaded on demand, with encoder choice.",
    icon: "screen",
  },
  {
    title: "Task manager",
    body: "See what is running and stop it without leaving the app.",
    icon: "tasks",
  },
  {
    title: "Bootloader tools",
    body: "Unlock, lock, OEM device-info and the bootloader status of the unit.",
    icon: "lock",
  },
  {
    title: "Image extraction",
    body: "Pull a partition from the device and keep the .img on your machine.",
    icon: "download",
  },
  {
    title: "Eight languages",
    body: "English, Italian, Spanish, German, French, Portuguese, Russian and Chinese, switchable at runtime.",
    icon: "world",
  },
  {
    title: "Portable config",
    body: "Settings, locales and downloads live beside the executable.",
    icon: "file",
  },
];

const platforms = [
  {
    name: "Windows",
    requirement: "10 / 11 · x64",
    formats: [
      { label: "Installer", file: "ATA-GUI_4.0.0_x64-setup.exe" },
      { label: "MSI", file: "ATA-GUI_4.0.0_x64_en-US.msi" },
      { label: "Portable", file: "ATA-GUI-4.0.0-portable-windows-x64.zip" },
    ],
  },
  {
    name: "Linux",
    requirement: "x64 · GTK 3 · WebKitGTK",
    formats: [
      { label: "AppImage", file: "ATA-GUI_4.0.0_amd64.AppImage" },
      { label: "Debian", file: "ATA-GUI_4.0.0_amd64.deb" },
      { label: "Fedora", file: "ATA-GUI-4.0.0-1.x86_64.rpm" },
    ],
  },
  {
    name: "macOS",
    requirement: "10.15+ · Apple silicon",
    formats: [
      { label: "Installer", file: "ATA-GUI_4.0.0_aarch64.dmg" },
      { label: "Portable", file: "ATA-GUI-4.0.0-portable-darwin-arm64.zip" },
    ],
  },
];

const faq = [
  {
    q: "Do I need root to remove system apps?",
    a: "No. Everything goes through adb with the permissions of the shell user: disabling an app, uninstalling it for a user, granting WRITE_SECURE_SETTINGS. The device only has to have USB debugging (or wireless debugging) enabled.",
  },
  {
    q: "Is it safe to uninstall system apps?",
    a: "ATA-GUI marks packages using the Universal Android Debloater database and keeps a per-package result, so you can reinstall what you removed as long as the APK still exists on the device. Prefer disabling over uninstalling when you are unsure — disabled packages are trivially re-enabled.",
  },
  {
    q: "Does flashing work on a locked bootloader?",
    a: "Reading information does. Writing a partition or unlocking the bootloader needs an unlocked bootloader, and some vendors do not allow it — the app reports what fastboot answers instead of pretending it worked.",
  },
  {
    q: "What is ATA-Bridge?",
    a: "An optional companion Android app that adds in-depth app data. ATA-GUI runs without it; the app list simply shows fewer details.",
  },
  {
    q: "Does it work without an internet connection?",
    a: "Yes, once the SDK Platform Tools and optional scrcpy are downloaded. Network access is used for those downloads, the bloatware database and the update check — nothing else leaves the machine.",
  },
];

useHead({
  title,
  link: [{ rel: "canonical", href: url }],
  meta: [
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "ATA-GUI, adb gui, fastboot gui, android debloat, universal android debloater, sideload zip, adb over wifi, scrcpy gui, logcat viewer, android desktop app, adb frontend",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "msartore.dev" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: "https://msartore.dev/ata/og.png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: "https://msartore.dev/ata/og.png" },
  ],
  script: [
    {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "ATA-GUI",
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "Android device management",
        operatingSystem: "Windows 10, Windows 11, Linux, macOS",
        softwareVersion: "4.0.0",
        license: "https://www.apache.org/licenses/LICENSE-2.0",
        downloadUrl: "https://github.com/msartore/ATA-GUI/releases/latest",
        codeRepository: "https://github.com/msartore/ATA-GUI",
        screenshot: "https://msartore.dev/ata/hero-system.png",
        description,
        author: { "@type": "Person", name: "Massimiliano Sartore" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        featureList: [
          "Remove or disable system apps without root",
          "Flash boot, recovery and vendor images with fastboot",
          "Sideload OTA zip files from recovery",
          "Wireless ADB pairing with QR code",
          "Logcat and GetEvent viewer",
          "adb and fastboot terminal with Tab completion",
          "Screen and camera mirroring with scrcpy",
        ],
      }),
    },
    {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }),
    },
    {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Projects", item: "https://msartore.dev/" },
          { "@type": "ListItem", position: 2, name: "ATA-GUI", item: url },
        ],
      }),
    },
  ],
});
</script>

<style scoped lang="scss">
.ata :deep(code) {
  font-family: var(--mono);
  font-size: 0.92em;
  padding: 1px 5px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  color: #c8f7e6;
}

/* ------------------------------------------------------------------ type */
h1,
h2,
h3 {
  margin: 0;
  color: #f3f8fa;
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.05;
}

h1 {
  font-size: clamp(40px, 6.2vw, 74px);
}

h2 {
  font-size: clamp(26px, 3.4vw, 40px);
  max-width: 20ch;
}

h3 {
  font-size: 15px;
  letter-spacing: -0.01em;
}

p {
  margin: 0;
  line-height: 1.68;
  color: var(--dim);
}

.eyebrow {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 8px;
  margin-bottom: 18px;
  font-family: var(--mono);
  font-size: 11.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--mute);
}

.eyebrow > span {
  white-space: nowrap;
}

.eyebrow .sep {
  color: #33403f;
}

/* ------------------------------------------------------------------ hero */
.hero {
  max-width: 1040px;
  margin: 0 auto;
  padding-top: 40px;
}

.lead {
  margin-top: 22px;
  max-width: 56ch;
  font-size: clamp(16px, 1.3vw, 17.5px);
  color: #b7c4c9;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 46px;
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--panel);
  color: var(--text);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition:
    border-color 0.18s ease,
    background 0.18s ease,
    transform 0.18s ease;
}

.btn:hover {
  border-color: #38474b;
  background: var(--panel-2);
  transform: translateY(-1px);
}

.btn-primary {
  border-color: transparent;
  background: var(--accent);
  color: #05261c;
}

.btn-primary:hover {
  background: #3ff0b7;
  color: #05261c;
}

.btn-note {
  padding-left: 10px;
  border-left: 1px solid rgba(5, 38, 28, 0.22);
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  opacity: 0.72;
}

.hints {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 22px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  font-family: var(--mono);
  font-size: 12px;
  color: #8b999e;
}

.hints li::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-right: 8px;
  border-radius: 50%;
  background: #3a474b;
  vertical-align: 2px;
}

/* ------------------------------------------------------------------ shots */
.shot {
  position: relative;
  margin: 0;
}

.shot img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--panel);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.04) inset,
    0 30px 80px -40px rgba(0, 0, 0, 0.9);
}

.hero-shot {
  margin-top: 46px;
}

.hero-shot::before {
  content: "";
  position: absolute;
  inset: -12% -6% -18%;
  background: radial-gradient(60% 60% at 50% 40%, rgba(36, 224, 164, 0.16), transparent 70%);
  filter: blur(30px);
  pointer-events: none;
}

.hero-shot img {
  position: relative;
  border-radius: 14px;
}

figcaption {
  margin-top: 14px;
  font-family: var(--mono);
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--mute);
}

/* ------------------------------------------------------------------ strip */
.strip {
  max-width: 1040px;
  margin: 84px auto 0;
  padding-top: 26px;
  border-top: 1px solid var(--line);
}

.strip p {
  max-width: 78ch;
  font-size: 14px;
  color: var(--mute);
}

.strip strong {
  color: var(--dim);
}

/* ------------------------------------------------------------------ features */
.feature {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: start;
  gap: 56px;
  max-width: 1040px;
  margin: 110px auto 0;
}

.feature.is-reverse {
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
}

.feature.is-reverse .feature-copy {
  order: 2;
}

.feature-copy h2 {
  margin-top: 14px;
}

.feature-copy > p {
  margin-top: 18px;
  font-size: 15.5px;
}

.ticks {
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}

.ticks li {
  position: relative;
  padding-left: 26px;
  font-size: 14px;
  color: #b7c4c9;
}

.ticks li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 5px;
  width: 14px;
  height: 8px;
  border-left: 1.5px solid var(--accent);
  border-bottom: 1.5px solid var(--accent);
  transform: rotate(-45deg);
  opacity: 0.85;
}

.feature-media.is-pair {
  display: grid;
  gap: 14px;
}

/* ------------------------------------------------------------------ grid */
.grid-section {
  max-width: 1040px;
  margin: 120px auto 0;
}

.grid-section h2 {
  margin-bottom: 34px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  background: var(--line);
}

.cell {
  padding: 22px 20px 24px;
  background: var(--panel);
}

.cell-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-bottom: 14px;
  border-radius: 8px;
  background: rgba(36, 224, 164, 0.08);
  color: var(--accent);
}

.cell p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: var(--mute);
}

/* ------------------------------------------------------------------ install */
.install {
  max-width: 1040px;
  margin: 120px auto 0;
}

.install-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: 40px;
  align-items: end;
  margin-bottom: 34px;
}

.install-head p {
  font-size: 15px;
}

.platforms {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.platform {
  padding: 20px 20px 18px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--panel);
}

.platform-name {
  font-size: 15px;
  font-weight: 800;
  color: #f3f8fa;
}

.platform-req {
  margin-top: 4px;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--mute);
}

.platform ul {
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}

.platform li {
  font-size: 12.5px;
  color: var(--dim);
}

.platform-file {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 3px 4px;
  margin: 0 -4px;
  border-radius: 5px;
  color: inherit;
  text-decoration: none;
  transition: background 0.15s ease;
}

.platform-file:hover {
  background: rgba(255, 255, 255, 0.035);
}

.platform-file:hover code {
  color: var(--accent);
}

.platform li code {
  font-size: 10.5px;
  color: #8fd9bf;
  word-break: break-all;
  background: rgba(36, 224, 164, 0.06);
  text-align: right;
  overflow-wrap: anywhere;
}

.install-note {
  margin-top: 18px;
  max-width: 80ch;
  font-size: 13px;
  color: var(--mute);
}

.install-note a {
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid rgba(36, 224, 164, 0.35);
}

/* ------------------------------------------------------------------ faq */
.faq {
  max-width: 780px;
  margin: 120px auto 0;
}

.faq h2 {
  margin-bottom: 24px;
}

details {
  border-top: 1px solid var(--line);
  padding: 18px 0;
}

details:last-of-type {
  border-bottom: 1px solid var(--line);
}

summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 15px;
  font-weight: 700;
  color: #e6eef1;
}

summary::-webkit-details-marker {
  display: none;
}

summary::after {
  content: "+";
  font-family: var(--mono);
  font-size: 16px;
  color: var(--accent);
  transition: transform 0.2s ease;
}

details[open] summary::after {
  transform: rotate(45deg);
}

details p {
  margin-top: 12px;
  max-width: 70ch;
  font-size: 14px;
  color: var(--dim);
}

/* ------------------------------------------------------------------ closing */
.closing {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  max-width: 1040px;
  margin: 120px auto 0;
  padding: 34px 34px 34px 36px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background:
    radial-gradient(420px 220px at 12% 0%, rgba(36, 224, 164, 0.12), transparent 70%),
    var(--panel);
}

.closing h2 {
  font-size: clamp(24px, 2.6vw, 32px);
}

.closing p {
  margin-top: 8px;
  font-size: 14px;
}

.legal {
  max-width: 1040px;
  margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid var(--line);
}

.legal p {
  font-size: 12px;
  color: var(--mute);
}

/* ------------------------------------------------------------------ responsive */
@media (max-width: 900px) {
  .feature,
  .feature.is-reverse,
  .install-head {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }

  .feature.is-reverse .feature-copy {
    order: 0;
  }

  .feature {
    margin-top: 76px;
  }

  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .platforms {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 620px) {
  .grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .cta .btn {
    flex: 1 1 100%;
    justify-content: center;
  }

  .closing {
    padding: 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
</style>
