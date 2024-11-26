import IceChain from '../ice-chain'

export const bob: IceChain = {
  id: 31611,
  name: 'MEZO',
  features: ['swap'],
  network: 'mezo',
  rpcUrls: {
    public: { http: ['https://rpc.test.mezo.org',] },
    default: { http: ['https://rpc.test.mezo.org',] },
  },
  blockExplorers: {
    default: { name: 'Mezo Explorer', url: 'https://explorer.test.mezo.org' },
  },
  nativeCurrency: {
    name: 'Bitcoin',
    symbol: 'BTC',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xC0C15c6db667166EeD8255b289B8Dc5F5B2B82B1',
      blockCreated: 523294,
    },
  },
  blockInterval: 2,
  wrappedNative: {
    address: '0xA460F83cdd9584E4bD6a9838abb0baC58EAde999',
    decimals: 18,
    symbol: 'wtBTC',
    name: 'Wrapped Test BTC',
  },
  stableToken: {
    address: '0x05D032ac25d322df992303dCa074EE7392C117b9',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: "0xB27fEFF52c463602aA9d939dc090B46439134119",
    initCodeHash: "0x246ba35fa37fb6bf3b71cd68dd22514e93a5d804976bfd9895b26b4434adb34d",
    routerAddress: "0xe3eB6Aa5CFB0BdA17C22128A58830EBC8Ecb74C3",
  },
  smartRouterAddress: '0x575C065Bf1Fa9D6F0F94AAC620a6936dD8517c7D',
}
