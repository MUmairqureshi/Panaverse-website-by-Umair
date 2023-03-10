'use client ';
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from './page.module.css'
import {Programstudies} from '../components/program-of-studies'

import {Outcome} from '../components/outcome'
import {Hero} from '../components/home'
import {Specializedtracks} from '../components/specialized-tracks'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main>
            <Hero/>
            <Programstudies/>
            <Specializedtracks/>
            <Outcome/>
        </main>
    )
}
