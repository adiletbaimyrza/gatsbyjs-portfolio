import React from 'react'
import { TextLoop } from 'react-text-loop-next'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import wavingHand from '../images/waving-hand.png'

const Hero = () => {
  return (
    <HeroContainer>
      <DivFlex>
        <H1>Hi, I am Adilet</H1>
        <img css={imageStyles} src={wavingHand} />
      </DivFlex>
      <H1>
        I{' '}
        <TextLoop
          delay={300}
          mask={true}
          interval={2500}
          springConfig={{ stiffness: 200, damping: 15 }}
        >
          <AccentedText>build</AccentedText>
          <AccentedText>design</AccentedText>
          <AccentedText>develop</AccentedText>
        </TextLoop>{' '}
        user-friendly web products
      </H1>
    </HeroContainer>
  )
}

export default Hero

const DivFlex = styled.div`
  display: flex;
  align-items: center;
`

const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.5;
`

const AccentedText = styled.p`
  color: var(--text-on-hover);
`

const imageStyles = css`
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 1rem;
`

const HeroContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
`
