import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/routes';
import { store } from '@/store';

function renderApp() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  );
}

async function enableMocking() {
  if (import.meta.env.MODE === 'development') {
    const { worker } = await import('../mocks/browser');

    return worker.start({
      onUnhandledRequest: 'bypass',
    });
  }

  return;
}

enableMocking()
  .then(() => renderApp())
  .catch((err) => { throw err; });
