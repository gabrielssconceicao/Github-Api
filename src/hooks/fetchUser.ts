import type { IUserResponse, IUser } from '@/types/user';
import { useLoadStore } from '@/stores/load';
export const fetchUser = async (userLogin: string): Promise<IUserResponse> => {
  const loadStore = useLoadStore();
  loadStore.setLoading();
  try {
    const response = await fetch(`https://api.github.com/users/${userLogin}`);
    const data = await response.json();
    return {
      status: response.status,
      user: data,
    };
  } catch (error: any) {
    return {
      status: error.status,
      user: {} as IUser,
    };
  } finally {
    loadStore.setNotLoading();
  }
};
