import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { useEffect } from 'react'

import './layout.css'

const Layout = ({ children }) => {
  useEffect(() => {
    const userCurrentPreference = localStorage.getItem('theme')

    if (userCurrentPreference) {
      document.documentElement.classList.add(userCurrentPreference)
    } else {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }
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
