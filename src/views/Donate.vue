<template>
  <div class="site donate">
    <header class="donate-hero">
      <h1>Buy the tool a coffee.</h1>
      <p class="lead">
        Every project here is free and open source, with no ads and no account. If one of
        them saved you an afternoon, you can chip in — it buys testing devices and time.
      </p>
    </header>

    <div class="cards">
      <div class="card donate-card">
        <span class="card-label">Buy me a coffee</span>
        <img :src="bmc" alt="Buy Me a Coffee QR code" width="220" height="220" />
        <a class="btn" href="https://www.buymeacoffee.com/msartore">Support via Buy Me a Coffee</a>
      </div>

      <div class="card donate-card">
        <span class="card-label">Revolut</span>
        <img :src="revolut" alt="Revolut QR code" width="220" height="220" />
        <a class="btn" href="https://revolut.me/msartore">Support via Revolut</a>
      </div>
    </div>

    <p class="note">
      Donations are one-off and go straight to the person behind the projects. No
      subscription, nothing gated behind it.
    </p>
  </div>
</template>

<script setup>
import bmc from "~/assets/bmc_qr.jpg";
import revolut from "~/assets/revolut.jpg";
import { useHead } from "@unhead/vue";

useHead({
  title: "Donate — support the projects",
  meta: [
    {
      name: "description",
      content: "Support the open-source work of Massimiliano Sartore via Buy Me a Coffee or Revolut.",
    },
    { property: "og:title", content: "Donate — support the projects" },
    { property: "og:description", content: "Support open-source Android and desktop tooling." },
    { property: "og:url", content: "https://msartore.dev/donate" },
    { property: "og:type", content: "website" },
  ],
});
</script>

<style scoped lang="scss">
.donate-hero {
  padding-top: 24px;
}

.donate-hero h1 {
  margin-top: 16px;
}

.donate-hero .lead {
  margin-top: 18px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 44px;
}

.donate-card {
  display: grid;
  justify-items: start;
  gap: 16px;
  padding: 24px;
}

.donate-card img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 10px;
  background: #fff;
  padding: 8px;
}

.card-label {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--mute);
}

.note {
  margin-top: 22px;
  font-size: 13px;
  color: var(--mute);
}

@media (max-width: 700px) {
  .cards {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
