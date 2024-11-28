import { getAddress } from 'ethers/lib/utils'
import memoize from 'lodash/memoize'
import { Token } from '@pancakeswap/sdk'
import chainName from "../config/constants/chainName";


const getTokenLogoURL = memoize(
  (token?: Token) => {
    if (token && token.address && chainName[token.chainId]) {
      return `https://raw.githubusercontent.com/LowPolyDuck/assetpngs/refs/heads/main/token/${token.chainId}/${getAddress(token.address)}.png`
    }

    /*
    if (token && chainName[token.chainId]) {
      return `https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/${chainName[token.chainId].toLowerCase()}/assets/${getAddress(
        token.address,
      )}/logo.png`
    }
    */
    return null
  },
  (t) => `${t.chainId}#${t.address}`,
)

export default getTokenLogoURL
