<script setup lang="ts">
import { computed, ref } from 'vue'
import { user, repos } from '@/mock'
import ReposHeader from './ReposHeader.vue';

import ReposFilter from './ReposFilterComponent.vue';
import { langSeparator } from '@/helpers/langSeparator';

const filterValue = ref('');
const langsRepos = computed(() => langSeparator(repos));
const filteredRepos = computed(() => repos.filter(repo => repo.language.includes(filterValue.value)));

const getFilter = (value: string) => {
  filterValue.value = value
  console.log(value)
}
</script>

<template>
  <ReposHeader :name="user.name || user.login" />

  <ReposFilter :filters="langsRepos" @filter="getFilter" />
  <section class="h-[calc(100dvh-51.2px)]">
    <div v-for="repo in filteredRepos" :key="repo.id">
      <h3>{{ repo.name }}</h3>
      <p>{{ repo.description }}</p>
      <div>
        <p>{{ repo.language }}</p>
        <a :href="repo.html_url" target="_blank">See Repo</a>
      </div>
    </div>
  </section>
</template>
