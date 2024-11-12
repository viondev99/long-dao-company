import { StaticImageData } from 'next/image'

export interface ListImageSection4 {
  id: string
  src: StaticImageData
  alt: string
}

export interface ListItemSection5 {
  id: string
  img: ImageSection5
  title: string
  content: string
}

type ImageSection5 = {
  id: string
  src: StaticImageData
  alt: string
}

export interface ListLogoSection7 {
  id: string
  img: StaticImageData
  alt: string
}

type ImgSection8 = {
  id: string
  src: StaticImageData
  alt: string
}

type linkURL = {
  url: string
  text: string
}

export interface ListItemRightSection8 {
  id: string
  img: ImgSection8
  title: string
  content: string
  linkURL: linkURL
}

export interface ListItemLeftSection8 {
  id: string
  title: string
  content: string
}
