import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import Image from 'next/image';
import Content from '@components/content';
import { Offers, Players, Bought, Sold } from '@components/content/activity';

interface contentsType {
  [key: string]: React.ReactElement;
  offers: React.ReactElement;
  players: React.ReactElement;
  bought: React.ReactElement;
  sold: React.ReactElement;
}
export default function Activity() {
  const router = useRouter();
  const query = router.query['tab'];
  console.log('Activity', query);

  const contents: contentsType = {
    offers: <Offers />,
    players: <Players />,
    bought: <Bought />,
    sold: <Sold />,
  };

  const Contents = contents[query as string];

  return (
    <>
      <Head>
        <title>break | activity</title>
        <meta name="description" content="break market activity page" />
      </Head>
      <Content content={Contents} />
    </>
  );
}
