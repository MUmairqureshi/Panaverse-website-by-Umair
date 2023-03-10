'use client'
import React from 'react'
import Image from 'next/image'
import logoimage from '../public/panaverse-logo.jpg'
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"

import {FaYoutube} from "react-icons/fa"
import {GrYoutube} from "react-icons/gr"


export const Footer = () => {
    return (
        <div className='mt-20    border-t-2 py-10  bg-white mx-auto w-full h-full '>
            <div className='grid md:grid-cols-4  gap-8 w-full mt-4 list-none  justify-between mx-auto px-4 '>
                <div className='md:col-span-2 grid-rows-3 px-4 '>
                    <span>
                        <Image src={logoimage}
                            className="mb-6 max-w-[140px]"
                            alt="logo"/></span>
                    <span className='text-md text-[rgb(110,34,95)]    mb-4'>
                        <h4 className=" md:text-lg text-md mb-6 max-w-xl">Certified Web 3.0 and Metaverse Developer A One and Quarter 
                        Years Panaverse DAO Earn 
                        as you Learn Program Getting Ready for 
                        the Next Generation of the Internet</h4>
                    </span>
                    <span className="grid grid-cols-3"></span>
                    <span className="flex gap-4 ">
                        <span className="p-2 rounded-full bg-gradient-to-b from-[rgb(158,245,254)] via-[#0d9aa9] to-[#00616c] text-white "><FaFacebookF className='  text-lg font-bold text-white'/>
                        </span>
                        <span className="p-2 rounded-full bg-gradient-to-b from-[rgb(158,245,254)] via-[#0d9aa9] to-[#00616c] text-white "><FaYoutube className='lg text-white bg-hidden bg-i nheri t'/>
                        </span>
                        <span className="p-2 rounded-full bg-gradient-to-b from-[rgb(158,245,254)] via-[#0d9aa9] to-[#00616c] text-white "><GrYoutube className='lg text-white'/>
                        </span>
                        <span className="p-2 rounded-full bg-gradient-to-b from-[rgb(158,245,254)] via-[#0d9aa9] to-[#00616c] text-white "><AiFillGithub className='lg text-white'/></span>
                        <span className="p-2 rounded-full bg-gradient-to-b from-[rgb(158,245,254)] via-[#0d9aa9] to-[#00616c] text-white "><AiOutlineTwitter className='lg text-white'/></span>
                    </span>
                </div>
                <div>
                    <li className='font-bold  text-md mb-2'>Programs</li>
                    <li className='text-[#6e225f] text-md mb-2'>Web 3.0 and Metaverse Developer</li>
                    <li className='text-[#6e225f]  text-md mb-2'>Artificial Intelligence</li>
                    <li className='text-[#6e225f]  text-md mb-2'>Cloud-Native Computing</li>

                    <li className='text-[#6e225f]  text-md mb-2'>Ambient Computing and IoT</li>

                    <li className='text-[#6e225f]  text-md mb-2'>Genomics and Bioinformatics</li>
                    <li className='text-[#6e225f]  text-md mb-2'>
                        Network Programmability and Automation
                    </li>
                </div>
                <div>
                    <li className='font-bold  mb-2 text-md'>Pages</li>
                    <li className='text-[#6e225f]  mb-2 text-md'>Home</li>
                    <li className='text-[#6e225f]  mb-2 text-md'>Quater1</li>
                    <li className='text-[#6e225f]  mb-2 text-md'>Quater2</li>
                    <li className='text-[#6e225f]  mb-2 text-md'>Quater3</li>
                </div>
            </div>
        </div>
    )
}
