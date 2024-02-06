import type { IUserResponse, IUser } from '@/types/user';
import { user as userMock } from '..';

export const userResponseSuccess: IUserResponse = {
  user: { ...userMock },
  status: 200,
};
export const userResponseError: IUserResponse = {
  user: {} as IUser,
  status: 404,
};
