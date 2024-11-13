import React, { FC } from 'react'
import classes from './section8.module.scss'
import cx from 'classnames'
import { useTranslation } from 'next-i18next'

import phone from '../../../assets/icons/home/phone.svg'
import Image from 'next/image'

const Section8: FC = () => {
  const { t: tHome } = useTranslation('pages/home')

  return (
    <section className={classes.section8}>
      <div className={cx(classes.coverContent, 'contentMaxWidth')}>
        <h2 className={classes.title}>{tHome('TITLE-SECTION-8')}</h2>
        <div className={classes.wrapContact}>
          <div className={classes.colItem}>
            <h3 className={classes.titleItem}>{tHome('TITLE-ITEM-1-SEC-8')}</h3>
            <div className={classes.contentItem}>
              {tHome('CONTENT-ITEM-1-SEC-8')}
            </div>
            <div>
              <button className={classes.btn}>{tHome('CONTACT-FORM')}</button>
            </div>
          </div>
          <div className={classes.line}></div>
          <div className={classes.colItem}>
            <h3 className={classes.titleItem}>{tHome('TITLE-ITEM-2-SEC-8')}</h3>
            <div className={classes.title2Item}>
              {tHome('CONTENT-ITEM-2-SEC-8')}
            </div>
            <div className={classes.phoneContact}>
              <Image src={phone} alt='phone' className={classes.imgPhone} />
              <h3 className={classes.textPhone}>{tHome('PHONE')}</h3>
            </div>
            <div className={classes.textContact}>{tHome('TEXT-CALENDAR')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section8
