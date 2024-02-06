import type { IUserResponse, IUser } from '@/types/user';
export const fetchUser = async (userLogin: string): Promise<IUserResponse> => {
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
  }
};
