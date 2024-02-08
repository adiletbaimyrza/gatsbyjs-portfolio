import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/react'

const LatestProjects = () => {
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

  const latestThree = data.allMdx.nodes.slice(0, 3)

  return (
    <Container>
      <Header>
        <H1>Projects</H1>
        <BlogLink to="/projects">View All</BlogLink>
      </Header>
      <Grid>
        {latestThree.map((node, index) => {
          const image = getImage(node.frontmatter.hero_image)
          return (
            <Card key={index} to={`/${node.frontmatter.slug}`}>
              <GatsbyImage
                image={image}
                css={imageStyles}
                alt={node.frontmatter.hero_image_alt}
              />

              <TextContainer>
                <H2>{node.frontmatter.title}</H2>

                <DivFlex>
                  <DateText>
                    {new Date(node.frontmatter.date).toLocaleDateString(
                      'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}{' '}
                    •
                  </DateText>
                  <Tag>{node.frontmatter.tag}</Tag>
                </DivFlex>
              </TextContainer>
            </Card>
          )
        })}
      </Grid>
    </Container>
  )
}

export default LatestProjects

const H1 = styled.h1``

const DivFlex = styled.div`
  display: flex;
  align-items: center;
`

const Tag = styled.p`
  margin-left: 0.2rem;
  color: orange;
`

const H2 = styled.h2`
  margin-bottom: 1rem;
`
const DateText = styled.p`
  color: grey;
  font-size: 0.8rem;
`
const imageStyles = css`
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`

const Container = styled.div`
  margin: 0 0.2rem 6.5rem 0.2rem;

  @media screen and (max-width: 600px) {
    margin: 0 1rem 6.5rem 1rem;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
const Card = styled(GatsbyLink)`
  border-radius: 0.5rem;
  background-color: var(--card-bg-color);
  border: 3px solid var(--card-bg-color);
  transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`
const TextContainer = styled.div`
  padding: 1rem;
`
const BlogLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`

const BlogLink = styled(GatsbyLink)`
  font-size: 1.1rem;
  background-color: var(--card-bg-color);
  padding: 0.6rem;
  border-radius: 0.2rem;

  &:hover {
    color: var(--text-on-hover);
  }
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  margin-bottom: 3rem;
`
