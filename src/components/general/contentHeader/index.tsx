import styles from './contentHeader.module.scss';
import { contentHeaderDataType } from '../content';
import Tab from '../tab';

interface contentHeaderType {
  data: contentHeaderDataType;
}

export default function ContentHeader({ data }: contentHeaderType) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{data.headerTitle}</h1>
        <Tab data={data} />
      </div>
    </div>
  );
}
