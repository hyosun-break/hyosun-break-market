import React from 'react';
import { useRouter } from 'next/router';
import styles from './content.module.scss';
import { contentHeaderMenuData } from './contentHeaderMenuData';
import ContentHeader from '../contentHeader';

interface contentType {
  content: React.ReactElement;
}

export default function Content({ content }: contentType) {
  const router = useRouter();

  const contentHeader = contentHeaderMenuData?.map((header, index) => (
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
