import { useState, useEffect } from 'react';
import Head from 'next/head';
import GradingCard from '@components/general/gradingCard';
import CardInfoHeader from '@components/view/Card/CardInfoHeader';
import TradeCard from '@components/view/Card/TradeCard';
import styles from './index.module.scss';

import { gradingCardData } from '@components/general/gradingCard/gradingCardData';
import { gradingCardDataType, selectedGradingCardDataType } from '@typ/egradingCardDataType';

// useState, useEffect 임시
export default function CardPage() {
  const [data, setData] = useState<gradingCardDataType[] | null>(null);
  const [selectedGradingCard, setSelectedGradingCard] = useState<selectedGradingCardDataType | null>(null);

  const onSelected = (id: number) => {
    let arr: selectedGradingCardDataType[] = [...data];
    arr = arr.map((item) => ({ ...item, active: item.id === id }));
    const selected = arr.find((item) => item.active);
    setSelectedGradingCard(selected);
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
            <div className={styles.row}>
              <div>{gradingCardList}</div>
              <TradeCard card={selectedGradingCard} />
            </div>
          </section>
          <section>
            <h2>Sales history</h2>
            <div className={styles.historyContainer}>
              <div className={styles.historyTitleContainer}>
                <div>
                  <h3 className={styles.saleDateTitle}>Sale date</h3>
                  <p>5/5</p>
                </div>
                <div>
                  <h3 className={styles.gradeTitle}>Grade</h3>
                  <p>break A</p>
                </div>
                <div>
                  <h3 className={styles.myTradesTitle}>My trades</h3>
                </div>
                <div>
                  <h3 className={styles.priceTitle}>Price</h3>
                  <p>₩290,000</p>
                </div>
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
