<template>
  <ProjectPage
    title="Ares"
    tagline="Share files between the phone and any browser on the network — no cable, no cloud, no account."
    :description="description"
    :features="features"
    :links="links"
    :platforms="['Android 8+']"
    license="GPL-3.0"
    :banner="banner"
  />
</template>

<script setup>
import banner from "~/assets/banner4.png";
import { useHead } from "@unhead/vue";

const description = `Ares starts a small file server on the phone and hands you a URL. Any device on the same Wi-Fi — another phone, a laptop, a tablet — can open it in a browser and drag files in, or reach it through the Ares app itself.
Nothing leaves the local network: transfers go straight from one device to the other, at LAN speed, for as long as both are connected.`;

const features = [
  "Transfer files and text over the local network",
  "Open the server from the app or from any browser",
  "Run the server on the device you are sharing from",
  "Discover other Ares servers on the network",
  "Pair by scanning a QR code instead of typing an address",
  "Upload straight from the browser, with no client to install",
];

const links = [
  { label: "Google Play", href: "https://play.google.com/store/apps/details?id=dev.msartore.ares" },
  { label: "GitHub", href: "https://github.com/msartore/Ares" },
];

useHead({
  title: "Ares — local file sharing for Android",
  meta: [
    { name: "description", content: description },
    { property: "og:title", content: "Ares — local file sharing for Android" },
    { property: "og:description", content: description },
    { property: "og:image", content: banner },
    { property: "og:url", content: "https://msartore.dev/projects/ares" },
    { property: "og:type", content: "website" },
  ],
});
</script>
