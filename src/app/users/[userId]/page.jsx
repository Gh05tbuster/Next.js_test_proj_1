'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <div>
      <h1>{`${user.first_name} ${user.last_name}`}</h1>
      {user.avatar && (
        <Image
          src={user.avatar}
          width={600}
          height={800}
          alt=""
          quality={100}
        />
      )}
      <p>Email: {user.email}</p>
    </div>
  );
}
