import Image from 'next/image'
import React from 'react'
import  web1 from '@/app/assets/web1.png';
import  web2 from '@/app/assets/web2.png';
import  web3 from '@/app/assets/web3.png';
import  web4 from '@/app/assets/web4.png';
import  web5 from '@/app/assets/web5.png';
import  web6 from '@/app/assets/web6.png';

const Portfolio = () => {
  return (
   <section className='mt-16 max-w-screen-lg flex flex-col mx-auto '>
    
     
    <div>
        <h2 className='font-sans text-[24px] text-center  font-semibold tracking-tighter text-gray-800 p-2 lg:text-[32px]'>Portfolio</h2>
        <p className=' font-sans tracking-wide text-center  text-gray-700 p-2'>Since the beginning of my journey as a freelance designer and developer, I have done remote work for <span className='text-cyan-500'>agencies</span>, consulted for <span className='text-cyan-500'>startups</span> and collabrated with talented people to create digital products for both business and consumer use.</p>
        <p className=' font-sans tracking-wide text-center  text-gray-700 p-2'>I offer a wide range of services, including brand design, programming and teaching.</p>
        
    </div>

    <div className='lg:grid grid-cols-2 grid-rows-3 gap-4 place-items-center mt-16'>
        <div className='p-2 mt-4  overflow-hidden object-cover hover:shadow-2xl transition ease-in-out  hover:delay-300'><Image src={web1} alt='web1' height={500} width={500}/></div>
        <div className='p-2 mt-4 overflow-hidden object-cover hover:shadow-2xl transition ease-in-out  hover:delay-300'><Image src={web2} alt='web2' height={500} width={500}/></div>
        <div className='p-2 mt-4 overflow-hidden object-cover hover:shadow-2xl transition ease-in-out  hover:delay-300'><Image src={web3} alt='web3' height={500} width={500}/></div>
        <div className='p-2 mt-4 overflow-hidden object-cover hover:shadow-2xl transition ease-in-out  hover:delay-300'><Image src={web5} alt='web4' height={500} width={500}/></div>
        <div className='p-2 mt-4 overflow-hidden object-cover hover:shadow-2xl transition ease-in-out  hover:delay-300'><Image src={web4} alt='web5' height={500} width={500}/></div>
        <div className='p-2 mt-4 overflow-hidden object-cover hover:shadow-2xl transition ease-in-out  hover:delay-300'><Image src={web6} alt='web6' height={500} width={500}/></div>
    </div>

   </section>
  )
}

export default Portfolio
