import Head from 'next/head';
import { useRouter } from 'next/router';
// import Image from 'next/image';
import Content from '@components/content';
import { AllSports, Baseball, Basetball, Football, Soccer, Scc } from '@components/content/collection';

interface contentsType {
  [key: string]: React.ReactElement;
  allsports: React.ReactElement;
  baseball: React.ReactElement;
  basetball: React.ReactElement;
  football: React.ReactElement;
  soccer: React.ReactElement;
  scc: React.ReactElement;
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
    <div>
      <Head>
        <title>break | collection</title>
        <meta name="description" content="break market collection page" />
      </Head>
      <Content content={Contents} />
    </div>
  );
}
