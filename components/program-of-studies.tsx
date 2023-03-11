'use client';
import Link from 'next/link';
import React from 'react'
import { RevealWrapper } from  'next-reveal'  

export const Programstudies = () => {
    return (
        <div className='mx-auto w-full bg-white   xl:py-10'>
            <div className="px-4 xl:mt-40 mt-14 justify-start ">
                <div>
                <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        
                    <p className='font-bold  text-[#6e225f] '>Program of Studies</p>
                    <h2 className='  md:text-4xl text-3xl max-w-8xl  mx-auto  font-bold mb-4'>Core Courses
                        <br/>(Common in All Specializations)
                    </h2>
                    <p className='text-[#6e225f] max-w-6xl mb-4  '>Every participant of the program will start by completing the following three core courses.</p>
                    <Link href={'https://portal.piaic.org/'} className='bg-[#6e225f] rounded-full text-white  px-6 p-3 font-bold'>Enroll Now</Link>
                    </RevealWrapper>
         </div>
                <div className=" lg:-mt-20 lg-2:-mt-20   xl:-mt-[200px]  md:block lg:block">
                     <div className=" lg:bolck xl:flex md:flex hidden  w-full -z-10 pr-36">
                        <svg className="h-full w-full " width="1071" height="470" viewBox="0 0 1071 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_0_1)">
                                <path d="M27 332C75 367 186.8 433 250 417C329 397 348.5 294 470.5 270C592.5 246 682 329.5 776.5 209C871 88.5002 912 26.5002 1044 26.5002" stroke="url(#paint0_linear_0_1)" stroke-opacity="0.8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"></path>
                            </g>
                            <rect x="151.5" y="374.996" width="64" height="64" rx="20" fill="white"></rect>
                            <rect x="171.5" y="394.996" width="23" height="23" rx="10" fill="#C4C4C4"></rect>
                            <rect x="618.5" y="242.999" width="64" height="64" rx="20" fill="white"></rect>
                            <rect x="638.5" y="262.999" width="23" height="23" rx="10" fill="#C4C4C4"></rect>
                            <rect x="955" width="64" height="64" rx="20" fill="white"></rect>
                            <rect x="975" y="20" width="23" height="23" rx="10" fill="#C4C4C4"></rect>
                            <defs>
                                <filter id="filter0_d_0_1" x="0.499878" y="24.0002" width="1070" height="445.959" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                    <feOffset dy="24"></feOffset>
                                    <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.203922 0 0 0 0 0.662745 0 0 0 0.3 0"></feColorMatrix>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"></feBlend>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"></feBlend>
                                </filter>
                                <linearGradient id="paint0_linear_0_1" x1="535.5" y1="26.5002" x2="535.5" y2="419.459" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#00E5FF"></stop>
                                    <stop offset="1" stop-color="#0B4DD0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                  <div className="block md:-mt-2 mt-8  lg:-mt-2 xl:-mt-60 md:ml-20 lg:px-4  xl:ml-80 lg:ml-80  ">
                         
                        <div className="   lg:border-none xl:border-none border rounded-lg md:border-none  lg:mt-18 lg-2:-mt-16 xl:mt-56 xl:-ml-[344px]
                         lg:-ml-72 lg:px-16 xl:px-36  xl:p-0 lg:p-0 md:max-h-none lg:max-h-none xl:max-h-none   md:p-0 p-6 xl:shadow-none md:shadow-none lg:shadow-none shadow   lg:mt xl:mb-0  md:mb-0 lg:mb-0   mb-10      ">
                            <Link href={"/syllabus"}>
                                <div className="relative mx-auto ">
                                    <h3 className="text-18 font-bold   ">Quarter I</h3>
                                    <p className="text-para-color   text-[#6e225f] md:max-w-[180px]
                                     xl:max-w-[180px] max-w-[180px] lg:max-w-[180px] text-sm mt-2 ">CS-101: Object-Oriented Programming using TypeScript</p>
                                    <h3 className="text-[160px] absolute md:ml-28 xl:ml-28 lg:ml-28 
                                    md:-mt-[180px] lg:-mt-[180px] xl:-mt-[180px]      -mt-[168px] font-extrabold   text-primary  opacity-[0.06]   text-end  mx-auto ml-[72%] transition ease-in-lest delay-150 hover:-translate-y-1 hover:scale-110">1</h3>
                                </div>
                            </Link>
                        </div>
 
                        <div className="  md:max-h-none lg:max-h-none xl:max-h-none   lg:border-none xl:border-none border rounded-lg md:border-none  xl:-mt-64  lg:-mt-52  lg:ml-36 xl:ml-72   md:ml-56 md:px-4 md:-mt-44  xl:p-0 lg:p-0  md:p-0 p-6 xl:shadow-none md:shadow-none lg:shadow-none shadow    lg:mt xl:mb-0  md:mb-0 lg:mb-0   mb-10  ">
                        <Link href="/salybus">
                                <div className="relative group">
                                    <h3 className="text-18 font-bold ">Quarter II</h3>
                                    <p className="text-para-color  max-w-[280px] text-[#6e225f] text-sm mt-2">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                                    <h3 className="absolute md:text-[11rem] lg:text-[11rem] xl:text-[11rem] text-[8rem] font-extrabold text-primary  md:-top-24 lg:-top-24 xl:-top-24  -top-11  opacity-[0.06]   md:ml-40 lg:ml-40 xl:ml-40 ml-[72%] transition ease-in-lest delay-150 hover:-translate-y-1 hover:scale-110 ">2</h3>
                                   
                                </div>
                            </Link>
                        </div>
                        <div className="  md:max-h-none lg:max-h-none xl:max-h-none  lg:border-none xl:border-none border rounded-lg md:border-none  xl:-mt-[360px]  xl:-top-20 lg:-mt-80 lg:py-8 px-6 2xl:  xl:ml-[72%]   lg:ml-96 md:ml-96 md:-mt-60 md:px-10   xl:p-0 lg:p-0  md:p-0 p-6 xl:shadow-none md:shadow-none lg:shadow-none shadow   lg:mt xl:mb-0  md:mb-0 lg:mb-0   mb-10  ">
                            <a href="/salybus">
                                <div className="relative group ">
                                    <h3 className="text-18 font-bold  ">Quarter III</h3>
                                    <p className="text-para-color text-sm md:max-w-[280px] lg:max-w-[280px] xl:max-w-[280px] max-w-[180px] text-[#6e225f] text-14 mt-2">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
                                    <h3 className="absolute xl:text-[11rem] md:text-[11rem] text-[8rem] lg:text-[11rem] font-extrabold text-primary opacity-[0.06] md:-top-24 lg:-top-24 xl:-top-24   -top-11    md:ml-32 lg:ml-32 xl:ml-32   ml-[72%] transition ease-in-lest delay-150 hover:-translate-y-1 hover:scale-110">3</h3>
                                </div>
                            </a>
                        </div>
                         </div>
                </div>
            </div>
        </div>
    )
} 