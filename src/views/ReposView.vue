<script setup lang="ts">
import { onMounted } from 'vue'
import RepositoriesContainer from '@/components/RepositoriesContainer.vue';
import Loading from '@/components/LoadingComponent.vue'
import { useLoadStore } from '@/stores/load'
import { useReposStore } from '@/stores/repos'
const useLoad = useLoadStore()
const useRepos = useReposStore()

onMounted(() => useRepos.getRepos())
</script>
<template>
  <RepositoriesContainer v-if="!useLoad.loading" />
  <section v-if="useLoad.loading" class="w-screen h-dvh flex justify-center items-center">
    <Loading />
  </section>
</template>


