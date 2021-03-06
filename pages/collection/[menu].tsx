import Head from 'next/head';
import { useRouter } from 'next/router';
import Content from '@components/content';
import { AllSports, Baseball, Basetball, Football, Soccer, Scc } from '@components/content/collection';

interface contentsType {
  [key: string]: React.ReactElement;
}
export default function Collection() {
  const router = useRouter();
  const query = router.query['menu'];

  const contents: contentsType = {
    allsports: <AllSports />,
    baseball: <Baseball />,
    basetball: <Basetball />,
    football: <Football />,
    soccer: <Soccer />,
    scc: <Scc />,
  };

  const Contents = contents[query as string];

  return (
    <>
      <Head>
        <title>break | collection</title>
        <meta name="description" content="break market collection page" />
      </Head>
      <Content content={Contents} />
    </>
  );
}
