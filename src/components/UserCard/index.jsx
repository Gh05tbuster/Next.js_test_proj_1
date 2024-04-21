import Image from 'next/image';
import style from './UserCard.module.css';

export default function UserCard({ key, img, name, email }) {
  return (
    <div className={style.userCard} key={key}>
      <Image src={img} alt="" width={300} height={400} quality={100} />
      <h2 className={style.title}>{name}</h2>
      <p className={style.text}>{email}</p>
    </div>
  );
}
