<script setup lang="ts">
import { user } from '@/mock'
import ReposHeader from './ReposHeader.vue';
</script>

<template>
  <ReposHeader :name="user.name || user.login" />
  <section class="h-dvh">

  </section>
</template>
