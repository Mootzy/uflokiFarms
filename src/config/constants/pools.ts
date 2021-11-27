import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'Litter',
    tokenAddress: '0x01D90e95997717f5b5f49de47B0Df6cb35631f53',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x01D90e95997717f5b5f49de47B0Df6cb35631f53',  // token address
    contractAddress: {
      97: '',
      56: '0x9dED2A1AEDE9f4c825B62Af995a1B47a72b41abB',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
