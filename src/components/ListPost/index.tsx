import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import classes from './listPost.module.scss'

const ListPost: FC = () => {
  const { t } = useTranslation('pages/list-post')

  return (
    <>
      <div>{t('TITLE')}</div>
      <Link
        className={classes.link}
        href={'/'}
        rel='noopener noreferrer'
      >
        {t('BACKTOHOME')}
      </Link>
    </>
  )
}

export default ListPost
