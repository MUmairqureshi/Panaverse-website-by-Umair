'use client';
import React, {useState} from 'react'
import Image from 'next/image'
import Mataverse from '../public/metaverse.jpg'
import Ai from '../public/ai.jpg'
import ambient from '../public/ambient.jpg'
import cloud from '../public/cloud.jpg'
import genomics from '../public/genomics.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai';
import network from '../public/network.jpg'
import Link from 'next/link';
const Fade = require("react-reveal/Fade")

export const Specializedtracks = () => {
    const [tabs, setTabs] = useState(1)
    const changtab = (index : any) => {
        setTabs(index)
    }
    return (
        <div className='mx-auto w-full h-full py-10 mt-32'>
            <div className='px-4     mx-auto  justify-between'>
                <div>
                    <Fade left>
                        <h2 className='md:text-4xl text-2xl font-bold  mb-4'>Specialized Tracks:</h2>
                        <p className='max-w-xl mb-6 text-[#6e225f]'>After completing the first three quarters the participants will select one or more
                      
                        specializations consisting of two courses each.</p>
                          </Fade>
                </div>

                <div className='grid md:gap-4   la  md:grid-cols-2  lg:grid-cols-3  p-4 lg:gap-4'>
                    <div className={
                        tabs === 1 ? 'shadow-md mb-4 border md:col-span-2 lg:col-span-2 xl:col-span-2 max-w-3xl   rounded-lg md:p-8 p-8   justify-start' : 'hidden'
                    }>
                        <p className='text-[#6e225f] mb-2 '>Specialized Track</p>
                        <h1 className='font-bold  max-w-xl md:text-2xl text-lg mb-2'>Web 3.0 (Blockchain) and Metaverse 
                                                                                                                                                    Specialization</h1>
                        <p className='text-[#6e225f]  max-w-3xl   justify-start  md:text-lg text-sm  flex  mb-4'>This Web 3.0 and Metaverse specialization focuses on 
                                                                                                                                                        developing full-stack Web 3.0 and Metaverse 
                                                                                                                                                        experiences for the next generation of the 
                                                                                                                                                        internet by specializing in building worlds 
                                                                                                                                                        that merge the best of cutting-edge decentralized
                                                                                                                                                         distributed blockchains with 3D metaverse client
                                                                                                                                                          experiences.</p>
                        <Link href={"/syllabus"} className="transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110     hover:bg-[#cd82be]   text-[#832a71] gap-2 md:max-w-[150px] max-w-[154px] flex  mb-8 bg-white border font-bold p-2 px-4 rounded-lg border-[#832a71] ">
                            Learn More
                            <AiOutlineArrowRight className=' transition ease-in-out delay-150 hover:-translate-x-1  hover:scale-110 text-center mt-1  font-bold'/>
                        </Link>
                        <div className='md:flex justify-between gap-2 mx-auto mb-10 '>
                            <span className='mb-18  '>
                                <p className='md:text-xl text-md font-bold mb-2'>Quarter IV</p>
                                <h1 className='text-[#ffebfb]   mix-blend-overlay mb-8 md:mb-0  object-cover  md:-mt-32 -mt-28 md:text-[172px]  text-[142px] transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110   text-end mx-auto font-bold'>4</h1>
                                <p className='max-w-9xl text-[#6e225f] md:text-lg text-sm  relative  md:mb-0  mb-20  -mt-32 md:-mt-32 '>W3-351: Developing Smart Contracts and 
                                                                                                                                                Planet-Scale Web 3.0 Dapps
                                </p>
                            </span>
                            <span className='mb-18 mx-auto  '>
                                <p className='md:text-xl text-md md:mt-0 mt-10 mb-8 md:mb-0 font-bold '>Quarter V</p>
                                <h1 className='text-[#ffebfb]   mix-blend-overlay object-cover  md:-mt-32 -mt-28 md:text-[172px] text-[142px]  text-end font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>5</h1>
                                <p className='max-w-9xl text-[#6e225f]   relative  md:text-lg text-sm  md:mb-0 -mt-32 '>MV-361: Developing Planet-Scale Open
                                                                                                                                                                             Virtual and Augmented Metaverse Experiences
                                </p>
                            </span>
                        </div>
                    </div>


                    <div className={
                        tabs === 2 ? 'shadow-md mb-4 border md:col-span-2 lg:col-span-2 xl:col-span-2 max-w-3xl   rounded-lg md:p-8 p-8   justify-start' : 'hidden'
                    }>
                        <p className='text-[#6e225f] mb-2 '>Specialized Track</p>
                        <h1 className='font-bold  max-w-xl md:text-2xl text-lg mb-2'>Artificial Intelligence (AI) and Deep Learning Specialization</h1>
                        <p className='text-[#6e225f]  max-w-3xl   justify-start  md:text-lg text-sm  flex  mb-4'>The AI and Deep Learning specialization 
                                                    focuses on building and deploying intelligent APIs using OpenAI models
                                                     and building custom Deep Learning Tensorflow models.</p>
                        <Link href={"/syllabus"} className="text-[#832a71] gap-2 flex mb-8 bg-white border font-bold p-2 px-4 rounded-lg border-[#832a71] ">
                            Learn More
                            <AiOutlineArrowRight className='  text-center mt-1  font-bold'/>
                        </Link>
                        <div className='md:flex justify-between gap-2 mx-auto mb-10 '>
                            <span className='mb-18  '>
                                <p className='md:text-xl text-md font-bold mb-2'>Quarter IV</p>
                                <h1 className='text-[#ffebfb]   mix-blend-overlay mb-8 md:mb-0  object-cover  md:-mt-32 -mt-28 md:text-[172px]  text-[142px]    text-end mx-auto font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>4</h1>
                                <p className='max-w-9xl text-[#6e225f] md:text-lg text-sm  relative  md:mb-0  mb-20  -mt-32 md:-mt-32 '>AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
                                </p>
                            </span>
                            <span className='mb-18  '>
                                <p className='md:text-xl text-md md:mt-0 mt-10 mb-8 md:mb-0 font-bold '>Quarter V</p>
                                <h1 className='text-[#ffebfb]   mix-blend-overlay object-cover  md:-mt-32 -mt-28 md:text-[172px] text-[142px]  text-end font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>5</h1>
                                <p className='max-w-9xl text-[#6e225f]   relative  md:text-lg text-sm  md:mb-0 -mt-32 '>AI-361: Deep Learning and MLOps
                                </p>
                            </span>
                        </div>
                    </div>


                    <div className={
                        tabs === 3 ? 'shadow-md mb-4 border md:col-span-2 lg:col-span-2 xl:col-span-2 max-w-3xl   rounded-lg md:p-8 p-8   justify-start' : 'hidden'
                    }>
                        <p className='text-[#6e225f] mb-2 '>Specialized Track</p>
                        <h1 className='font-bold  max-w-xl md:text-2xl text-lg mb-2'>Cloud-Native Computing Specialization</h1>
                        <p className='text-[#6e225f]  max-w-3xl   justify-start  md:text-lg text-sm  flex  mb-4'>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</p>
                        <button className="text-[#832a71] gap-2 flex mb-8 bg-white border font-bold p-2 px-4 rounded-lg border-[#832a71] ">
                            Learn More
                            <AiOutlineArrowRight className='  text-center mt-1  font-bold'/>
                        </button>
                        <div className='md:flex justify-between gap-2 mx-auto mb-10 '>
                            <span className='mb-18  '>
                                <p className='md:text-xl text-md font-bold mb-2'>Quarter IV</p>
                                <h1 className='text-[#ffebfb]   mix-blend-overlay mb-8 md:mb-0  object-cover  md:-mt-32 -mt-28 md:text-[172px]  text-[142px]    text-end mx-auto font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>4</h1>
                                <p className='max-w-9xl text-[#6e225f] md:text-lg text-sm  relative  md:mb-0  mb-20  -mt-32 md:-mt-32 '>CN-351: Certified Kubernetes Application Developer (CKAD)
                                </p>
                            </span>
                            <span className='mb-18  '>
                                <p className='md:text-xl text-md md:mt-0 mt-10 mb-8 md:mb-0 font-bold '>Quarter V</p>
                                <h1 className='text-[#ffebfb]   mix-blend-overlay object-cover  md:-mt-32 -mt-28 md:text-[172px] text-[142px]  text-end font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>5</h1>
                                <p className='max-w-9xl text-[#6e225f]   relative  md:text-lg text-sm  md:mb-0 -mt-32 '>CN-361: Developing Multi-Cloud Apps using CDK for Terraform
                                </p>
                            </span>
                        </div>
                    </div>


                    <div className={
                        tabs === 4 ? 'shadow-md mb-4 border md:col-span-2 lg:col-span-2 xl:col-span-2 max-w-3xl   rounded-lg md:p-8 p-8   justify-start' : 'hidden'
                    }>
                        <p className='text-[#6e225f] mb-2 '>Specialized Track</p>
                        <h1 className='font-bold  max-w-xl md:text-2xl text-lg mb-2'>Ambient Computing and IoT Specialization</h1>
                        <p className='text-[#6e225f]  max-w-3xl   justify-start  md:text-lg text-sm  flex  mb-4'>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.</p>
                        <button className="text-[#832a71] gap-2 flex mb-8 bg-white border font-bold p-2 px-4 rounded-lg border-[#832a71] ">
                            Learn More
                            <AiOutlineArrowRight className='  text-center mt-1  font-bold'/>
                        </button>
                        <div className='md:flex justify-between gap-2 mx-auto mb-10 '>
                            <span className='mb-18  '>
                                <p className='md:text-xl text-md font-bold mb-2'>Quarter IV</p>
                                <h1 className='text-[#ffebfb]   mix-blend-overlay mb-8 md:mb-0  object-cover  md:-mt-32 -mt-28 md:text-[172px]  text-[142px]    text-end mx-auto font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>4</h1>
                                <p className='max-w-9xl text-[#6e225f] md:text-lg text-sm  relative  md:mb-0  mb-20  -mt-32 md:-mt-32 '>AC-351: Ambient Computing with Voice Assistants and Matter Devices
                                </p>
                            </span>
                            <span className='mb-18  '>
                                <p className='md:text-xl text-md md:mt-0 mt-10 mb-8 md:mb-0 font-bold '>Quarter V</p>
                                <h1 className='text-[#ffebfb]   mix-blend-overlay object-cover  md:-mt-32 -mt-28 md:text-[172px] text-[142px]  text-end font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>5</h1>
                                <p className='max-w-9xl text-[#6e225f]   relative  md:text-lg text-sm  md:mb-0 -mt-32 '>AC-361: Embedded Programming using C and Rust
                                </p>
                            </span>
                        </div>
                    </div>


                    <div className={
                        tabs === 5 ? 'shadow-md mb-4 border md:col-span-2 lg:col-span-2 xl:col-span-2 max-w-3xl   rounded-lg md:p-8 p-8   justify-start' : 'hidden'
                    }>
                        <p className='text-[#6e225f] mb-2 '>Specialized Track</p>
                        <h1 className='font-bold  max-w-xl md:text-2xl text-lg mb-2'>Genomics and Bioinformatics Specialization</h1>
                        <p className='text-[#6e225f]  max-w-3xl   justify-start  md:text-lg text-sm  flex  mb-4'>Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using 
                                                    the most essential Python libraries and applications.</p>
                        <button className="text-[#832a71] gap-2 flex mb-8 bg-white border font-bold p-2 px-4 rounded-lg border-[#832a71] ">
                            Learn More
                            <AiOutlineArrowRight className='  text-center mt-1  font-bold'/>
                        </button>
                        <div className='md:flex justify-between gap-2 mx-auto mb-10 '>
                            <span className='mb-18  '>
                                <p className='md:text-xl text-md font-bold mb-2'>Quarter IV</p>
                                <h1 className='text-[#ffebfb]   mix-blend-overlay mb-8 md:mb-0  object-cover  md:-mt-32 -mt-28 md:text-[172px]  text-[142px]    text-end mx-auto font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>4</h1>
                                <p className='max-w-9xl text-[#6e225f] md:text-lg text-sm  relative  md:mb-0  mb-20  -mt-32 md:-mt-32 '>Bio-351: Python for Biologists
                                </p>
                            </span>
                            <span className='mb-18  '>
                                <p className='md:text-xl text-md md:mt-0 mt-10 mb-8 md:mb-0 font-bold '>Quarter V</p>
                                <h1 className='text-[#ffebfb]   mix-blend-overlay object-cover  md:-mt-32 -mt-28 md:text-[172px] text-[142px]  text-end font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>5</h1>
                                <p className='max-w-9xl text-[#6e225f]   relative  md:text-lg text-sm  md:mb-0 -mt-32 '>Bio-361: Bioinformatics with Python


                                </p>
                            </span>
                        </div>
                    </div>


                    <div className={
                        tabs === 6 ? 'shadow-md mb-4 border md:col-span-2 lg:col-span-2 xl:col-span-2 max-w-3xl   rounded-lg md:p-8 p-8   justify-start' : 'hidden'
                    }>
                        <p className='text-[#6e225f] mb-2 '>Specialized Track</p>
                        <h1 className='font-bold  max-w-xl md:text-2xl text-lg mb-2'>Network Programmability and Automation Specialization</h1>
                        <p className='text-[#6e225f]  max-w-3xl   justify-start  md:text-lg text-sm  flex  mb-4'>More than ever, network engineers are finding it
                                                     challenging to complete their duties entirely manually.
                                                      Network automation is now crucial due to new protocols, 
                                                      technologies, delivery models, and the requirement for 
                                                      enterprises to become more adaptable and agile.
                                                       This course teaches network engineers how to automate
                                                        systems with code using a variety of technologies 
                                                        and tools, including Linux, Python, APIs, and Git.
                        </p>
                        <button className="text-[#832a71] gap-2 flex mb-8 bg-white border font-bold p-2 px-4 rounded-lg border-[#832a71] ">
                            Learn More
                            <AiOutlineArrowRight className='  text-center mt-1  font-bold'/>
                        </button>
                        <div className='md:flex justify-between gap-2 mx-auto mb-10 '>
                            <span className='mb-18  '>
                                <p className='md:text-xl text-md font-bold mb-2'>Quarter IV</p>
                                <h1 className='text-[#ffebfb]   mix-blend-overlay mb-8 md:mb-0  object-cover  md:-mt-32 -mt-28 md:text-[172px]  text-[142px]    text-end mx-auto font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>4</h1>
                                <p className='max-w-9xl text-[#6e225f] md:text-lg text-sm  relative  md:mb-0  mb-20  -mt-32 md:-mt-32 '>NPA-351: CCNA 200-301 Certification


                                </p>
                            </span>
                            <span className='mb-18  '>
                                <p className='md:text-xl text-md md:mt-0 mt-10 mb-8 md:mb-0 font-bold '>Quarter V</p>
                                <h1 className='text-[#ffebfb]   mix-blend-overlay object-cover  md:-mt-32 -mt-28 md:text-[172px] text-[142px]  text-end font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>5</h1>
                                <p className='max-w-9xl text-[#6e225f]   relative  md:text-lg text-sm  md:mb-0 -mt-32 '>NPA-361: Network Programmability and Automation


                                </p>
                            </span>
                        </div>
                    </div>


                    <div className=' lg:mt-0 xl:mt-0 md:mt-0 mt-20  overflow-auto scrollbar-hide   h-[540px]   grid-rows-6'>
                        <button onClick={
                                () => changtab(1)
                            }
                            className='flex mb-5   gap-4'>
                            <span className='hover:rounded-b-lg  hover:border-cyan-900'>
                                <Image src={Mataverse}
                                    alt={'Mataverse'}
                                    className="border-lg    md:mt-3   md:max-w-[160px] md:h-[106px] lg:w-48    w-52   h-24  lg:h-28    rounded-lg border   "/></span>
                            <span className='lg:py-4 text-start'>
                                <p className='md:mb-2  text-[#6e225f] md:text-md text-sm font-bold'>Specialized Track</p>
                                <h1 className=' font-bold   md:text-md md:max-w-xl   max-w-xl text-md'>Web 3.0 (Blockchain) and
                                                                                                                  Metaverse Specialization</h1>
                            </span>
                        </button>
                        <hr className='mb-5'/>
                        <button onClick={
                                () => changtab(2)
                            }
                            className='flex mb-5  gap-4'>
                            <span className='hover:rounded-b-lg  hover:border-cyan-900'>
                                <Image src={Ai}

                                    alt={'Ai'}
                                    className="border-lg    md:mt-3   md:max-w-[160px] md:h-[106px] lg:w-48    w-52   h-24  lg:h-28    rounded-lg border   "/></span>
                            <span className='lg:py-4 text-start'>
                                <p className='md:mb-2  text-[#6e225f] md:text-md text-sm font-bold'>Specialized Track</p>
                                <h1 className=' font-bold max-w-xs md:text-lg text-md'>Artificial Intelligence (AI) and Deep Learning Specialization</h1>
                            </span>
                        </button>
                        <hr className='mb-5'/>
                        <button onClick={
                                () => changtab(3)
                            }
                            className='flex mb-5  gap-4'>
                            <span className='hover:rounded-b-lg  hover:border-cyan-900 '>
                                <Image src={cloud}

                                    alt={'cloud'}
                                    className="border-lg    md:mt-3   md:max-w-[160px] md:h-[106px] lg:w-48    w-52   h-24  lg:h-28    rounded-lg border    "/></span>
                            <span className='lg:py-4 text-start'>
                                <p className='md:mb-2 text-[#6e225f] md:text-md text-sm font-bold'>Specialized Track</p>
                                <h1 className=' font-bold max-w-xs md:text-lg text-md'>Cloud-Native Computing Specialization</h1>
                            </span>
                        </button>
                        <hr className='mb-5'/>
                        <button onClick={
                                () => changtab(4)
                            }
                            className='flex mb-5  gap-4'>
                            <span className='hover:rounded-b-lg  hover:border-cyan-900 '>
                                <Image src={ambient}

                                    alt={'ambient'}
                                    className="border-lg    md:mt-3   md:max-w-[160px] md:h-[106px] lg:w-48    w-52   h-24  lg:h-28    rounded-lg border  "/></span>
                            <span className='lg:py-4 text-start'>
                                <p className='md:mb-2 text-[#6e225f] md:text-md text-sm font-bold'>Specialized Track</p>
                                <h1 className=' font-bold max-w-xs md:text-lg text-md'>Ambient Computing and IoT Specialization</h1>
                            </span>
                        </button>
                        <hr className='mb-5'/>
                        <button onClick={
                                () => changtab(5)
                            }
                            className='flex mb-5  gap-4'>
                            <span className='hover:rounded-b-lg  hover:border-cyan-900 '>
                                <Image src={genomics}

                                    alt={'genomics'}
                                    className="border-lg    md:mt-3   md:max-w-[160px] md:h-[106px] lg:w-48    w-52   h-24  lg:h-28    rounded-lg border    "/></span>
                            <span className='lg:py-4 text-start'>
                                <p className='md:mb-2 text-[#6e225f] md:text-md text-sm font-bold'>Specialized Track</p>
                                <h1 className=' font-bold max-w-xs md:text-lg text-md '>Genomics and Bioinformatics Specialization</h1>
                            </span>
                        </button>
                        <hr className='mb-5'/>
                        <button onClick={
                                () => changtab(6)
                            }
                            className='flex mb-5  gap-4'>
                            <span className='hover:rounded-b-lg  hover:border-cyan-900 '>
                                <Image src={network}

                                    alt={'network'}
                                    className="border-lg    md:mt-3   md:max-w-[160px] md:h-[106px] lg:w-48    w-52   h-24  lg:h-28    rounded-lg border    "/></span>
                            <span className='lg:py-4 text-start'>
                                <p className='md:mb-2 text-[#6e225f] md:text-md text-sm font-bold'>Specialized Track</p>
                                <h1 className=' font-bold max-w-xs md:text-lg text-md'>Network Programmability and Automation Specialization</h1>
                            </span>
                        </button>
                        <hr className='mb-5'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
