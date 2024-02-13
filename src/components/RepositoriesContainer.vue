<script setup lang="ts">
import { computed, onMounted } from 'vue'


import ReposHeader from './ReposHeader.vue';
// import ReposFilter from './ReposFilterComponent.vue';
import ReposComponent from './ReposComponent.vue';
import ReposPagination from './ReposPagination.vue';


import { useUserStore } from '@/stores/user'
import { useReposStore } from '@/stores/repos'
const useUser = useUserStore()
const useRepos = useReposStore()
const userName = computed(() => useUser.githubUser.user.name || useUser.githubUser.user.login)


onMounted(async () => await useRepos.getRepos())
</script>

<template>
  <ReposHeader :name="userName" />

  <section class="h-[calc(100dvh-51.2px-40px)] overflow-y-auto  relative" id="repos">
    <!--
    <ReposFilter :filters="langsRepos" @filter="getFilter" class="sticky top-0 z-10" /> -->
    <div class="max-w-7xl mx-auto overflow-y-auto py-8 ">
      <TransitionGroup name="fade" tag="div" class="grid gap-3 place-items-center" id="repos">
        <ReposComponent v-for="repo in useRepos.repos" :key="repo.id" :repos="repo" />
      </TransitionGroup>
    </div>
  </section>
  <ReposPagination total-pages="3" />
</template>
<style scoped>
#repos {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
  justify-items: stretch;
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
