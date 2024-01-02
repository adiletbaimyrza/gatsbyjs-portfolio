import React from 'react'
import wavingHand from '../../images/waving-hand.png'
import { hero } from './hero.module.css'
const Hero = () => {
  console.log(wavingHand)
  return (
    <div className={hero}>
      Hero <img src={wavingHand} />
    </div>
  )
}

export default Hero
