<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const inputValue = ref('');

const handleSubmit = () => {
  userStore.searchUser(inputValue.value)
}
</script>
<template>
  <header class="flex flex-col bg-header py-4 gap-3 md:flex-row md:justify-between md:px-4">
    <div class="flex justify-center items-center gap-4 ">
      <img src="@/assets/images/github-logo.svg" alt="GitHub Logo" class="w-12" aria-label="GitHub Logo" />
      <h1 class="font-serif font-bold text-xl text-gray-300 tracking-wide">GitHub Finder</h1>
    </div>
    <form class="flex items-stretch gap-3 px-3 py-2 md:flex-1 md:justify-end" autocomplete="off"
      @submit.prevent="handleSubmit">
      <input type="text" name="search" id="search" placeholder="Search GitHub users" aria-label="Search"
        class="flex-1 rounded-3xl px-3 py-2 font-mono font-medium tracking-wider  focus-visible:outline-none md:flex-1 md:max-w-[60%]"
        v-model="inputValue">
      <button type="submit" class="p-2 w-9 h-9 rounded-full bg-primary">
        <img src="@/assets/images/search.svg" alt="Search image" />
      </button>
    </form>
  </header>
</template>
