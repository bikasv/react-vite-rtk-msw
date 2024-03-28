import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { Header } from '@/components';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />

      <main className="page">
        <Outlet />
      </main>

      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  ),
});
