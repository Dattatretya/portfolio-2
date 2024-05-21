import React, { useState } from 'react'

const About = () => {

  

  return (
    
    <div className='m-2 p-2 flex-col justify-center'>
      <div className='flex flex-col justify-center m-2'>
      <h1 className='font-bold text-3xl'>Dattatreya Sengupta</h1>
      <h1>Software Developer | Willing to relocate</h1>
      </div>
      
      <div className=' bg-black rounded-md m-2 p-2 shadow-sm shadow-white'>
      <h1 className='text-xl underline'>Introdution:</h1>
    <ul>
        <li>👉🏻Achieved proficiency in frontend libraries like ReactJS through hands-on projects</li>
        <li>👉🏻Built on a solid understanding of HTML, CSS, and JavaScript</li>
        <li>👉🏻Coding skills extend to OOP languages like Python</li>
        <li>👉🏻Currently in the process of learning the MERN development stack</li>
        </ul>
        </div>

        <div className='bg-black text-yellow-300 p-2 m-2 rounded-md shadow-sm shadow-yellow-100'>
          <h1 className='text-xl underline'>Skills:</h1>
          <ul>
            <li>.Frontend Development: HTML | CSS | JavaScript | React JS | Tailwind CSS</li>
            <li>.State management: Redux (Redux Toolkit)</li>
            <li>.Backend Development: Node JS | Express JS</li>
            <li>.Database: MongoDB (No SQL)</li>
            <li>.Miscellaneous: Python | Linux | OOP | Data Structures | GIT (Version Control) | HTTP</li>
          </ul>
        </div>

        <div className='bg-black text-lime-300 p-2 m-2 rounded-lg shadow-md shadow-lime-200'>
          <p className='text-xl underline'>Experience:</p>
          <h2 className='font-bold'>Associate Engineer at Capgemini (20 Sept 2022 – Present)</h2>
            <p>Working in the Cisco TAC project, managing the UCCX server. Trained in Linux and Networking concepts.</p>

        </div>

    </div>
    
  )
}

export default About