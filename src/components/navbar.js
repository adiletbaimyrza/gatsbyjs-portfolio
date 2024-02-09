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
        <NavLink to={'/bookshelf'}>Bookshelf</NavLink>
      </Navigation>
      <ToggleThemeButton />
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`

const Navigation = styled.ul`
  display: flex;
`

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--btn-border);
  cursor: pointer;

  & a {
    padding: 0.5rem 0.6rem;
  }

  &:hover {
    background-color: var(--btn-bg-hover);
    border-color: var(--btn-border-hover);
  }
`
