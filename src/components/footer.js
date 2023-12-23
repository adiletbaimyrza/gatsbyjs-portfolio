import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

import {
  mainFooter,
  subFooter,
  socials,
  socialsItem,
  footerColumn,
} from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={mainFooter}>
        <div className={footerColumn}>
          <div>
            <h4>Adilet Baimyrza</h4>
            <p>I am helping people by creating beautiful websites</p>
          </div>

          <ul className={socials}>
            <li className={socialsItem}>
              <LinkedInIcon />
            </li>
            <li className={socialsItem}>
              <GitHubIcon />
            </li>
            <li className={socialsItem}>
              <FacebookIcon />
            </li>
            <li className={socialsItem}>
              <InstagramIcon />
            </li>
          </ul>
        </div>

        <div className={footerColumn}>
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Bookshelf</li>
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
