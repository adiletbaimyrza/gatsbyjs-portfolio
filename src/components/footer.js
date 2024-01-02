import React from 'react'
import Socials from './socials'
import { Link as GatsbyLink } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
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
    <MainFooter>
      <UpperFooter>
        <Column>
          <div>
            <H4>Adilet Baimyrza</H4>
            <Motto>
              I help people and teams by building and developing beautifully
              designed user-friendly products.
            </Motto>
            <Socials />
          </div>
        </Column>

        <Column>
          <h4>Navigation</h4>
          <ul>
            <FooterLink to={'/'}>Home</FooterLink>
            <FooterLink to={'/blog'}>Blog</FooterLink>
            <FooterLink to={'/about'}>About</FooterLink>
            <FooterLink to={'/projects'}>Projects</FooterLink>
            <FooterLink to={'/bookshelf'}>Bookshlef</FooterLink>
          </ul>
        </Column>

        <Column>
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
        </Column>

        <Column>
          <h4>Latest projects</h4>
          <ul>
            <li>project number 1</li>
            <li>project number 2</li>
            <li>project number 3</li>
            <li>project number 4</li>
          </ul>
        </Column>
      </UpperFooter>

      <SubFooter>
        <SubContainer>
          <SubItem>&#169; 2023 Adilet Baimyrza</SubItem>
          <SubItem>Privacy</SubItem>
          <SubItem>Terms</SubItem>
        </SubContainer>
      </SubFooter>
    </MainFooter>
  )
}

export default Footer

const Link = styled(GatsbyLink)`
  &:hover {
    text-decoration: underline;
    color: var(--text-on-hover);
  }
`
const Motto = styled.blockquote`
  max-width: 300px;
  margin-bottom: 2rem;
  margin: 0.5rem;
`
const H4 = styled.h4`
  margin-left: 0.5rem;
`
const Column = styled.div`
  margin: 0 1rem;
`
const MainFooter = styled.footer`
  background-color: var(--foo-bg-color);
  color: var(--foo-color);
  padding-top: 1rem;
  line-height: 2;
  font-size: 0.9rem;
`
const UpperFooter = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: space-around;
  padding: 1rem 0;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }
`
const SubFooter = styled.div`
  border-top: 1px solid grey;
`
const SubContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  max-width: 500px;
  margin: 0 auto;
  padding: 0.6rem;
`
const SubItem = styled.li`
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
    color: var(--text-on-hover);
    cursor: pointer;
  }
`
