import { describe, it, expect } from 'vitest';
import { useUserStore } from '../user';
import { userResponseError, userResponseSuccess } from '@/mock/__tests__/user';
describe('userStore', () => {
  it('should init with an empty user', () => {
    const userStore = useUserStore();
    expect(userStore.githubUser.status).toBe(undefined);
    expect(userStore.githubUser.user).toBe(undefined);
    expect(userStore.inputValue).toBe('');
    const { githubUser, inputValue } = userStore;
    expect({ githubUser, inputValue }).toMatchSnapshot();
  });

  it('should set input value', () => {
    const userStore = useUserStore();
    userStore.setInputValue('teste');
    expect(userStore.inputValue).toBe('teste');
    expect(userStore.githubUser.status).toBe(undefined);
    expect(userStore.githubUser.user).toBe(undefined);
    const { githubUser, inputValue } = userStore;
    expect({ githubUser, inputValue }).toMatchSnapshot();
  });

  it('should search user ', async () => {
    const userStore = useUserStore();
    userStore.setInputValue('resolveTest');
    await userStore.searchUser();
    expect(userStore.githubUser.status).toBe(userResponseSuccess.status);
    expect(userStore.githubUser.user).toEqual(userResponseSuccess.user);
    const { githubUser, inputValue } = userStore;
    expect({ githubUser, inputValue }).toMatchSnapshot();
  });

  it('should search user error', async () => {
    const userStore = useUserStore();
    userStore.setInputValue('rejectTest');
    await userStore.searchUser();
    expect(userStore.githubUser.status).toBe(userResponseError.status);
    expect(userStore.githubUser.user).toEqual(userResponseError.user);
    const { githubUser, inputValue } = userStore;
    expect({ githubUser, inputValue }).toMatchSnapshot();
  });
});
