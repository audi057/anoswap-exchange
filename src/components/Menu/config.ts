import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://anoswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://anoswap.finance/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://anoswap.finance/pools'
  },
  {
    label: 'Your project',
    icon: 'PoolIcon',
    href: 'http://anoswap.finance/jungles',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'http://anoswap.finance/lottery'
  },
  {
    label: 'Referral',
    icon: 'GroupsIcon',
    href: 'http://anoswap.finance/referral',
  },
  {
    label: 'Price Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x1f546ad641b56b86fd9dceac473d1c7a357276b7-bsc',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
      },
      {
        label: 'BoggedFinance',
        href: 'https://charts.bogged.finance/?token=0x1f546aD641B56b86fD9dCEAc473d1C7a357276B7',
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io/app/pancakeswap/pair-explorer/0xecc11a78490866e0073ebc4a4dcb6f75673c8685',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'NftIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/pantherswap',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/pantherswap',
      },
      {
        label: 'LiveCoinWatch',
        href: 'https://www.livecoinwatch.com/price/PantherSwap-PANTHER',
      },
      {
        label: 'Vfat',
        href: 'https://vfat.tools/bsc/panther',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/AnoSwap/',
      },
      {
        label: 'Docs',
        href: 'https://app.gitbook.com/@anoswap/s/anonymousswap-finance/whitepaper/',
      },
      {
        label: 'Blog',
        href: 'https://anoswap.medium.com/',
      },
      {
        label: 'Voting',
        href: 'http://anoswap.finance/comingsoon',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
