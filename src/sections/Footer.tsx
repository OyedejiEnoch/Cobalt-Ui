import React from 'react'
import twitter from '@/assets/new-twitter.svg'
import facebook from '@/assets/facebook-01.svg'
import linkedin from '@/assets/linkedin-01.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className='py-24 '>
      <div className='container flex justify-between flex-col md:flex-row gap-10 '> 
        <div className='flex flex-col gap-4 max-w-[500px]'>
            <div className='flex items-start gap-4 text-white flex-col md:flex-row '>
                <span>© 2024 Cobalt Financial Technologies Inc.</span>
                <span>Enoch Oyedeji</span>
            </div>
            <div className='flex flex-col text-xs gap-6 leading-5'>
                <p>Cobalt is a trademark or registered trademark of Cobalt Financial Technologies Inc. Any other trademarks are the 
                property of their respective owners. Unless otherwise noted, use of third party logos does not imply endorsement of, 
                sponsorship of, or affiliation with Cobalt.
                </p>

                <p>Cobalt is a financial technology company, not a bank. Banking services are provided by Celtic Bank and Evolve Bank &
                Trust®, Members FDIC.
                </p>
            </div>
        </div>

        <div className='flex items-center gap-4'>
            <Image src={twitter} alt='twitter' />
            <Image src={facebook} alt='facebook' />
            <Image src={linkedin} alt='linkedin' />
        </div>

      </div>
    </section>
  )
}

export default Footer
