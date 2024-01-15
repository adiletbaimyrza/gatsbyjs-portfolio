import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const AboutMe = () => {
  return (
    <>
      <H1>About me</H1>
      <Container>
        <StaticImage css={Image} src={'../images/myPic.jpg'} />

        <Text>
          I love the part of web development, where quality code meets an
          elegant design. When that happens, user-friendly products are born. I
          want to be the best professional I can become, so I dedicate a major
          part of my life to learning various aspects of web development. More
          importantly, I am committed to details, because I believe that small
          things, though they may appear insignificant to others, make a real
          difference in creating the best user experiences.{' '}
          <GatsbyLink to={'/about'}>Learn more...</GatsbyLink>
        </Text>
      </Container>
    </>
  )
}

export default AboutMe

const H1 = styled.h1`
  margin: 0 0.2rem;

  @media screen and (max-width: 600px) {
    margin: 0 1rem;
  }
`

const Container = styled.div`
  display: flex;
  margin: 3rem 0.2rem 6.5rem 0.2rem;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    margin: 3rem 1rem;
  }
`

const Image = css`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  border: 3px solid var(--text-on-hover);
  flex-shrink: 0;
`

const Text = styled.div`
  font-size: 1.1rem;
  margin-left: 3rem;
  line-height: 1.5;
  @media screen and (max-width: 600px) {
    margin: 2rem 0 0 0;
  }
`
const GatsbyLink = styled(Link)`
  color: var(--text-on-hover);

  &:hover {
    text-decoration: underline;
  }
`
