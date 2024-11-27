import { useTranslation } from '@pancakeswap/localization'
import { ChainId, NATIVE } from '@pancakeswap/sdk'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Box,
  BoxProps,
  Button,
  Flex,
  InfoIcon,
  Text,
  UserMenuDivider,
  UserMenuItem,
  useTooltip,
  ChevronDownIcon,
  ModalV2,
} from '@pancakeswap/uikit'
import { useNetwork } from 'wagmi'
import { useActiveChainId, useLocalNetworkChain } from 'hooks/useActiveChainId'
import { useNetworkConnectorUpdater } from 'hooks/useActiveWeb3React'
import { useHover } from 'hooks/useHover'
import { useSessionChainId } from 'hooks/useSessionChainId'
import { useSwitchNetwork } from 'hooks/useSwitchNetwork'
import React, { useMemo, useState } from 'react'
import { chains } from 'utils/wagmi'

import { ChainLogo } from './Logo/ChainLogo'
import chainName from '../config/constants/chainName'
import { useSupportedChains } from 'hooks/useSupportedChains'
import { NetworkSelectModal } from "components/NetworkModal/NetworkSelectModal";
import MenuIcon from "@pancakeswap/uikit/widgets/Menu/components/UserMenu/MenuIcon";
import { LabelText, StyledUserMenu } from "@pancakeswap/uikit/widgets/Menu/components/UserMenu";
import { defaultChainId } from '@icecreamswap/constants'

const NetworkSelect = ({ switchNetwork, chainId }) => {
  const { t } = useTranslation()
  const supportedChains = useSupportedChains()

  return (
    <>
      <Box px="16px" py="8px">
        <Text color="textSubtle">{t('Select a Network')}</Text>
      </Box>
      <UserMenuDivider />
      {chains
        .filter((chain) => !chain.testnet || chain.id === chainId)
        .filter((chain) => supportedChains.includes(chain.id))
        .map((chain) => (
          <UserMenuItem
            key={chain.id}
            style={{ justifyContent: 'flex-start' }}
            onClick={() => chain.id !== chainId && switchNetwork(chain.id)}
          >
            <ChainLogo chainId={chain.id} />
            <Text color={chain.id === chainId ? 'secondary' : 'text'} bold={chain.id === chainId} pl="12px">
              {chainName[chain.id]}
            </Text>
          </UserMenuItem>
        ))}
    </>
  )
}

const WrongNetworkSelect = ({ switchNetwork, chainId }) => {
  const { t } = useTranslation()
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t(
      'The URL you are accessing (Chain id: %chainId%) belongs to %network%; mismatching your wallet’s network. Please switch the network to continue.',
      {
        chainId,
        network: chains.find((c) => c.id === chainId)?.name ?? 'Unknown network',
      },
    ),
    {
      placement: 'auto-start',
      hideTimeout: 0,
    },
  )
  const { chain } = useNetwork()
  const localChainId = useLocalNetworkChain() || defaultChainId
  const [, setSessionChainId] = useSessionChainId()

  const localChainName = chains.find((c) => c.id === localChainId)?.name ?? 'BSC'

  const [ref1, isHover] = useHover<HTMLButtonElement>()

  return (
    <>
      <Flex ref={targetRef} alignItems="center" px="16px" py="8px">
        <InfoIcon color="textSubtle" />
        <Text color="textSubtle" pl="6px">
          {t('Please switch network')}
        </Text>
      </Flex>
      {tooltipVisible && tooltip}
      <UserMenuDivider />
      {chain && (
        <UserMenuItem ref={ref1} onClick={() => setSessionChainId(chain.id)} style={{ justifyContent: 'flex-start' }}>
          <ChainLogo chainId={chain.id} />
          <Text color="secondary" bold pl="12px">
            {chain.name}
          </Text>
        </UserMenuItem>
      )}
      <Box px="16px" pt="8px">
        {isHover ? <ArrowUpIcon color="text" /> : <ArrowDownIcon color="text" />}
      </Box>
      <UserMenuItem onClick={() => switchNetwork(localChainId)} style={{ justifyContent: 'flex-start' }}>
        <ChainLogo chainId={localChainId} />
        <Text pl="12px">{localChainName}</Text>
      </UserMenuItem>
      <Button mx="16px" my="8px" scale="sm" onClick={() => switchNetwork(localChainId)}>
        {t('Switch network in wallet')}
      </Button>
    </>
  )
}

export const NetworkSwitcher: React.FC<BoxProps> = (props) => {
  const [ isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false);
  const { t } = useTranslation()
  const { chainId, isWrongNetwork } = useActiveChainId()
  const { pendingChainId, isLoading, canSwitch } = useSwitchNetwork()

  useNetworkConnectorUpdater()

  const foundChain = useMemo(
    () => chains.find((c) => c.id === (isLoading ? pendingChainId || chainId : chainId)),
    [isLoading, pendingChainId, chainId],
  )
  const symbol = NATIVE[foundChain?.id]?.symbol ?? foundChain?.nativeCurrency?.symbol
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t('Unable to switch network. Please try it on your wallet'),
    { placement: 'bottom' },
  )

  const cannotChangeNetwork = !canSwitch

  if (!chainId) {
    return null
  }

  const text = isLoading ? (
    t('Requesting')
  ) : isWrongNetwork ? (
    t('Network')
  ) : foundChain ? (
    <>
      <Box display={['none', null, null, null, null, 'block']}>{chainName[foundChain.id]}</Box>
      <Box display={['block', null, null, null, null, 'none']}>{symbol}</Box>
    </>
  ) : (
    t('Select a Network')
  )

  return (
    <Box {...props} ref={cannotChangeNetwork ? targetRef : null} height="100%">
      <ModalV2 isOpen={isSelectorOpen} closeOnOverlayClick onDismiss={() => setIsSelectorOpen(false)}>
        <NetworkSelectModal onCloseModal={setIsSelectorOpen}/>
      </ModalV2>

      {cannotChangeNetwork && tooltipVisible && tooltip}
      <Flex alignItems="center" height="100%" pr="8px" onClick={() => setIsSelectorOpen(false)}>
        <StyledUserMenu width="100%">
          <MenuIcon avatarSrc={`/images/chains/${chainId}.png`} variant={isLoading ? 'pending' : isWrongNetwork ? 'danger' : 'default'} />
          <LabelText title={typeof text === "string" && text}>
            {text}
          </LabelText>
        </StyledUserMenu>
      </Flex>

      {/*
      <UserMenu
        width="100%"
        pr="8px"
        placement="bottom"
        variant={isLoading ? 'pending' : isWrongNetwork ? 'danger' : 'default'}
        avatarSrc={`/images/chains/${chainId}.png`}
        disabled={cannotChangeNetwork}
        text={
          isLoading ? (
            t('Requesting')
          ) : isWrongNetwork ? (
            t('Network')
          ) : foundChain ? (
            <>
              <Box display={['none', null, null, null, null, 'block']}>{chainName[foundChain.id]}</Box>
              <Box display={['block', null, null, null, null, 'none']}>{symbol}</Box>
            </>
          ) : (
            t('Select a Network')
          )
        }
      >
        {() =>
          isNotMatched ? (
            <WrongNetworkSelect switchNetwork={switchNetworkAsync} chainId={chainId} />
          ) : (
            <NetworkSelect switchNetwork={switchNetworkAsync} chainId={chainId} />
          )
        }
      </UserMenu>
      */}
    </Box>
  )
}
