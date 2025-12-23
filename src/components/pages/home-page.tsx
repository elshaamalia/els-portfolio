"use client"
import { Montserrat } from "next/font/google"
import Galaxy from "../animations/Galaxy"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function HomePage() {
  return (
    <div className="relative flex items-center justify-center h-full w-full overflow-hidden">

      {/* 🔥 Background Galaxy */}
      <div className="fixed inset-0 w-screen h-screen z-2">
        <Galaxy
          mouseRepulsion={false}
          density={0.8}
          hueShift={200}
          glowIntensity={0.1}
          twinkleIntensity={0.1}
          starSpeed={0.5}
          rotationSpeed={0}      
          speed={0.3}              // opsional: stop animasi kecil
          transparent={true}
          animationspeed={1}
        />
      </div>

      {/* Konten Utama */}
      <div className="max-w-6xl space-y-6 relative z-10 text-center flex flex-col items-center justify-center">
        <div className="space-y-0 w-full flex flex-col items-center">

          <p className={`text-slate-300 text-5xl tracking-[0.5em] w-full text-left pl-6 ${montserrat.className}`}>
            エルシャ
          </p>

          <div className="relative -mt-8 bg-black mix-blend-screen p-4 select-none  outline-4 outline-black">

            <h1
              className={`text-[280px] font-black tracking-tight leading-none text-white bg-black relative z-0 ${montserrat.className}`}
            >
              ELSHA
            </h1>

            <video
              className="absolute inset-0 w-full h-full object-cover z-10 mix-blend-multiply pointer-events-none"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/bg-text.mp4" type="video/mp4" />
            </video>

          </div>

        </div>
      </div>
    </div>
  )
}
