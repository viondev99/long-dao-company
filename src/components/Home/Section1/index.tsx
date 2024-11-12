import React, { FC } from 'react'
import classes from './section1.module.scss'
import Image from 'next/image'
import bgSec1 from '../../../assets/img/home/section1/bg_sec1.webp'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import arrowDown from '../../../assets/icons/home/arrow_white_down.svg'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import cx from 'classnames'

const Section1: FC = () => {
  // const { t: tCommon } = useTranslation('common')
  const { t: tHome } = useTranslation('pages/home')
  const isDesktop = useDeviceDetect('desktop')

  return (
    <section className={classes.section1}>
      <div className={classes.coverContent}>
        <div className={classes.coverBg}>
          <Image
            src={bgSec1}
            alt='background products'
            priority
            className={classes.bgSec1}
          />
          <div className={classes.secOpacity} />
          {isDesktop ? (
            <div className={classes.description}>
              <div className={cx(classes.coverDes, 'contentMaxWidth')}>
                <h1>{tHome('TITILE-SECTION-1')}</h1>
                <Link href={'/products/new-product'}>
                  {tHome('FIND-OUT-MORE')}
                </Link>
                <div className={classes.coverArrow}>
                  <div className={classes.wrapArrow}>
                    <Image
                      src={arrowDown}
                      alt='arrow down'
                      className={classes.arrowDown}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {!isDesktop ? (
        <div className={classes.desMobile}>
          <h2>{tHome('TITILE-SECTION-1')}</h2>
        </div>
      ) : null}
    </section>
  )
}

export default Section1
