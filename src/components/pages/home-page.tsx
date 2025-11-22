"use client"

import TypingText from "@/components/animations/typing-text"
import { Quicksand, Caveat } from "next/font/google"
import Particles from "../animations/Particles"
import DecryptedText from "../animations/DecryptedText"

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
    <div className="relative flex items-center h-full w-full pl-64">
      {/* Particles fullscreen background */}
      <div className="absolute inset-0 w-full h-full z-0">
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

      {/* Konten di foreground - ALIGN LEFT */}
      <div className="max-w-4xl space-y-6 relative z-10">
        <div className="space-y-4">
          <p className={`text-slate-400 text-2xl ${quicksand.className}`}>
            <TypingText text="Welcome To" speed={50} />
          </p> 
          <h1 className="text-8xl font-semibold text-white tracking-tight flex gap-2">
            <span className={quicksand.className}>
              <DecryptedText text="ELSHA'S" speed={90} />
            </span>

            <span className={caveat.className}>
              <DecryptedText text="Portfolio" speed={90} />
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
    </div>
  )
}