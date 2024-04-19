'use client'

import React from "react";
import Particles from "../components/particles";
import { SlArrowLeftCircle } from "react-icons/sl";
import styles from './styles.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className={`${styles.notfound_body}`}>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/>
        <h3 className={`${styles.subtitle} text-2xl text-white/80 font-display`}>devFriox</h3>
        <h1 className={`${styles.title} mt-2 duration-500 text-6xl sm:text-7xl md:text-8xl text-white/90 font-display`}>404 Not Found</h1>
        <h2 className={`${styles.desc} mt-8 duration-500 text-xs sm:text-sm md:text-xl text-white/30`}>I can&apos;t find your destination :(</h2>
        <div className={`${styles.buttoncase} mt-8`}>
          <SlArrowLeftCircle size='60px' className={styles.backbutton} onClick={router.back}/>
        </div>
      </div>
    </div>
  );
}