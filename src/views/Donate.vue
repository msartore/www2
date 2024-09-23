<template>
  <div class="container">
    <div class="center">
      <img class="qr" :src="bmc" />
      <p class="center">Support me via "Buy me a coffee"</p>
      <a href="https://www.buymeacoffee.com/msartore">
        <el-button type="primary" class="c-button"> Support me </el-button>
      </a>
    </div>
    <div class="center">
      <img class="qr" :src="revolut" />
      <p class="center">Support me via Revolut</p>
      <a href="https://revolut.me/msartore">
        <el-button type="primary" class="c-button"> Support me </el-button>
      </a>
    </div>
  </div>
</template>

<script setup>
import bmc from "@/assets/bmc_qr.jpg";
import revolut from "@/assets/revolut.jpg";
import { useHead } from "@unhead/vue";

useHead({
  title: "Donate me | Massimiliano Sartore",
  meta: [
    {
      name: "description",
      content: "Support me by donating via Buy Me a Coffee or Revolut.",
    },
    { property: "og:title", content: "Donate me | Massimiliano Sartore" },
    {
      property: "og:description",
      content: "Support me by donating via Buy Me a Coffee or Revolut.",
    },
    { property: "og:url", content: "https://msartore/donate" },
  ],
});
</script>

<style lang="scss" scoped>
.qr {
  width: 50%;
  border-radius: 10%;
  margin: 10px;
}

.c-button {
  border-radius: 50px;
  padding: 20px;
  margin: 10px;
}

.center {
  text-align: center;
}

.container {
  display: flex;
}
</style>
