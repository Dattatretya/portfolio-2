import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center flex-row'>
  <form className='flex justify-center'
  action="https://formspree.io/f/mleqzyon"
  method="POST">
  <label>
    Your email:
    <input type="email" name="email"/>
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  
  <button type="submit">Send</button>
</form>
    </div>
  )
}

export default Contact