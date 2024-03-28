import { createBrowserRouter } from 'react-router-dom';

import {
  AboutPage,
  ContactPage,
  ErrorPage,
  HomePage,
  Root,
} from './';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);
