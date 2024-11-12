import React, { FC } from 'react'
import classes from './section2.module.scss'
import { useTranslation } from 'next-i18next'
import cx from 'classnames'

const Section2: FC = () => {
  const { t: tHome } = useTranslation('pages/home')

  return (
    <section className={classes.section2}>
      <div className={cx(classes.coverContent, 'contentMaxWidth')}>
        <h2>{tHome('TITLE-SECTION-2')}</h2>
      </div>
    </section>
  )
}

export default Section2
