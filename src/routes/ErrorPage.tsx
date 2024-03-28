import { useRouteError } from 'react-router-dom';

import { Header } from '@/components';

export function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  return (
    <>
      <Header />

      <main className="page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
    </>
  );
}

type ErrorResponse = {
  status: number;
  statusText: string;
  message?: string;
};
