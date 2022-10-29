<template>
  <div class="max-w-xs m-4 bg-white rounded-lg shadow-md">
    <img
      class="rounded-t-lg object-cover h-48 border-b border-gray-500"
      :src="image"
    />
    <div class="px-5 py-3">
      <h5 class="mb-2 md:text-2xl text-xl font-bold tracking-tight text-scuro">
        {{ header }}
      </h5>

      <p class="mb-3 text-base font-normal text-gray-700">
        {{ description }}
      </p>
      <div class="flex justify-between">
        <div>
          <MyButton
            class="inline-block bg-scuro text-xs px-3 py-1.5 mt-2 border rounded-md border-scuro text-burro hover:text-scuro hover:bg-burro"
            label="Github"
            :adress="adressGit"
          >
          </MyButton>
        </div>

        <div>
          <MyButton
            class="inline-block bg-darkRed text-xs px-3 py-1.5 mt-2 border rounded-md border-scuro text-burro hover:text-scuro hover:bg-burro"
            :style="{ display: displaySite }"
            label="Try it!"
            :adress="adressSite"
          >
          </MyButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyButton from "./myButton.vue";

const props = defineProps({
  image: String,
  header: String,
  description: String,
  adressGit: String,
  adressSite: String,
  displaySite: String,
});
</script>

<style scoped></style>
