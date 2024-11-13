import React, { FC } from 'react'
import classes from './section7.module.scss'
import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import img1 from '../../../assets/img/home/section7/img1.jpg'

const Section7: FC = () => {
  const { t: tHome } = useTranslation('pages/home')

  return (
    <section className={classes.section7}>
      <div className={cx(classes.coverContent, 'contentMaxWidth')}>
        <div className={classes.wrapItem}>
          <div className={classes.wrapImg}>
            <Image src={img1} alt='image product' />
          </div>
          <div className={classes.title}>{tHome('TITLE-SECTION-7')}</div>
          <div className={classes.des}>{tHome('DES-SECTION-7')}</div>
        </div>
      </div>
    </section>
  )
}

export default Section7
