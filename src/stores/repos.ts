import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type IRepos } from '@/types/repos';
import { useUserStore } from './user';
export const useReposStore = defineStore('repos', () => {
  const repos = ref<IRepos[]>([]);
  const useUser = useUserStore();

  async function getRepos() {
    try {
      const response = await fetch(useUser.githubUser.user.repos_url);
      const data = await response.json();
      repos.value = data;
    } catch (error) {
      repos.value = [];
    }
  }
  return { repos, getRepos };
});
