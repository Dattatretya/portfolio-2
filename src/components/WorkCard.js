import React from 'react'

const WorkCard = ({live, name, img, github}) => {
  return (
    <div className='m-2 border border-white p-2 rounded-lg w-80 hover:shadow-md hover:shadow-slate-400 cursor-pointer'>
        <h1 className='m-2'>{name}</h1>
        <img className='h-24 mb-2 p-2 rounded-2xl' src={img}/>
        <div className='mb-2'>
        <a href={live} target='_blank' className='m-1 p-1 border border-white rounded-md animate-pulse'>Live 🔴</a>
        <a href={github} target='_blank' className='m-1 p-1 border border-white rounded-md'>Github</a>
        </div>
    </div>
  )
}

export default WorkCard