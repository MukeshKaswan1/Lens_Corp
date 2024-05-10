import Image from 'next/image'
import React from 'react'

const list1 = ['State-of-the-art solutions','Fast & Efficient','No extra computation fee',
'No licensing fee']
const list2= ['Lifetime support & upgrades','Plug-and-Play', '24x7 Progress Monitoring', 'Incremental Updates' ]

const cardItems = [{
    title: "Exclusive Rights",
    image:"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=640&q=75",
    alt_text:"Exclusive Rights",
    desc: "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.",
    height : "91",
    width:"250"

},
{
    title: "Research Driven",
    image:"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=384&q=75",
    alt_text:"Research Driven",
    desc: "We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.",
    height : "138",
    width:"138"
},
{
    title: "Plug-and-Play",
    image:"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=256&q=75",
    alt_text:"Plug-and-Play",
    desc: "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.",
    height : "160",
    width:"125"
},
{
    title: "Lifetime Support",
    image:"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=384&q=75",
    alt_text:"Support",
    desc: "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.",
    height : "148",
    width:"171"
}
]

function Why() {
  return (
    <div className='bg-whychoose min-h-screen text-white flex flex-col items-center text-center'>
        <div className='mt-16'>WHY CHOOSE LENS</div>
        <div className=' rounded-lg mt-2 bg-gradient-to-r from-[#0091ff] to-[#9cfeff] w-16 h-1 text-black'>_</div>
        <div className='text-7xl w-[65%] mt-16 mb-12'>
        AI-driven solutions backed by science
        </div>
        <div className='w-[52%] text-xl text-[#8A8A8A] mb-20'>
        Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.
        </div>
        <div className='grid grid-cols-2 text-left gap-10 text-[18px] font-poppins font-[200] text-[#FFFFFF]'>
            <div>
                {list1.map((item)=>{
                    return(
                        <div className='flex items-center mt-3' key = {item}>
                            <div className="w-3 h-2 border-t-2 border-r-2 border-white transform rotate-[135deg]" ></div>
                            <div  className='ml-4'> {item}</div>
                        </div>
                    )
                })}
            </div>
            <div>
                {list2.map((item)=>{
                    return(
                        <div className='flex items-center mt-3' key = {item}>
                        <div className="w-3 h-2 border-t-2 border-r-2 border-white transform rotate-[135deg]" ></div>
                        <div  className='ml-4'> {item}</div>
                    </div>
                    )
                })}
            </div>
        </div>
        <div className='grid grid-cols-4 gap-4 mt-20 pb-40'>
            {cardItems.map((card)=>{
                return(
                        <>
                            <div className='h-[435px] w-[335px] flex flex-col justify-between bg-[#1B1C1E] rounded-[18px] px-6 py-8 text-left hover:bg-transparent hover:border-2'>
                                <div className='text-[32px] flex  font-[400]'>
                                    {card.title}
                                </div>
                                <div className='flex items-center justify-center'>
                                    <Image src={card.image} height={card.height} width={card.width} alt ={card.alt_text}/>
                                </div>
                                <div className='text-[#828282]'>
                                {card.desc}
                                </div>
                            </div>
                        </>
                )
            })}
           
        </div>
    </div>
  )
}
export default Why