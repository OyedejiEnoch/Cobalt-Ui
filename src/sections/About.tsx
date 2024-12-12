'use client'
import React, {useRef} from 'react'
import { motion, useInView } from 'framer-motion' 

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })


  // const variantsTwo ={
  //   initial:{
  //     opacity:0,
  //     y:10
  //   },
  //   animate:{
  //     y:0,
  //     opacity:1
  //   },
  //   transition:{
  //     duration:0.5,
  //     ease:'easeIn',
  //     delay:1
  //   }
  // }

  return (
    <section ref={ref} className='py-2 pb-20'>
        <div  className='container flex justify-between flex-col gap-10 md:flex-row'>
            <motion.div 
            // variants={isInView && variantsOne}
            style={{
              opacity: isInView ? 1 :0,
              y: isInView? 0 :10,
              transitionDuration:'1s',
               transitionTimingFunction:'ease-in'
            }}
            className='flex-1'>
                <h2 className='text-4xl md:text-5xl max-w-[800px] mx-auto font-medium bg-gradient-to-r from-[#FFFFFF] via-[#C3C3C6] to-[#71717A] bg-clip-text text-transparent'>Who said finance has to be boring?</h2>
            </motion.div>

            <motion.div 
             style={{
              opacity: isInView ? 1 :0,
              y: isInView? 0 :10,
              transitionDuration:'1s',
              transitionDelay:'1s',
              transitionTimingFunction:'ease-in'
            
            }}
            className='flex-1'>
                <p className='text-sm leading-6'>With Cobalt, managing your business finances is effortless, empowering, and anything but boring. Our intuitive platform brings clarity to your cash flow, simplifies your financial decision-making, and puts the power of advanced financial management right at your fingertips. 
                <span className='text-white'> Say no to spreadsheets and tools designed in the 80s.</span></p>
            </motion.div>
        </div>
    </section>
  )
}

export default About
