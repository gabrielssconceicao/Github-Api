<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import UserComponent from '@/components/UserComponent.vue';
import { user } from '@/assets/mock'
</script>
<template>
  <HeaderComponent />
  <UserComponent :user="user" />
</template>
