import {ChainId, ERC20Token, WETH9} from '@pancakeswap/sdk'
import {ICE} from "./common";

export const shimmerTestnetTokens = {
  wsmr: WETH9[ChainId.SHIMMER_TEST],
  ice: ICE[ChainId.SHIMMER_TEST],
  usdt: new ERC20Token(ChainId.SHIMMER_TEST, '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44', 18, 'USDT', 'Tether USD'),
}
