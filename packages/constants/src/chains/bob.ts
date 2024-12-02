import IceChain from '../ice-chain'

export const bob: IceChain = {
  id: 31611,
  name: 'Mezo',
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
      address: '0x474bAbC4b6595D5BDfbbeEdA558CA36114a0E7f7',
      blockCreated: 625968,
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
    address: '0x3cF96Ad9218e639B63CaBb64772339AA20a45D88',
    decimals: 18,
    symbol: 'USDc',
    name: 'USDc',
  },
  swap: {
    factoryAddress: "0xB27fEFF52c463602aA9d939dc090B46439134119",
    initCodeHash: "0x246ba35fa37fb6bf3b71cd68dd22514e93a5d804976bfd9895b26b4434adb34d",
    routerAddress: "0xe3eB6Aa5CFB0BdA17C22128A58830EBC8Ecb74C3",
  },
  smartRouterAddress: '0xf7458e9De34a2B34B48866336F48123F6dE4d303',
}
