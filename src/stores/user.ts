import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { IUserResponse } from '@/types/user';
import { fetchUser } from '@/hooks/fetchUser';
export const useUserStore = defineStore('counter', () => {
  const githubUser = ref<IUserResponse>({} as IUserResponse);

  async function searchUser(userLogin: string) {
    const data = await fetchUser(userLogin);
    githubUser.value = data;
  }

  return { githubUser, searchUser };
});
