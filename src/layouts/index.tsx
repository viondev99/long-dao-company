import React, { FC, ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children?: ReactNode
}

const Layout: FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <main {...props}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
