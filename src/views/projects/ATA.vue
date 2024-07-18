<template>
  <CommonProject :projectData="project" />
</template>

<script setup>
import b from "@/assets/banner3.png";

const project = {
  banner: b,
  images: [],
  buttons: [
    {
      label: "Download",
      link: "https://github.com/msartore/Advance-Tool-for-Android-ADB-Tool/releases/tag/v0.9.3.10072020W",
    },
    {
      label: "Changelog",
      link: "https://github.com/msartore/Advance-Tool-for-Android-ADB-Tool/commits/main/",
    },
    {
      label: "Github repository",
      link: "https://github.com/msartore/Advance-Tool-for-Android-ADB-Tool",
    },
  ],
  os_supported: {
    android: false,
    windows: true,
    linux: true,
  },
  description:
    "ATA is an app that allows you to perform advanced tasks on your Android device using a shell interface. You can use ATA to access and modify your device's system settings, files, and features. You can also use ATA to install, uninstall, and restore apps on your device. ATA is powered by SDK Platform Tools, which are a set of command-line tools that allow you to communicate with your device and execute various operations. ATA is available for Linux and Windows, and is the app for advanced Android users who want to have more control over their device using a shell.",
  features: [
    "Transfer files and text via local network",
    "Easy client access via App or Browser",
    "Local server on your device",
    "Scan for other servers",
    "Scan QR code with Ares or a QR scanner to easy access the server",
    "Easy file upload to server from browser",
  ],
  terms:
    "Copyright © 2023 Massimiliano Sartore\nThis program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\nThis program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.\nYou should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/",
};
</script>
