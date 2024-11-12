import React, { FC } from 'react'
import classes from './section3.module.scss'
import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import img1 from '../../../assets/img/home/section3/img1.jpg'
import img2 from '../../../assets/img/home/section3/img2.jpg'
import img3 from '../../../assets/img/home/section3/img3.jpg'
import img4 from '../../../assets/img/home/section3/img4.jpg'
import Image, { StaticImageData } from 'next/image'

interface DataList {
  id: string
  img: StaticImageData
  title: string
  content: string
}

const Section3: FC = () => {
  const { t: tHome } = useTranslation('pages/home')

  const dataList: DataList[] = [
    {
      id: '1',
      img: img1,
      title: 'Smart Home',
      content:
        'Configuring cold, warm, bright, dark, loud, or silent. From home and anywhere else. Via voice command or smartphone app.',
    },
    {
      id: '2',
      img: img2,
      title: 'Gira KNX system',
      content:
        'Controlling building services via cable – when the room understands people.',
    },
    {
      id: '3',
      img: img3,
      title: 'Gira G1',
      content: 'The central control unit for all functions in your Smart Home.',
    },
    {
      id: '4',
      img: img4,
      title: 'Gira X1',
      content:
        'The Gira X1 server is particularly suitable for smaller residential properties with KNX installation.',
    },
  ]

  return (
    <section className={classes.section3}>
      <div className={cx(classes.coverContent, 'contentMaxWidth')}>
        <h3>{tHome('TITLE-SECTION-3')}</h3>

        <div className={classes.coverList}>
          {dataList.map((it: DataList) => (
            <div key={it.id} className={classes.wrapItemList}>
              <div className={classes.coverItem}>
                <Image
                  src={it.img}
                  alt='image product'
                  className={classes.imgItem}
                />
                <div className={classes.imgCap}>{it.title}</div>
                <div className={classes.imgDes}>{it.content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={cx(classes.actionAll)}>
          <div className={classes.clickAll}>{tHome('ALL-PRODUCTS')}</div>
        </div>
      </div>
    </section>
  )
}

export default Section3
