import Image from 'next/image';
import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import wave from '@/app/assets/wave.png';
const Hero = () => {
    return (
        <section className='mx-5 mt-16'>
            
              <div className='text-center'>
                    
                    <h1 className='font-sans text-[32px] font-semibold tracking-tighter text-cyan-500 p-2 lg:text-[40px]'>Huzaifa Awan</h1>
                    <h4 className='font-sans tracking-tighter font-medium text-lg p-2 lg:text-[20px]'>Developer and Designer</h4>
                    <p className=' font-sans tracking-wide text-center text-gray-700 p-2'>Freelancer providing services for programming and design content needs. </p>
                    <p className='text-center text-gray-700 pb-2'>Join me down below and lets get cracking.</p>
                </div>






                <div className='flex mt-8 justify-center text-3xl space-x-12 text-gray-700  lg:text-4xl '>
                    <AiFillTwitterCircle className=' hover:shadow-lg hover:shadow-cyan-300 hover:rounded-lg' />
                    <AiFillLinkedin className=' hover:shadow-lg hover:shadow-cyan-300 hover:rounded-lg'/>
                    <AiFillYoutube className=' hover:shadow-lg hover:shadow-cyan-300 hover:rounded-lg'/>
                </div>




                <div className='relative mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-60 h-60 mt-20 overflow-hidden'>
                    
                    <Image src={wave} alt='avatar' fill objectFit='cover'/>
                </div>

            
        </section>
    )
}

export default Hero
