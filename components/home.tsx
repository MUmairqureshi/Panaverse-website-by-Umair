'use client';
import React from 'react'
import Image from 'next/image'
import banner from '../public/hero-poster.jpg'
import Link from 'next/link';
 
import { RevealWrapper } from  'next-reveal'  
export const Hero = () => {
    return (
        <div className='mx-auto bg-white'>


            <div className='grid px-4 justify-between mt-14 gap-481 md:mt-[126px] md:grid-cols-2'>
                <div className='justify-start'>
                <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                        <h2 className="md:text-md text-sm mb-2 text-[#6e225f] font-bold">
                            Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
                        </h2>
                        <h2 className='md:text-5xl text-3xl  max-w-6xl mx-auto  font-bold mb-8'>Certified Web 3.0 and Metaverse Developer</h2>
                        <h1 className=' md:text-lg  text-sm text-[#6e225f]   mb-6'>A One and Quarter Years Panaverse DAO Earn as you Learn Program
                                                 Getting Ready for the Next Generation of the Internet</h1>
                        <h1 className='  mb-8 text-[#6e225f] md:text-lg xl:text-xl   lg:text-xl text-sm'>
                            Consolidating Web 3.0, Metaverse, Artificial
                                   Intelligence (AI), Cloud, Edge, 
                                                Ambient Computing/IoT, Network Automation, 
                                                and Bioinformatics Technologies</h1>
                        <Link className="rounded-full  bg-[#892d76] px-6 p-3 text-xl text-white font-bold" href={"/syllabus"}>
                            Learn More
                        </Link>
                    </RevealWrapper>
                </div>
                <div className=" ">
                    <RevealWrapper   delay={200} duration={1000} distance='500px' reset={true}>
                        <Image src={banner}
                            alt="banner"
                            className='w-8xl  xl:-mt-20 lg:-mt-20 mt-8  '/>
                    </RevealWrapper>
                </div>
            </div>

        </div>

    )
}
