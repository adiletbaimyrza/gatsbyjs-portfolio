import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { useEffect } from 'react'

import './layout.css'

const Layout = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  })

  return (
    <div className="container">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
