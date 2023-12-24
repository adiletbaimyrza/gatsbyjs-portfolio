import React from 'react'
import { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import ResumeDialog from '../resumeDialog/resumeDialog'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import {
  navigationResponsive,
  drawerButton,
  iconWrapper,
  icon,
  navItem,
  resumeButton,
  close,
} from './drawer.module.css'

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const handleClick = () => {
    setIsDrawerOpen(false)
  }

  return (
    <>
      <ul
        id="menu"
        className={navigationResponsive}
        style={{ display: isDrawerOpen ? 'flex' : 'none' }}
      >
        <li className={`${navItem} ${close}`}>
          <button onClick={handleClick}>
            <FontAwesomeIcon className={icon} icon={faXmark} />
          </button>
        </li>
        <GatsbyLink className={navItem} onClick={handleClick} to={'/'}>
          Home
        </GatsbyLink>
        <GatsbyLink className={navItem} onClick={handleClick} to={'/blog'}>
          Blog
        </GatsbyLink>
        <GatsbyLink className={navItem} onClick={handleClick} to={'/about'}>
          About
        </GatsbyLink>
        <GatsbyLink className={navItem} to={'/projects'}>
          Projects
        </GatsbyLink>
        <li className={`${navItem} ${resumeButton}`}>
          <ResumeDialog />
        </li>
        <GatsbyLink className={navItem} onClick={handleClick} to={'/bookshelf'}>
          Bookshelf
        </GatsbyLink>
      </ul>

      <button onClick={handleDrawer} className={drawerButton}>
        <div className={iconWrapper}>
          <FontAwesomeIcon className={icon} icon={faBars} />
        </div>
      </button>
    </>
  )
}

export default Drawer
