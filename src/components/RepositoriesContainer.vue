<script setup lang="ts">

import ReposHeader from './ReposHeader.vue';
import ReposFilter from './ReposFilterComponent.vue';
import ReposComponent from './ReposComponent.vue';

import { useUserStore } from '@/stores/user'
import { useReposStore } from '@/stores/repos'
const useUser = useUserStore()
const useRepos = useReposStore()


</script>

<template>
  <ReposHeader :name="useUser.userName" />

  <section class="h-[calc(100dvh-51.2px)] overflow-y-auto  relative" id="repos">

    <ReposFilter :filters="useRepos.filteredReposCount" @filter="useRepos.setFilter" class="sticky top-0 z-10" />
    <div class="max-w-7xl mx-auto overflow-y-auto py-8 ">
      <TransitionGroup name="fade" tag="div" class="grid gap-3 px-2  grid-cols-1 justify-items-stretch"
        id="repos-component">
        <ReposComponent v-for="repo in useRepos.filteredRepos" :key="repo.id" :repos="repo" />
      </TransitionGroup>
    </div>
  </section>
</template>
<style scoped>
#repos-component {
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
  align-items: stretch;

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
