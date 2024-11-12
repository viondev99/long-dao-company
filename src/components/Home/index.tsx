import React, { FC } from 'react'
import Image from 'next/image'
import bgPage from '../../assets/img/home/backgroundImgPage.png'
import classes from './home.module.scss'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

const Home: FC = () => {
  return (
    <div className='Container'>
      <Image
        src={bgPage}
        alt='backgound page'
        priority
        className={classes.ImgBg}
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  )
}

export default Home
