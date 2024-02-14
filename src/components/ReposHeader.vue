<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<template>
  <header class="bg-header p-2 flex items-center text-white">
    <RouterLink to="/" class="w-14 border-white border-2 p-1  flex justify-center items-center">Back
    </RouterLink>
    <p class="flex-1 text-center">
      <span class="font-bold font-mono text-xl text-primary">{{ props.name }}</span>
      Repos
    </p>
  </header>
</template>
