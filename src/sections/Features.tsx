'use client'
import FeaturesGrid from '@/components/FeaturesGrid'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion' 

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section ref={ref} className='py-24'>
        <motion.div 
         style={{
          opacity: isInView ? 1 :0,
          y: isInView? 0 :10,
          transitionDuration:'1.2s',
          transitionDelay:'0.8s',
           transitionTimingFunction:'ease-in'
        }}
        className='container'>
            <div className='max-w-[500px] flex flex-col gap-6'>
                <h2 className='text-4xl md:text-5xl font-medium bg-gradient-to-r from-[#FFFFFF] via-[#C3C3C6] to-[#71717A] bg-clip-text text-transparent'>
                    Everything you need. Nothing you don&apos;t
                </h2>
                <p className='text-sm leading-6'>Financial management and visibility in one place. Experience a flexible toolkit that makes every task feel like a breeze.</p>
            </div>

            <div className='mt-8'>
            <FeaturesGrid />
            </div>
        </motion.div>
    </section>
  )
}

export default Features
