import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll } from 'vitest';

import { setupStore } from '@/store';
import { usersApi } from '@/store/usersSlice';

import { setSessionData } from './handlers';
import { server } from './node';

const store = setupStore({});

export const mockedUseNavigate = vi.fn();

beforeAll(() => server.listen());

beforeEach(() => {
  setSessionData();

  vi.mock('react-router-dom', async() => {
    const mod = await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom',
    );

    return {
      ...mod,
      useNavigate: () => mockedUseNavigate,
    };
  });
});

afterEach(() => {
  server.resetHandlers();
  store.dispatch(usersApi.util.resetApiState());
  vi.clearAllMocks();
  vi.resetAllMocks();
  cleanup();
});

afterAll(() => server.close());
