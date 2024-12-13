import { infoStableSwapClient } from "utils/graphql"
import {
  BLOCKS_CLIENT_WITH_CHAIN,
  INFO_CLIENT_WITH_CHAIN
} from "config/constants/endpoints";
import { ChainId } from '@pancakeswap/sdk'
import { GraphQLClient } from 'graphql-request'
import { chains } from '@icecreamswap/constants'

export type MultiChainName = keyof typeof ChainId;
export type MultiChainNameExtend = MultiChainName

export const multiChainQueryMainToken = chains.reduce((acc, chain) => (
    {...acc, [chain.network.toUpperCase()]: 'ETH'}
), {}) as Record<MultiChainName, string>

export const multiChainBlocksClient = chains.reduce((acc, chain) => (
    {...acc, [chain.network.toUpperCase()]: BLOCKS_CLIENT_WITH_CHAIN[chain.id]}
), {}) as Record<MultiChainName, string>


export const multiChainStartTime = chains.reduce((acc, chain) => {
  return {...acc, [chain.network.toUpperCase()]: chain.swap?.deploymentTs}
}, {}) as Record<MultiChainName, ChainId>

export const multiChainId = chains.reduce((acc, chain) => (
    {...acc, [chain.network.toUpperCase()]: chain.id}
), {}) as Record<MultiChainName, ChainId>

export const multiChainPaths = chains.reduce((acc, chain) => (
    {...acc, [chain.id]: ''}
), {}) as Record<ChainId, string>

export const multiChainQueryClient = chains.reduce((acc, chain) => (
    {...acc, [chain.network.toUpperCase()]: new GraphQLClient(INFO_CLIENT_WITH_CHAIN[chain.id])}
), {}) as Record<MultiChainName, GraphQLClient>

export const multiChainScan = chains.reduce((acc, chain) => (
    {...acc, [chain.network.toUpperCase()]: 'MezoScan'}
), {}) as Record<MultiChainName, string>

export const multiChainTokenBlackList = chains.reduce((acc, chain) => (
    {...acc, [chain.network.toUpperCase()]: ['']}
), {}) as Record<MultiChainName, string>

export const multiChainTokenWhiteList = chains.reduce((acc, chain) => (
    {...acc, [chain.network.toUpperCase()]: ['']}
), {}) as Record<MultiChainName, string>

export const getMultiChainQueryEndPointWithStableSwap = (chainName: MultiChainName) => {
  const isStableSwap = checkIsStableSwap()
  if (isStableSwap) return infoStableSwapClient
  return multiChainQueryClient[chainName]
}

export const checkIsStableSwap = () => window.location.href.includes('stableSwap')

export const multiChainName: Record<number | string, MultiChainNameExtend> = chains.reduce((acc, chain) => {
  return {...acc, [chain.id]: chain.network.toUpperCase() as MultiChainName}
}, {})

export const subgraphTokenSymbol = {}