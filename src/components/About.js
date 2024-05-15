import React, { useState } from 'react'

const About = () => {

  const [pass, setPass] = useState("")
  const [show, setShow] = useState(false)

  const handleClick = () => {
  if (pass==="878741"){
    setShow(true)
  }
  else{
    setShow(false)
  }
}

  const hideButton = () => {
    setShow(false)
  }

  return (
    <div className='flex flex-col justify-center p-2 m-2'>
      {!show && <div className='flex justify-center m-2 text-xl'>
        Please enter the first 6 digits of my phone number
      </div>}
   
      {!show && <div className='flex justify-center m-2'>
      <label className='m-2'>Password: </label>
      <input value={pass} onChange={(e)=>{setPass(e.target.value)}} 
      className='text-black rounded-lg flex justify-center p-2' type='password'/>
      </div>}
      {!show && <div className='flex justify-center'>
      <button className='items-center p-2 border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200' onClick={()=>handleClick()} >Submit</button>
      </div>}
      <div>
     
    {show && <p1 className="text-4xl"> Dattatreya</p1>}
      </div>
      {show && <div className='flex justify-center'>
        <button className='items-center p-2 border border-cyan-400 text-white m-2 rounded-md hover:text-lime-200'
        onClick={()=>hideButton()}
        >Hide</button>
      </div>}
    </div>
  )
}

export default About