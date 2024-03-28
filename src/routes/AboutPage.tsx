import { AboutYou } from '@/components';

import css from './style.module.css';

export function AboutPage() {
  return (
    <>
      <h1 className={css.title}>About you</h1>

      <form className={css.form}>
        <AboutYou />
      </form>
    </>
  );
}
