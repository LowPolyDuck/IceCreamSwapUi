import { useTranslation } from '@pancakeswap/localization'
import { SubMenuItems } from '@pancakeswap/uikit'
import { useRouter } from 'next/router'
import { useChainNameByQuery, useMultiChainPath } from 'state/info/hooks'
import { useMemo } from 'react'
import InfoNav from './components/InfoNav'

export const InfoPageLayout = ({ children }) => {
  const router = useRouter()
  const chainName = useChainNameByQuery()
  const chainPath = useMultiChainPath()
  const { t } = useTranslation()

  const subMenuItems = useMemo(
    () => [
      {
        label: t('V2'),
        href: `/info${chainPath}`,
      },
    ],
    [t, chainPath, chainName],
  )

  return (
    <>
      <SubMenuItems items={subMenuItems} activeItem={`/info${chainPath}`} />

      <InfoNav isStableSwap={false} />
      {children}
    </>
  )
}
