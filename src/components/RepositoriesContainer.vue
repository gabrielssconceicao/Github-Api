<script setup lang="ts">
import { computed, ref } from 'vue'
import { user, repos } from '@/mock'

import ReposHeader from './ReposHeader.vue';
import ReposFilter from './ReposFilterComponent.vue';
import ReposComponent from './ReposComponent.vue';
import ReposPagination from './ReposPagination.vue';
import { langSeparator } from '@/helpers/langSeparator';

const filterValue = ref('');
const langsRepos = computed(() => langSeparator(repos));
//Fix filter for Java and JavaScript
const filteredRepos = computed(() => filterValue.value ? repos.filter(repo => repo.language === filterValue.value) : repos);

const getFilter = (value: string) => {
  filterValue.value = value

}
</script>

<template>
  <ReposHeader :name="user.name || user.login" />

  <section class="min-h-[calc(100dvh-51.2px-40px)] max-h-[calc(100dvh-51.2px-40px)] overflow-y-auto  relative" id="repos">
    <ReposFilter :filters="langsRepos" @filter="getFilter" class="sticky top-0 z-10" />
    <div class="max-w-7xl mx-auto overflow-y-auto py-8 ">
      <TransitionGroup name="fade" tag="div" class="grid gap-3 place-items-center" id="repos">
        <ReposComponent v-for="repo in filteredRepos" :key="repo.id" :repos="repo" />
      </TransitionGroup>
    </div>
  </section>
  <ReposPagination total-pages="3" />
</template>
<style scoped>
#repos {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
