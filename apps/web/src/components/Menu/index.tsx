import { languageList, useTranslation } from '@pancakeswap/localization'
import { footerLinks, Menu as UikitMenu, NextLinkFromReactRouter, useModal } from '@pancakeswap/uikit'
import { NetworkSwitcher } from 'components/NetworkSwitcher'
import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useActiveChainId } from 'hooks/useActiveChainId'
import useTheme from 'hooks/useTheme'
import GlobalSettings from './GlobalSettings'
import { useMenuItems } from './hooks/useMenuItems'
import UserMenu from './UserMenu'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'

const LinkComponent = (linkProps) => {
  return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
}

const Menu = () => {
  const { isDark, setTheme } = useTheme()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useRouter()
  const { chainId } = useActiveChainId()
  
  const menuItems = useMenuItems()
  
  return (
    <UikitMenu
      linkComponent={LinkComponent}
      rightSide={
        <>
          <GlobalSettings />
          <NetworkSwitcher />
          <UserMenu />
        </>
      }
      isDark={isDark}
      toggleTheme={setTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      links={menuItems}
      subLinks={subLinks}
      footerLinks={getFooterLinks}
      activeItem={activeMenuItem?.href}
      activeSubItem={activeSubMenuItem?.href}
      buyCakeLabel={t('Buy ICE')}
      buyCakeLink={`/swap?chainId=${chainId}&outputCurrency=${ICE[chainId]}`}
    />
  )
}

export default Menu
