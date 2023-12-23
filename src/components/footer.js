import React from 'react'
import Socials from './socials'
import { Link as GatsbyLink } from 'gatsby'

import { mainFooter, subFooter, footerColumn } from './footer.module.css'

const FooterLink = ({ to, children }) => (
  <li>
    <GatsbyLink to={to}>{children}</GatsbyLink>
  </li>
)

const Footer = () => {
  return (
    <footer>
      <div className={mainFooter}>
        <div className={footerColumn}>
          <div>
            <h4>Adilet Baimyrza</h4>
            <p>I am helping people by creating beautiful websites</p>
            <Socials />
          </div>
        </div>

        <div className={footerColumn}>
          <h4>Navigation</h4>
          <ul>
            <FooterLink to={'/'}>Home</FooterLink>
            <FooterLink to={'/about'}>About</FooterLink>
            <FooterLink to={'/projects'}>Projects</FooterLink>
            <FooterLink to={'/bookshelf'}>Bookshlef</FooterLink>
          </ul>
        </div>

        <div className={footerColumn}>
          <h4>Latest blog posts</h4>
          <ul>
            <li>project number 1</li>
            <li>project number 2</li>
            <li>project number 3</li>
            <li>project number 4</li>
          </ul>
        </div>

        <div className={footerColumn}>
          <h4>Latest projects</h4>
          <ul>
            <li>project number 1</li>
            <li>project number 2</li>
            <li>project number 3</li>
            <li>project number 4</li>
          </ul>
        </div>
      </div>

      <div className={subFooter}>
        <ul>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Imprint</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
