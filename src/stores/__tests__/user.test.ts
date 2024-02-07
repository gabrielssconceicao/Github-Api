import { describe, it, beforeEach, expect } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useUserStore } from '../user';
import { userResponseError, userResponseSuccess } from '@/mock/__tests__/user';
describe('userStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should init with an empty user', () => {
    const userStore = useUserStore();
    expect(userStore.githubUser.status).toBe(undefined);
    expect(userStore.githubUser.user).toBe(undefined);
    expect(userStore).toMatchSnapshot();
  });

  it('should search user ', async () => {
    const userStore = useUserStore();
    await userStore.searchUser('resolveTest');
    expect(userStore.githubUser.status).toBe(userResponseSuccess.status);
    expect(userStore.githubUser.user).toEqual(userResponseSuccess.user);
    expect(userStore).toMatchSnapshot();
  });

  it('should search user error', async () => {
    const userStore = useUserStore();
    await userStore.searchUser('rejectTest');
    expect(userStore.githubUser.status).toBe(userResponseError.status);
    expect(userStore.githubUser.user).toEqual(userResponseError.user);
    expect(userStore).toMatchSnapshot();
  });
});
