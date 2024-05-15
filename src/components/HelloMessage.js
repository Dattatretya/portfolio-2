import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const HelloMessage = () => {
  return (
    <TypeAnimation
    className='m-2 flex justify-center font-bold text-3xl'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hello!',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Welcome to my Portfolio.',
        1000,
        
      ]}
      wrapper="span"
      speed={30}
      //style={{ fontSize: '3em',font:'bold' , display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default HelloMessage