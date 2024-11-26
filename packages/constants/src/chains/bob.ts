import IceChain from '../ice-chain'

export const bob: IceChain = {
  id: 60808,
  name: 'BOB',
  features: ['swap'],
  network: 'bob',
  rpcUrls: {
    public: { http: ['https://rpc.gobob.xyz',] },
    default: { http: ['https://rpc.gobob.xyz',] },
  },
  blockExplorers: {
    default: { name: 'BOB Explorer', url: 'https://explorer.gobob.xyz' },
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 48619,
    },
  },
  blockInterval: 2,
  wrappedNative: {
    address: '0x4200000000000000000000000000000000000006',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  stableToken: {
    address: '0x05D032ac25d322df992303dCa074EE7392C117b9',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: "0x7b2a5C88AB9367147F6ac384F857CbaDF5aA70a7",
    initCodeHash: "0x0437378fc27e93c612c5c385779bf540ca2064b54705e48c313aa216da380100",
    routerAddress: "0x698a912F8CA34Df9b46E6Ea4A2B2DB0B7151b083",
  },
  smartRouterAddress: '0x575C065Bf1Fa9D6F0F94AAC620a6936dD8517c7D',
}