import './index.css';

import { createRouter, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { routeTree } from '@/routeTree.gen.ts';
import { store } from '@/store';

const router = createRouter({ routeTree });

async function enableMocking() {
  if (import.meta.env.PROD) {
    return;
  }

  const { worker } = await import('../mocks/browser');

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  );
});
