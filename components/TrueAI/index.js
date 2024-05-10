import Image from 'next/image'
import React from 'react'
import Button from '../Button'

function TrueAI() {
  return (
    <div className='bg-black h-full'>
        <div className="relative w-full h-[600px] overflow-hidden mt-24">
            <div className=" inset-0 overflow-hidden ">
            <div className="absolute bottom-0 left-0 w-full h-full bg-[#242424] transform origin-top-right -skew-y-6"></div>
            <div className="relative z-10 grid grid-cols-3 items-center justify-center h-full pt-40 ">
                <div className='ml-20'>
                    <Image src={'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=750&q=75'} height={239} width={320} alt="network"/>
                </div>
                <div className='flex flex-col justify-center items-center text-center text-white'>
                    <div className='flex text-6xl font-[600] '>
                        <div>
                            Meet 
                        </div>
                        <div className='ml-4 bg-gradient-to-r from-blue-500 via-[#2f80ed] to-[#ee216b] bg-clip-text text-transparent'>
                            Tru-AI
                        </div>
                    </div>
                    <div className='text-2xl my-8 font-[300]'>
                        Design. Create. Deploy.
                    </div>
                    <div className='flex'>
                        <div>_ </div>
                        <div className='mb-6 text-xl bg-gradient-to-r from-blue-500 via-[#2f80ed] to-[#ee216b] bg-clip-text text-transparent'>the Future of AI | Power to EDIT</div>
                    </div>
                    <div>Based On Your Website & Traffic Trends, Tru-AI Optimises Your Website</div>
                    <div className='mt-8'>
                        <Button/>
                    </div>
                </div>
                <div className='w-[425px] h-[240px] rounded-l-full overflow-hidden ml-20 '>
                    <video src='https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4' autoPlay loop muted width={425} height={240} />
                </div>
            </div>
            </div>

        </div>
    </div>
   
  )
}

export default TrueAI