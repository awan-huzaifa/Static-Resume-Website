import React from 'react'
import code from '@/app/assets/code.png';
import design from '@/app/assets/design.png';
import consulting from '@/app/assets/consulting.png';
import Image from 'next/image';
const Services = () => {
  return (
    <section className='mt-16 lg:max-w-screen-lg flex flex-col mx-auto '>
     
    <div>
        <h2 className='font-sans text-[24px] text-center  font-semibold tracking-tighter text-gray-800 p-2 lg:text-[32px]'>Services I Offer</h2>
        <p className=' font-sans tracking-wide text-center  text-gray-700 p-2'>Since the beginning of my journey as a freelance designer and developer, I have done remote work for <span className='text-cyan-500'>agencies</span>, consulted for <span className='text-cyan-500'>startups</span> and collabrated with talented people to create digital products for both business and consumer use.</p>
        <p className=' font-sans tracking-wide text-center  text-gray-700 p-2'>I offer a wide range of services, including brand design, programming and teaching.</p>
        
    </div>

    {/* md:flex-row  md:justify-center md:space-x-8 */}

    <div className='space-y-8 mt-16 flex flex-col md:grid grid-cols-3 gap-12'>
        <div className='flex flex-col items-center justify-center shadow-2xl border rounded-lg mx-2'>
            <Image src={design} alt='design' height={80} width={80}/>
            <h2 className='font-sans text-[20px] text-center  font-semibold tracking-tighter text-gray-800 p-2'>Beautiful Designs</h2>
            <p className=' font-sans tracking-wide text-center  text-gray-700 p-2'>Creating elegant designs suited for your needs following core design theory.</p>
            <h4 className='font-sans tracking-wide text-center  text-cyan-500 p-2'>Design Tools I Use</h4>
            <h4 className='font-sans tracking-wide text-center  text-gray-700'>Photoshop</h4>
            <h4 className='font-sans tracking-wide text-center  text-gray-700'>Illustrator</h4>
            <h4 className='font-sans tracking-wide text-center  text-gray-700'>Figma</h4>
            <h4 className='font-sans tracking-wide text-center  text-gray-700'>Indesign</h4>
        </div>

        <div className='flex flex-col items-center justify-center shadow-2xl border rounded-lg mx-2'>
        <Image src={code} alt='code' height={80} width={80}/>
            <h2 className='font-sans text-[20px] text-center  font-semibold tracking-tighter text-gray-800 p-2'>Code your dream project</h2>
            <p className=' font-sans tracking-wide text-center  text-gray-700 p-2'>Do you have an idea for your next great website? Lets make it a reality.</p>
            <h4 className='font-sans tracking-wide text-center  text-cyan-500 p-2'>Design Tools I Use</h4>
            <h4 className='font-sans tracking-wide text-center  text-gray-700'>Photoshop</h4>
            <h4 className='font-sans tracking-wide text-center  text-gray-700'>Illustrator</h4>
            <h4 className='font-sans tracking-wide text-center  text-gray-700'>Figma</h4>
            <h4 className='font-sans tracking-wide text-center  text-gray-700'>Indesign</h4>
        </div>
        
        
        <div className='flex flex-col items-center justify-center shadow-2xl border rounded-lg mx-2'>
        <Image src={consulting} alt='consulting' height={80} width={80}/>
            <h2 className='font-sans text-[20px] text-center  font-semibold tracking-tighter text-gray-800 p-2'>Consulting</h2>
            <p className=' font-sans tracking-wide text-center  text-gray-700 p-2'>Interested in feedback for your current project? I can give you tips and tricks to level it up.</p>
            <h4 className='font-sans tracking-wide text-center  text-cyan-500 p-2'>Design Tools I Use</h4>
            <h4 className='font-sans tracking-wide text-center  text-gray-700'>Photoshop</h4>
            <h4 className='font-sans tracking-wide text-center  text-gray-700'>Illustrator</h4>
            <h4 className='font-sans tracking-wide text-center  text-gray-700'>Figma</h4>
            <h4 className='font-sans tracking-wide text-center  text-gray-700'>Indesign</h4>
        </div>
    </div>

    </section>
  )
}

export default Services

