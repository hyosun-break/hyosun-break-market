export interface contentHeaderMenuType {
  pathname: string;
  headerTitle: string;
  menu: string[];
}

export const contentHeaderMenuData: contentHeaderMenuType[] = [
  {
    pathname: '/collection/[tab]',
    headerTitle: 'My Collection',
    menu: ['ALL SPORTS', 'BASEBALL', 'BASETBALL', 'FOOTBALL', 'SOCCER', 'SCC'],
  },
  {
    pathname: '/watchlist/[tab]',
    headerTitle: 'Watchlist',
    menu: ['CARDS', 'PLAYERS'],
  },
  {
    pathname: '/activity/[tab]',
    headerTitle: 'Activity',
    menu: ['OFFERS', 'PLAYERS', 'BOUGHT', 'SOLD'],
  },
];
