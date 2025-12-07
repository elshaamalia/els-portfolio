"use client"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma, SiPython } from 'react-icons/si';
import TypingText from "@/components/animations/typing-text"
import { Montserrat } from "next/font/google"
import Lanyard from "../Lanyard"
import LogoLoop, { LogoItem } from "../animations/LogoLoop"


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})

// 2. DATA LOGO DENGAN REACT ICONS
const techLogos: LogoItem[] = [
  { 
    node: <SiReact className="text-[#61DAFB]" />, 
    title: "React", 
    href: "https://react.dev" 
  },
  { 
    node: <SiNextdotjs className="text-white" />, 
    title: "Next.js", 
    href: "https://nextjs.org" 
  },
  { 
    node: <SiTypescript className="text-[#3178C6]" />, 
    title: "TypeScript", 
    href: "https://www.typescriptlang.org" 
  },
  { 
    node: <SiTailwindcss className="text-[#38B2AC]" />, 
    title: "Tailwind CSS", 
    href: "https://tailwindcss.com" 
  },
  { 
    node: <SiPython className="text-[#3776AB]" />, 
    title: "Python", 
    href: "https://www.python.org" 
  },
  { 
    node: <SiFigma className="text-[#F24E1E]" />, 
    title: "Figma", 
    href: "https://figma.com" 
  },
];

export default function AboutPage() {
  return (
    <div className="relative flex items-center justify-between h-full w-full pl-60 pr-20 bg-black overflow-hidden">
      <div className="fixed inset-0 w-screen h-screen z-0">
      </div>

      {/* Konten kiri - Text Content */}
      <div className="max-w-4xl space-y-6 relative z-10 mt-30">
        <div className="space-y-4">
          <h1 className={`text-white text-9xl font-black tracking-tight ${montserrat.className}`}>
            <TypingText text="PROFILE" speed={50} />
          </h1>
          <div className="space-y-6 mt-10">
            <p className={`text-slate-300 text-lg leading-relaxed ${montserrat.className}`}>
              My name is Elsha Amalia Pusponegoro, and i&apos;m a Software Engineer.
            </p>

            <h2 className={`text-sky-400 text-3xl font-light leading-snug ${montserrat.className}`}>
              I blend artwork with cutting-edge technology, <br />
              designing immersive visual and functional user <br />
              interfaces and experiences
            </h2>

            <p className={`text-slate-300 text-base leading-relaxed max-w-2xl ${montserrat.className}`}>
              With over five years of experience in programming, I specialize in frontend development,
              creating dynamic and responsive web and mobile applications.
            </p>
          </div>
        </div>

        {/* --- IMPLEMENTASI LOGOLOOP --- */}
        <div className="mt-16 py-4 border-t border-slate-800/50 max-w-3xl w-full">
           <p className={`text-slate-500 text-sm mb-6 ${montserrat.className}`}>Technologies I use:</p>
           
           <LogoLoop 
             logos={techLogos} 
             direction="left"
             speed={50}
             logoHeight={35}
             gap={50}
             pauseOnHover={true}
             fadeOut={true}
             fadeOutColor="#000000"
             width="100%" // Pastikan width komponen 100% mengikuti parent div (max-w-2xl)
           />
        </div>

      </div>

      {/* Konten kanan - Lanyard */}
      <div className="absolute right -translate-y-1/2 z-50 w-full h-[600px] pl-90 pointer-events-none">
        <div className="pointer-events-auto">
          <Lanyard 
            position={[0, 0, 18]}
            gravity={[0, -40, 0]}
            fov={20}
            transparent={true}
          />
        </div>
      </div>
    </div>
  )
}