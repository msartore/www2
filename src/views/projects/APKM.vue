<template>
  <div class="site apkm">
    <!-- ------------------------------------------------------------ hero -->
    <header class="hero">
      <div class="hero-copy">
        <h1>Every layer,<br />under control.</h1>

        <p class="lead">
          A complete APK workbench for Android. Merge split packages into one installable
          file, decompile resources and smali, edit them in place, rebuild and sign — then
          strip the structure you would rather keep closed. Everything runs on the device:
          no upload, no account, no server in the middle.
        </p>

        <div class="cta">
          <a
            class="btn btn-primary"
            href="https://play.google.com/store/apps/details?id=dev.msartore.apkm"
          >
            Get it on Google Play
            <span class="btn-note">Free · 1K+ installs</span>
          </a>
          <a class="btn" href="/projects/apkm/privacy">Privacy policy</a>
        </div>

        <ul class="hints">
          <li>Works offline</li>
          <li>No root required</li>
          <li>Merge · decompile · build · protect</li>
        </ul>
      </div>

      <figure class="phone hero-phone">
        <img
          src="/apkm/home.png"
          width="540"
          height="1200"
          alt="APKM home screen with the Merge, Extract, Decompile, Build, Refactor, Protect and Info modules"
          fetchpriority="high"
        />
      </figure>
    </header>

    <!-- ------------------------------------------------------------ strip -->
    <section class="strip" aria-label="Engine">
      <p>
        APKM is a front end for <strong>REAndroid APKEditor</strong> — the same engine used
        from the command line. When it merges a split set it also removes the split
        metadata from the manifest, which is the difference between a merged APK that
        installs and one that returns <em>App not installed</em>.
      </p>
    </section>

    <!-- ------------------------------------------------------------ merge -->
    <section id="merge" class="feature">
      <div class="feature-copy">
        <p class="eyebrow">01 — Merge</p>
        <h2>Split in, one out.</h2>
        <p>
          Pick a base APK and its configuration splits — density, architecture, language —
          or hand over a whole APKS, XAPK or APKM. APKM resolves the set and writes a
          single universal APK you can install anywhere.
        </p>
        <ul class="ticks">
          <li>APKS, XAPK and APKM containers as input</li>
          <li>Split metadata stripped, so the result installs cleanly</li>
          <li>Sign on the way out, or keep it unsigned to inspect first</li>
          <li>Advanced switches: native libs, META-INF, module validation</li>
        </ul>
      </div>
      <figure class="phone">
        <img
          src="/apkm/merge.png"
          width="540"
          height="1200"
          loading="lazy"
          alt="Merge screen with the file picker, signing toggle and advanced options for native libraries and resource validation"
        />
      </figure>
    </section>

    <!-- ------------------------------------------------------------ decompile -->
    <section id="decompile" class="feature is-reverse">
      <div class="feature-copy">
        <p class="eyebrow">02 — Decompile &amp; build</p>
        <h2>Open it, then close it again.</h2>
        <p>
          Decode resources into XML, JSON or raw files and DEX into smali. Work through the
          project in the built-in editor with syntax highlighting, then rebuild and sign
          from the same screen. The round trip is the whole point.
        </p>
        <ul class="ticks">
          <li>XML, JSON and raw resource output</li>
          <li>DEX to smali, readable and editable</li>
          <li>Rebuild with optional signing in one step</li>
          <li>Resource validation before the build starts</li>
        </ul>
      </div>
      <figure class="phone">
        <img
          src="/apkm/decompile.png"
          width="540"
          height="1200"
          loading="lazy"
          alt="Decompile screen with project name, output type, split JSON and decoding options"
        />
      </figure>
    </section>

    <!-- ------------------------------------------------------------ inspect -->
    <section id="inspect" class="feature">
      <div class="feature-copy">
        <p class="eyebrow">03 — Inspect</p>
        <h2>Twenty-five answers, on demand.</h2>
        <p>
          Package, version, SDK range, permissions, locales, DEX, certificates: choose the
          fields you actually need and APKM prints them as plain text — something you can
          paste into a bug report instead of screenshotting a UI.
        </p>
        <ul class="ticks">
          <li>25+ configurable output fields</li>
          <li>Signing certificates, raw and base64</li>
          <li>File and resource inventories</li>
          <li>Plain text out, no lock-in</li>
        </ul>
      </div>
      <figure class="phone">
        <img
          src="/apkm/info.png"
          width="540"
          height="1200"
          loading="lazy"
          alt="Info result screen showing package name, version code, version name, application class and main activity"
        />
      </figure>
    </section>

    <!-- ------------------------------------------------------------ protect -->
    <section id="protect" class="feature is-reverse">
      <div class="feature-copy">
        <p class="eyebrow">04 — Protect &amp; refactor</p>
        <h2>Make it hard to read.</h2>
        <p>
          Protect renames the structure, the files and the DEX strings so a decompiled copy
          tells you less. Refactor goes the other way for your own projects: it maps
          obfuscated resource type names back into something a human can work with.
        </p>
        <ul class="ticks">
          <li>Obfuscate manifest, files and DEX</li>
          <li>Refactor obfuscated resource type names</li>
          <li>Every transformation chosen explicitly, nothing implicit</li>
          <li>Verbose log for each step</li>
        </ul>
      </div>
      <figure class="phone">
        <img
          src="/apkm/options.png"
          width="540"
          height="1200"
          loading="lazy"
          alt="Options screen with per-field switches for languages, locales, strings, files, DEX information and signatures"
        />
      </figure>
    </section>

    <!-- ------------------------------------------------------------ also -->
    <section class="also">
      <p class="eyebrow">05 — Also on the workbench</p>
      <div class="also-grid">
        <article class="card cell">
          <h3>Extract</h3>
          <p>
            Pull the APK of any installed app — split or single — straight out of the
            device, without adb on a laptop.
          </p>
        </article>
        <article class="card cell">
          <h3>Editor</h3>
          <p>
            Syntax-highlighted editing for XML, JSON and smali, with the project tree a tap
            away.
          </p>
        </article>
        <article class="card cell">
          <h3>Workspace</h3>
          <p>
            Keep decompiled projects on the device, browse them, and move them in or out as
            a ZIP.
          </p>
        </article>
      </div>
    </section>

    <!-- ------------------------------------------------------------ faq -->
    <section class="faq">
      <p class="eyebrow">06 — Questions</p>
      <details>
        <summary>Is APKM free?</summary>
        <p>
          Yes. The app is free on Google Play and the source is licensed Apache-2.0. It is
          supported by ads, which is why the app asks for consent on first launch.
        </p>
      </details>
      <details>
        <summary>Does it upload my APKs?</summary>
        <p>
          No. Merging, decompiling, building, inspecting and protecting all run on the
          device. There is no server component and no account.
        </p>
      </details>
      <details>
        <summary>Do I need root?</summary>
        <p>
          No. Every module works on a stock, unrooted device. Extracting the APK of another
          app relies on what Android exposes to third-party apps, not on root.
        </p>
      </details>
    </section>

    <!-- ------------------------------------------------------------ closing -->
    <section class="closing">
      <div>
        <h2>APKM</h2>
        <p>Apache-2.0 · © 2024–{{ year }} Massimiliano Sartore</p>
      </div>
      <div class="btn-row">
        <a
          class="btn btn-primary"
          href="https://play.google.com/store/apps/details?id=dev.msartore.apkm"
        >
          Get it on Google Play
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from "@unhead/vue";

const year = new Date().getFullYear();
const url = "https://msartore.dev/projects/apkm";

const title = "APKM — Android APK editor: merge, decompile, build, protect";
const description =
  "APKM is a local-first APK workbench for Android: merge split APKs into one installable file, decompile resources and smali, edit, rebuild, sign, refactor obfuscated names and inspect 25+ metadata fields. Free, Apache-2.0, no root.";

const faq = [
  {
    q: "Is APKM free?",
    a: "Yes. The app is free on Google Play and the source is licensed Apache-2.0. It is supported by ads, which is why the app asks for consent on first launch.",
  },
  {
    q: "Does APKM upload my APK files?",
    a: "No. Merging, decompiling, building, inspecting and protecting all run on the device. There is no server component and no account.",
  },
  {
    q: "Do I need root to use APKM?",
    a: "No. Every module works on a stock, unrooted device. Extracting the APK of another app relies on what Android exposes to third-party apps, not on root.",
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
        "APKM, split apk merger, apk editor android, merge apks, xapk to apk, apks to apk, decompile apk android, smali editor, apk signing app, protect apk, apk info, REAndroid APKEditor",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "msartore.dev" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: "https://msartore.dev/apkm/og.png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: "https://msartore.dev/apkm/og.png" },
  ],
  script: [
    {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MobileApplication",
        name: "APKM",
        alternateName: "APKM: Split APKs Merger",
        applicationCategory: "UtilitiesApplication",
        applicationSubCategory: "APK editor",
        operatingSystem: "Android 7.0 and up",
        softwareVersion: "2.7.0",
        license: "https://www.apache.org/licenses/LICENSE-2.0",
        installUrl: "https://play.google.com/store/apps/details?id=dev.msartore.apkm",
        screenshot: [
          "https://msartore.dev/apkm/home.png",
          "https://msartore.dev/apkm/merge.png",
          "https://msartore.dev/apkm/decompile.png",
        ],
        description,
        author: { "@type": "Person", name: "Massimiliano Sartore" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        featureList: [
          "Merge split APKs (APKS, XAPK, APKM) into a single installable APK",
          "Decompile APK resources to XML, JSON or raw and DEX to smali",
          "Rebuild and sign APKs from a decompiled project",
          "Refactor obfuscated resource type names",
          "Protect APK structure, files and DEX",
          "Inspect 25+ APK metadata fields",
          "Extract the APK of any installed app",
          "Syntax-highlighted editor for XML, JSON and smali",
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
          { "@type": "ListItem", position: 2, name: "APKM", item: url },
        ],
      }),
    },
  ],
});
</script>

<style scoped lang="scss">
/* hero: copy beside the phone */
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 288px);
  gap: clamp(32px, 5vw, 72px);
  align-items: start;
}

.phone {
  margin: 0;
  justify-self: end;
  width: 100%;
  max-width: 288px;
  padding: 7px;
  border: 1px solid var(--line);
  border-radius: 30px;
  background: linear-gradient(180deg, #191c1b, #0b0d0c);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.05) inset,
    0 28px 60px -30px rgba(0, 0, 0, 0.9);
}

.phone img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 24px;
}

.hero-phone {
  justify-self: center;
  margin-top: 14px;
}

/* provenance reads as a panel here, not a rule */
.strip {
  margin: clamp(48px, 7vw, 76px) 0;
  padding: 24px 28px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
}

/* feature rows hold a phone shot instead of a wide one */
.feature {
  grid-template-columns: minmax(0, 1fr) minmax(220px, 300px);
  gap: clamp(28px, 6vw, 84px);
  margin-top: 0;
  padding: clamp(34px, 5vw, 56px) 0;
  border-top: 1px solid var(--line);
}

.feature.is-reverse {
  grid-template-columns: minmax(220px, 300px) minmax(0, 1fr);
}

.feature.is-reverse .phone {
  justify-self: start;
}

.also {
  padding: clamp(40px, 6vw, 66px) 0;
  border-top: 1px solid var(--line);
}

.also-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  margin-top: 22px;
}

.faq {
  padding: clamp(40px, 6vw, 66px) 0;
  border-top: 1px solid var(--line);
}

@media (max-width: 900px) {
  .hero,
  .feature,
  .feature.is-reverse {
    grid-template-columns: minmax(0, 1fr);
    gap: 30px;
  }

  .phone,
  .hero-phone,
  .feature.is-reverse .phone {
    justify-self: center;
    max-width: 236px;
  }

  .hero-phone {
    order: 2;
  }
}
</style>
