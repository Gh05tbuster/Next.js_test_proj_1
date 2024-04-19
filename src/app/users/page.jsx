'use client';

import Pagination from '@/components/Pagination';
import UserCard from '@/components/UserCard';
import { useState, useEffect } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    onPageChange(currentPage);
  }, []);

  async function onPageChange(page) {
    const result = await fetch(`https://reqres.in/api/users?page=${page}`);
    const json = await result.json();
    setUsers(json.data);
    setCurrentPage(json.page);
    setTotalPages(json.total_pages);
  }

  return (
    <>
      {users.map((user) => (
        <UserCard
          id={user.id}
          img={user.avatar}
          name={`${user.first_name} ${user.last_name}`}
          email={user.email}
        />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
}
