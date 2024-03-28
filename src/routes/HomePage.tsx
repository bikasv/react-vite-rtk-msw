import { Link } from 'react-router-dom';

import { Users } from '@/components';

import css from './style.module.css';

export function HomePage() {
  return (
    <>
      <h1 className={css.title}>Users</h1>

      <Users />

      <Link className={css.add_button} to="/about">&#65291;</Link>
    </>
  );
}
