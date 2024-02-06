import type { IUserResponse, IUser } from '@/types/user';
export const fetchUser = async (userLogin: string) => {
  let user: IUserResponse;

  try {
    const response = await fetch(`https://api.github.com/users/${userLogin}`);
    const data: IUser = await response.json();
    user = { user: data, status: response.status };
  } catch (error) {
    user = {
      user: {} as IUser,
      status: 404,
    };
  }
  return user;
};
