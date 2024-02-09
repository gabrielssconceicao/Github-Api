<script setup lang="ts">
import type { ILang } from '@/types/langCount';
import { getLangColor } from '@/helpers/getLangColor'

const props = defineProps<{ filters: ILang[] }>()
</script>
<template>
  <div class="w-full grid grid-cols-2 gap-2 md:flex md:justify-around md:flex-wrap  p-2">
    <button v-for="filter in  props.filters " :key="filter.name" :value="filter.name"
      :style="{ color: getLangColor(filter.name), '--hover-bg-color': getLangColor(filter.name), '--hover-text-color': '#111111' }">
      <span>{{ filter.name }}</span>
      <span>{{ filter.count }}</span>
    </button>
    <button :style="{ color: '#ffffff', '--hover-bg-color': '#222222' }">
      <span>
        Clear
        Filter
      </span>
    </button>
  </div>
</template>
<style scoped>
button {
  @apply font-mono text-sm p-2 rounded-md flex flex-row items-center justify-center gap-1 bg-zinc-700 transition-colors md:flex-1 md:flex md:justify-between;
}

button:hover {
  background-color: var(--hover-bg-color);
}

button:hover span {
  color: var(--hover-text-color);
}
</style>
