import IceChain from '../ice-chain'

export const bob: IceChain = {
  id: 31611,
  name: 'Mezo',
  features: ['swap', 'info'],
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
    address: '0x637e22A1EBbca50EA2d34027c238317fD10003eB',
    decimals: 18,
    symbol: 'mUSD',
    name: 'mUSD',
  },
  swap: {
    factoryAddress: "0x0e04c3D090F9773E7c870b334d083c90032E2D39",
    initCodeHash: "0x80270ca6ccc4e4b6c6f66549715d994dc493c0a1e540c1a1353c873ac239d7f7",
    routerAddress: "0xC2E61936a542D78b9c3AA024fA141c4C632DF6c1",
  },
  smartRouterAddress: '0xF6828fFB3Eea8bf121A2508d723dC85082696C82',
}
