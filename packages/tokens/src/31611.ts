import {ChainId, ERC20Token, WETH9} from '@pancakeswap/sdk'
import {ICE} from "./common";

export const shimmerTestnetTokens = {
  wsmr: WETH9[ChainId.SHIMMER_TEST],
  usdt: new ERC20Token(ChainId.SHIMMER_TEST, '0xC2d002e83016Ce8e9BB58ff8A006128B7C6c058e', 18, 'LIMPETH', 'ETH DUMP, BTC PUMP'),
}
