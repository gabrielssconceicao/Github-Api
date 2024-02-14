<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router'
import RepositoriesContainer from '@/components/RepositoriesContainer.vue';
import Loading from '@/components/LoadingComponent.vue'
import NotFound from './NotFoundView.vue';
import { useLoadStore } from '@/stores/load'
import { useReposStore } from '@/stores/repos'
import { useUserStore } from '@/stores/user'
const useUser = useUserStore()
const useLoad = useLoadStore()
const useRepos = useReposStore()

onBeforeMount(async () => {
  const router = useRoute()
  const params = router.params;
  if (Object.keys(useUser.githubUser).length === 0 && params['login']) {
    useUser.setInputValue(params['login'] as string)
    await useUser.searchUser()
  }
  await useRepos.getRepos()

})
</script>
<template>
  <RepositoriesContainer v-if="!useLoad.loading && useUser.githubUser.status === 200" />
  <NotFound v-if="!useLoad.loading && useUser.githubUser.status === 404" />
  <section v-if="useLoad.loading" class="w-screen h-dvh flex justify-center items-center">
    <Loading />
  </section>
</template>


