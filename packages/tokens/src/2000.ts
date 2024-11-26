import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'
import {ICE} from "./common";

export const dogechainTokens = {
  wdoge: WETH9[ChainId.DOGE],
  ice: ICE[ChainId.DOGE],
  usdt: new ERC20Token(ChainId.DOGE, '0xD2683b22287E63D22928CBe4514003a92507f474', 18, 'USDT', 'Tether USD'),
}
