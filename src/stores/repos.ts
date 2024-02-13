import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import { type IRepos } from '@/types/repos';
import { useUserStore } from './user';
import { langSeparator } from '@/helpers/langSeparator';
export const useReposStore = defineStore('repos', () => {
  const repos = ref<IRepos[]>([]);
  const useUser = useUserStore();
  const filterValue = ref('');

  function setRepos(reposValue: IRepos[]) {
    repos.value = reposValue;
  }
  async function getRepos() {
    try {
      const response = await fetch(useUser.githubUser.user.repos_url);
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      setRepos([]);
    }
  }

  const filteredRepos = computed(() => {
    return filterValue.value !== ''
      ? repos.value.filter((repo) => repo.language === filterValue.value)
      : repos.value;
  });

  const filteredReposCount = computed(
    () => repos.value && langSeparator(repos.value),
  );

  const setFilter = (value: string) => {
    filterValue.value = value;
  };
  return { filteredRepos, getRepos, filteredReposCount, setFilter };
});
