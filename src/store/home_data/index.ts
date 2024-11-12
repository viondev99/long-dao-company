import {
  ListImageSection4,
  ListItemSection5,
  ListLogoSection7,
  ListItemRightSection8,
  ListItemLeftSection8,
} from '@/models/home'

import img1Section4 from '../../assets/img/home/section4/img1S4.png'
import img2Section4 from '../../assets/img/home/section4/img2S4.png'
import img3Section4 from '../../assets/img/home/section4/img3S4.png'
import img4Section4 from '../../assets/img/home/section4/img4S4.png'

import img1Section5 from '../../assets/img/home/section5/figure1_section5.png'
import img2Section5 from '../../assets/img/home/section5/figure2_section5.png'
import img3Section5 from '../../assets/img/home/section5/figure3_section5.png'

import logo1Section7 from '../../assets/img/home/section7/logo1.png'
import logo2Section7 from '../../assets/img/home/section7/logo2.png'
import logo3Section7 from '../../assets/img/home/section7/logo3.png'
import logo4Section7 from '../../assets/img/home/section7/logo4.png'
import logo5Section7 from '../../assets/img/home/section7/logo5.png'
import logo6Section7 from '../../assets/img/home/section7/logo6.png'

import img1Section8 from '../../assets/img/home/section8/img1.png'
import img2Section8 from '../../assets/img/home/section8/img2.png'

export const listImageSection4: ListImageSection4[] = [
  {
    id: 'img1',
    src: img1Section4,
    alt: 'an image',
  },
  {
    id: 'img2',
    src: img2Section4,
    alt: 'an image',
  },
  {
    id: 'img3',
    src: img3Section4,
    alt: 'an image',
  },
  {
    id: 'img4',
    src: img4Section4,
    alt: 'an image',
  },
]

export const listItemSection5: ListItemSection5[] = [
  {
    id: 'item1',
    img: {
      id: 'img1',
      src: img1Section5,
      alt: 'image number 1',
    },
    title: 'Prepare Money',
    content:
      'Of course, before every trip, money is a prerequisite to know where we can go',
  },
  {
    id: 'item2',
    img: {
      id: 'img2',
      src: img2Section5,
      alt: 'image number 2',
    },
    title: 'Explore And Have Fun',
    content:
      'SWalk around and admire the scenery, take pictures, and eat delicious food there',
  },
  {
    id: 'item3',
    img: {
      id: 'img3',
      src: img3Section5,
      alt: 'image number 3',
    },
    title: 'Handrail Karaoke',
    content:
      'After a day of exploring, this is the place I want to go to have fun, watch the beautiful maids and have fun with them.',
  },
]

export const listLogoSection7: ListLogoSection7[] = [
  {
    id: 'logo1',
    img: logo1Section7,
    alt: 'an image logo',
  },
  {
    id: 'logo2',
    img: logo2Section7,
    alt: 'an image logo',
  },
  {
    id: 'logo3',
    img: logo3Section7,
    alt: 'an image logo',
  },
  {
    id: 'logo4',
    img: logo4Section7,
    alt: 'an image logo',
  },
  {
    id: 'logo5',
    img: logo5Section7,
    alt: 'an image logo',
  },
  {
    id: 'logo6',
    img: logo6Section7,
    alt: 'an image logo',
  },
]

export const listItemLeftSection8: ListItemLeftSection8[] = [
  {
    id: 'menu1',
    title: 'Style',
    content: 'Summer: shorts, T-shirt. Winter: trousers, warm jacket',
  },
  {
    id: 'menu2',
    title: 'Hobby',
    content:
      'Video game, fishing, badminton, football, handrail karaoke, taking photos',
  },
  {
    id: 'menu3',
    title: 'Goût',
    content:
      'Maybe I’ll talk about my girlfriend Goût. I’m not good at flirting, so just As a girl, pretty, delicious, the richer the better. Just that doesn’t need much',
  },
  {
    id: 'menu4',
    title: 'Orientation',
    content:
      'Programming is a difficult profession with a high income, so I will not quit this profession because I put a lot of effort and determination into becoming a programmer. Maybe I’ll stick with this job until I see I need to stop to do something else that works better suitable with me',
  },
]

export const listItemRightSection8: ListItemRightSection8[] = [
  {
    id: 'el1',
    img: {
      id: 'img1',
      alt: 'an image',
      src: img1Section8,
    },
    title:
      'For the first time in my life I bleached my hair, colored it and related stories.',
    content:
      'It was an early winter day, close to my birthday. The decision to dye my hair came from many things, many events, many people and many things that influenced my thinking.',
    linkURL: {
      text: 'Read More',
      url: '/',
    },
  },
  {
    id: 'el2',
    img: {
      id: 'img1',
      alt: 'an image',
      src: img2Section8,
    },
    title: 'My high school love story and love story as a programmer.',
    content:
      'A teacher told me a great quote: a programmer should have 3 things at a young age: a motorbike, write a blog, and having a girlfriend.',
    linkURL: {
      text: 'Read More',
      url: '/',
    },
  },
]
