import React, { useState } from 'react'
import Resume from '../resume/Resume.pdf'
import HelloMessage from './HelloMessage';
import { CiLocationOn } from "react-icons/ci";
import ImageCard from './ImageCard';




const Body = () => {

  const [skills, setSkills] = useState(true)

  const handleClick = () => {
    setSkills(!skills)
  }

  return (
    
    <div className='text-white p-4'>

      {/* Location tar */}
      <div className='flex justify-center bg-gradient-to-l from-black p-2 w-64 rounded-3xl'>
        <h1 className='m-2'>Located in Gurgaon</h1>
        <h2 className='flex items-center text-3xl animate-bounce m-2'><CiLocationOn />
</h2>
      </div>

    {/* welcome message */}

      <HelloMessage/>

      {/* Name and links  */}
      <div className='flex justify-center items-center m-2 p-3 mt-20 animate-pulse hover:animate-none md:bg-black rounded-lg'>
        <ImageCard/>
        <div className='p-2'>
        <h1 className='text-4xl p-2 transition duration-150 ease-in hover:ease-out'>Dattatreya Sengupta</h1>
        <h2 className='text-xl p-2 mb-2'>Frontend Developer</h2>
        <div className='flex'>
        <a className='flex items-center p-1 border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200' href='https://www.linkedin.com/in/dattatreya-sengupta-7627a1148/' target='_blank'>LinkedIn</a>
        <a className='flex items-center p-1 border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200' href='https://github.com/Dattatretya' target='_blank'>Github</a>
        <a className='flex items-center p-1 border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200' href={Resume} target='_blank' download="Dattatreya Sengupta Resume">Download Resume</a>
        </div>
        </div>
        
      </div> 

      {/* skills and intro */}

      <div className='flex justify-center'>
      {skills===true? 
      (<div className='p-6 m-2 flex justify-center font-bold text-lg'>Software Engineer with proficiency is Frontend Development. Aspiring MERN stack developer.</div>) 
      : 
      (<div className='p-6 m-2 flex justify-center'>
        <h1>HTML | CSS | JavaScript | React JS | Tailwind CSS | Redux | Mongo DB | Node JS | Express JS
</h1>
      </div>)
      }
      </div>
      <div className='flex justify-center m-2'>
      <button className='border border-cyan-400 text-white p-2 rounded-md' onClick={()=>handleClick()}>{skills===true?"Skills": "Description"}</button>
      </div>
    </div>
  )
}

export default Body