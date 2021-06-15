import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.scss';

interface navbarDataType {
  id: number;
  pageName: string;
  path: string;
}

const navbarData: navbarDataType[] = [
  {
    id: 0,
    pageName: 'HOME',
    path: '/',
  },
  {
    id: 1,
    pageName: 'GRADING',
    path: '/grading',
  },
  {
    id: 2,
    pageName: 'MARKET',
    path: '/',
  },
  {
    id: 3,
    pageName: 'COLLECTION',
    path: '/collection/all-sports',
  },
  {
    id: 4,
    pageName: 'WATCH LIST',
    path: '/watchlist/cards',
  },
];

export default function Navbar() {
  const navbar = navbarData?.map((menu, index) => (
    <li key={index}>
      <Link href={menu.path}>
        <a>{menu.pageName}</a>
      </Link>
    </li>
  ));
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navbarContainer}>
        <Image src="/break_logo.png" alt="break logo" width={128} height={28} />
        <ul>
          {navbar}
          <button className={styles.accountIcon}>
            <Image src="/icons/my_account_icon.png" alt="my account icon" width={32} height={32} />
          </button>
        </ul>
      </nav>
    </header>
  );
}
