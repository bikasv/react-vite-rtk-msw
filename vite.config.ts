import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    coverage: {
      provider: 'istanbul',
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './mocks/setupTest.ts',
  },
}));
