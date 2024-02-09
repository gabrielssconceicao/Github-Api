<script setup lang="ts">
import { computed } from 'vue'
import { user, repos } from '@/mock'
import ReposHeader from './ReposHeader.vue';

import ReposFilter from './ReposFilterComponent.vue';
import { langSeparator } from '@/helpers/langSeparator'


const langsRepos = computed(() => langSeparator(repos))
</script>

<template>
  <ReposHeader :name="user.name || user.login" />

  <ReposFilter :filters="langsRepos" />
  <section class="h-[calc(100dvh-51.2px)]">
    Repos
  </section>
</template>
