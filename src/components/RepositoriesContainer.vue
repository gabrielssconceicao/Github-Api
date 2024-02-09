<script setup lang="ts">
import { computed } from 'vue'
import { user, repos } from '@/mock'
import ReposHeader from './ReposHeader.vue';
import ReposSelect from './ReposSelectComponent.vue';
import { langSeparator } from '@/helpers/langSeparator'
const langsRepos = computed(() => langSeparator(repos))
</script>

<template>
  <ReposHeader :name="user.name || user.login" />
  <ReposSelect :langs="langsRepos" class="md:hidden" />
  <section class="h-[calc(100dvh-51.2px)]">
    Repos
  </section>
</template>
