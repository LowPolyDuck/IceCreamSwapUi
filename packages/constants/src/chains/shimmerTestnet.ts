import { FACTORY_ADDRESS, INIT_CODE_HASH, ROUTER_ADDRESS } from "../common/swap";
import IceChain from '../ice-chain'

export const shimmerTestnet: IceChain = {
  id: 1072,
  name: 'ShimmerEVM Testnet',
  features: ['swap'],
  network: 'ShimmerTestnet',
  rpcUrls: {
    public: { http: ['https://json-rpc.evm.testnet.shimmer.network'] },
    default: { http: ['https://json-rpc.evm.testnet.shimmer.network'] },
  },
  blockExplorers: {
    default: { name: 'Shimmer(Testnet) Explorer', url: 'https://explorer.evm.testnet.shimmer.network' },
  },
  nativeCurrency: {
    name: 'Shimmer',
    symbol: 'SMR',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xf3a3dAf360161B2f10c645EF039C709A3Fd4Ea62',
      blockCreated: 71272,
    },
  },
  blockInterval: 5, // shimmer does not seem to have fixed block intervals, investigate
  wrappedNative: {
    address: '0x7A09690ccC71205DbeCcB8158f43980bB60e9d65',
    decimals: 18,
    symbol: 'WSMR',
    name: 'Wrapped Shimmer',
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH,
    routerAddress: ROUTER_ADDRESS,
  },
}
