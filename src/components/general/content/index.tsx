import { useRouter } from 'next/router';
import styles from './content.module.scss';
import ContentHeader from '../contentHeader';
import React from 'react';

interface contentType {
  content: any;
}

export interface contentHeaderDataType {
  pathname: string;
  headerTitle: string;
  menu: string[];
}

const contentHeaderData: contentHeaderDataType[] = [
  {
    pathname: '/collection/[tab]',
    headerTitle: 'My Collection',
    menu: ['ALL SPORTS', 'BASEBALL', 'BASETBALL', 'FOOTBALL', 'SOCCER', 'SCC'],
  },
  {
    pathname: '/watchlist/[tab]',
    headerTitle: 'Watchlist',
    menu: ['CARDS', 'PLAYERS'],
  },
  {
    pathname: '/activity/[tab]',
    headerTitle: 'Activity',
    menu: ['OFFERS', 'PLAYERS', 'BOUGHT', 'SOLD'],
  },
];

export default function Content({ content }: contentType) {
  const router = useRouter();
  // console.log('content component', router);

  const contentHeader = contentHeaderData?.map((header, index) => (
    <React.Fragment key={index}>
      {router.pathname === header.pathname && <ContentHeader data={header} />}
    </React.Fragment>
  ));

  return (
    <main className={styles.container}>
      {contentHeader}
      <div className={styles.inner}>{content}</div>
    </main>
  );
}
