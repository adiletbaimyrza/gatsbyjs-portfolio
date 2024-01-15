import React from 'react'
import { TextLoop } from 'react-text-loop-next'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import wavingHand from '../images/waving-hand.png'

const Hero = () => {
  return (
    <HeroContainer>
      <DivFlex>
        <H1>Hi, I am Adilet</H1>
        <img css={imageStyles} src={wavingHand} />
      </DivFlex>
      <H2>
        I{' '}
        <TextLoop
          delay={300}
          mask={true}
          interval={2000}
          springConfig={{ stiffness: 200, damping: 15 }}
        >
          <AccentedText>build</AccentedText>
          <AccentedText>design</AccentedText>
          <AccentedText>develop</AccentedText>
        </TextLoop>{' '}
        user-friendly web products
      </H2>
    </HeroContainer>
  )
}

export default Hero

const DivFlex = styled.div`
  display: flex;
  align-items: center;
`

const H1 = styled.h1`
  font-size: 3rem;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`

const H2 = styled.h2`
  font-size: 3rem;
  line-height: 1.5;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`

const AccentedText = styled.p`
  color: var(--text-on-hover);
`

const wave = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`

const imageStyles = css`
  width: 4.2rem;
  height: 4.2rem;
  margin: 1rem;
  transform-origin: 40px 40px;

  animation: ${wave} 2s ease-in-out 1s;

  @media screen and (max-width: 600px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`

const HeroContainer = styled.div`
  margin: 6.5rem 0.2rem;

  @media screen and (max-width: 600px) {
    margin: 1rem 1rem 4rem 1rem;
  }
`
