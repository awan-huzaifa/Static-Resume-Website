"use client"
import Head from "next/head"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Link from 'next/link';
import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Huzaifa Awan Portfolio</title>
      </Head>
      <div className="dark:bg-gray-900">
        <div>
          <div className='flex justify-between  mx-5 my-5 items-center p-2'>
            <div>
              <h2 className='font-semibold tracking-tighter'>DEVELOPEDBYHZ</h2>
            </div>
            <div>
              <ul className='flex items-center space-x-2 md:space-x-8'>
                {/* <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} /></li> */}
                <li className='bg-cyan-500 px-2 py-1 border rounded-lg hover:bg-sky-700 text-white font-semibold'><Link href="#"> Resume </Link></li>
              </ul>
            </div>

          </div>
        </div>
        {/* <NavBar/> */}
        <Hero />
        <Services />
        <Portfolio />
      </div>
    </div>
  )
}
