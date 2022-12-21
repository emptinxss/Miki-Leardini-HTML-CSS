<template>
  <a :href="adress" target="_blank"> {{ label }}</a>
</template>

<script>
export default {
  props: {
    label: String,
    adress: String,
  },
};
</script>

<style scoped></style>
