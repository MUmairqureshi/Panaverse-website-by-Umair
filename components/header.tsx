'use client';
import React from 'react'
import logo from '../public/panaverse-logo.jpg'
import Link from 'next/link'
import Image from 'next/image'
import Home from '@/app/page';
import {Couredetail} from '../components/coure-detail' 

export const Header = () => {
    return (
        <header className=" bg-white sticky  top-0 py-4 h-auto z-20 insert-0 bg-opacity-90  backdrop-blur-md">
            <nav className='px-2   '>
                <div className="max-w-[1640px]     mx-auto flex justify-between flex-wrap items-center px-4  ">
                    <div className='flex list-none'>
                       
 
                                <li>
                                    <Link href={"#"}
                                        className='   '>
                                        <Image src={logo}
                                            alt="logo-image"
                                            className='   w-[110px]
                                              '/>
                                    </Link>
                                </li>
 
                    </div>
                    <div className='list-none gap-7 text-xl flex '>

                        <Link href={"/"}>
                            <li>
                                Home</li>
                        </Link>

                        <li>
                            <Link href={"/syllabus"}>
                                Course
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>
        </header>
    )
}
