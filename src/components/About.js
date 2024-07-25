import React, { useState } from 'react'
import Resume from '../resume/Resume.pdf'

const About = () => {

  

  return (
    
    <div className='m-2 p-2 flex-row justify-center'>
      <div className='flex justify-between r m-2 text-white pb-4'>
      <div className='flex justify-center flex-col'>
      <p className='font-bold text-3xl'>Dattatreya Sengupta</p>
      <p>Software Engineer | MERN Stack Developer</p>
      </div>
      <div className='flex h-16'>
        <a className='items-center p-1 justify-center border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200 animate-pulse hidden md:block' href='https://www.linkedin.com/in/dattatreya-sengupta-7627a1148/' target='_blank'>LinkedIn</a>
        <a className='items-center p-1 justify-center border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200 animate-pulse hidden md:block' href='https://github.com/Dattatretya' target='_blank'>Github</a>
        <a className='items-center p-1 justify-center border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200 animate-pulse hidden md:block' href={Resume} target='_blank' download="Dattatreya Sengupta Resume">Download Resume</a>
        </div>

      </div>
      
      <div className=''>
      <div className=' rounded-2xl m-2 text-violet-600 font-mono p-4'>
        <div className='p-4 text-white text-lg underline'>Introduction</div>
        <div className='flex flex-col justify-start'>
          <div className='p-4 text-2xl font-mono text-white rounded-md'>Software Engineer with good grasp in Javascript and Python. Seeking roles in Javascript, React JS, Express, Mongo DB, SQL, Node JS, Python, Linux, Front End, Backend.</div>
         

        </div>
      </div>

      <div className=' h-auto rounded-2xl p-4 font-mono m-2 my-4'>
        <div className='p-4 text-white text-lg underline'>Skills</div>
        <div className='flex flex-col justify-start'>
          
          <div className='px-4 py-2 text-2xl font-sans text-violet-950 bg-violet-200 m-2 rounded-md '>HTML | CSS | JavaScript | React JS | Tailwind CSS</div>
          <div className='px-4 py-2 text-2xl font-sans text-violet-950 bg-violet-200 m-2 rounded-md '>Redux (Redux Toolkit)</div>
          <div className='px-4 py-2 text-2xl font-sans text-violet-950 bg-violet-200 m-2 rounded-md '>Node JS | Express JS | Python Django</div>
          <div className='px-4 py-2 text-2xl font-sans text-violet-950 bg-violet-200 m-2 rounded-md '>MongoDB (No SQL) | MySQL</div>
          <div className='px-4 py-2 text-2xl font-sans text-violet-950 bg-violet-200 m-2 rounded-md mb-6'>Linux | Data Structures | GIT | GitHub | VS Code </div>

        </div>
      </div>

      <div className='rounded-2xl m-2 text-violet-600 font-mono p-2'>
        <div className='p-4 text-white text-lg underline'>Experience</div>
        <div className='flex flex-col justify-start'>
          <div className='px-4 py-2 text-2xl font-sans bg-white m-2 rounded-md'>Associate | Software Engineer | Capgemini (Sept 2022 – Present)</div>
          <div className='px-4 py-2 text-2xl font-sans bg-white m-2 rounded-md'>Developing high-quality software. Debugging and delivering 5+ web applications by producing clean & efficient code in React JS.</div>
          <div className='px-4 py-2 text-2xl font-sans bg-white m-2 rounded-md'>Creating RESTful APIs using Express JS.</div>
          <div className='px-4 py-2 text-2xl font-sans bg-white m-2 rounded-md'>Suggesting various ways to solve problems after understanding the business requirements of clients</div>

        </div>
      </div>
      </div>
    </div>
    
  )
}

export default About