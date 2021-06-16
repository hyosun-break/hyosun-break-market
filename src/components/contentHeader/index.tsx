import styles from './contentHeader.module.scss';
import { contentHeaderMenuType } from '../content/contentHeaderMenuData';
import Menu from './menu';

interface contentHeaderType {
  data: contentHeaderMenuType;
}

export default function ContentHeader({ data }: contentHeaderType) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{data.headerTitle}</h1>
        <Menu data={data} />
      </div>
    </div>
  );
}
