import Link from "next/link";
import React from "react";
import Particles from "../components/particles";
import styles from './styles.module.css'
import { IoBuildSharp } from "react-icons/io5";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Tech Stack", href: "/techstack"},
  { name: "Projects", href: "/projects"},
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className={`${styles.main_body}`}>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className={`${styles.subtitle} mb-8`}>
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-xs sm:text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/>
        <h1 className={`${styles.title} mt-2 duration-500 text-6xl sm:text-7xl md:text-8xl text-white/90 font-display`}>devFriox</h1>
        <h2 className={`${styles.desc} mt-8 duration-500 text-xs sm:text-sm md:text-xl text-white/30`}>a developer who explores deep space</h2>
        <div className={`${styles.version} flex duration-500 text-xs sm:text-sm md:text-xl items-center mt-8 text-white/15`}><IoBuildSharp/>&nbsp;{process.env.NEXT_PUBLIC_VERSION}</div>
      </div>
    </div>
  );
}