import styles from './gradingCard.module.scss';
import { gradingCardDataType } from '../../../interfaces/gradingCardDataType';

interface GradingCardProps {
  data: gradingCardDataType;
}

export default function GradingCard({ data }: GradingCardProps) {
  const { title, subTitle, quantity, minPrice, minPriceQuantity, maxPrice, maxPriceQuantity, lastPrice } = data;

  return (
    <div className={styles.gradingCardContainer}>
      <div className={styles.titleContainer}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subTitle}>{subTitle}</p>
        </div>
        <img src={`/images/sampleLogo.png`} width={65} height={43} />
      </div>
      <div className={styles.quantityContainer}>
        <p className={styles.quantity}>{quantity}</p>
        <p className={styles.quantityDescription}>현재 판매 중인 카드수</p>
      </div>
      <div className={styles.priceContainer}>
        <div>
          <p className={styles.minPrice}>₩{minPrice.toLocaleString()}</p>
          <p className={styles.minPriceQuantity}>
            최저판매가 / {minPriceQuantity < 10 ? `0${minPriceQuantity}` : minPriceQuantity}개
          </p>
        </div>
        <div>
          <p className={styles.maxPrice}>₩{maxPrice.toLocaleString()}</p>
          <p className={styles.maxPriceQuantity}>
            최고판매가 / {maxPriceQuantity < 10 ? `0${maxPriceQuantity}` : maxPriceQuantity}개
          </p>
        </div>
        <div>
          <p className={styles.lastPrice}>₩{lastPrice.toLocaleString()}</p>
          <p className={styles.lastPriceDescription}>가장 최근 거래 가격</p>
        </div>
      </div>
    </div>
  );
}
