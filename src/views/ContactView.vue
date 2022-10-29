<template>
  <div class="min-h-screen bg-scuro">
    <Navbar></Navbar>
    <div
      class="text-2xl bg-scuro text-burro w-full text-center pt-20 md:pt-4 px-4 pb-2"
    >
      <h1 class="font-bold pb-2">Contact form</h1>

      <p class="text-xs">A confermation message will be sent to your email.</p>
    </div>
    <ContactForm></ContactForm>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import ContactForm from "../components/ContactForm.vue";
</script>

<style scoped></style>
