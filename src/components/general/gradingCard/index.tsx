import styles from './gradingCard.module.scss';
import classNames from 'classnames/bind';
import { selectedGradingCardDataType } from '@interfaces/gradingCardDataType';

interface GradingCardProps {
  onSelected: () => void;
  data: selectedGradingCardDataType;
}

const cx = classNames.bind(styles);

export default function GradingCard({ data, onSelected }: GradingCardProps) {
  return (
    <article className={cx('container', { active: data.active })} onClick={onSelected}>
      <div className={styles.titleContainer}>
        <div>
          <h3 className={styles.title}>{data.title}</h3>
          <p className={styles.subTitle}>{data.subTitle}</p>
        </div>
        <img src={`/images/sampleLogo.png`} width={65} height={43} />
      </div>
      <div className={styles.quantityContainer}>
        <p className={styles.quantity}>{data.quantity}</p>
        <p className={styles.quantityDescription}>현재 판매 중인 카드수</p>
      </div>
      <div className={styles.priceContainer}>
        <div>
          <p className={styles.minPrice}>₩{data.minPrice.toLocaleString()}</p>
          <p className={styles.minPriceQuantity}>
            최저판매가 / {data.minPriceQuantity > 10 ? `0${data.minPriceQuantity}` : `${data.minPriceQuantity}`}개
          </p>
        </div>
        <div>
          <p className={styles.maxPrice}>₩{data.maxPrice.toLocaleString()}</p>
          <p className={styles.maxPriceQuantity}>
            최고판매가 / {data.maxPriceQuantity > 10 ? `0${data.maxPriceQuantity}` : `${data.maxPriceQuantity}`}개
          </p>
        </div>
        <div>
          <p className={styles.lastPrice}>₩{data.lastPrice.toLocaleString()}</p>
          <p className={styles.lastPriceDescription}>가장 최근 거래 가격</p>
        </div>
      </div>
    </article>
  );
}
