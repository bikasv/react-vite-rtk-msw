import css from './Header.module.css';

type HeaderProps = {
  title?: string;
};

export function Header({ title = 'React Seed' }: HeaderProps) {
  return (
    <header className={css.header}>
      {title}
    </header>
  );
}
