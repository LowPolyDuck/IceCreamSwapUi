import IceChain from '../ice-chain'

export const dogechain: IceChain = {
  id: 31611,
  name: 'Mezo',
  features: ['swap'],
  network: 'mezo',
  rpcUrls: {
    public: { http: ['https://rpc.test.mezo.org'] },
    default: { http: ['https://rpc.test.mezo.org'] },
  },
  blockExplorers: {
    default: { name: 'Mezo Explorer', url: 'https://explorer.test.mezo.org' },
  },
  nativeCurrency: {
    name: 'Bitcoin',
    symbol: 'BTC',
    decimals: 18,
  },
  blockInterval: 2,
  contracts: {
    multicall3: {
      address: '0x474bAbC4b6595D5BDfbbeEdA558CA36114a0E7f7',
      blockCreated: 625968,
    },
  },
  wrappedNative: {
    address: '0xA460F83cdd9584E4bD6a9838abb0baC58EAde999',
    decimals: 18,
    symbol: 'wtBTC',
    name: 'Wrapped Test BTC',
  },
  iceAddress: '0x81bCEa03678D1CEF4830942227720D542Aa15817',
  stableToken: {
    address: '0xD2683b22287E63D22928CBe4514003a92507f474',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: "0xB27fEFF52c463602aA9d939dc090B46439134119",
    initCodeHash: "0x246ba35fa37fb6bf3b71cd68dd22514e93a5d804976bfd9895b26b4434adb34d",
    routerAddress: "0xe3eB6Aa5CFB0BdA17C22128A58830EBC8Ecb74C3",
  },
  farmV2Address: '0xc44a6eb41f02740A6778CCb9591448a5EBC73b74',
}
