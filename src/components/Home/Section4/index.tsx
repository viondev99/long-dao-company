import React, { FC } from 'react'
import classes from './section4.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import img1 from '../../../assets/img/home/section4/img1.jpg'
import { useTranslation } from 'next-i18next'

const Section4: FC = () => {
  const { t: tHome } = useTranslation('pages/home')

  return (
    <section className={classes.section4}>
      <div className={cx(classes.coverContent, 'contentMaxWidth')}>
        <div className={classes.wrapContent}>
          <div className={classes.coverLeft}>
            <Image src={img1} alt='image product' />
          </div>
          <div className={classes.coverRight}>
            <div className={classes.item1}>{tHome('TEXT-1-SECTION-4')}</div>
            <div className={classes.item2}>{tHome('TEXT-2-SECTION-4')}</div>
            <div className={classes.item3}>{tHome('FIND-OUT-MORE')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4
