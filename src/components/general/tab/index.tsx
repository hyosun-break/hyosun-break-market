import React, { useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import styles from './tab.module.scss';
import { contentHeaderDataType } from '../content';

interface tabType {
  data: contentHeaderDataType;
}

/*
  data: {
    pathname: string
    title: string
    tab: string[]
  }
*/
/* ex) 주소가 'activity/무엇무엇' 동적라우팅 */
/* 탭메뉴 마다 폴더를 만들어 작업하는 것은 비효율적인 것 같아서 동적라우팅으로 생각했어요 */
/* tabName에 공백 포함시 - 로 교체 (replace함수) */
export default function Tab({ data }: tabType) {
  const [tabClick, setTabClick] = useState<string | undefined>(data.tab[0]);
  const pathname = data.pathname.split('/[')[0];

  const tabList = data?.tab.map((tabName, index) => (
    <li key={index} onClick={() => setTabClick(tabName)} className={tabClick === tabName ? styles.active : ''}>
      <Link href={`${pathname}/${tabName.replace(' ', '-').toLowerCase()}`}>{tabName}</Link>
    </li>
  ));
  return <ul className={styles.tabContainer}>{tabList}</ul>;
}
