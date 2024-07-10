<template>
  <div>
    <div class="container-card">
      <el-card v-for="project in projects" style="max-width: 480px">
        <template #header>
          <div class="card-header">
            <span>{{ project.label }}</span>
          </div>
        </template>
        <img :src="project.img" style="width: 100%" />
        <template #footer>Footer content</template>
      </el-card>
    </div>
  </div>
</template>

<script setup>
const projects = [
  { label: "ATA-GUI", img: "/src/assets/banner1.png" },
  { label: "ATA-GUI", img: "/src/assets/banner2.png" },
  { label: "ATA-GUI", img: "/src/assets/banner3.png" },
];
</script>

<style>
.container-card {
  display: flex;
  justify-content: space-between;
}
</style>
