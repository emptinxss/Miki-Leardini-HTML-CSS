<template>
  <section
    class="bg-burro md:h-full text-scuro min-h-400 flex md:pt-10"
    id="home"
  >
    <div class="mx-auto flex justify-center items-center">
      <div class="md:w-2/4">
        <h1 class="font-extralight text-3xl">Hi, I'm Miki.</h1>
        <p class="font-light text-base">
          A
          <span class="text-base font-semibold text-darkRed">{{
            words[counter]
          }}</span>
        </p>
        <a
          class="inline-block bg-darkRed text-xs px-3 py-1.5 mt-2 border rounded-md border-scuro text-burro hover:text-scuro hover:bg-burro"
          href="#about"
          >About me</a
        >
      </div>
      <img
        class="w-0 md:w-4/6 lg:w-5/6 grayscale"
        src="/assets/img/banner.png"
        alt="banner"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";

let counter = ref(0);
const words = ref([
  "WEB DEVELOPER",
  "INVESTOR",
  "STUDENT",
  "MINIMALIST",
  "TECH ADDICTED",
]);

onMounted(() => {
  setInterval(() => {
    if (counter.value < words.value.length - 1) {
      counter.value++;
    } else {
      counter.value = 0;
    }
  }, 1000);
});
</script>

<style scoped></style>
