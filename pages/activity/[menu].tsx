import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Content from '@components/content';
import { Offers, Players, Bought, Sold } from '@components/content/activity';

interface contentsType {
  [key: string]: React.ReactElement;
}
export default function Activity() {
  const router = useRouter();
  const query = router.query['menu'];

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
