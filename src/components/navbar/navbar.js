import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import NavLink from '../navLink/navlink'
import { StaticImage } from 'gatsby-plugin-image'
import Socials from '../socials/socials'
import ToggleThemeButton from '../toggleThemeButton/toggleThemeButton'
import Drawer from '../drawer/drawer'
import ResumeDialog from '../resumeDialog/resumeDialog'

import {
  navigation,
  upperNavbar,
  mainNavbar,
  settings,
  settingsItem,
  fullname,
  avatar,
  avatarFullname,
  resumeButton,
} from './navbar.module.css'

const Navbar = () => {
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
            alt="Adilet Baimyrza's avatar picture."
            src={'../../images/avatar.jpg'}
          />
          <GatsbyLink to="/">
            <h4 className={fullname}>Adilet Baimyrza</h4>
          </GatsbyLink>
        </div>

        <ul className={navigation}>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/blog'}>Blog</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/projects'}>Projects</NavLink>
          <li className={resumeButton}>
            <ResumeDialog />
          </li>
          <NavLink to={'/bookshelf'}>Bookshelf</NavLink>
        </ul>

        <Drawer />
      </div>
    </nav>
  )
}

export default Navbar
