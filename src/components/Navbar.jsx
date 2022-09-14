import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between items-center py-3 px-16 mb-6 text-white bg-zinc-800'>
      <div className='text-2xl'>Shel<span className='text-red-400'>com</span></div>
      <div className=''>
        <ul className='flex gap-10 text-lg'>
          <li className='hover:text-red-400'><Link to="/">Home</Link></li>
          <li className='hover:text-red-400'><Link to="/about">About</Link></li>
          <li className='hover:text-red-400'><Link to="/projects">Projects</Link></li>
          <li className='hover:text-red-400'><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <button className='w-28 h-8 bg-red-500 rounded-sm hover:bg-red-400'>Get A Quote</button>
    </div>
  )
}

export default Navbar;