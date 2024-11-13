import React, { FC, useEffect, useState } from 'react'
import classes from './section6.module.scss'
import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper as SwiperInstance } from 'swiper/types'
import Image, { StaticImageData } from 'next/image'

import arrow_left from '../../../assets/icons/home/arrow_white_left.svg'
import arrow_right from '../../../assets/icons/home/arrow_white_right.svg'
import img1 from '../../../assets/img/home/section6/img1.webp'
import img2 from '../../../assets/img/home/section6/img2.jpg'
import img3 from '../../../assets/img/home/section6/img3.webp'
import img4 from '../../../assets/img/home/section6/img4.webp'
import img5 from '../../../assets/img/home/section6/img5.jpg'
import img6 from '../../../assets/img/home/section6/img6.jpg'

interface ListSlide {
  id: string
  img: StaticImageData
  des: string
}

const Section6: FC = () => {
  const { t: tHome } = useTranslation('pages/home')
  const [swiperRef, setSwiperRef] = useState<SwiperInstance>()
  const [currentIndex, setCurrentIndex] = useState(1) // Track current index (1-based)
  const [slidesPerView, setSlidesPerView] = useState(2.5) // Default for desktop

  const handleSlideChange = (swiper: SwiperInstance) => {
    const newIndex = swiper.realIndex + 1 // realIndex is 0-based
    setCurrentIndex(newIndex)
  }

  const listSlide: ListSlide[] = [
    { id: '1', img: img1, des: tHome('DES-1-SLIDE') },
    { id: '2', img: img2, des: tHome('DES-2-SLIDE') },
    { id: '3', img: img3, des: tHome('DES-3-SLIDE') },
    { id: '4', img: img4, des: tHome('DES-4-SLIDE') },
    { id: '5', img: img5, des: tHome('DES-5-SLIDE') },
    { id: '6', img: img6, des: tHome('DES-6-SLIDE') },
  ]

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(window.innerWidth <= 767.98 ? 1.5 : 2.5)
    }

    updateSlidesPerView() // Set initial value
    window.addEventListener('resize', updateSlidesPerView)

    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])

  return (
    <section className={classes.section6}>
      <div className={cx(classes.coverContent, 'contentMaxWidth')}>
        <div className={classes.swiperContainer}>
          <div className={classes.wrapTitle}>
            <div className={classes.title}>{tHome('TITLE-SWIPER')}</div>
            <div className={classes.grpNavigation}>
              <button onClick={() => swiperRef?.slidePrev()}>
                <Image src={arrow_left} alt='arrow left' />
              </button>
              <div
                className={classes.indexNav}
              >{`${currentIndex}/${listSlide.length}`}</div>
              <button onClick={() => swiperRef?.slideNext()}>
                <Image src={arrow_right} alt='arrow right' />
              </button>
            </div>
          </div>
          <Swiper
            onSwiper={setSwiperRef}
            onSlideChange={handleSlideChange}
            modules={[Navigation]}
            // navigation
            loop={true}
            slidesPerView={slidesPerView} // Display 2.5 slides at once
            spaceBetween={16} // Space between slides
          >
            {listSlide.map((it, index) => (
              <SwiperSlide key={it.id} className={classes.slideItem}>
                <Image
                  src={it.img}
                  alt={`Slide ${index + 1}`}
                  className={classes.imgSlide}
                />
                <div className={classes.des}>{it.des}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Section6
