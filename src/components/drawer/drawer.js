import React from 'react'
import { useState } from 'react'
import { Link as GatsbyLink, navigate } from 'gatsby'
import ResumeDialog from '../resumeDialog/resumeDialog'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from '@reach/router'

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

  const location = useLocation()

  return (
    <>
      <ul
        id="menu"
        className={navigationResponsive}
        style={{ visibility: isDrawerOpen ? 'visible' : 'hidden' }}
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

        <GatsbyLink
          className={navItem}
          onClick={() => {
            addSlideBack()
            setTimeout(() => {
              handleClick()
              navigate('/')
            }, 300)
          }}
          to={location.pathname}
        >
          Home
        </GatsbyLink>
        <GatsbyLink
          className={navItem}
          onClick={() => {
            addSlideBack()
            setTimeout(() => {
              handleClick()
              navigate('/blog')
            }, 300)
          }}
          to={location.pathname}
        >
          Blog
        </GatsbyLink>
        <GatsbyLink
          className={navItem}
          onClick={() => {
            addSlideBack()
            setTimeout(() => {
              handleClick()
              navigate('/about')
            }, 300)
          }}
          to={location.pathname}
        >
          About
        </GatsbyLink>

        <GatsbyLink
          className={navItem}
          onClick={() => {
            addSlideBack()
            setTimeout(() => {
              handleClick()
              navigate('/projects')
            }, 300)
          }}
          to={location.pathname}
        >
          Projects
        </GatsbyLink>
        <li className={`${navItem} ${resumeButton}`}>
          <ResumeDialog />
        </li>
        <GatsbyLink
          className={navItem}
          onClick={() => {
            addSlideBack()
            setTimeout(() => {
              handleClick()
              navigate('/bookshelf')
            }, 300)
          }}
          to={location.pathname}
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
