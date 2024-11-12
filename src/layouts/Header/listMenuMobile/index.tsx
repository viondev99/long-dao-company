import React, { FC } from 'react'
import { ListSiteBar } from '@/models/header'
import classes from './menuMobile.module.scss'
import Link from 'next/link'
import cx from 'classnames'

interface Props {
  listSiteBar: ListSiteBar[]
}

const ListMenuMobile: FC<Props> = ({ listSiteBar }) => {
  return (
    <div className={classes.menuMobile}>
      {listSiteBar.map((it: ListSiteBar) => (
        <div
          key={it.id}
          className={cx(classes.listSiteBar, {
            [classes.itemFirst]: it.id === 'home',
          })}
        >
          <Link
            href={it.url}
            className={cx(classes.itemLink)}
          >
            {it.content}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ListMenuMobile
