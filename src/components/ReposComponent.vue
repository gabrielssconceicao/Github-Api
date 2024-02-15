<script setup lang="ts">
import { type IRepos } from '@/types/repos'
import { getLangColor } from '@/helpers/getLangColor'
const props = defineProps<{ repos: IRepos }>()
</script>
<template>
  <div :style="{ '--lang-color': getLangColor(props.repos.language || '') }" id="repo">
    <h3 class="text-center p-1 font-bold font-serif break-all">{{ props.repos.name }}</h3>
    <p class="text-center font-mono text-base break-words mt-3 mb-2" v-if="props.repos.description"
      aria-label="repo-description">{{
        props.repos.description }}</p>
    <div class="flex justify-around p-2">
      <p class="px-2 py-1 font-sans border-2 border-[var(--lang-color)] text-[var(--lang-color)]"
        aria-label="repo-language">{{ props.repos.language || 'No Language'
        }}
      </p>
      <a :href="props.repos.html_url" target="_blank"
        class="border-white border-2 px-2 py-1 text-white transition-colors hover:border-[var(--lang-color)] hover:text-[var(--lang-color)]">See
        Repo</a>
    </div>
  </div>
</template>
<style scoped>
#repo {
  @apply bg-header text-white p-3 relative max-w-[300px] min-w-[250px] rounded-xl shadow-md flex flex-col justify-between before:w-2 before:absolute before:bg-[var(--lang-color)] before:top-0 before:left-0 before:bottom-0 before:rounded-tl-xl before:rounded-bl-xl md:text-xl md:w-[500px]
}
</style>
