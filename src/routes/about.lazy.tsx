import { createLazyFileRoute } from '@tanstack/react-router';

import { AboutYou } from '@/components';

import css from './style.module.css';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <>
      <h1 className={css.title}>About you</h1>

      <form className={css.form}>
        <AboutYou />
      </form>
    </>
  );
}
