import React, { FC } from 'react'
import classes from './menuMobile.module.scss'
import Link from 'next/link'
import cx from 'classnames'
import { SiteMap } from '@/layouts/Footer'

interface Props {
  listSiteBar: SiteMap[]
}

const ListMenuMobile: FC<Props> = ({ listSiteBar }) => {
  return (
    <div className={classes.menuMobile}>
      {listSiteBar.map((it: SiteMap) => (
        <div
          key={it.id}
          className={cx(classes.listSiteBar, {
            [classes.itemFirst]: it.id === 'home',
          })}
        >
          <Link href={it.url} className={cx(classes.itemLink)}>
            {it.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ListMenuMobile
