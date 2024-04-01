import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default defineConfig((configEnv) => mergeConfig(
  viteConfig(configEnv),
  defineConfig({
    test: {
      coverage: {
        exclude: [
          'mocks/**',
          'src/routes/**',
          'src/**/index.ts',
          'src/main.tsx',
        ],
        include: [
          'src/**',
        ],
        provider: 'istanbul',
        reporter: ['clover', 'html', 'json', 'text'],
      },
      globals: true,
      environment: 'jsdom',
      setupFiles: './mocks/setupTest.ts',
      silent: false,
    },
  }),
));
