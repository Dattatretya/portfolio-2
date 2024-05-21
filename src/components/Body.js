import React, { useState } from 'react'
import Resume from '../resume/Resume.pdf'
import HelloMessage from './HelloMessage';
import { CiLocationOn } from "react-icons/ci";
import ImageCard from './ImageCard';
import Work from './Work';
import Contact from './Contact';
import { Link } from 'react-router-dom'




const Body = () => {

  const [skills, setSkills] = useState(true)
  const [helloMessage, setHelloMessage] = useState(true)

  const handleClick = () => {
    setSkills(!skills)
  }

  return (
    
    <div className='text-white'>

      {/* Location */}
      <div className='flex justify-center bg-gradient-to-l from-black p-2 w-80 rounded-3xl'>
        <h1 className='m-2'>Gurgaon | Willing to relocate</h1>
        <h2 className='flex items-center text-3xl animate-bounce m-2'><CiLocationOn /></h2>

      </div>

    {/* welcome message */}
      <div className='w-full' onClick={()=>{setHelloMessage(!helloMessage)}}>
      {helloMessage ?<HelloMessage/> : <p className='m-2 flex justify-center font-bold text-3xl'>Hello! I am Dattatreya Sengupta.</p>}
      </div>

      {/* Name and links  */}
      <div className='flex justify-center items-center m-2 p-3 mt-20 rounded-lg'>
        {/* <ImageCard/> */}
        <div className='p-2'>
        <h1 className='text-4xl p-2 transition duration-150 ease-in hover:ease-out'>Frontend Developer</h1>
        <h2 className='text-xl p-2 mb-2'>Aspiring MERN Stack Developer</h2>
        <div className='flex'>
        <a className='flex items-center p-1 border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200 animate-pulse' href='https://www.linkedin.com/in/dattatreya-sengupta-7627a1148/' target='_blank'>LinkedIn</a>
        <a className='flex items-center p-1 border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200 animate-pulse' href='https://github.com/Dattatretya' target='_blank'>Github</a>
        <a className='flex items-center p-1 border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200 animate-pulse' href={Resume} target='_blank' download="Dattatreya Sengupta Resume">Download Resume</a>
        </div>
        </div>
        
      </div> 

      {/* skills and intro */}

      <div className='flex justify-center text-yellow-200'>
      {skills===true? 
      (<div className='p-6 m-2 flex justify-center font-bold text-lg'>
        Proficient in React. Learning MERN and DSA.
      </div>) 
      : 
      (<div className='p-6 m-2 flex justify-center'>
        <h1>HTML | CSS | JavaScript | React JS | Tailwind CSS | Redux | Mongo DB | Node JS | Express JS | Python</h1>
      </div>)
      }
      </div>
      <div className='flex justify-center m-2'>
      <button className='border border-cyan-400 text-white p-2 rounded-md' onClick={()=>handleClick()}>{skills===true?"Skills": "Description"}</button>
      </div>
      
      
      <div className='m-6 py-6 p-2 bg-black rounded-lg animate-infinite-scroll'>
      <div className='flex justify-center'>
        <h1 className='font-bold text-2xl'>Projects:</h1>
      </div>
      <Work/>
      </div>
      

      <div className='m-2 p-2 rounded-lg'>
      <div className='flex justify-center'>
        <h1 className='font-bold text-2xl'>Contact</h1>
      </div>
      </div>

    </div>
  )
}

export default Body