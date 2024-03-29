import { createHashRouter } from 'react-router-dom';

import { ErrorPage, Root } from './';

export const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        async lazy() {
          const { HomePage } = await import('./HomePage');

          return { Component: HomePage };
        },
      },
      {
        path: 'about',
        async lazy() {
          const { AboutPage } = await import('./AboutPage');

          return { Component: AboutPage };
        },
      },
      {
        path: 'contact',
        async lazy() {
          const { ContactPage } = await import('./ContactPage');

          return { Component: ContactPage };
        },
      },
    ],
  },
]);
