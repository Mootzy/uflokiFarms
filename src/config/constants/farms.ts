import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'Litter',
    lpAddresses: {
      97: '',
      56: '0x01D90e95997717f5b5f49de47B0Df6cb35631f53',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0x01D90e95997717f5b5f49de47B0Df6cb35631f53',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'Litter-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x33f3CCa5fEfC979822f2c9f4e59B6C3fa792347A',   // lp address token-bnb
    },
    tokenSymbol: 'Litter',
    tokenAddresses: {
      97: '',
      56: '0x01D90e95997717f5b5f49de47B0Df6cb35631f53', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
