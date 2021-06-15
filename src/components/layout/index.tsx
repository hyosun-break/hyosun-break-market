import styles from './layout.module.scss';
import Navbar from '../navbar';
import Footer from '../footer';

interface layoutType {
  children: React.ReactNode;
}

export default function Layout({ children }: layoutType) {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
