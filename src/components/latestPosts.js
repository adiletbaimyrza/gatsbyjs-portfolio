import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

const LatestPosts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
            slug
            hero_image_credit_text
            hero_image_credit_link
            hero_image_alt
            title
            tag
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Header>
        <H2>Latest Posts</H2>
        <BlogLink to="/blog">View All</BlogLink>
      </Header>
      {data.allMdx.nodes.map((node, index) => {
        return (
          <Post key={index} to={`/${node.frontmatter.slug}`}>
            <p>{node.frontmatter.title}</p>

            <DateText>
              {new Date(node.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })}
            </DateText>
          </Post>
        )
      })}
    </Container>
  )
}

export default LatestPosts

const Container = styled.div`
  margin-bottom: 5rem;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const H2 = styled.h1`
  font-size: 2rem;
`

const DateText = styled.div`
  color: grey;
  font-size: 0.8rem;
`

const Post = styled(GatsbyLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  border-bottom: 1px solid var(--btn-border);
  cursor: pointer;
  padding: 0.5rem 0 0.5rem 0;

  &:hover p {
    text-decoration: underline;
  }
`

const BlogLink = styled(GatsbyLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid var(--btn-border);
  cursor: pointer;
  padding: 0.5rem 0.6rem;

  &:hover {
    background-color: var(--btn-bg-hover);
    border-color: var(--btn-border-hover);
  }
`
