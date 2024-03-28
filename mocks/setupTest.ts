import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll } from 'vitest';

import { mswServer } from './node';

beforeAll(() => mswServer.listen());

afterEach(() => {
  cleanup();
  mswServer.resetHandlers();
});

afterAll(() => mswServer.close());
