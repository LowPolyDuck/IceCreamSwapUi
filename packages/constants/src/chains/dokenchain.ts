import { FACTORY_ADDRESS, INIT_CODE_HASH, ROUTER_ADDRESS } from "../common/swap";
import IceChain from '../ice-chain'

export const dokenchain: IceChain = {
  id: 61916,
  name: 'DoKEN Super Chain Mainnet',
  features: ['swap'],
  network: 'doken',
  rpcUrls: {
    public: { http: ['https://nyrpc.doken.dev'] },
    default: { http: ['https://nyrpc.doken.dev'] },
  },
  blockExplorers: {
    default: { name: 'Doken Explorer', url: 'https://explorer.doken.dev' },
  },
  nativeCurrency: {
    name: 'Doken',
    symbol: 'DKN',
    decimals: 18,
  },
  blockInterval: 10,
  contracts: {
    multicall3: {
      address: '0xb999ea90607a826a3e6e6646b404c3c7d11fa39d',
      blockCreated: 451563,
    },
  },
  wrappedNative: {
    address: '0x27b45bCC26e01Ed50B4080A405D1c492FEe89d63',
    decimals: 18,
    symbol: 'WDKN',
    name: 'Wrapped DoKEN',
  },
  iceAddress: '0x54051D9DbE99687867090d95fe15C3D3E35512Ba',
  stableToken: {
    address: '0x8e6dAa037b7F130020b30562f1E2a5D02233E6c5',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    routerAddress: ROUTER_ADDRESS,
    initCodeHash: INIT_CODE_HASH,
  },
  farmV2Address: '0x509733EaB85DEbdAE55306Aa81e3E4326f71cE0D',
}
