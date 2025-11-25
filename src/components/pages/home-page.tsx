"use client"
import { Quicksand } from "next/font/google"
import Particles from "../animations/Particles"



const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function HomePage() {
  return (
    <div className="relative flex items-center justify-center h-full w-full bg-black overflow-hidden">
      {/* Particles fullscreen background */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <Particles
          particleColors={["#d1d1d1", "#410235"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={70}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Konten center - Text Content */}
      <div className="max-w-6xl space-y-6 relative z-10 text-center flex flex-col items-center justify-center">
        <div className="space-y-0 w-full">
          <p className={`text-slate-300 text-2xl tracking-[0.3em] text-left pl-3 ${quicksand.className}`}>HELLO! WELCOME TO</p>

          <h1
            className="text-[230px] font-extrabold bg-clip-text tracking-tight leading-none -mt-4 "
            style={{
              backgroundImage: "url('/assets/cl.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
            }}
          >
            ELSHA&apos;S
          </h1>
          <p className={`mt-2 text-2xl text-slate-300 tracking-[0.3em] text-right ${quicksand.className}`}>PORTFOLIO</p>
        </div>
      </div>
    </div>
  )
}
