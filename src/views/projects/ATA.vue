<template>
  <ProjectPage
    title="ATA"
    tagline="The command-line tool that started it all: adb and fastboot, wrapped in a script-friendly shell interface."
    :description="description"
    :features="features"
    :links="links"
    :platforms="['Windows', 'Linux']"
    license="GPL-3.0"
    :banner="banner"
  />
</template>

<script setup>
import banner from "~/assets/banner3.png";
import { useHead } from "@unhead/vue";

const description = `ATA (Advanced Tool for Android) is the original command-line front end for the Android SDK Platform Tools: a shell interface that performs the tasks you would otherwise chain by hand — reading device properties, installing and removing packages, rebooting into recovery or fastboot, pushing and pulling files.
It is the ancestor of ATA-GUI, kept around for scripts and for anyone who prefers a terminal.`;

const features = [
  "Read and change device settings, files and properties",
  "Install, uninstall and restore packages",
  "Reboot into system, recovery or the bootloader",
  "Push and pull files over adb",
  "Powered by the official SDK Platform Tools",
  "Runs on Windows and Linux, no runtime to install",
];

const links = [
  {
    label: "Download",
    href: "https://github.com/msartore/Advance-Tool-for-Android-ADB-Tool/releases/tag/v0.9.3.10072020W",
  },
  { label: "GitHub", href: "https://github.com/msartore/Advance-Tool-for-Android-ADB-Tool" },
];

useHead({
  title: "ATA — advanced tool for Android over adb",
  meta: [
    { name: "description", content: description },
    { property: "og:title", content: "ATA — advanced tool for Android over adb" },
    { property: "og:description", content: description },
    { property: "og:image", content: banner },
    { property: "og:url", content: "https://msartore.dev/projects/ata" },
    { property: "og:type", content: "website" },
  ],
});
</script>
