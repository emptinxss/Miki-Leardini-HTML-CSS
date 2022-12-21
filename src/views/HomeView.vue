<template>
  <div>
    <div
      class="fixed w-auto bg-scuro right-4 bottom-3 text-center z-50 border border-burro rounded-md cursor-pointer"
      v-show="showArrow"
      @click="goUp"
    >
      <font-awesome-icon
        icon="fa-solid fa-angle-up"
        class="text-burro block text-center px-1.5 py-1"
      />
    </div>

    <Navbar></Navbar>
    <Home></Home>
    <Projects></Projects>
    <About></About>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Home from "../components/Home.vue";
import Projects from "../components/Projects.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
import { ref } from "@vue/reactivity";

const showArrow = ref(false);

const showArr = (e) => {
  if (scrollY > 600) {
    showArrow.value = true;
  } else {
    showArrow.value = false;
  }
};

const goUp = () => {
  window.scrollTo(0, 0);
};

document.addEventListener("scroll", showArr);
</script>

<style scoped></style>
