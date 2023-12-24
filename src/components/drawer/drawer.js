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
  slide,
  slideBack,
} from './drawer.module.css'

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)

    document.getElementById('menu').classList.remove(slideBack)
    document.getElementById('menu').classList.add(slide)
  }

  const handleClick = () => {
    setIsDrawerOpen(false)
  }

  const addSlideBack = () => {
    document.getElementById('menu').classList.remove(slide)
    document.getElementById('menu').classList.add(slideBack)
  }

  return (
    <>
      <ul
        id="menu"
        className={navigationResponsive}
        style={{ display: isDrawerOpen ? 'flex' : 'none' }}
      >
        <li className={`${navItem} ${close}`}>
          <button
            onClick={() => {
              addSlideBack()
              setTimeout(handleClick, 300)
            }}
          >
            <FontAwesomeIcon className={icon} icon={faXmark} />
          </button>
        </li>

        <div
          onClick={() => {
            addSlideBack()
            setTimeout(handleClick, 1000)
          }}
        >
          <GatsbyLink className={navItem} to={'/'}>
            Home
          </GatsbyLink>
        </div>

        <GatsbyLink
          className={navItem}
          onClick={() => {
            addSlideBack()
            setTimeout(handleClick, 1000)
          }}
          to={'/blog'}
        >
          Blog
        </GatsbyLink>
        <GatsbyLink
          className={navItem}
          onClick={() => {
            addSlideBack()
            setTimeout(handleClick, 1000)
          }}
          to={'/about'}
        >
          About
        </GatsbyLink>
        <GatsbyLink className={navItem} to={'/projects'}>
          Projects
        </GatsbyLink>
        <li className={`${navItem} ${resumeButton}`}>
          <ResumeDialog />
        </li>
        <GatsbyLink
          className={navItem}
          onClick={() => {
            addSlideBack()
            setTimeout(handleClick, 1000)
          }}
          to={'/bookshelf'}
        >
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
