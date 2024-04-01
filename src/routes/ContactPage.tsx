import { Contact } from '@/components';

import css from './style.module.css';

export function ContactPage() {
  return (
    <>
      <h1 className={css.title}>Your contact details</h1>

      <form className={css.form}>
        <Contact />
      </form>
    </>
  );
}
