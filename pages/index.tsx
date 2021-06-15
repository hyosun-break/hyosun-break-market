import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>break | main</title>
        <meta name="description" content="break market main page" />
      </Head>

      <main className={styles.main}>
        <h1>메인페이지</h1>
      </main>
    </div>
  );
}
