import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { navItem } from './navLink.module.css'

const NavLink = ({ to, children, onClick }) => (
  <li className={navItem}>
    <GatsbyLink onClick={onClick} to={to}>
      {children}
    </GatsbyLink>
  </li>
)

export default NavLink
