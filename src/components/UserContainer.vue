<script setup lang="ts">
import UserComponent from './UserComponent.vue';
import UserError from './UserError.vue';
import Loading from './LoadingComponent.vue';
import { computed, watch } from 'vue';

import { useUserStore } from '@/stores/user';
import { useLoadStore } from '@/stores/load';

const userStore = useUserStore()
const loadStore = useLoadStore()

const responseFulfilled = computed(() => userStore.githubUser.status === 200)
const responseError = computed(() => userStore.githubUser.status === 404)
watch(() => userStore.inputValue, async (newValue, oldValue) => {
  if (newValue !== oldValue) {
    await userStore.searchUser()
  }
})
</script>
<template>
  <section
    class="min-h-[calc(100dvh-149.5px)] md:min-h-[calc(100vh-88px)] bg-section flex justify-center items-center p-4">
    <UserComponent v-if="responseFulfilled && !loadStore.loading" :user="userStore.githubUser.user" />
    <UserError v-if="responseError && !loadStore.loading" />
    <Loading v-if="loadStore.loading" />
  </section>
</template>
