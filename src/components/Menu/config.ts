import { MenuEntry } from "@pancakeswap-libs/uikit";

const config: MenuEntry[] = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "https://www.universalfloki.com",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://dex.universalfloki.com/",
      },
      {
        label: "Liquidity",
        href: "https://dex.universalfloki.com/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/pools",
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     // {
  //     //   label: 'Voting',
  //     //   href: 'https://voting.babyschrodinger.com',
  //     // },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.babyschrodinger.com',
  //     },
  //     // {
  //     //   label: 'Blog',
  //     //   href: 'https://pancakeswap.medium.com',
  //     // },
  //   ],
  // },
];
export const footerLinks: any = {
  column1: [
    {
      label: "Website",
      href: "https://www.universalfloki.com",
    },
    {
      label: "Doc",
      href: "https://www.universalfloki.com",
    },
    {
      label: "Token",
      href: "https://universalfloki.com",
    },
  ],
  column2: [
    {
      label: "Telegram",
      href: "https://pancakeswap.info",
    },
    {
      label: "Twitter",
      href: "https://pancakeswap.info",
    },
    {
      label: "Instagram",
      href: "https://pancakeswap.info",
    },
  ],
  // 'column3': [
  //   {
  //     label: 'Link 1',
  //     href: 'https://pancakeswap.info',
  //   },
  //   {
  //     label: 'Link 2',
  //     href: 'https://pancakeswap.info',
  //   },
  //   {
  //     label: 'Link 2',
  //     href: 'https://pancakeswap.info',
  //   },
  // ]
};

export default config;
