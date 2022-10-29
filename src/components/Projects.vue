<template>
  <section class="pt-10 bg-scuro" id="projects">
    <h2 class="text-3xl text-center font-bold text-burro">Projects</h2>
    <div class="text-burro text-center pt-10">
      <font-awesome-icon
        icon="fa-solid fa-angles-down"
        class="animate-bounce text-4xl"
      />
    </div>
    <div class="flex justify-center pt-2">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 m-4">
        <SingleProject
          header="Personal website portfolio"
          description="That's my first project i ever made, updated with Vue js."
          image="../public/assets/img/website.png"
          adressGit="https://github.com/emptinxss/emptinxss.github.io"
          adressSite="https://emptinxss.github.io/"
          displaySite="none"
        ></SingleProject>
        <SingleProject
          header="Books finder"
          description="Made with javascript, my first approach of API, json response and data."
          image="/assets/img/books.png"
          adressGit="https://github.com/emptinxss/Books-finder"
          adressSite="https://mlbooksfinder.netlify.app/"
          v-motion-slide-visible-once-bottom
        ></SingleProject>
        <SingleProject
          header="Tic tac toe "
          description="My first ever Vue js project. A simple tic tac toe game with names and history."
          image="/assets/img/tris.png"
          adressGit="https://github.com/emptinxss/tic-tac-toe"
          adressSite="https://mltictactoe.netlify.app/"
          v-motion-slide-visible-once-bottom
        ></SingleProject>
        <SingleProject
          header="Mobile e-commerce"
          description="An e-commerce mobile app for a vegan meat company. Made with Vue js."
          image="/assets/img/kreas.png"
          adressGit="https://github.com/emptinxss/kreas"
          adressSite="https://kreas.netlify.app/"
          v-motion-slide-visible-once-bottom
        ></SingleProject>
        <SingleProject
          header="Social media REST API"
          description="REST API with PHP & MySQL Database. I also created a front-end for this project."
          image="/assets/img/voci.png"
          adressGit="https://github.com/emptinxss/Voci"
          adressSite="http://voci-media.herokuapp.com/posts"
          v-motion-slide-visible-once-bottom
        ></SingleProject>
      </div>
    </div>
  </section>
</template>

<script setup>
import SingleProject from "./SingleProject.vue";
</script>

<style scoped></style>
