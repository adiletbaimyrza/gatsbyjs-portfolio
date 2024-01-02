import React from 'react'
import wavingHand from '../images/waving-hand.png'
const Hero = () => {
  console.log(wavingHand)
  return (
    <div>
      Hero <img src={wavingHand} />
    </div>
  )
}

export default Hero
