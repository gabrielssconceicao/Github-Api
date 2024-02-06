<script setup lang="ts">
import { computed } from 'vue';
import UserComponent from '@/components/UserComponent.vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore()

const responseFulfilled = computed(() => userStore.githubUser.status === 200)
const responseError = computed(() => userStore.githubUser.status === 404)
</script>
<template>
  <section class="h-[calc(100dvh-149.5px)] md:h-[calc(100vh-88px)] bg-section flex justify-center items-center p-4">
    <UserComponent v-if="responseFulfilled" :user="userStore.githubUser.user" />
    <h5 v-if="responseError">No user found</h5>
  </section>
</template>
