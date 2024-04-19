'use client';

import Link from 'next/link';
import style from './Header.module.css';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li
            className={`${style.link} ${pathname === '/' ? style.active : ''}`}
          >
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li
            className={`${style.link} ${pathname === '/users' ? style.active : ''}`}
          >
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
