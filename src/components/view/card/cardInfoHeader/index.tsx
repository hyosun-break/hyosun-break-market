import styles from './cardInfoHeader.module.scss';

export default function CardInfoHeader() {
  return (
    <div className={styles.cardInfoHeader}>
      <div className={styles.cardInfoHeaderInner}>
        <div className={styles.cardImgBox} />
        <div className={styles.cardInfo}>
          <p className={styles.cardCategory}>2019-20 Panini Prizm Basketball • Base</p>
          <h2 className={styles.name}>Zion Williamson #248</h2>
          <p className={styles.tag}>SILVER</p>
          <div className={styles.quantityContainer}>
            <p>1 card in vault</p>
            <p>0 listed for sale</p>
          </div>
        </div>
        <div className={styles.playerInfo}>
          <button className={styles.addWatchlistBtn}>☆ Add to watchlist</button>
          <div className={styles.playerImgBox} />
        </div>
      </div>
    </div>
  );
}
