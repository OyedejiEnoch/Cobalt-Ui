import Image from 'next/image'
import React from 'react'
import cobaltLogo from '@/assets/cobaltLogo.svg'
import Button from '@/components/Button'

const Header = () => {
  return (
    <>
    <section className='w-full fixed top-0 left-0 bg-transparent z-50 backdrop-blur'>
      <div className='container py-8'>
        <div className='flex justify-between'>
            <Image src={cobaltLogo} alt='cobalt-logo' />

            <div className='flex items-center gap-6'>
                <span className='hidden md:flex'>Blog</span>
                <Button />
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Header
