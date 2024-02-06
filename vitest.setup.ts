import { beforeEach, beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/vue';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';

import {
  userResponseSuccess,
  userResponseError,
} from './src/mock/__tests__/user';

export const restHandlers = [
  http.get('https://api.github.com/users/:user', ({ params }) => {
    const { user } = params;
    console.log(user);
    if (params.user === 'resolveTest') {
      return HttpResponse.json(userResponseSuccess.user, {
        status: userResponseSuccess.status,
      });
    } else {
      return HttpResponse.json(userResponseError.user, {
        status: userResponseError.status,
      });
    }
  }),
];

const server = setupServer(...restHandlers);
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

beforeEach(() => {
  cleanup();
});
