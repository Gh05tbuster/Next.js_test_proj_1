'use client';

import Link from 'next/link';
import style from './Header.module.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <Image
            src="/nextjs_fill_icon.svg"
            height={50}
            width={50}
            quality={100}
            alt=""
          />
        </div>
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
            <li
              className={`${style.link} ${pathname === '/about' ? style.active : ''}`}
            >
              <Link href="/about">
                <p>About</p>
              </Link>
            </li>
            <li
              className={`${style.link} ${pathname === '/contact' ? style.active : ''}`}
            >
              <Link href="/contact">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
        <button className={style.btn}>Sign in</button>
      </div>
    </header>
  );
};

export default Header;
