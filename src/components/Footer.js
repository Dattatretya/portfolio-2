import React from 'react'
import { MdAlternateEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className='flex justify-center text-violet-950'>
      <div className=' bg-violet-300 py-4 px-16 rounded-lg '>
      <a className='flex items-center' href='mailto:dattatreyasengupta.work@gmail.com'>Email(✉️) : dattatreyasengupta.work@gmail.com </a>
      <a className='flex items-center' href='tel:+918787412803'>Mobile(📱) : (+91) 8787412803 </a>
      </div>
    </div>
  )
}

export default Footer