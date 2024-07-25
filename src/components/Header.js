import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";






const Header = () => {
  return (
    <div className=' text-cyan-400 flex justify-between bg-gradient-to-b from-black h-20'>
        <div>
       
            <Link to="/"><h1 className='p-2 m-2'>©Dattatreya</h1></Link>
        </div>
        <div className=''>
            <ul className='flex'>
            
            <Link to="/"><h1 className='p-2 m-2 md:text-2xl text-md'><FaHome />
</h1></Link>
                <Link to="/work"><li className='p-2 m-2 md:text-2xl text-md '><MdWork />
</li></Link>
                <Link to="/about"><li className='p-2 m-2 md:text-2xl text-md'><CgProfile />
</li></Link>
                <Link to="/contact"><li className='p-2 m-2 md:text-2xl text-md'><MdEmail />
</li></Link>
<a href='https://x.com/datta_sengupta' target='_blank'><h1 className='p-2 m-2 md:text-2xl text-md'><FaTwitter />
</h1></a>

            </ul>
        </div>
        
    </div>
  )
}

export default Header