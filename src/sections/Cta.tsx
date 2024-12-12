import Button from '@/components/Button'
import React from 'react'
import Footer from './Footer'

const Cta = () => {
  return (<div className=' bg-footerBg bg-cover [mask-image:linear-gradient(to_bottom,transparent_1%,black_25%)]'>
 
    <section className='py-24'>
        <div className='container '>
            <h2 className='text-4xl md:text-5xl text-center max-w-[700px] mx-auto font-medium bg-gradient-to-r from-[#FFFFFF] via-[#C3C3C6] to-[#71717A] bg-clip-text text-transparent'>See where financial automation can take your business.</h2>
            <p className=' text-center mt-8'>The first financial tool you&apos;ll love. And the last one you&apos;ll ever need.</p>

            <div className='flex justify-center mt-10'>
                <Button />
            </div>
        </div>
    </section>

    <Footer />
    </div>
  )
}

export default Cta
