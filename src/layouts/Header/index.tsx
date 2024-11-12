import { FC, lazy, Suspense, useState } from 'react'
// import { useTranslation } from 'next-i18next'
import classes from './header.module.scss'
// import LanguageSwitcher from '@/components/LanguageSwitcher'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/icons/header/logo_white.svg'
import { ListSiteBar } from '@/models/header'
import { listSiteBar } from '@/store/main_layout_data'
import cx from 'classnames'
import icLightRowMenu from '../../assets/icons/header/ic_lightRowMenu.svg'
import icExit from '../../assets/icons/header/ic_exit.svg'
import icSearch from '../../assets/icons/header/ic_search.svg'

const ListMenuMobile = lazy(() => import('./listMenuMobile'))

const Header: FC = () => {
  // const { t } = useTranslation('layouts/header')
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const isMobileLg = useDeviceDetect('mobile-lg')
  return (
    <>
      <header className={'ContainerHeader'}>
        <div className={classes.header}>
          <div className={classes.coverHeader}>
            <div className={classes.navigationBar}>
              <div className={classes.wrapLeft}>
                <Link href={'/'} className={classes.linkLogo}>
                  <Image src={logo} alt='logo' className={classes.logo} />
                </Link>
                {!isMobileLg ? (
                  <div className={classes.wrapRight}>
                    <div className={classes.wrapSiteBarLeft}>
                      {listSiteBar.map((it: ListSiteBar) => (
                        <Link
                          href={`${it.url}`}
                          key={it.id}
                          className={cx(classes.linkSitebar)}
                        >
                          {it.content}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className={classes.desktopSearchIcon}>
                <div className={classes.wrapSearch}>
                  <Image
                    src={icSearch}
                    alt='serch icon'
                    className={classes.iconSearch}
                  />
                </div>
                {!isMobileLg ? null : (
                  <div className={classes.wrapRightMobile}>
                    <span
                      className={classes.menuSelect}
                      onClick={() => setIsOpenMenu(!isOpenMenu)}
                    >
                      {!isOpenMenu ? (
                        <Image
                          src={icLightRowMenu}
                          alt='icon three row with white color'
                          className={classes.icLightRowMenu}
                        />
                      ) : (
                        <Image
                          src={icExit}
                          alt='icon exit'
                          className={classes.icExit}
                        />
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {isOpenMenu && (
        <Suspense fallback={null}>
          <ListMenuMobile listSiteBar={listSiteBar} />
        </Suspense>
      )}
    </>
  )
}

export default Header
