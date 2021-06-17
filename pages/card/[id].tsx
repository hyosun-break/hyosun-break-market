import Head from 'next/head';
import { useRouter } from 'next/router';
import { cardListData } from '@components/content/activity/offers';

export default function Card() {
  const router = useRouter();
  const query = router.query['id'];
  console.log('card Router', query);

  const cardName = cardListData.find((data) => String(data.id) === query);

  return (
    <div>
      <Head>
        <title>break | card</title>
        <meta name="description" content="break market card page" />
      </Head>

      <main>
        <h1>{cardName.name}씨의 카드 정보 입니다.</h1>
      </main>
    </div>
  );
}
