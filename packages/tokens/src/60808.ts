import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'

export const bobTokens = {
  weth: WETH9[ChainId.BOB],
  limpeth: new ERC20Token(ChainId.BOB, '0xC2d002e83016Ce8e9BB58ff8A006128B7C6c058e', 18, 'LIMPETH', 'ETH DUMP, BTC PUMP'),
}
