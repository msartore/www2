<template>
  <div class="site och">
    <!-- ------------------------------------------------------------ hero -->
    <header class="hero">
      <h1>Every fan.<br />Every LED.</h1>

      <p class="lead">
        A desktop app for Colorful AMD motherboards: four-point SmartFan curves on the
        Nuvoton Super I/O, and 200 LEDs across six RGB channels. Tauri on the front, a Rust
        core underneath, and the <code>colorctl</code> CLI built from the same crates — so the
        window and the terminal share one state file instead of fighting over the hardware.
      </p>

      <div class="btn-row">
        <a class="btn btn-primary" href="https://github.com/msartore/OpenColorHub/releases/latest">
          Download OpenColorHub
          <span class="btn-note">Free · GPL-3.0</span>
        </a>
        <a class="btn" href="https://github.com/msartore/OpenColorHub">View source</a>
      </div>

      <ul class="hints">
        <li>Windows &amp; Linux</li>
        <li>GPL-3.0, no account</li>
        <li>Board identified before any write</li>
      </ul>

      <figure class="shot hero-shot">
        <img
          src="/opencolorhub/dashboard.png"
          width="1600"
          height="1006"
          alt="OpenColorHub dashboard: motherboard temperature gauge, average duty, total rpm, headers in use, channels lit and the 200-LED frame, with the fan header and lighting tables underneath"
          fetchpriority="high"
        />
        <figcaption>
          One window for both halves of the board: the gauge carries the session history, the
          tables carry each header and channel. Runs on simulated telemetry until a backend
          answers, and says which one did.
        </figcaption>
      </figure>
    </header>

    <!-- ------------------------------------------------------------ strip -->
    <section class="strip" aria-label="Provenance">
      <p>
        OpenColorHub is a desktop rewrite of <strong>colorctl</strong>, the Linux CLI. The
        register sequences, the curve tables and the 35-byte <code>CCTL</code> lighting state
        are byte-compatible with it, so a machine can move between the CLI and the window
        without losing a single setting. Upstream's MIT portions stay attributed in
        <a href="https://github.com/msartore/OpenColorHub/blob/main/NOTICE.md">NOTICE.md</a>.
      </p>
    </section>

    <!-- ------------------------------------------------------------ feature 01 -->
    <section id="fans" class="feature">
      <div class="feature-copy">
        <p class="eyebrow">01 — Fan control</p>
        <h2>Four points, in the chip's registers.</h2>
        <p>
          Each header takes a SmartFan curve — four temperature/duty points dragged straight
          on the graph — or a fixed manual duty. On Linux the curve goes into the Nuvoton's own
          curve registers. On Windows, where the <code>0xD121</code> has no known curve layout,
          the app evaluates the same four points in software and writes duty when the target
          moves three steps or more.
        </p>
        <ul class="ticks">
          <li>Six headers: CPU, three chassis, pump and AIO — empty sockets are hidden, not shown at 0 rpm</li>
          <li>Quiet, Standard and Full tilt presets, plus curves you drag yourself</li>
          <li>The pump is never driven below 60%, manual duty included</li>
          <li>Live tach and board temperature, with session min, mean and max</li>
        </ul>
      </div>
      <figure class="shot">
        <img
          src="/opencolorhub/fans.png"
          width="1600"
          height="1006"
          loading="lazy"
          alt="Fan control screen with the Quiet, Standard and Full tilt preset row and per-header cards showing rpm, duty, a manual slider and an editable four-point SmartFan curve"
        />
      </figure>
    </section>

    <!-- ------------------------------------------------------------ feature 02 -->
    <section id="lighting" class="feature is-reverse">
      <div class="feature-copy">
        <p class="eyebrow">02 — Lighting</p>
        <h2>Six channels. Two hundred LEDs.</h2>
        <p>
          The Colorful controller is addressed over HID: 18 LEDs on the onboard shroud, one per
          12V RGB header, 60 per 5V ARGB header. Set one colour for the whole machine or go
          channel by channel, pick a brightness, and the frame preview shows exactly what the
          controller receives — ten packets of twenty LEDs.
        </p>
        <ul class="ticks">
          <li>Onboard 18 · two 12V headers · three 5V ARGB headers at 60 each</li>
          <li>Global colour with six presets, or per-channel colour and level</li>
          <li>Lighting presets store colour, brightness and on/off — never the fans</li>
          <li>No driver and no elevation on Windows: SetupAPI plus <code>hid.dll</code></li>
        </ul>
      </div>
      <figure class="shot">
        <img
          src="/opencolorhub/leds.png"
          width="1600"
          height="1006"
          loading="lazy"
          alt="Lighting screen: global colour controls at 80% brightness, the 200-LED frame preview and six channel cards with per-channel colour and level"
        />
      </figure>
    </section>

    <!-- ------------------------------------------------------------ feature 03 -->
    <section id="safety" class="feature">
      <div class="feature-copy">
        <p class="eyebrow">03 — Board guard</p>
        <h2>Nothing is written to a board it cannot name.</h2>
        <p>
          The board is read from SMBIOS before a register is touched and matched against a
          catalogue of 35 Colorful models. Confidence decides policy: <em>verified</em> and
          <em>compatible</em> boards may probe hardware, <em>unknown</em> lets the Super I/O
          chip ID decide, and another vendor's board is blocked in auto mode. A chip that does
          not answer — <code>0xD42A</code> over <code>/dev/port</code>, the
          <code>0xD1xx</code> family over PawnIO — aborts before the first write.
        </p>
        <ul class="ticks">
          <li>The verdict travels with every telemetry snapshot: Dashboard, Settings, About and the CLI</li>
          <li>Curves validated in the UI, the CLI and the service: four points, ascending temperatures, 0–100%</li>
          <li>Administrator rights through the Windows manifest and a UAC prompt — no hidden scheduled task</li>
          <li>Updates checked against the release's <code>SHA256SUMS</code>, and rolled back if the swap fails</li>
        </ul>
      </div>
      <figure class="shot">
        <img
          src="/opencolorhub/about.png"
          width="1600"
          height="1006"
          loading="lazy"
          alt="About screen listing the detected board, BIOS version and the catalogue match that decides whether hardware writes are allowed"
        />
      </figure>
    </section>

    <!-- ------------------------------------------------------------ feature 04 -->
    <section id="drivers" class="feature is-reverse">
      <div class="feature-copy">
        <p class="eyebrow">04 — Drivers</p>
        <h2>The vendor's downloads, none of their installers.</h2>
        <p>
          The Drivers screen reads Colorful's public product catalogue for the board this
          machine reports and hands you the file. It never runs anything. Board names are
          matched after collapsing case and whitespace, because SMBIOS and the website disagree
          on both: this machine says <code>CVN X570M GAMING PRO</code>, the site lists the
          <code>V14</code>.
        </p>
        <ul class="ticks">
          <li>Catalogue pulled from the public site, not the token-gated client API</li>
          <li>Downloads land where you choose; no installer is executed</li>
          <li>Longest name match wins, so a revision suffix does not hide the board</li>
        </ul>
      </div>
      <figure class="shot">
        <img
          src="/opencolorhub/drivers.png"
          width="1600"
          height="1006"
          loading="lazy"
          alt="Drivers screen listing the downloads Colorful publishes for the detected board, each with a download action and none of them executable by the app"
        />
      </figure>
    </section>

    <!-- ------------------------------------------------------------ grid -->
    <section class="site-section">
      <div class="section-head">
        <div>
          <p class="eyebrow">05 — Also in the box</p>
          <h2>Everything else, already there.</h2>
        </div>
      </div>
      <div class="cells is-4">
        <div v-for="item in extras" :key="item.title" class="card cell">
          <span class="cell-mark"><Icon :name="item.icon" :size="14" /></span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </div>
      </div>
    </section>

    <!-- ------------------------------------------------------------ install -->
    <section id="install" class="site-section">
      <div class="install-head">
        <div>
          <p class="eyebrow">06 — Download</p>
          <h2>Install</h2>
        </div>
        <p>
          Both architectures are x64. The portable zip keeps <code>config/</code> and
          <code>data/</code> beside the executable, so it travels on a stick with its settings.
        </p>
      </div>

      <div class="platforms">
        <div v-for="platform in platforms" :key="platform.name" class="card platform">
          <p class="platform-name">{{ platform.name }}</p>
          <p class="platform-req">{{ platform.requirement }}</p>
          <ul>
            <li v-for="format in platform.formats" :key="format.label">
              <a class="platform-file" href="https://github.com/msartore/OpenColorHub/releases/latest">
                <span>{{ format.label }}</span>
                <code>{{ format.ext }}</code>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p class="install-note">
        PawnIO — the signed driver Windows needs for fan writes — is <strong>not</strong>
        bundled. On first launch the app fetches PawnIO's own installer from its releases, checks
        it against a pinned SHA-256 and runs it, so the installer UI and the UAC prompt are
        what you see. On Linux, real hardware needs root or <code>CAP_SYS_RAWIO</code>. There is
        no macOS build: the Super I/O path is Linux and Windows only.
      </p>
    </section>

    <!-- ------------------------------------------------------------ faq -->
    <section id="faq" class="site-section faq">
      <div class="section-head">
        <div>
          <p class="eyebrow">07 — Questions</p>
          <h2>Questions</h2>
        </div>
      </div>
      <details v-for="item in faq" :key="item.q">
        <summary>{{ item.q }}</summary>
        <p>{{ item.a }}</p>
      </details>
    </section>

    <!-- ------------------------------------------------------------ closing -->
    <section class="closing">
      <div>
        <h2>Cool, and lit.</h2>
        <p>GPL-3.0-only · © 2024–{{ year }} Massimiliano Sartore</p>
      </div>
      <div class="btn-row">
        <a class="btn btn-primary" href="https://github.com/msartore/OpenColorHub/releases/latest">
          Download OpenColorHub
        </a>
        <a class="btn" href="https://github.com/msartore/OpenColorHub">GitHub</a>
      </div>
    </section>

    <footer class="project-legal">
      <p>
        The upstream colorctl portions are MIT; the embedded PawnIO module is LGPL. Colorful and
        iGame are trademarks of their owners — this project is not affiliated with Colorful
        Technology.
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@unhead/vue";
import Icon from "~/components/Icon.vue";

const year = new Date().getFullYear();
const url = "https://msartore.dev/projects/opencolorhub";

const title = "OpenColorHub — fan and ARGB control for Colorful AMD boards";
const description =
  "Open-source Windows and Linux app for Colorful motherboards: four-point SmartFan curves on the Nuvoton Super I/O, 200 LEDs across six RGB channels, board detection before any register write, and a colorctl CLI sharing one state file.";

const extras = [
  {
    title: "Tray first",
    body: "Closing the window hides it; Quit is the only real exit, and startup with the OS is a switch.",
    icon: "window",
  },
  {
    title: "Portable mode",
    body: "An opencolorhub.portable marker beside the executable redirects config and data next to it.",
    icon: "file",
  },
  {
    title: "Presets, kept apart",
    body: "A fan preset never writes lighting, a lighting preset never spins a fan. Recall a quiet curve at night without dimming the case.",
    icon: "save",
  },
  {
    title: "CLI parity",
    body: "The colorctl binary in the same workspace keeps upstream syntax: board, fan, rgb, from a script or an SSH session.",
    icon: "terminal",
  },
  {
    title: "CCTL state",
    body: "The 35-byte lighting blob is identical to upstream, so an existing /var/lib/colorctl/rgb.state keeps working.",
    icon: "repeat",
  },
  {
    title: "Backend, named",
    body: "PawnIO, HWiNFO read-only or the simulator — the sidebar and Settings say which one answered, and why the others did not.",
    icon: "check",
  },
  {
    title: "Updates with a rollback",
    body: "The check runs at launch, the download is verified against SHA256SUMS, and a failed copy puts the old binary back.",
    icon: "download",
  },
  {
    title: "Six headers",
    body: "CPU, CHA1–3, pump and AIO. A header that never reports a tach is hidden instead of counted as 0 rpm.",
    icon: "fan",
  },
];

const platforms = [
  {
    name: "Windows",
    requirement: "10 / 11 · x64 · PawnIO for fan writes",
    formats: [
      { label: "Installer", ext: ".exe" },
      { label: "MSI", ext: ".msi" },
      { label: "Portable", ext: ".zip" },
    ],
  },
  {
    name: "Linux",
    requirement: "x64 · GTK 3 · WebKitGTK · root or CAP_SYS_RAWIO",
    formats: [
      { label: "AppImage", ext: ".AppImage" },
      { label: "Debian", ext: ".deb" },
      { label: "Tarball", ext: ".tar.gz" },
    ],
  },
];

const faq = [
  {
    q: "Which boards does it support?",
    a: "Colorful AMD boards with a Nuvoton Super I/O — the NCT5584D (0xD42A) and the 0xD1xx family — with a catalogue of 35 models used to grade confidence. A board from another vendor is blocked in auto mode; --backend hardware overrides the guard if you know what the registers do.",
  },
  {
    q: "Do I need Colorful's iGame Center?",
    a: "No. OpenColorHub is independent and runs without the vendor client. It installs no background service, no scheduled task and no telemetry; administrator rights come from the executable's manifest and a UAC prompt you can decline.",
  },
  {
    q: "Why does Windows need a driver for fans?",
    a: "IN and OUT are ring-0 instructions. Linux brokers them through /dev/port; Windows has no user-mode equivalent, so the app talks to PawnIO — a signed driver that executes a bytecode module whose port access is allow-listed to the selected index pair and discovered BARs. It is not bundled: the app downloads PawnIO's installer from PawnIO's releases, verifies a pinned SHA-256 and runs it so its own UI and UAC prompt appear.",
  },
  {
    q: "What happens without it?",
    a: "The backend falls back in order: PawnIO for real rpm, temperature and duty; then HWiNFO64's shared-memory block for read-only telemetry; then the simulator, which persists state and enforces the pump floor so the app stays usable anywhere. Lighting is unaffected — it goes through hid.dll and needs neither driver nor elevation.",
  },
  {
    q: "Is it safe to write a curve to my board?",
    a: "The board is identified from SMBIOS and the Super I/O chip ID is probed before any write, so a chip that does not answer is never programmed. The pump is floored at 60% and every curve is validated. Beyond that: writing fan curves on a board nobody has verified is at your own risk, and the GPL-3.0 licence says the authors are not liable.",
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
        "OpenColorHub, colorful motherboard fan control, argb control windows, linux fan control, nuvoton super io, nct5584d, 0xd121, smartfan curve, pawnio, hid rgb, colorctl, igame center alternative, open source fan controller",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "msartore.dev" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: "https://msartore.dev/opencolorhub/og.png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: "https://msartore.dev/opencolorhub/og.png" },
  ],
  script: [
    {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "OpenColorHub",
        applicationCategory: "UtilitiesApplication",
        applicationSubCategory: "Hardware control",
        operatingSystem: "Windows 10, Windows 11, Linux",
        license: "https://www.gnu.org/licenses/gpl-3.0.html",
        downloadUrl: "https://github.com/msartore/OpenColorHub/releases/latest",
        codeRepository: "https://github.com/msartore/OpenColorHub",
        screenshot: [
          "https://msartore.dev/opencolorhub/dashboard.png",
          "https://msartore.dev/opencolorhub/fans.png",
          "https://msartore.dev/opencolorhub/leds.png",
        ],
        description,
        author: { "@type": "Person", name: "Massimiliano Sartore" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        featureList: [
          "Four-point SmartFan curves per fan header on the Nuvoton Super I/O",
          "Manual fan duty with a 60% pump floor",
          "200 LEDs across six RGB channels",
          "Per-channel colour, brightness and global lighting presets",
          "Board identification from SMBIOS with four confidence levels",
          "Super I/O chip-ID probe before any register write",
          "PawnIO, HWiNFO read-only and simulator backends",
          "colorctl CLI sharing the same CCTL state file",
          "Portable mode and a tray-first window",
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
          { "@type": "ListItem", position: 2, name: "OpenColorHub", item: url },
        ],
      }),
    },
  ],
});
</script>

<style scoped lang="scss">
/* two platforms ship today, not three */
.platforms {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 900px) {
  .platforms {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
