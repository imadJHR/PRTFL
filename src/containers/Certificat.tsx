import { Effect } from '@/components/ui/effects'
import Image from 'next/image'
import React from 'react'
import Cer from "../app/assets/fullstack.png"

const Certificat = () => {
  return (
    <section id='contact' className='relative bg-card bg-opacity-80 backdrop-blur-md  p-6 flex flex-col items-center gap-y-6 md:gap-y-12'>
        <h1 className='text-primary font-bold text-xl'>Certificate</h1>
    <Effect variant="ball" size="default" className='-top-25 -end-4 ' />
    <Image src={Cer} alt={''} width={700} height={250}/>
  
   
  </section>
  )
}

export default Certificat