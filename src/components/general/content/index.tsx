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
  tab: string[];
}

const contentHeaderData: contentHeaderDataType[] = [
  {
    pathname: '/collection/[...tab]',
    headerTitle: 'My Collection',
    tab: ['ALL SPORTS', 'BASEBALL', 'BASETBALL', 'FOOTBALL', 'SOCCER', 'SCC'],
  },
  {
    pathname: '/watchlist/[...tab]',
    headerTitle: 'Watchlist',
    tab: ['CARDS', 'PLAYERS'],
  },
  {
    pathname: '/activity/[...tab]',
    headerTitle: 'Activity',
    tab: ['OFFERS', 'PLAYERS', 'BOUGHT', 'SOLD'],
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
    <main className={styles.contentContainer}>
      {contentHeader}
      {content}
    </main>
  );
}
