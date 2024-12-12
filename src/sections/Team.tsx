'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import geniusImg from '@/assets/geniusImg.svg'
import { motion, useInView } from 'framer-motion' 
const Team = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className='py-24'>
      <motion.div 
      style={{
        opacity: isInView ? 1 :0,
        y: isInView? 0 :10,
        transitionDuration:'1s',
        transitionDelay:'0.4s',
         transitionTimingFunction:'ease-in'
      }}
      className='container'>
            <div className='max-w-[500px] flex flex-col gap-6'>
                <h2 className='text-4xl md:text-5xl bg-gradient-to-r from-[#FFFFFF] via-[#B5B5BA] to-[#71717A] bg-clip-text text-transparent font-semibold'>
                    Meet Genius
                </h2>
                <p className='text-sm leading-6'>Our AI-driven assistant is designed to decode complex financial figures and illuminate key trends in your business.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-6 md:gap-4 lg:gap-10'>
                <div className='rounded-xl border border-white/10 p-6'>
                    <div className='flex justify-center h-64 w-full bg-gradient-to-r from-[#0891B2]/20 via-[#0EA5E9]/10 to-[#7C3AED]/10 rounded-2xl [mask-image:linear-gradient(to_right,transparent,black_30%,black_80%,black_30%,transparent)]'>     
                        <Image src={geniusImg} alt='genius-img' className='backdrop-blur-lg' />  
                    </div>

                    <div className='flex flex-col gap-2 mt-6'>
                        <h2 className='text-white text-xl font-semibold'>Smart forecasting</h2>
                        <p className='text-sm max-w-[400px]'>Harness the power of Cobalt's predictive analytics to map out the financial future of your business. </p>
                    </div>
                </div>


                <div className='rounded-xl border border-white/10 p-6 flex flex-col'>
                    <div className='flex flex-1 flex-col gap-4 justify-between'>
                        <div className=' border-[8px] border-[#0891B2]/10 rounded-lg text-center flex justify-center max-w-max mx-auto'>
                        <span className='text-[#E4E4E7] bg-[#0891B2] py-2 px-2 rounded-lg text-xs md:text-sm'>
                            Hey! How can i help you?
                        </span>
                        </div>

                        <div className='flex items-center justify-between p-2 border border-white/20 bg-[#18181B] rounded-xl'>
                            <p className='text-xs lg:text-sm'>✨ Who's our most profitable customer?</p>

                            <div className=''>
                                <button className='text-xs lg:text-sm text-white bg-black p-2 rounded-lg z-20'>Ask Genius</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 mt-6'>
                        <h2 className='text-white text-xl font-semibold'>Chat with Genius</h2>
                        <p className='text-sm max-w-[400px]'>Just ask. With Genius by your side, navigating the financial maze becomes intuitive and effortless.</p>
                    </div>
                </div>
            </div>
      </motion.div>
    </section>
  )
}

export default Team
