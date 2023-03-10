'use client';
import React from 'react'
import Image from 'next/image'
import {CgCheck} from 'react-icons/cg' 
import outcome from '../public/outcome-poster.jpg'
const Fade = require("react-reveal/Fade")
const Zoom = require("react-reveal/Zoom")
export const Outcome = () => {

    return (
        <div className='  mx-auto w-full h-full lg:mt-40 bg-gradient-to-r from-white via-white to-[#f8dff3] '>
            <div className='mx-auto px-4 justify-between grid md:grid-cols-2 '>

                <div>
                    <Zoom>
                        <Image src={outcome}
                            className=" "
                            alt="outcome"/>
                    </Zoom>
                </div>
                <div className=' '>
                    <Fade>
                        <h1 className='md:text-4xl headline text-xl md:max-w-lg font-bold mb-6 '>

                            The Outcome for Participants of the Program
                        </h1>
                        <p className='text-[#6e225f] text-md mb-8'>As a graduate of this program, 
              you will own valuable products  such as Full-Stack App Templates, AR and VR Experiences, and APIs
          that are marketed globally by the Panaverse DAO. You will also have   the opportunity to offer your 
         services at a rate of $50 per hour, providing a path to   financial stability while contributing to the growth of
                        Pakistans software exports.</p>
                        <div className='grid grid-cols-2 font-semibold     text-[#6e225f] md:gap-6 gap-6 grid-rows-2 '>
                            <span className='flex  md:text-lg text-sm max-w-7xl gap-4'>
                                <span className='p-2 rounded-lg    h-8 w-7 rotate-45 bg-gradient-to-b from-[rgb(122,208,220)]  to-[#639fa9]'><CgCheck className="text-white  md:text-lg text-sm font-bold -rotate-45"/></span>Product Ownership</span>
                            <span className='flex md:text-lg text-sm gap-4 max-w-7xl'>
                                <span className='p-2   rounded-lg h-8 w-7 rotate-45 bg-gradient-to-b from-[rgb(122,208,220)]  to-[#639fa9]'><CgCheck className="text-white  md:text-lg text-sm font-bold -rotate-45"/></span>Freelacing</span>
                            <span className='flex md:text-lg text-sm gap-4 max-w-7xl'>
                                <span className='p-2 rounded-lg  h-8 w-7   rotate-45 bg-gradient-to-b from-[rgb(122,208,220)]  to-[#639fa9] '><CgCheck className="text-white  md:text-lg text-sm font-bold -rotate-45"/></span>Global Marketing by Panaverse
                            </span>
                            <span className='flex md:text-lg text-sm gap-4 max-w-7xl'>
                                <span className='p-2 rounded-lg  h-8 w-7   rotate-45 bg-gradient-to-b from-[rgb(122,208,220)]  to-[#639fa9] '><CgCheck className="text-white  md:text-lg text-sm font-bold -rotate-45"/></span>Boosting Economy.</span>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
