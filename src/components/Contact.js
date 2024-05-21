import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center flex-row'>
  <form className='flex justify-center flex-col bg-black p-3 m-3 rounded-lg'
  action="https://formspree.io/f/mleqzyon"
  method="POST">
  <label className='m-2 p-2 rounded-md'>
    Your email:
    <input className='m-2 p-2 rounded-md' type="email" name="email"/>
  </label>
  <div className='flex items-center'>
  <label className='m-2 p-2 rounded-md'>
    Your message:
    </label>
    <textarea className='m-2 p-2 rounded-md' name="message"></textarea>
  </div>
  <div className='flex items-center'>
  <label className='m-2 p-2 rounded-md'>Your Phone number:</label>
  <input className='m-2 p-2 rounded-md' type='number' name='number'/>
  </div>
  <button className='p-2 rounded-md items-center border border-cyan-400 text-white m-2 justify-center' type="submit">Send</button>
</form>
    </div>
  )
}

export default Contact