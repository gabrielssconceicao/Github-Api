<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import UserContainer from '@/components/UserContainer.vue';
import UserComponent from '@/components/UserComponent.vue';
import UserError from '@/components/UserError.vue';
import { computed } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore()
const responseFulfilled = computed(() => userStore.githubUser.status === 200)
const responseError = computed(() => userStore.githubUser.status === 404)
</script>
<template>
  <HeaderComponent />
  <UserContainer>
    <UserComponent v-if="responseFulfilled" :user="userStore.githubUser.user" />
    <UserError v-if="responseError" />
  </UserContainer>
</template>
