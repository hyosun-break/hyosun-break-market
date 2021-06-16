import styles from './contentHeader.module.scss';
import { contentHeaderDataType } from '../content';
import Menu from './menu';

interface contentHeaderType {
  data: contentHeaderDataType;
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
