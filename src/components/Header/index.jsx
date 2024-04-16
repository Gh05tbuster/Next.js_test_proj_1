import Link from 'next/link';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <p>Users</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
