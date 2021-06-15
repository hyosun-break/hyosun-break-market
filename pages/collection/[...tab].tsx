import Head from 'next/head';
import { useRouter } from 'next/router';
// import Image from 'next/image';
import Content from '@components/general/content';

// content props 에 각 탭에 맞는 데이터를 받아와 만든 render 컴포넌트를 넘겨주면 됩니다. 지금은 임시로 query 입력
export default function Collection() {
  const router = useRouter();
  const query = router.query['tab'];

  return (
    <div>
      <Head>
        <title>break | collection</title>
        <meta name="description" content="break market collection page" />
      </Head>
      <Content content={query} />
    </div>
  );
}
