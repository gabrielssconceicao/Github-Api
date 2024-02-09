<script setup lang="ts">
import { computed, ref } from 'vue'
import { user, repos } from '@/mock'
import ReposHeader from './ReposHeader.vue';

import ReposFilter from './ReposFilterComponent.vue';
import { langSeparator } from '@/helpers/langSeparator'

const filterValue = ref('')
const langsRepos = computed(() => langSeparator(repos))
const getFilter = (value: string) => {
  filterValue.value = value
  console.log(value)
}
</script>

<template>
  <ReposHeader :name="user.name || user.login" />

  <ReposFilter :filters="langsRepos" @filter="getFilter" />
  <section class="h-[calc(100dvh-51.2px)]">
    Repos - {{ filterValue }}
  </section>
</template>
