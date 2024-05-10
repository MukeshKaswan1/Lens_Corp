import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='bg-hero bg-cover bg-center h-screen w-full flex pt-32 pl-72' >
      <div className=' text-white w-[50%]'>
        <h1 className='text-[64px]   text-black leading-[72px] font-medium font-raleway'>We are at the forefront of AI</h1>
        <p className='text-[1.3rem] text-black mt-6 w-[450px]'>From Conserving Wildlife to Automatically Generating Caricatures- <b>We Do It All</b> </p>
        <div className="bg-black w-44 text-white  px-8 py-2 rounded-lg cursor-pointer text-lg mt-6 hover:border-[1px] hover:border-black">
          Learn More
        </div>
      </div>
    </div>
  )
}

export default Hero