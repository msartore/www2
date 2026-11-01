<template>
  <div class="site not-found">
    <h1>That page does not exist.</h1>
    <p class="lead">
      The link is broken, or the page moved. The projects are still where they were.
    </p>
    <div class="btn-row">
      <a class="btn btn-primary" href="/" @click.prevent="goHome">Back to the homepage</a>
      <a class="btn" href="https://github.com/msartore">GitHub</a>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goHome() {
  router.push("/");
  window.scrollTo(0, 0);
}
</script>

<style scoped lang="scss">
.not-found {
  padding-top: 72px;
  padding-bottom: 72px;
  max-width: 720px;
}

.not-found h1 {
  margin-top: 16px;
}

.not-found .lead {
  margin-top: 18px;
}
</style>
