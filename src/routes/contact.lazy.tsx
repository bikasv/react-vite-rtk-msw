import { createLazyFileRoute } from '@tanstack/react-router';

import { Contact } from '@/components';

import css from './style.module.css';

export const Route = createLazyFileRoute('/contact')({
  component: () => {
    return (
      <>
        <h1 className={css.title}>About you</h1>

        <form className={css.form}>
          <Contact />
        </form>
      </>
    );
  },
});
