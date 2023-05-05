import Link from 'next/link';
import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
const NavBar = () => {

  return (
    <div className='flex justify-between  mx-5 my-5 items-center p-2'>
     <div>
      <h2 className='font-semibold tracking-tighter'>DEVELOPEDBYHZ</h2>
      </div>
      <div>
      <ul className='flex items-center space-x-2 md:space-x-8'>
        <li><BsFillMoonStarsFill/></li>
        <li className='bg-cyan-500 px-2 py-1 border rounded-lg hover:bg-sky-700 text-white font-semibold'><Link href="#"> Resume </Link></li>
      </ul>
      </div>

    </div>
  )
}

export default NavBar
