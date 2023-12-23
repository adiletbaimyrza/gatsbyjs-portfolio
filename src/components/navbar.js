import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Socials from './socials'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import {
  settings,
  settingsItem,
  navigation,
  navItem,
  upperNavbar,
  mainNavbar,
  fullname,
  toggleThemeButton,
  avatar,
  avatarFullname,
  icon,
  drawerButton,
  navigationResponsive,
} from './navbar.module.css'

const NavLink = ({ to, children, onClick }) => (
  <li className={navItem}>
    <GatsbyLink onClick={onClick} to={to}>
      {children}
    </GatsbyLink>
  </li>
)

const ToggleThemeButton = () => {
  const initialTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(initialTheme)

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button className={toggleThemeButton} onClick={toggleTheme}>
      {theme === 'light' ? (
        <DarkModeIcon className={icon} />
      ) : (
        <LightModeIcon className={icon} />
      )}
    </button>
  )
}

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const handleNavLinkResponsive = () => {
    setIsDrawerOpen(false)
    console.log('click')
  }

  return (
    <nav>
      <div className={upperNavbar}>
        <Socials />

        <ul className={settings}>
          <li className={settingsItem}>
            <ToggleThemeButton />
          </li>
        </ul>
      </div>

      <div className={mainNavbar}>
        <div className={avatarFullname}>
          <StaticImage
            className={avatar}
            alt="Adilet Baimyrza"
            src={'../images/profilePic.JPG'}
          />
          <GatsbyLink to="/">
            <h4 className={fullname}>Adilet Baimyrza</h4>
          </GatsbyLink>
        </div>

        <ul
          id="menu"
          className={navigationResponsive}
          style={{ display: isDrawerOpen ? 'flex' : 'none' }}
        >
          <NavLink onClick={handleNavLinkResponsive} to={'/'}>
            Home
          </NavLink>
          <NavLink onClick={handleNavLinkResponsive} to={'/about'}>
            About
          </NavLink>
          <NavLink to={'/projects'}>Projects</NavLink>
          <li className={navItem}>Resume</li>
          <NavLink onClick={handleNavLinkResponsive} to={'/bookshelf'}>
            Bookshelf
          </NavLink>
        </ul>

        <ul className={navigation}>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/projects'}>Projects</NavLink>
          <li className={navItem}>Resume</li>
          <NavLink to={'/bookshelf'}>Bookshelf</NavLink>
        </ul>

        <button onClick={handleDrawer} className={drawerButton}>
          {isDrawerOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
