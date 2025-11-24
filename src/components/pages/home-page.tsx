"use client"

import TypingText from "@/components/animations/typing-text"
import { Quicksand, Caveat } from "next/font/google"
import Particles from "../animations/Particles"
import DecryptedText from "../animations/DecryptedText"
import Lanyard from "../Lanyard"

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700']
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export default function HomePage() {
  return (
    <div className="relative flex items-center justify-between h-full w-full pl-60 pr-20 bg-black overflow-hidden">
      {/* Particles fullscreen background - FIXED dan SELALU AKTIF */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <Particles 
          particleColors={['#8fdd86', '#d578c4']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Konten kiri - Text Content */}
      <div className="max-w-4xl space-y-6 relative z-10">
        <div className="space-y-4">
          <p className={`text-slate-400 text-2xl ${quicksand.className}`}>
            <TypingText text="Hello, Welcome To" speed={50} />
          </p> 
          <h1 className="text-8xl font-semibold text-white tracking-tight flex gap-2">
            <span className={quicksand.className}>
              <DecryptedText text="ELSHA'S" speed={90} />
            </span>

            <span className={caveat.className}>
              <DecryptedText text=" Portfolio" speed={90} />
            </span>
          </h1>

          <p className={`text-2xl text-slate-400 ${quicksand.className}`}>
            {">"} Software Engineer
          </p>
        </div>

        <div className="pt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition">
            View My Work
          </button>
        </div>
      </div>

      {/* Konten kanan - Lanyard Component - TIDAK DIUBAH */}
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