"use client"

import TypingText from "@/components/animations/typing-text"
import { Montserrat } from "next/font/google"
import Lanyard from "../Lanyard"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})  


export default function AboutPage() {
  return (
    <div className="relative flex items-center justify-between h-full w-full pl-60 pr-20 bg-black overflow-hidden">
      {/* Particles fullscreen background - FIXED dan SELALU AKTIF */}
      <div className="fixed inset-0 w-screen h-screen z-0">
      </div>

      {/* Konten kiri - Text Content */}
      <div className="max-w-4xl space-y-6 relative z-10">
        <div className="space-y-4">
          <h1 className={`text-white text-9xl font-black tracking-wide ${montserrat.className}`}>
            <TypingText text="PROFILE" speed={50} />
          </h1> 
          <div className="space-y-6 mt-10">
            {/* Kalimat kecil */}
            <p className={`text-slate-300 text-lg leading-relaxed ${montserrat.className}`}>
              My name is Elsha Amalia Pusponegoro, and i&apos;m a Software Engineer.
            </p>

            {/* Paragraf biru besar */}
            <h2 className={`text-sky-400 text-3xl font-light leading-snug ${montserrat.className}`}>
              I blend artwork with cutting-edge technology, <br />
              designing immersive visual and functional user <br />
              interfaces and experiences
            </h2>

            {/* Paragraf bawah */}
            <p className={`text-slate-300 text-base leading-relaxed max-w-2xl ${montserrat.className}`}>
              With over five years of experience in programming, I specialize in frontend development,
              creating dynamic and responsive web and mobile applications.
            </p>
          </div>
        </div>
      </div>

      {/* Konten kanan - Lanyard Component*/}
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