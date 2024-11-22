"use client";
import React from 'react'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-600 h-8 py-8 px-2 text-white flex justify-between items-center'>
        <div>
            <h1 className='font-semibold text-2xl hover:text-red-600 '>
                <a href="#!">HAROON WAHEED</a>
            </h1>
        </div>

        <div>
<ul className='flex space-x-6'>
  <li> <Link href="/" className='hover:text-md hover:font-bold hover:text-red-600'>Home</Link></li>
  <li> <Link href="aboutus" className='hover:text-md hover:font-bold hover:text-red-600'>About Us</Link></li>
  <li> <Link href="contactus "className='hover:text-md hover:font-bold hover:text-red-600'>Contact Us</Link></li>
    
</ul>
        </div>

        <div>
            <ul className='flex space-x-3'>
                <li><Link href="!#" className='hover:text-md hover:font-bold hover:text-red-600'>Login</Link></li>
                <li><Link href="!#" className='hover:text-md hover:font-bold hover:text-red-600'>Signup</Link></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
