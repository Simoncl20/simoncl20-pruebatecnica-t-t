import React, { ReactNode } from 'react'
import NavBar from './NavBar'
import { Footer } from './Footer'

const Layout = ({children} : {children: ReactNode}) => {
  return (
    <main>
        <NavBar />
        {children}
        <Footer />
    </main>
  )
}

export default Layout