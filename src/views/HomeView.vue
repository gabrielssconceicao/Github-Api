<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import UserContainer from '@/components/UserContainer.vue';
import UserComponent from '@/components/UserComponent.vue';
import UserError from '@/components/UserError.vue';
import Loading from '@/components/LoadingComponent.vue';
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
  <HeaderComponent />
  <UserContainer>
    <UserComponent v-if="responseFulfilled && !loadStore.loading" :user="userStore.githubUser.user" />
    <UserError v-if="responseError && !loadStore.loading" />
    <Loading v-if="loadStore.loading" />
  </UserContainer>
</template>
