'use client';
import React, {useState} from 'react'
import Script from 'next/script'
 
export const Couredetail = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index : any) => {
        setToggleState(index);
    }

    return (
        <div className='mx-auto px-6 mt-6 py-4  bg-white'>

            <div className='py-6 gap-20 grid  lg:grid-cols-3     md:grid-cols-2 mx-auto  '>


                <div className={
                        toggleState === 1 ? "lg:col-span-2 md:col-span-2" : "hidden"
                    }
                    id="web3"
                    role="tabpanel"
                    aria-labelledby="web3-tab">
                    <p className='font-bold mb-2 text-[#832a71]'>
                        Web 3.0 (Blockchain) and Metaverse Specialization</p>

                    <h1 className='font-bold md:text-4xl text-2xl mb-6'>Course Description:
                    </h1>
                    <p className=' text-[#832a71] md:mb-6 md:max-w-2xl max-w-sm mb-4'>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
                    </p>
                    <h1 className='md:text-4xl text-xl font-bold text-black  mb-8 border-[#a9288f]     border-l-8 '>Course Outline:
                    </h1>
                    <div className='grid  gap-4 lg:grid-cols-3 sm:grid-cols-3   md:grid-cols-3  justify-center mx-auto'>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater I</h1>
                            <p className="text-sm max-w-sm text-center">CS-101: Object-Oriented Programming using TypeScript and Typescript for Next</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater II</h1>
                            <p className="text-sm max-w-sm text-center">W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater III</h1>
                            <p className="text-sm max-w-sm text-center">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg justify-center '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater IV</h1>
                            <p className="text-sm max-w-sm text-center">W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg justify-center  rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater V</h1>
                            <p className="text-sm max-w-sm text-center">MV-361: Developing Planet-Scale and Augmented Metaverse Experiences</p>
                        </span>
                    </div>
                </div>


                <div className={
                        toggleState === 2 ? "lg:col-span-2 md:col-span-2" : "hidden"
                    }
                    id="cnc"
                    role="tabpanel"
                    aria-labelledby="cnc-tab">
                    <p className='font-bold mb-2 text-[#832a71]'>Artificial Intelligence (AI) and Deep Learning Specialization</p>

                    <h1 className='font-bold md:text-4xl text-2xl mb-6'>Course Description:
                    </h1>
                    <p className=' text-[#832a71] md:mb-6 md:max-w-2xl max-w-sm mb-4'>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
                    </p>
                    <h1 className='md:text-4xl text-xl font-bold text-black  mb-8 border-[#a9288f]     border-l-8 '>Course Outline:
                    </h1>
                    <div className='grid  gap-4 lg:grid-cols-3 sm:grid-cols-3    md:grid-cols-3  justify-center mx-auto'>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater I</h1>
                            <p className="text-sm max-w-sm text-center">CS-101: Object-Oriented Programming using TypeScript and Typescript for Next</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater II</h1>
                            <p className="text-sm max-w-sm text-center">W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater III</h1>
                            <p className="text-sm max-w-sm text-center">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg justify-center '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater IV</h1>
                            <p className="text-sm max-w-sm text-center">AI-351: Developing Planet-Scale APIs and Python Programming</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg justify-center  rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater V</h1>
                            <p className="text-sm max-w-sm text-center">AI-361: Deep Learning and MLOps (Machine Learning Operations)</p>
                        </span>
                    </div>
                </div>


                <div className={
                        toggleState === 3 ? "lg:col-span-2 md:col-span-2" : "hidden"
                    }
                    id="cnc"
                    role="tabpanel"
                    aria-labelledby="cnc-tab">
                    <p className='font-bold mb-2 text-[#832a71]'>Cloud-Native Computing Specialization</p>

                    <h1 className='font-bold md:text-4xl text-2xl mb-6'>Course Description:
                    </h1>
                    <p className=' text-[#832a71] md:mb-6 md:max-w-2xl max-w-sm mb-4'>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
                    </p>
                    <h1 className='md:text-4xl text-xl font-bold text-black  mb-8 border-[#a9288f]     border-l-8 '>Course Outline:
                    </h1>
                    <div className='grid  gap-4 lg:grid-cols-3 sm:grid-cols-3   md:grid-cols-3  justify-center mx-auto'>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater I</h1>
                            <p className="text-sm max-w-sm text-center">CS-101: Object-Oriented Programming using TypeScript and Typescript for Next</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater II</h1>
                            <p className="text-sm max-w-sm text-center">W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater III</h1>
                            <p className="text-sm max-w-sm text-center">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg justify-center '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater IV</h1>
                            <p className="text-sm max-w-sm text-center">CN-351: Certified Kubernetes Application Developer (CKAD)</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg justify-center  rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater V</h1>
                            <p className="text-sm max-w-sm text-center">CN-361: Developing Multi-Cloud APIs using CDK for Terraform</p>
                        </span>
                    </div>
                </div>


                <div className={
                        toggleState === 4 ? "lg:col-span-2 md:col-span-2" : "hidden"
                    }
                    id="cnc"
                    role="tabpanel"
                    aria-labelledby="cnc-tab">
                    <p className='font-bold mb-2 text-[#832a71]'>Ambient Computing and IoT Specialization</p>

                    <h1 className='font-bold md:text-4xl text-2xl mb-6'>Course Description:
                    </h1>
                    <p className=' text-[#832a71] md:mb-6 md:max-w-2xl max-w-sm mb-4'>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.
                    </p>
                    <h1 className='md:text-4xl text-xl font-bold text-black  mb-8 border-[#a9288f]     border-l-8 '>Course Outline:
                    </h1>
                    <div className='grid  gap-4 lg:grid-cols-3 sm:grid-cols-3   md:grid-cols-3  justify-center mx-auto'>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater I</h1>
                            <p className="text-sm max-w-sm text-center">CS-101: Object-Oriented Programming using TypeScript and Typescript for Next</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater II</h1>
                            <p className="text-sm max-w-sm text-center">W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater III</h1>
                            <p className="text-sm max-w-sm text-center">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg justify-center '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater IV</h1>
                            <p className="text-sm max-w-sm text-center">AC-351: Ambient Computing with Voice Assistants and Matter Devices</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg justify-center  rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater V</h1>
                            <p className="text-sm max-w-sm text-center">AC-351: Ambient Computing with Voice Assistants and Matter Devices</p>
                        </span>
                    </div>
                </div>


                <div className={
                        toggleState === 5 ? "lg:col-span-2 md:col-span-2" : "hidden"
                    }
                    id="cnc"
                    role="tabpanel"
                    aria-labelledby="cnc-tab">
                    <p className='font-bold mb-2 text-[#832a71]'>Genomics and Bioinformatics Specialization</p>

                    <h1 className='font-bold md:text-4xl text-2xl mb-6'>Course Description:
                    </h1>
                    <p className=' text-[#832a71] md:mb-6 md:max-w-2xl max-w-sm mb-4'>Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focus on performing complex bioinformatics analysis using the most essential Python libraries and applications
                    </p>
                    <h1 className='md:text-4xl text-xl font-bold text-black  mb-8 border-[#a9288f]     border-l-8 '>Course Outline:
                    </h1>
                    <div className='grid  gap-4 lg:grid-cols-3 sm:grid-cols-3   md:grid-cols-3  justify-center mx-auto'>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater I</h1>
                            <p className="text-sm max-w-sm text-center">CS-101: Object-Oriented Programming using TypeScript and Typescript for Next</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater II</h1>
                            <p className="text-sm max-w-sm text-center">W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater III</h1>
                            <p className="text-sm max-w-sm text-center">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg justify-center '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater IV</h1>
                            <p className="text-sm max-w-sm text-center">Bio-351: Python for Biologists</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg justify-center  rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater V</h1>
                            <p className="text-sm max-w-sm text-center">Bio-361: Bioinformatics with Python</p>
                        </span>
                    </div>
                </div>


                <div className={
                    toggleState === 6 ? "lg:col-span-2 md:col-span-2" : "hidden"
                }>
                    <p className='font-bold mb-2 text-[#832a71]'>Network Programmability and Automation Specialization</p>

                    <h1 className='font-bold md:text-4xl text-2xl mb-6'>Course Description:
                    </h1>
                    <p className=' text-[#832a71] md:mb-6 md:max-w-2xl max-w-sm mb-4'>More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.
                    </p>
                    <h1 className='md:text-4xl text-xl font-bold text-black  mb-8 border-[#a9288f]     border-l-8 '>Course Outline:
                    </h1>
                    <div className='grid  gap-4 lg:grid-cols-3 sm:grid-cols-3   md:grid-cols-3  justify-center mx-auto'>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater I</h1>
                            <p className="text-sm max-w-sm text-center">CS-101: Object-Oriented Programming using TypeScript and Typescript for Next</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater II</h1>
                            <p className="text-sm max-w-sm text-center">W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater III</h1>
                            <p className="text-sm max-w-sm text-center">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg rounded-lg shadow-lg justify-center '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater IV</h1>
                            <p className="text-sm max-w-sm text-center">NPA-351: CCNA(Cisco Certified Network Ass.) 200-301 Certification</p>
                        </span>
                        <span className='md:p-6 p-4 text-lg justify-center  rounded-lg shadow-lg '>
                            <h1 className='text-center font-bold border-b-4 border-[#7d3ab0] text-xl mb-6 '>Quater V</h1>
                            <p className="text-sm max-w-sm text-center">NPA-361: Network Programmability and Automation</p>
                        </span>
                    </div>
                </div>


                <div className=' shadow-xl rounded-md p-8 '>
                    <p className='font-bold text-xl mb-4'>Program Structure
                    </p>
                    <p className='text-[#832a71] mb-6 max-w-md'>After finishing the first three quarters, the participants will delve into two specialized quarters specific to their chosen specialization
                    </p>
                    <span className="justify-sart grid-rows-5">

                        <li onClick={
                                () => toggleTab(1)
                            }
                            className={
                                toggleState ? 'flex  gap-4    cursor-pointer   max-w-full   hover:rounded-md p-2  hover:bg-[#fcecf9]  ' : 'tabs'
                        }>

                            <span className='p-2 rounded-lg  text-center  justify-center    shadow-md bg-gradient-to-r from-[#644b5f] to-[#df7ecd]'>
                                <p className="text-white text-center   text-sm      ">
                                    Web
                                </p>
                            </span>
                            <p className="xl:text-lg text-[19px] lg:text-[19px] text-[#4f2246] max-w-7xl text-sm  text-start flex ">
                                Web 3</p>

                        </li>

                        <li className={
                            toggleState ? 'flex  gap-4 md:    max-w-full   hover:rounded-md  p-2  hover:bg-[#fcecf9]  ' : 'tabs'
                        }>
                            <button className="flex gap-4"
                                onClick={
                                    () => toggleTab(2)
                            }>
                                <span className='p-2 rounded-lg  text-center  justify-center    shadow-md bg-gradient-to-r from-[#644b5f] to-[#df7ecd]'>
                                    <p className="text-white text-center   text-sm      ">
                                        AI
                                    </p>
                                </span>
                                <p className="xl:text-lg text-[19px] lg:text-[19px] text-[#4f2246] max-w-7xl  mx-auto text-start flex text-sm">
                                    Artificial Intelligence</p>
                            </button>
                        </li>

                        <li className={
                            toggleState ? 'flex  gap-4 md:    max-w-full   hover:rounded-md  p-2  hover:bg-[#fcecf9]  ' : 'tabs'
                        }>
                            <button className="flex gap-4"
                                onClick={
                                    () => toggleTab(3)
                            }>
                                <span className='p-2 rounded-lg  text-center  justify-center    shadow-md bg-gradient-to-r from-[#644b5f] to-[#df7ecd]'>
                                    <p className="text-white text-center   text-sm      ">
                                        CNC
                                    </p>
                                </span>
                                <p className="xl:text-lg text-[19px] lg:text-[19px] text-[#4f2246] max-w-7xl  mx-auto text-start flex text-sm">
                                    Cloud-Native Computing</p>
                            </button>
                        </li>
                        <li className={
                            toggleState ? 'flex  gap-4 md:    max-w-full   hover:rounded-md  p-2  hover:bg-[#fcecf9]  ' : 'tabs'
                        }>
                            <button className="flex gap-4"
                                onClick={
                                    () => toggleTab(4)
                            }>
                                <span className='p-2 rounded-lg  text-center  justify-center    shadow-md bg-gradient-to-r from-[#644b5f] to-[#df7ecd]'>
                                    <p className="text-white text-center flex  text-sm   mx-auto   ">
                                        AC
                                    </p>
                                </span>
                                <p className="xl:text-lg text-[19px] lg:text-[19px] text-[#4f2246] max-w-7xl  mx-auto text-start flex text-sm">
                                    Ambient Computing and IoT</p>
                            </button>
                        </li>


                        <li className={
                            toggleState ? 'flex  gap-4 md:    max-w-full   hover:rounded-md  p-2  hover:bg-[#fcecf9]  ' : 'tabs'
                        }>
                            <button className="flex gap-4"
                                onClick={
                                    () => toggleTab(5)
                            }>
                                <span className='p-2 rounded-lg  text-center  justify-center    shadow-md bg-gradient-to-r from-[#644b5f] to-[#df7ecd]'>
                                    <p className="text-white text-center   text-sm   mx-auto    ">
                                        GB
                                    </p>
                                </span>
                                <p className="xl:text-lg text-[19px] lg:text-[19px] text-[#4f2246] max-w-7xl  mx-auto text-start flex text-sm">
                                    Genomics Bioinformatics</p>
                            </button>
                        </li>
                        <li className={
                            toggleState ? 'flex  gap-4 md:    max-w-full   hover:rounded-md  p-2 hover:bg-[#fcecf9]  ' : 'tabs'
                        }>
                            <button className="flex gap-4"
                                onClick={
                                    () => toggleTab(5)
                            }>
                                <span className='p-2 rounded-lg  text-center  justify-center    shadow-md bg-gradient-to-r from-[#644b5f] to-[#df7ecd]'>
                                    <p className="text-white text-center   text-sm      ">
                                        NPA
                                    </p>
                                </span>
                                <p className="xl:text-lg text-[19px] lg:text-[19px] text-[#4f2246] max-w-7xl  mx-auto text-start flex text-sm">
                                    Network Programmability and Automation</p>
                            </button>
                        </li>
                    </span>
                </div>
                <div></div>
            </div>
        </div>
    )
}
