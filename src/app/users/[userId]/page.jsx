'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import style from './[userId].module.css';

export default function UserPage() {
  const pathname = usePathname();
  const pathnameArr = pathname.split('/');
  const userId = pathnameArr[pathnameArr.length - 1];
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const result = await fetch(`https://reqres.in/api/users/${userId}`);
    const json = await result.json();
    setUser(json.data);
  }

  return (
    <div className="container">
      <h1 className={style.title}>{`${user.first_name} ${user.last_name}`}</h1>
      {user.avatar && (
        <Image
          src={user.avatar}
          width={600}
          height={800}
          alt=""
          quality={100}
        />
      )}
      <p className={style.text}>
        Email:&nbsp;
        <a target="blank" href={`mailto:${user.email}`} className={style.email}>
          {user.email}
        </a>
      </p>
    </div>
  );
}
