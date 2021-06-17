import Head from 'next/head';
import { useRouter } from 'next/router';
import { cardListData } from '@components/content/activity/offers';
import styles from './cardPage.module.scss';

export default function Card() {
  const router = useRouter();
  const query = router.query['id'];
  // 추후 카드 데이터 요청시 query 값으로 요청하면 될 거 같아요
  // 선수 카드 정보를 id값으로 요청하는지 다른 걸로 요청하는진 모르지만 흐름은 다르지 않을 것으로 예상
  console.log('card Router', query);

  const cardName = cardListData.find((data) => String(data.id) === query);

  return (
    <>
      <Head>
        <title>break | card</title>
        <meta name="description" content="break market card page" />
      </Head>

      <main className={styles.container}>
        {/* <h1>{cardName.name}씨의 카드 정보 입니다.</h1> */}
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderInner}>
            <div className={styles.cardImgBox} />
            <div className={styles.cardInfo}>
              <p className={styles.cardCategory}>2019-20 Panini Prizm Basketball • Base</p>
              <h2 className={styles.name}>Zion Williamson #248</h2>
            </div>
            <div className={styles.playerInfo}>
              <button className={styles.addWatchlistBtn}>☆ Add to watchlist</button>
              <div className={styles.playerImgBox} />
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <section>
            <h2>Select card grade</h2>
          </section>
          <section>
            <h2>Sales history</h2>
          </section>
          <section>
            <h2>Other parellels</h2>
          </section>
        </div>
      </main>
    </>
  );
}
