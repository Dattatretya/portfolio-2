import React, { useState } from 'react'
import Resume from '../resume/Resume.pdf'

const About = () => {

  

  return (
    
    <div className='m-2 p-2 flex-row justify-center '>
      <div className='flex justify-between r m-2 text-white'>
      <div className=''>
      <h1 className='font-bold text-3xl'>Dattatreya Sengupta</h1>
      <h1>Software Developer | Willing to relocate</h1>
      </div>
      <div className='flex h-16'>
        <a className='flex items-center p-1 border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200 animate-pulse' href='https://www.linkedin.com/in/dattatreya-sengupta-7627a1148/' target='_blank'>LinkedIn</a>
        <a className='flex items-center p-1 border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200 animate-pulse' href='https://github.com/Dattatretya' target='_blank'>Github</a>
        <a className='flex items-center p-1 border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200 animate-pulse' href={Resume} target='_blank' download="Dattatreya Sengupta Resume">Download Resume</a>
        </div>

      </div>
      
      <div className=''>
      <div className='bg-violet-200 h-96 rounded-2xl m-2 text-violet-600 font-mono p-2'>
        <div className='p-4 text-white text-lg'>Introduction</div>
        <div className='flex flex-col justify-start'>
          <div className='px-4 py-2 text-2xl font-sans bg-white m-2 rounded-md '>Proficient in React JS</div>
          <div className='px-4 py-2 text-2xl font-sans bg-white m-2 rounded-md'>Solid understanding of HTML, CSS, JS</div>
          <div className='px-4 py-2 text-2xl font-sans bg-white m-2 rounded-md'>DSA in Python</div>
          <div className='px-4 py-2 text-2xl font-sans bg-white m-2 rounded-md'>Learning MERN</div>

        </div>
      </div>

      <div className='bg-white h-auto rounded-2xl p-2 py-4'>
        <div className='p-4 text-violet-800 text-lg'>Skills</div>
        <div className='flex flex-col justify-start'>
          
          <div className='px-4 py-2 text-2xl font-sans text-violet-950 bg-violet-200 m-2 rounded-md '>HTML | CSS | JavaScript | React JS | Tailwind CSS</div>
          <div className='px-4 py-2 text-2xl font-sans text-violet-950 bg-violet-200 m-2 rounded-md '>Redux (Redux Toolkit)</div>
          <div className='px-4 py-2 text-2xl font-sans text-violet-950 bg-violet-200 m-2 rounded-md '>Node JS | Express JS</div>
          <div className='px-4 py-2 text-2xl font-sans text-violet-950 bg-violet-200 m-2 rounded-md '>MongoDB (No SQL)</div>
          <div className='px-4 py-2 text-2xl font-sans text-violet-950 bg-violet-200 m-2 rounded-md mb-6'>Python | Linux | Data Structures | GIT </div>

        </div>
      </div>

      <div className='bg-violet-900 h-96 rounded-2xl m-2 text-violet-600 font-mono p-2'>
        <div className='p-4 text-white text-lg'>Experience</div>
        <div className='flex flex-col justify-start'>
          <div className='px-4 py-2 text-2xl font-sans bg-white m-2 rounded-md'>Associate Engineer at Capgemini (20 Sept 2022 – Present)</div>
          <div className='px-4 py-2 text-2xl font-sans bg-white m-2 rounded-md'>Working in the Cisco TAC project, managing the UCCX server.</div>
          <div className='px-4 py-2 text-2xl font-sans bg-white m-2 rounded-md'> Trained in Linux and Networking.</div>

        </div>
      </div>
      </div>
    </div>
    
  )
}

export default About