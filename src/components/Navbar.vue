<template>
  <nav class="bg-burro md:p-6 px-6 py-2 fixed z-50 md:static w-full">
    <div class="flex items-center justify-between md:justify-center">
      <div class="logo">
        <a href="/"
          ><img src="../assets/img/logo-dark.png" class="w-10 h-12"
        /></a>
      </div>
      <ul class="hidden md:block">
        <li class="list-none inline-block border-r-2 border-scuro ml-14">
          <a
            href="/#projects"
            class="menu-mobile block text-scuro text-xl font-medium mx-10 hover:text-darkRed"
            >PROJECTS</a
          >
        </li>
        <li class="list-none inline-block border-r-2 border-scuro">
          <a
            href="/#about"
            class="menu-mobile block text-scuro text-xl font-medium mx-10 hover:text-darkRed"
            >ABOUT</a
          >
        </li>
        <li class="list-none inline-block border-none">
          <a
            href="/#contact"
            class="menu-mobile block text-scuro text-xl font-medium mx-10 hover:text-darkRed"
            >CONTACT</a
          >
        </li>
      </ul>

      <!-- menu mobile -->
      <div @click="toggle" class="md:hidden block z-30">
        <font-awesome-icon
          icon="fa-solid fa-bars"
          v-show="!mobile"
          class="text-xl"
        />
        <font-awesome-icon
          icon="fa-solid fa-xmark "
          v-if="mobile"
          class="text-xl"
        />
      </div>
    </div>
    <div
      v-show="mobile"
      class="bg-burro w-full z-10 left-0 top-0 fixed h-full text-center pt-20 md:hidden"
      v-motion-slide-visible-left
    >
      <ul>
        <li>
          <a
            @click="toggle"
            href="/#home"
            class="inline-block text-xl font-medium my-5"
            >HOME</a
          >
        </li>
        <li>
          <a
            @click="toggle"
            href="/#projects"
            class="inline-block text-xl my-5 font-medium"
            >PROJECTS</a
          >
        </li>
        <li>
          <a
            @click="toggle"
            href="/#about"
            class="inline-block text-xl my-5 font-medium"
            >ABOUT</a
          >
        </li>
        <li>
          <a
            @click="toggle"
            href="/#contact"
            class="inline-block text-xl my-5 font-medium"
            >CONTACT</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const mobile = ref(false);

const toggle = () => {
  mobile.value = !mobile.value;
  if (mobile.value === true) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
  }
};
</script>

<style scoped>
.prova {
  left: 0;
  transition: 2s ease;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideOutFromLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
