import React from 'react'
import { useState } from 'react'
import { useLocation } from '@reach/router'
import { Link as GatsbyLink, navigate } from 'gatsby'
import ResumeDialog from './resumeDialog'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'

const NavLink = ({ to, children, onClick }) => {
  return (
    <ListItem>
      <GatsbyLink onClick={onClick} to={to}>
        {children}
      </GatsbyLink>
    </ListItem>
  )
}

const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(null)
  const { pathname } = useLocation()

  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen)
  }

  const navigateWithDelayTo = (path) => {
    toggleDrawerOpen()

    setTimeout(() => {
      navigate(path)
    }, 300)
  }

  return (
    <>
      <ResponsiveNav id="menu" drawerOpen={drawerOpen}>
        <CloseListItem>
          <button onClick={toggleDrawerOpen} aria-label="Close drawer">
            <Icon icon={faXmark} />
          </button>
        </CloseListItem>

        <NavLink
          onClick={() => {
            navigateWithDelayTo('/')
          }}
          to={pathname}
        >
          Home
        </NavLink>

        <NavLink
          onClick={() => {
            navigateWithDelayTo('/blog')
          }}
          to={pathname}
        >
          Blog
        </NavLink>

        <NavLink
          onClick={() => {
            navigateWithDelayTo('/about')
          }}
          to={pathname}
        >
          About
        </NavLink>

        <NavLink
          onClick={() => {
            navigateWithDelayTo('/projects')
          }}
          to={pathname}
        >
          Projects
        </NavLink>

        <ListItem>
          <ResumeDialog />
        </ListItem>

        <NavLink
          onClick={() => {
            navigateWithDelayTo('/bookshelf')
          }}
          to={pathname}
        >
          Bookshelf
        </NavLink>
      </ResponsiveNav>

      <MenuButton onClick={toggleDrawerOpen}>
        <IconWrapper>
          <Icon icon={faBars} />
        </IconWrapper>
      </MenuButton>
    </>
  )
}

export default Drawer

const ListItem = styled.li`
  display: flex;
  & > *:not(:first-child) {
    align-items: start;
  }
  font-size: 1.5rem;
  margin: 0.6rem 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: var(--text-on-hover);
  }
`

const CloseListItem = styled(ListItem)`
  justify-content: flex-end;
`

const MenuButton = styled.button`
  display: none;
  padding: 0.2rem;
  margin: 0.3rem;

  @media screen and (max-width: 600px) {
    display: block;
  }
`

const IconWrapper = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  transition: color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--card-bg-color);
  }
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`
const ResponsiveNav = styled.ul`
  ${({ drawerOpen }) =>
    drawerOpen === null ? '' : drawerOpen ? slideIn : slideOut}

  display: none;
  z-index: 10;

  @media screen and (max-width: 600px) {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    background-color: var(--main-bg-color);
  }
`

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideOutAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`

const slideIn = css`
  animation: ${slideInAnimation} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)
    forwards;
`

const slideOut = css`
  animation: ${slideOutAnimation} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)
    forwards;
`
