import React, { useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import styles from './menu.module.scss';
import { contentHeaderMenuType } from '../../content/contentHeaderMenuData';

interface menuType {
  data: contentHeaderMenuType;
}

/*
  data: {
    pathname: string
    title: string
    menu: string[]
  }
*/
/* ex) 주소가 'activity/무엇무엇' 동적라우팅 */
/* menuName에 공백 포함시 - 로 교체 (replace함수) */
export default function Menu({ data }: menuType) {
  const [menuSelected, setMenuSelected] = useState<string | undefined>(data.menu[0]);
  const pathname = data.pathname.split('/[')[0];

  const menuList = data?.menu.map((menuName, index) => (
    <li
      key={index}
      onClick={() => setMenuSelected(menuName)}
      className={menuSelected === menuName ? styles.active : ''}
    >
      <Link href={`${pathname}/${menuName.replace(' ', '').toLowerCase()}`}>{menuName}</Link>
    </li>
  ));
  return <ul className={styles.container}>{menuList}</ul>;
}
