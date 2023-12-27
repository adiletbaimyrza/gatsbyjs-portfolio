import React from 'react'
import Socials from '../socials/socials'
import { Link as GatsbyLink } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

import {
  mainFooter,
  subFooter,
  footerColumn,
  motto,
  link,
  subItem,
  subContainer,
  copyright,
} from './footer.module.css'

const FooterLink = ({ to, children }) => (
  <li>
    <GatsbyLink className={link} to={to}>
      {children}
    </GatsbyLink>
  </li>
)

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            slug
            title
          }
          excerpt
          id
        }
      }
    }
  `)

  return (
    <footer>
      <div className={mainFooter}>
        <div className={footerColumn}>
          <div>
            <h4 style={{ marginLeft: '0.5rem' }}>Adilet Baimyrza</h4>
            <blockquote className={motto}>
              I help people and teams by building and developing beautifully
              designed user-friendly products.
            </blockquote>
            <Socials />
          </div>
        </div>

        <div className={footerColumn}>
          <h4>Navigation</h4>
          <ul>
            <FooterLink to={'/'}>Home</FooterLink>
            <FooterLink to={'/blog'}>Blog</FooterLink>
            <FooterLink to={'/about'}>About</FooterLink>
            <FooterLink to={'/projects'}>Projects</FooterLink>
            <FooterLink to={'/bookshelf'}>Bookshlef</FooterLink>
          </ul>
        </div>

        <div className={footerColumn}>
          <h4>Latest articles</h4>
          <ul>
            {data.allMdx.nodes.map((node) => (
              <li key={node.id}>
                <GatsbyLink to={`/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </GatsbyLink>
              </li>
            ))}
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
        <ul className={subContainer}>
          <div className={copyright}>&#169; 2023 Adilet Baimyrza</div>
          <div className={subItem}>Privacy</div>
          <div className={subItem}>Terms</div>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
