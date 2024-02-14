<script setup lang="ts"></script>
<template>
  <section class="w-screen h-dvh flex flex-col gap-4 justify-center items-center">
    <h2 class="text-3xl md:text-5xl font-bold text-white">Not Found</h2>
    <RouterLink to="/" class="text-white font-bold border-2 border-white p-2 text-base md:text-3xl">Go Back</RouterLink>
  </section>
</template>
<style scoped>
h2 {
  text-shadow: 2px 1px 2px #ff0000, 2px -1px 2px #0000ff;
}
</style>
