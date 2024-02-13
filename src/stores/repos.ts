import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import { type IRepos } from '@/types/repos';

import { langSeparator } from '@/helpers/langSeparator';
import { useLoadStore } from './load';
export const useReposStore = defineStore('repos', () => {
  const repos = ref<IRepos[]>([]);
  const reposUrl = ref('');
  const filterValue = ref('');

  function setRepos(reposValue: IRepos[]) {
    repos.value = reposValue;
  }

  function setReposUrl(url: string) {
    reposUrl.value = url;
  }
  async function getRepos() {
    const useLoad = useLoadStore();
    useLoad.setLoading();
    try {
      const response = await fetch(reposUrl.value);
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      setRepos([]);
    } finally {
      useLoad.setNotLoading();
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
  return {
    filteredRepos,
    getRepos,
    filteredReposCount,
    setFilter,
    setReposUrl,
  };
});
