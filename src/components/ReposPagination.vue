<script setup lang="ts">
const props = defineProps<{
  totalPages: string;
}>()
</script>
<template>
  <section class="w-full h-10 bg-header text-white flex items-center justify-center">
    <div class="md:max-w-5xl flex-1  flex justify-around items-center gap-5">
      <button> &lt;&lt; </button>
      <button> &lt;</button>
      <div class="flex justify-center items-center gap-4">
        <button>1</button>
        <span>&frasl;</span>
        <span>{{ props.totalPages }}</span>
      </div>
      <button> &gt; </button>
      <button> &gt;&gt; </button>
    </div>
  </section>
</template>
