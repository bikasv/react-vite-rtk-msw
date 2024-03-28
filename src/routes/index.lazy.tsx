import { createLazyFileRoute, Link } from '@tanstack/react-router';

import { Users } from '@/components';

import css from './style.module.css';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className={css.title}>Users</h1>

      <Users />

      <Link className={css.add_button} to="/about">&#65291;</Link>
    </>
  );
}
