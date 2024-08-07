<template>
  <el-col>
    <div class="center">
      <img class="image" :src="notFound" />
      <p class="center">Page not found!</p>
    </div>
  </el-col>
</template>

<script setup>
import notFound from "@/assets/404.svg";
</script>

<style scoped>
.image {
  width: 50%;
}

.center {
  text-align: center;
  width: 500px;
}
</style>
