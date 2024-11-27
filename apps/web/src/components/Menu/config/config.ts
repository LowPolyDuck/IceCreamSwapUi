const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      supportChainIds: SUPPORT_SWAP,
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
        /* {
          label: t('Buy Crypto'),
          href: '/buy-crypto',
          supportChainIds: SUPPORT_BUY_CRYPTO,
        }, */
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    /* TEMPORARILY DISABLED MENU ITEMS
    {
      label: t('Earn'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      showItemsOnMobile: false,
      supportChainIds: [...SUPPORT_FARMS, ...SUPPORT_STAKING],
      items: [
        {
          label: t('Liquidity Farms'),
          href: '/farms',
          supportChainIds: SUPPORT_FARMS,
        },
        {
          label: t('Staking'),
          href: '/pools',
          supportChainIds: SUPPORT_STAKING,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Bridge'),
      href: '/bridge',
      hideSubNav: true,
      icon: BridgeIcon,
      supportChainIds: SUPPORT_BRIDGE,
      showItemsOnMobile: false,
      items: [],
    },
    {
      label: t('Info'),
      href: '/info',
      icon: InfoIcon,
      hideSubNav: true,
      showItemsOnMobile: false,
      supportChainIds: SUPPORT_INFO,
      items: [],
    },
    {
      label: t('More'),
      icon: MoreHorizontalIcon,
      showItemsOnMobile: true,
      hideSubNav: true,
      items: [
        {
          label: t('Locks'),
          href: '/locks',
          supportChainIds: SUPPORT_LOCKS,
        },
        {
          label: t('KYC'),
          href: '/kyc',
          supportChainIds: SUPPORT_KYC,
          items: [
            {
              label: t('KYC'),
              href: '/kyc',
            },
            {
              label: t('KYC Checker'),
              href: '/kyc-checker',
            },
            {
              label: t('KYC Delegator'),
              href: '/kyc-delegator',
              supportChainIds: SUPPORT_KYC_DELEGATION,
            },
          ],
        },
        {
          label: t('Launchpad'),
          href: '/launchpad',
          supportChainIds: SUPPORT_LAUNCHPAD,
        },
        {
          label: t('Token Deployer'),
          href: '/create-token',
          supportChainIds: SUPPORT_TOKEN_DEPLOYER,
        },
        {
          label: t('Wiki'),
          href: languageCode === 'zh-cn' ? 'https://wiki.icecreamswap.com/v/zh' : 'https://wiki.icecreamswap.com',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    END TEMPORARILY DISABLED MENU ITEMS */
  ].map((item) => addMenuItemSupported(item, chainId))