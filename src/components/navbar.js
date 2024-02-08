import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import ToggleThemeButton from './toggleThemeButton'
import styled from '@emotion/styled'

const NavLink = ({ to, children, onClick }) => (
  <ListItem>
    <GatsbyLink onClick={onClick} to={to}>
      {children}
    </GatsbyLink>
  </ListItem>
)

const Navbar = () => {
  return (
    <Nav>
      <Navigation>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/blog'}>Blog</NavLink>
        <NavLink to={'/projects'}>Projects</NavLink>
        <NavLink to={'/resume'}>Resume</NavLink>
        <NavLink to={'/bookshelf'}>Bookshelf</NavLink>
      </Navigation>
      <ToggleThemeButton />
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`

const ListItem = styled.li`
  margin: 0.3rem;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--card-bg-color);
  cursor: pointer;

  & > * {
    padding: 0.5rem 0.6rem;
  }

  &:hover {
    background-color: var(--card-bg-color);
  }
`

const Navigation = styled.ul`
  display: flex;

  @media screen and (max-width: 600px) {
    display: none;
  }
`
