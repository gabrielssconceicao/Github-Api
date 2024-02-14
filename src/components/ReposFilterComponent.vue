<script setup lang="ts">
import type { ILang } from '@/types/langCount';
import { getLangColor } from '@/helpers/getLangColor';
import { ref } from 'vue'

const props = defineProps<{ filters: ILang[] }>()
const emit = defineEmits(['filter'])
const filterValue = ref('')

const setFilter = (value: string) => {
  filterValue.value = value
  emit('filter', filterValue.value)
}
const isSelected = (value: string) => {
  return filterValue.value === value ? 'selected' : ''
}

</script>
<template>
  <div
    class="w-full grid grid-cols-3 gap-2 p-1 sm:grid-cols-5 md:flex md:flex-wrap md:justify-around md:gap-2 bg-section">
    <button @click="setFilter('')" class="clear">
      <span>Clear</span>
    </button>
    <button v-for="lang in props.filters" :key="lang.name" :value="lang.name" @click="setFilter(lang.name)"
      :style="{ '--text-color': getLangColor(lang.name), '--bg-color': '#1f1f1f' }" :class="isSelected(lang.name)">
      <span>{{ lang.name }}</span>
      <span>{{ lang.count }}</span>
    </button>
  </div>
</template>
<style scoped>
button {
  @apply p-1 flex flex-row justify-around items-center rounded-2xl md:flex-1 bg-[var(--bg-color)] hover:bg-[var(--text-color)] transition-colors
}

button span {
  @apply text-sm font-mono font-bold md:text-base px-1 text-[var(--text-color)]
}

button:hover span, button.selected span {
  @apply text-[var(--bg-color)]
}

button.selected {
  @apply bg-[var(--text-color)]
}

button.clear {
  @apply bg-white
}
</style>
