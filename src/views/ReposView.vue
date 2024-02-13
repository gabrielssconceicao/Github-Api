<script setup lang="ts">
import RepositoriesContainer from '@/components/RepositoriesContainer.vue';
import Loading from '@/components/LoadingComponent.vue'
import { useLoadStore } from '@/stores/load'
const useLoad = useLoadStore()
</script>
<template>
  <RepositoriesContainer v-if="!useLoad.loading" />
  <Loading v-if="useLoad.loading" />
</template>


