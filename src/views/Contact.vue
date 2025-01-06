<template>
  <h2>Contact Me</h2>
  <p>
    Thank you for visiting my personal website. I'd love to hear from you!
    Whether you have a question, want to collaborate, or just want to say hello,
    feel free to get in touch using the information below.
  </p>

  <h3>Email</h3>
  <p>
    For general inquiries, please email me at:
    <a href="mailto:me@msartore.dev" type="primary">me@msartore.dev</a>
  </p>
</template>

<script setup>
import { useHead } from "@unhead/vue";

useHead({
  title: "Contact Me | Massimiliano Sartore",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with Massimiliano Sartore for inquiries, collaborations, or just to say hello.",
    },
    { property: "og:title", content: "Contact Me | Massimiliano Sartore" },
    {
      property: "og:description",
      content: "Reach out for questions or collaborations.",
    },
    { property: "og:url", content: "https://msartore.dev/contact" },
    { property: "og:type", content: "website" },
  ],
});
</script>
