import styles from './card.module.scss';
// import Image from "next/image"

export default function Card() {
  return (
    <div className={styles.cardContainer}>
      <img src={`/images/sampleCard.png`} width={100} height={139} />
    </div>
  );
}
