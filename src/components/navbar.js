import React from 'react'

import { Link } from 'gatsby'

import {
  socials,
  socialsItem,
  settings,
  settingsItem,
  navigation,
  navItem,
  upperNavbar,
  mainNavbar,
  fullname,
} from './navbar.module.css'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailIcon from '@mui/icons-material/Mail'
import TranslateIcon from '@mui/icons-material/Translate'
import LightModeIcon from '@mui/icons-material/LightMode'

const Navbar = () => {
  return (
    <nav>
      <div className={upperNavbar}>
        <ul className={socials}>
          <li className={socialsItem}>
            <Link to="https://linkedin.com/in/adiletbaimyrza" target="_blank">
              <LinkedInIcon />
            </Link>
          </li>
          <li className={socialsItem}>
            <Link to="https://github.com/adiletbaimyrza" target="_blank">
              <GitHubIcon />
            </Link>
          </li>
          <li className={socialsItem}>
            <MailIcon />
          </li>
        </ul>

        <ul className={settings}>
          <li className={settingsItem}>
            <TranslateIcon />
          </li>
          <li className={settingsItem}>
            <LightModeIcon />
          </li>
        </ul>
      </div>
      <div className={mainNavbar}>
        <h4 className={fullname}>Adilet Baimyrza</h4>

        <ul className={navigation}>
          <li className={navItem}>Home</li>
          <li className={navItem}>About</li>
          <li className={navItem}>Projects</li>
          <li className={navItem}>Resume</li>
          <li className={navItem}>Bookshelf</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
