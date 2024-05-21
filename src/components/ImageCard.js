import React, { useState } from 'react'

const ImageCard = () => {

    const [front, setFront] = useState(true)

  return (
    <div onMouseEnter={()=>setFront(false)} onMouseLeave={()=>setFront(true)}>
       {front===true? 
       (
       <img className='h-48 w-36 mx-1 rounded-lg' src='https://i.postimg.cc/BvTds2cd/IMG-20240503-063654-277.jpg' alt='' />
       ):
       (
        <div className="h-48 w-36 mx-1 rounded-lg">
            <p className='absolute w-32 m-2 text-lime-200'>Currently learning on how to create browser extensions</p>
            <div className="h-48 w-36 flex bg-[url('https://i.postimg.cc/BvTds2cd/IMG-20240503-063654-277.jpg')] bg-contain hover:opacity-20 rounded-lg">
            </div>
        </div>
       )
        }
    </div>
  )
}

export default ImageCard