<script setup lang="ts">
import { type ILang } from '@/types/langCount';
const props = defineProps<{ langs: ILang[] }>()
</script>
<template>
  <select name="repositories" id="repositories" class="w-full p-2 bg-primary text-white">
    <option value="">--All Languages--</option>
    <option v-for="lang in props.langs" :key="lang.name" :value="lang.name">
      <span>{{ lang.name }}</span><span>({{ lang.count }})</span>
    </option>
  </select>
</template>
