import React, { FC } from 'react'
import classes from './section5.module.scss'
import cx from 'classnames'
import Image, { StaticImageData } from 'next/image'
import { useTranslation } from 'next-i18next'
import img1 from '../../../assets/img/home/section5/img1.webp'
import img2 from '../../../assets/img/home/section5/img2.webp'

interface ListItem {
  id: string
  img: StaticImageData
  title: string
  des: string
}

const Section5: FC = () => {
  const { t: tHome } = useTranslation('pages/home')

  const listItem: ListItem[] = [
    {
      id: '1',
      img: img1,
      title: tHome('TITLE-1-SECTION-5'),
      des: tHome('DES-1-SECTION-5'),
    },
    {
      id: '2',
      img: img2,
      title: tHome('TITLE-2-SECTION-5'),
      des: tHome('DES-2-SECTION-5'),
    },
  ]

  return (
    <section className={classes.section5}>
      <div className={cx(classes.coverContent, 'contentMaxWidth')}>
        <div className={classes.wrapItem}>
          {listItem.map((it: ListItem) => (
            <div key={it.id} className={classes.coverItem}>
              <Image src={it.img} alt='image product' />
              <div className={classes.title}>{it.title}</div>
              <div className={classes.des}>{it.des}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section5
