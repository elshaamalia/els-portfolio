"use client"

import { Montserrat } from "next/font/google"
import TypingText from "@/components/animations/typing-text" 
import LogoLoop, { LogoItem } from "../animations/LogoLoop" 
// import Lanyard from "../Lanyard"

// IMPORT ICONS
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFigma, 
  SiPython 
} from 'react-icons/si'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})

// DATA LOGO
const techLogos: LogoItem[] = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-[#38B2AC]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython className="text-[#3776AB]" />, title: "Python", href: "https://www.python.org" },
  { node: <SiFigma className="text-[#F24E1E]" />, title: "Figma", href: "https://figma.com" },
];

export default function AboutPage() {
  return (
    // OUTER WRAPPER 
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden">
      
      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-20 pb-20 px-8 md:px-12 flex flex-col lg:flex-row items-start justify-between">
        
        {/* --- LEFT COLUMN: TEXT CONTENT --- */}
        <div className="w-full relative z-20">
            
            {/* HEADER SECTION */}
            <div className="mb-10 mt-14">
                <p className={`text-slate-400 text-sm tracking-widest mb-2 ${montserrat.className}`}>INTRODUCTION</p>
                <h1 className={`text-white text-6xl md:text-8xl font-black tracking-tight ${montserrat.className}`}>
                    <TypingText text="PROFILE" speed={50} />
                </h1>
            </div>

            {/* BODY TEXT */}
            <div className="space-y-8">
                <p className={`text-slate-300 text-lg leading-relaxed border-l-4 border-blue-500 pl-6 ${montserrat.className}`}>
                   My name is <strong className="text-white">Elsha Amalia Pusponegoro</strong>, and I&apos;m a Software Engineer.
                </p>

                <h2 className={`text-sky-400 text-2xl md:text-3xl font-light leading-snug ${montserrat.className}`}>
                   I blend artwork with cutting-edge technology, designing immersive visual and functional user interfaces and experiences.
                </h2>

                <p className={`text-slate-400 text-base leading-relaxed max-w-xl ${montserrat.className}`}>
                   With over five years of experience in programming, I specialize in frontend development, creating dynamic and responsive web and mobile applications.
                </p>
            </div>

            {/* --- LOGO LOOP SECTION --- */}
            <div className="mt-16 pt-8 border-t border-slate-800/50 w-full max-w-xl">
               <p className={`text-slate-500 text-xs font-bold tracking-widest uppercase mb-6 ${montserrat.className}`}>
                 Technologies I use
               </p>
               
               <LogoLoop 
                 logos={techLogos} 
                 direction="left"
                 speed={50}
                 logoHeight={35}
                 gap={50}
                 pauseOnHover={true}
                 fadeOut={true}
                 fadeOutColor="#000000" 
                 width="100%" 
               />
            </div>
        </div>

        {/* --- RIGHT COLUMN: LANYARD (PLACEHOLDER) --- */}
        {/* Area ini disiapkan agar Lanyard nanti posisinya pas di sebelah kanan teks */}
        <div className="hidden lg:block w-1/2 h-[600px] relative pointer-events-none">
            {/* Uncomment jika Lanyard sudah siap */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-auto">
                 <Lanyard 
                   position={[0, 0, 18]}
                   gravity={[0, -40, 0]}
                   fov={20}
                   transparent={true}
                 />
            </div> 
            */}
        </div>

      </div>
    </div>
  )
}