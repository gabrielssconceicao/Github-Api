import { beforeEach, beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/vue';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { createPinia, setActivePinia } from 'pinia';
import {
  userResponseSuccess,
  userResponseError,
} from './src/mock/__tests__/user';
import { repos } from './src/mock';
export const restHandlers = [
  http.get('https://api.github.com/users/:user', ({ params }) => {
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
  http.get('https://api.github.com/users/:login/repos', ({ params }) => {
    if (params.login === 'testeuser') {
      return HttpResponse.json(repos, {
        status: 200,
      });
    } else {
      return HttpResponse.json([], {
        status: 404,
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
  setActivePinia(createPinia());
});
