import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
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
