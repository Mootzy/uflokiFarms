import React from 'react'
import styled from 'styled-components'
import { CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import RainbowCardBacklight from '../../../components/RainbowCardBacklight/RainbowCardBacklight'
import { RainbowCard } from '../../../components/Card'

const StyledTotalValueLockedCard = styled(RainbowCard)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  const data = useGetStats()
  const tvl = data ? data.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledTotalValueLockedCard>
      <RainbowCardBacklight />
      <CardBody>
        <Heading size="lg" mb="24px" color="secondary">
          {TranslateString(762, 'Total Value Locked (TVL)')}
        </Heading>
        {data ? (
          <>
            <Heading size="xl">{`$${tvl}`}</Heading>
            <Text color="textSubtle">{TranslateString(764, 'Across all internal and external LPs and Syrup Pools')}</Text>
          </>
        ) : (
          <>
            <Skeleton height={66} />
          </>
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
