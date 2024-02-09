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
  <div class="w-full grid grid-cols-2 gap-2 md:flex md:justify-around md:flex-wrap  p-2">
    <button v-for="filter in  props.filters " :key="filter.name" :value="filter.name" :class="isSelected(filter.name)"
      :style="{ color: getLangColor(filter.name), '--hover-bg-color': getLangColor(filter.name), '--hover-text-color': '#111111' }"
      @click="() => setFilter(filter.name)">
      <span>{{ filter.name }}</span>
      <span>{{ filter.count }}</span>
    </button>
    <button :style="{ color: '#ffffff', '--hover-bg-color': '#222222' }" value="" @click="() => setFilter('')">
      <span>
        Clear
        Filter
      </span>
    </button>
  </div>
</template>
<style scoped>
button {
  @apply font-mono text-sm p-2 rounded-md flex flex-row items-center justify-center gap-1 bg-zinc-700 transition-colors flex-1 flex justify-between;
}

button:hover,
button.selected {
  background-color: var(--hover-bg-color);
}

button:hover span,
button.selected span {
  color: var(--hover-text-color);
}
</style>
