<template>
  <CommonProject :projectData="project" />
</template>

<script setup>
import b from "@/assets/banner1.png";

const project = {
  banner: b,
  images: [],
  buttons: [
    {
      label: "Download",
      link: "https://ata.msartore.dev/download",
    },
    {
      label: "Changelog",
      link: "https://github.com/msartore/ATA-GUI/commits/main/",
    },
    {
      label: "Github repository",
      link: "https://github.com/msartore/ATA-GUI",
    },
  ],
  os_supported: {
    android: false,
    windows: true,
    linux: false,
  },
  description:
    "ATA GUI is a powerful desktop program that simplifies the management of applications on your Android device. With its modern graphical interface, you can easily disable pre-installed system apps and bloatware that are not useful to you or install new ones with just a few clicks. The program also provides access to fastboot commands, allowing you to sideload zips in the recovery and perform other advanced tasks. Additionally, ATA GUI comes with many useful tools and tweaks that enhance your overall experience with your device. Once you try ATA GUI, you will realize how easy it is to work with applications via adb, making it an essential tool for managing your Android device for years to come. This software is fully open-source so you can check all the code, you can find on Github.",
  features: [
    "Uninstall, data cleaning and disable/enable system/user applications without root",
    "Install applications, Uploading files",
    "Grant WRITE_SECURE_SETTINGS permission",
    "Grant DUMP permission",
    "Check for granted permissions",
    "ADB over network",
    "Bloatware Detector",
    "REBOOT INTO THE RECOVERY, REBOOT SMARTPHONE",
    "REBOOT INTO THE Fastboot/Bootloader",
    "FLASH BOOT , BOOTLOADER, RADIO, RECOVERY, SYSTEM, VENDOR, CACHE, ROM",
    "Erase user data and cache",
    "UNLOCK BOOTLOADER (Not all device supported)",
    "LOCK BOOTLOADER (Not all device supported)",
    "OEM device-id",
    "Get device info",
    "Sideload a zip",
    "Command injection",
    "Text injection",
    "Screen Share",
    "Logcat",
    "Task manager",
    "Support to Multiple user device",
    "Screen mirroring",
    "Camera mirroring",
  ],
  terms:
    'Copyright © 2024 Massimiliano Sartore ATA-GUI is licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. Android is a trademark of Google LLC.',
};
</script>
