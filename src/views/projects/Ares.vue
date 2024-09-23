<template>
  <CommonProject :projectData="project" />
</template>

<script setup>
import b from "@/assets/banner4.png";
import { useHead } from "@unhead/vue";

const project = {
  banner: b,
  images: [],
  buttons: [
    {
      label: "Google Play",
      link: "https://play.google.com/store/apps/details?id=dev.msartore.ares",
    },
    {
      label: "Github repository",
      link: "https://github.com/msartore/Ares",
    },
  ],
  os_supported: {
    android: true,
    windows: false,
    linux: false,
  },
  description:
    "Ares is an app that makes file sharing fast and convenient. You can use Ares to send and receive files from any device on your local network without using the internet. You can create your own server or join others with a simple scan. You can also access the server from your app or browser and upload files with ease. Ares is the app for file sharing via local network.",
  features: [
    "Transfer files and text via local network",
    "Easy client access via App or Browser",
    "Local server on your device",
    "Scan for other servers",
    "Scan QR code with Ares or a QR scanner to easy access the server",
    "Easy file upload to server from browser",
  ],
  terms:
    "Copyright © 2024 Massimiliano Sartore\nThis program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\nThis program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.\nYou should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/",
};

useHead({
  title: "Ares - Fast Local File Sharing App",
  meta: [
    { name: "description", content: project.description },
    { property: "og:title", content: "Ares - Fast Local File Sharing App" },
    { property: "og:description", content: project.description },
    { property: "og:image", content: project.banner },
    { property: "og:url", content: "https://msartore.dev/projects/ares" },
    { property: "og:type", content: "website" },
  ],
});
</script>
