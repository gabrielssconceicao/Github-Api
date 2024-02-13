import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { IUserResponse } from '@/types/user';
import { fetchUser } from '@/hooks/fetchUser';
import { useReposStore } from './repos';
export const useUserStore = defineStore('user', () => {
  const githubUser = ref<IUserResponse>({} as IUserResponse);
  const inputValue = ref('');
  async function searchUser() {
    const reposStore = useReposStore();
    const data = await fetchUser(inputValue.value);
    githubUser.value = data;
    reposStore.setReposUrl(data.user.repos_url);
    await reposStore.getRepos();
  }

  function setInputValue(value: string) {
    inputValue.value = value;
  }

  return { githubUser, searchUser, setInputValue, inputValue };
});
