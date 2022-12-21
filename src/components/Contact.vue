<template>
  <section class="bg-scuro pt-4" id="contact">
    <div class="max-width">
      <h2
        class="text-3xl text-burro font-bold text-center pb-5"
        v-motion-slide-visible-once-left
      >
        Contact
      </h2>
      <div
        class="text-center text-burro mx-4 pb-4"
        v-motion-slide-visible-once-bottom
      >
        <p>Feel free to reach out if you want to collaborate, or just</p>

        <p class="hover:underline">
          →
          <router-link to="/contact"> have a chat.</router-link>
          ←
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import MyButton from "./myButton.vue";
</script>

<style></style>
