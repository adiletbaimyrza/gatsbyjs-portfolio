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
      <SubItem>&#169; 2023 Adilet Baimyrza</SubItem>
      <Socials />
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
  display: flex;
  justify-content: space-evenly;
  padding-top: 1rem;
  line-height: 2;
  font-size: 0.9rem;
  max-width: 960px;
  margin: 0 auto;
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
