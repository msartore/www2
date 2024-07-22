<template>
  <div class="container">
    <div class="center">
      <img class="qr" :src="bmc" />
      <p class="center">Donate via "Buy me a coffee"</p>
      <a href="https://www.buymeacoffee.com/msartore">
        <el-button type="primary" class="c-button"> Donate </el-button>
      </a>
    </div>
    <div class="center">
      <img class="qr" :src="revolut" />
      <p class="center">Donate via Revolut</p>
      <a href="https://revolut.me/msartore">
        <el-button type="primary" class="c-button"> Donate </el-button>
      </a>
    </div>
  </div>
</template>

<script setup>
import bmc from "@/assets/bmc_qr.jpg";
import revolut from "@/assets/revolut.jpg";
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
