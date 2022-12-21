<template>
  <section class="text-scuro bg-burro pt-4" id="about">
    <h2
      class="text-center text-3xl font-bold mb-10 pb-2"
      v-motion-slide-visible-once-left
    >
      About me
    </h2>
    <div class="flex flex-wrap align-middle justify-between md:text-center">
      <div class="px-5 pb-3 text w-full" v-motion-slide-visible-once-left>
        <p>
          Hi, I'm <strong>Miki Leardini</strong>, an italian guy. <br />
          I like the minimal style and I care about <b>details</b>. <br />
          <br />
          I'm always informed about the latest news, whether it's from general
          culture or from the tech world, for this reason I also
          <b>invest</b> in shares market and cryptocurrency. <br />
          <b>Respect</b> is essential for me, especially in the workplace.
          <br />
          <br />
          I am currently studying web development at
          <b
            ><a href="https://www.start2impact.it/" target="_blank"
              >start2impact</a
            ></b
          >, after that, I will continue my journey through other programming
          languages, we'll see where this takes me.
        </p>
        <hr class="mt-3" />
      </div>
    </div>
    <div class="text-center">
      <h1 class="text-3xl font-bold pt-2" v-motion-slide-visible-once-left>
        Skills
      </h1>
      <div class="text-2xl mt-3 pb-3">
        <font-awesome-icon
          icon="fa-brands fa-html5"
          class="m-2"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.2 }"
          :delay="2000"
        />
        <font-awesome-icon
          icon="fa-brands fa-css3"
          class="m-2"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.2 }"
          :delay="2200"
        />
        <font-awesome-icon
          icon="fa-brands fa-js"
          class="m-2"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.2 }"
          :delay="2400"
        />
        <font-awesome-icon
          icon="fa-brands fa-vuejs"
          class="m-2"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.2 }"
          :delay="2600"
        />
        <font-awesome-icon
          icon="fa-brands fa-php"
          class="m-2"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.2 }"
          :delay="2800"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
