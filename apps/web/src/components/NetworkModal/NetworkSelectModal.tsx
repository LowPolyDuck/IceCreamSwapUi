import {UserMenuItem, Input, Modal, Text, Box} from '@pancakeswap/uikit'
import {useSwitchNetwork} from 'hooks/useSwitchNetwork'
import {chains} from '@icecreamswap/constants'
import {useTranslation} from '@pancakeswap/localization'
import {useState} from 'react'
import {useActiveChainId} from 'hooks/useActiveChainId'
import {ChainLogo} from 'components/Logo/ChainLogo'
import {useSupportedChains} from 'hooks/useSupportedChains'
import chainName from 'config/constants/chainName'


const NetworkSelect = ({switchNetwork, chainId, onCloseModal, filter}) => {
  const {t} = useTranslation()
  const supportedChains = useSupportedChains()

  const contents = chains
    .filter((chain) => chainName[chain.id].toLowerCase().indexOf(filter.toLowerCase()) >= 0)
    .filter((chain) => !chain.testnet || chain.id === chainId)
    .filter((chain) => supportedChains.length == 0 || supportedChains.includes(chain.id));
  return (
    <>
      {contents.length > 0 ?
        contents.map((chain) => (
          <UserMenuItem
            key={chain.id}
            style={{justifyContent: 'flex-start', overflow: "hidden"}}
            onClick={() => {
              if (chain.id === chainId) return;
              switchNetwork(chain.id);
              onCloseModal(false);
            }}
          >
            <ChainLogo chainId={chain.id}/>
            <Text color={chain.id === chainId ? 'secondary' : 'text'} bold={chain.id === chainId} pl="12px">
              {chainName[chain.id]}
            </Text>
          </UserMenuItem>
        ))
      :
        <><h2>{t("No available networks")}</h2><br/></>
      }
    </>
  )
}

export function NetworkSelectModal({onCloseModal}) {
  const {chainId} = useActiveChainId()
  const {switchNetworkAsync} = useSwitchNetwork()

  const [filter, setFilter] = useState<string>("");

  return (
    <Modal title={"Select Network"} onDismiss={() => onCloseModal(false)}>
      <Box style={{display: 'flex', marginBottom: '20px'}}>
        <Input
          id="search-network"
          placeholder={'Search Network'}
          scale="lg"
          autoComplete="off"
          value={filter}
          onChange={(e: any) => setFilter(e.target?.value)}
        />
      </Box>
      <Box style={{gap: '16px', overflowY: "scroll", overflowX: "hidden", paddingBottom: "10px"}} height="40vh">
        <NetworkSelect switchNetwork={switchNetworkAsync} chainId={chainId} onCloseModal={onCloseModal} filter={filter}/>
      </Box>
    </Modal>
  )
}