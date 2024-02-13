<script setup lang="ts">
import type { IUser } from '@/types/user';
import type { RouterLink } from 'vue-router';
const props = defineProps<{ user: IUser }>()
</script>
<template>
  <section class="
      container
      flex flex-col items-center justify-between gap-3
    bg-white p-3 rounded-lg shadow-md shadow-[#00000088]
      relative
      after:absolute after:h-2 after:w-full after:bottom-[0] after:rounded-b-lg after:bg-primary-contrast" id="user-info
      ">
    <div class="flex flex-col items-center justify-between gap-3">
      <img :src="props.user.avatar_url" :alt="`${props.user.login} avatar`"
        class="rounded-full w-28 border-4 border-primary" aria-label="avatar" />
      <h2 v-if="props.user.name" class="font-bold font-sans text-xl tracking-wider" aria-label="user-name">{{
        props.user.name }}
      </h2>
      <a class="font-mono font-semibold text-lg bg-primary-contrast flex items-center gap-2 p-1 rounded-md"
        :href="props.user.html_url" target="_blank" aria-label="user-github-link">
        <img src="@/assets/images/github-logo.svg" alt="github-logo" class="w-6" aria-label="github-logo">
        <span class="text-white" aria-label="user-github-name">{{ props.user.login }}</span></a>
      <p v-if="props.user.bio" class="font-mono break-before-auto" aria-label="user-bio">{{ props.user.bio }}</p>
    </div>

    <div class="flex justify-around flex-wrap gap-3 w-[75%] ">
      <p class=" stat" aria-label="user-followers">
        Followers <span class="font-bold">{{ props.user.followers }}</span>
      </p>
      <p class="stat" aria-label="user-following">
        Following <span class="font-bold">{{ props.user.following }}</span>
      </p>
      <p class="stat" aria-label="user-repos">
        Public Repos <span class="font-bold">{{ props.user.public_repos }}</span>
      </p>
    </div>

    <RouterLink v-if="props.user.public_repos" aria-label="user-repos-link" to="/repos"
      class="bg-primary p-2 w-full text-center text-white hover:bg-primary-contrast font-mono rounded-md">
      View Repositories
    </RouterLink>

  </section>
</template>

<style scoped>
.stat {
  @apply bg-primary text-sm rounded-lg p-2 text-white flex flex-col items-center justify-center gap-1
}
</style>
