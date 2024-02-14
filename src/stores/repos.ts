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

  const setFilter = (value: string) => {
    filterValue.value = value;
  };

  function setReposUrl(url: string) {
    reposUrl.value = url;
  }
  async function getRepos() {
    const useLoad = useLoadStore();
    useLoad.setLoading();
    try {
      const response = await fetch(reposUrl.value);
      const data: IRepos[] = await response.json();
      const dataWithoutNull = data.map((e) => {
        if (e.language) return e;
        return { ...e, language: 'No Language' };
      });
      setRepos(dataWithoutNull);
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

  return {
    filteredRepos,
    getRepos,
    filteredReposCount,
    setFilter,
    setReposUrl,
    setRepos,
    repos,
    reposUrl,
    filterValue,
  };
});
