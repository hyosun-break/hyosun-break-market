import Head from 'next/head';
import { useRouter } from 'next/router';
import Content from '@components/content';
import { Cards, Players } from '@components/content/watchlist';

interface contentsType {
  [key: string]: React.ReactElement;
}

export default function WatchList() {
  const router = useRouter();
  const query = router.query['menu'];

  const contents: contentsType = {
    cards: <Cards />,
    players: <Players />,
  };

  const Contents = contents[query as string];

  return (
    <>
      <Head>
        <title>break | watchlist</title>
        <meta name="description" content="break market watchlist page" />
      </Head>
      <Content content={Contents} />
    </>
  );
}
