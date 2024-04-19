import Image from 'next/image';
import style from './UserCard.module.css';

export default function UserCard({ id, img, name, email }) {
  return (
    <div className={style.userCard} key={id}>
      <Image src={img} alt="" width={300} height={400} />
      <h2 className={style.title}>{name}</h2>
      <p className={style.text}>{email}</p>
    </div>
  );
}
