import { useState, useEffect } from 'react';
import Head from 'next/head';
import GradingCard from '@components/general/gradingCard';
import CardInfoHeader from '@components/view/card/cardInfoHeader';
import styles from './cardPage.module.scss';

import { gradingCardData } from '@components/general/gradingCard/gradingCardData';
import { gradingCardDataType, selectedGradingCardDataType } from '@interfaces/gradingCardDataType';

// useState, useEffect 임시
export default function Card() {
  const [data, setData] = useState<gradingCardDataType[] | null>(null);

  const onSelected = (id: number) => {
    let arr: selectedGradingCardDataType[] = [...data];
    arr = arr.map((item) => ({ ...item, active: item.id === id }));
    setData(arr);
  };

  useEffect(() => {
    setData(gradingCardData);
  }, []);

  const gradingCardList = data?.map((card) => (
    <GradingCard key={card.id} data={card} onSelected={() => onSelected(card.id)} />
  ));

  if (!data) return <p>Loading...</p>;
  return (
    <>
      <Head>
        <title>break | card</title>
        <meta name="description" content="break market card page" />
      </Head>

      <main className={styles.container}>
        <CardInfoHeader />
        <div className={styles.sectionContainer}>
          <section>
            <h2>Select card grade</h2>
            {gradingCardList}
          </section>
          <section>
            <h2>Sales history</h2>
            <div className={styles.historyContainer}>
              <div className={styles.historyTitleContainer}>
                <h3 className={styles.saleDateTitle}>Sale date</h3>
                <h3 className={styles.gradeTitle}>Grade</h3>
                <h3 className={styles.myTradesTitle}>My trades</h3>
                <h3 className={styles.priceTitle}>Price</h3>
              </div>
            </div>
          </section>
          <section>
            <h2>Other parellels</h2>
          </section>
        </div>
      </main>
    </>
  );
}
