export interface contentHeaderMenuType {
  pathname: string;
  headerTitle: string;
  menu: string[];
}

export const contentHeaderMenuData: contentHeaderMenuType[] = [
  {
    pathname: '/collection/[menu]',
    headerTitle: 'My Collection',
    menu: ['ALL SPORTS', 'BASEBALL', 'BASETBALL', 'FOOTBALL', 'SOCCER', 'SCC'],
  },
  {
    pathname: '/watchlist/[menu]',
    headerTitle: 'Watchlist',
    menu: ['CARDS', 'PLAYERS'],
  },
  {
    pathname: '/activity/[menu]',
    headerTitle: 'Activity',
    menu: ['OFFERS', 'PLAYERS', 'BOUGHT', 'SOLD'],
  },
];
