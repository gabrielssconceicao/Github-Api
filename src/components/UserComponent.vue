<script setup lang="ts">
import { user as userMock } from '@/assets/mock'
import type { IUser } from '@/types/user';
import { ref } from 'vue';
import type { RouterLink } from 'vue-router';
const user = ref<IUser>(userMock)
</script>
<template>
  <section class="h-[calc(100dvh-149.5px)] md:h-[calc(100vh-88px)] bg-section flex justify-center items-center p-4  ">
    <div class="
      container max-w-[500px]
      flex flex-col items-center justify-between gap-3
    bg-white p-3 rounded-lg shadow-md shadow-[#00000088]
      relative
      after:absolute after:h-2 after:w-full after:bottom-[0] after:rounded-b-lg after:bg-primary-contrast ">
      <div class="flex flex-col items-center justify-between gap-3" id="user-info
      ">
        <img :src="user.avatar_url" :alt="`${user.login} avatar`" class="rounded-full w-28 border-4 border-primary"
          aria-label="avatar" />
        <h2 v-if="user.name" class="font-bold font-sans text-xl tracking-wider" aria-label="user-name">{{ user.name }}
        </h2>
        <a class="font-mono font-semibold text-lg bg-primary-contrast flex items-center gap-2 p-1 rounded-md"
          :href="user.html_url" target="_blank">
          <img src="@/assets/images/github-logo.svg" alt="github-logo" class="w-6" aria-label="github-logo">
          <span class="text-white" aria-label="github-url">{{ user.login }}</span></a>
        <p v-if="user.bio" class="font-mono break-before-auto" aria-label="bio">{{ user.bio }}</p>
      </div>

      <div class="user-stats flex flex-col gap-3 w-[50%]">
        <div class="follows flex justify-around gap-2 flex-1">
          <p class=" stat" aria-label="followers">Followers <span>{{ user.followers }}</span></p>
          <p class="stat" aria-label="following">Following <span>{{ user.following }}</span></p>
        </div>
        <div class="flex justify-around gap-2 flex-1">
        </div>
        <p class="stat flex-1" v-if="user.location" aria-label="location">Location
          <span>{{ user.location }}</span>
        </p>
      </div>

      <RouterLink to="/repos"
        class="bg-primary p-2 w-full text-center text-white hover:bg-primary-contrast font-mono rounded-md">View
        Repositories</RouterLink>

    </div>


  </section>
</template>
