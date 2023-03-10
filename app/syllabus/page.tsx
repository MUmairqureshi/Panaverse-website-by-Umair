'use client';
import Image from 'next/image'
import React from 'react'
import web3img from '../../public/poster.jpg'
import {Couredetail} from '../../components/coure-detail'
import Link from 'next/link'
// import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';

const Fade = require("react-reveal/Fade")
const Zoom = require("react-reveal/Zoom")
export default function Salybu() {
  return (
    <div>   
       <div className='w-full mx-auto h-full bg-[#3b1b35] mt-2 '>
        <div className='md:grid-cols-2 mx-auto px-6 grid md:pt-20 '>
        <div className='py-8'>
        <Fade left>
                <p className='font-bold text-[#ffdfedb1] text-md mb-4'>Specialized Track</p>
                <h1  className='md:text-4xl text-2xl text-white max-w-lg font-bold mb-4'>Prepare yourself for the Next Generation of Internet with Panaverse </h1>
                <p className='mb-6 text-white max-w-xl'> This web 3.0 and Metaverse specialization focus on  developing full-stack  web 3.0 and Metaverse experience for the next generation of the internet by 
                specialization in building world s that mergs the best of cutting-edge decentralized distributed blockchain with 3D metaverse client experience. 
                
                </p>
                <Link href={'https://portal.piaic.org/'} className='text-white bg-[#ffdfedb1] rounded-full font-semibold px-6 p-2 '>Enroll Now </Link>
                </Fade>
            </div> 
         
            <div className='   lg:mt-0 md:mt-10'>
                  <Zoom> 
<Image src={web3img} alt="web3img" /></Zoom>
            </div>  
        </div>
    </div>

    <Couredetail/>
    </div>
  )
}
