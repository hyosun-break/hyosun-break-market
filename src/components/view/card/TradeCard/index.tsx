import SubmitButton from '@components/general/submitButton';
import styles from './index.module.scss';
import { selectedGradingCardDataType } from '@type/gradingCardDataType';

interface tradeCardProps {
  card?: selectedGradingCardDataType;
}

export default function TradeCard({ card }: tradeCardProps) {
  return (
    <article className={styles.container}>
      <h3 className={styles.title}>Trade {card?.title} cards</h3>
      <div className={styles.line} />
      <div className={styles.tradeInfoContainer}>
        <div className={styles.row}>
          <div className={styles.left}>
            <img src={'/icons/minPriceIcon.png'} width={36} height={17} />
            <div>
              <p className={styles.minPriceQuantity}>₩{card?.minPrice.toLocaleString()}</p>
              <p className={styles.quantityDescription}>최저판매가</p>
            </div>
          </div>
          <SubmitButton title="Buy" size="small" />
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <img src={'/icons/maxPriceIcon.png'} width={36} height={25} />
            <div>
              <p className={styles.maxPriceQuantity}>₩{card?.maxPrice.toLocaleString()}</p>
              <p className={styles.quantityDescription}>최고구매가</p>
            </div>
          </div>
          <SubmitButton title="Sell" size="small" color="blue" />
        </div>
      </div>
    </article>
  );
}
