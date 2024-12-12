'use client'
import Button from '@/components/Button'
import React from 'react'
import arrowDown from '@/assets/arrow-down.svg'
import Image from 'next/image'
import HomeScreenScroll from '@/components/HomeScreenScroll'
import { motion } from 'framer-motion' 

const Hero = () => {

  return (
    <section className='py-48 bg-home bg-cover'>
        <motion.div className='container '>
            <motion.h2 
            initial={{
              opacity:0,
              y:4
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              duration:0.8,
              ease:'easeInOut'
            }}
            className='text-center text-6xl md:text-7xl max-w-[800px] mx-auto font-semibold bg-gradient-to-r from-[#FFFFFF] via-[#C3C3C6] to-[#71717A] bg-clip-text text-transparent'>Unleash the power of intuitive finance</motion.h2>
            <motion.p 
               initial={{
                opacity:0,
                y:4
              }}
              animate={{
                opacity:1,
                y:0
              }}
              transition={{
                duration:0.8,
                ease:'easeInOut',
                delay:0.8
              }}
            className='text-sm md:text-[18px] md:leading-7 mt-6 text-center max-w-[600px] mx-auto'>Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, 
            can now manage their business like a pro. Simple. Intuitive. And never boring.</motion.p>

            <motion.div 
               initial={{
                opacity:0,
                y:4
              }}
              animate={{
                opacity:1,
                y:0
              }}
              transition={{
                duration:1.6,
                ease:'easeInOut',
                delay:0.8
              }}
            className='flex justify-center mt-10'>   
                <Button />
            </motion.div>

            <motion.div 
             initial={{
              opacity:0,
              y:4
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              duration:0.8,
              ease:'easeInOut',
              delay:1.6
            }}
            className='flex justify-center mt-8 flex-col gap-2 items-center'>
                <span>Learn More</span>
                <Image src={arrowDown} alt='arrow-down' />
            </motion.div>

            
            {/* <Image src={dashboardImg} alt='dashboard-img' className='mt-20'/> */}
            <HomeScreenScroll />
        </motion.div>
    </section>
  )
}

export default Hero
