import { describe, it, expect } from 'vitest';
import { fetchUser } from '../fetchUser';
import { userResponseError, userResponseSuccess } from '@/mock/__tests__/user';
describe('fetchUser()', () => {
  it('should fetch user data successively', async () => {
    const response = await fetchUser('resolveTest');
    expect(response.status).toEqual(userResponseSuccess.status);
    expect(response.user).toEqual(userResponseSuccess.user);
  });

  it('should fetch user data error', async () => {
    const response = await fetchUser('rejectTest');
    expect(response.status).toEqual(userResponseError.status);
    expect(response.user).toEqual(userResponseError.user);
  });
});
