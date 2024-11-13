import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import classes from './footer.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import logo from '../../assets/icons/header/logo_white.svg'
import earthLogo from '../../assets/icons/footer/earth.svg'
import fb from '../../assets/icons/footer/fb.svg'
import ins from '../../assets/icons/footer/ins.svg'
import x from '../../assets/icons/footer/x.svg'
import ytb from '../../assets/icons/footer/ytb.svg'

export interface SiteMap {
  id: string
  title: string
  url: string
}

interface ListContact {
  id: string
  img: StaticImageData
  alt: string
}

const Footer: FC = () => {
  const { t } = useTranslation('layouts/footer')

  const siteMap: SiteMap[] = [
    { id: '1', title: t('GIRA'), url: '#' },
    { id: '2', title: t('INTRODUCTION'), url: '#' },
    { id: '3', title: t('SERVICE'), url: '#' },
    { id: '4', title: t('SOLUTION'), url: '#' },
    { id: '5', title: t('NEWS'), url: '#' },
    { id: '6', title: t('CONTACT'), url: '#' },
  ]

  const listContact: ListContact[] = [
    { id: '1', img: fb, alt: 'fb' },
    { id: '2', img: ins, alt: 'ins' },
    { id: '3', img: x, alt: 'x' },
    { id: '4', img: ytb, alt: 'ytb' },
  ]

  return (
    <footer className={'ContainerFooter'}>
      <div className={classes.footerWraper}>
        <div className={classes.contentWrapper}>
          <div className={classes.wrapLeft}>
            {siteMap.map((it: SiteMap) => (
              <div
                key={it.id}
                className={cx(classes.itemSiteMap, {
                  [classes.home]: it.id === '1',
                })}
              >
                {it.id !== '1' ? (
                  it.title
                ) : (
                  <div className={classes.wrapLogo}>
                    <Link href={'/'} className={classes.linkLogo}>
                      <Image src={logo} alt='logo' className={classes.logo} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={classes.wrapRight}>
            <div className={classes.titleRight}>{t('GIRA-UK')}</div>
            <div className={classes.desRight}>
              {t('DES')
                .split('\n')
                .map((line, index) => (
                  <div key={index}>
                    {line}
                    <br />
                  </div>
                ))}
            </div>
          </div>
          <div className={classes.listContact}>
            {listContact.map((it: ListContact) => (
              <Image
                key={it.id}
                src={it.img}
                alt={it.alt}
                className={it.id === '1' ? classes.item1 : ''}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={classes.footerContact}>
        <div className={classes.footerContactWrapper}>
          <div>{t('CRE')}</div>
          <div className={classes.national}>
            <Image src={earthLogo} alt='earth' />
            <div className={classes.vi}>{t('VIETNAM')}</div>
          </div>
          <div className={classes.listContactMobile}>
            {listContact.map((it: ListContact) => (
              <Image key={it.id} src={it.img} alt={it.alt} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
