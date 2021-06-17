import Link from 'next/link';

// 임시
interface cardListDataType {
  id: number;
  name: string;
  cardNumber: string;
  tag: string;
}

// 임시
export const cardListData: cardListDataType[] = [
  {
    id: 0,
    name: 'Zion Williamson',
    cardNumber: '#248',
    tag: 'SILVER',
  },
  {
    id: 1,
    name: 'Hyo sun Kim',
    cardNumber: '#218',
    tag: 'RED',
  },
];

export default function Offers() {
  const cardList = cardListData?.map((card) => (
    <li key={card.id} style={{ marginTop: 20 }}>
      <Link href={{ pathname: '/card/[id]', query: { id: card.id } }}>
        <a>{card.name}씨의 카드 정보 보러가기</a>
      </Link>
    </li>
  ));

  return (
    <>
      <h2>offers content datas,,,</h2>
      <ul>{cardList}</ul>
    </>
  );
}
