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

      <div className="fixed inset-0 w-screen h-screen z-2">
        <Galaxy
          mouseRepulsion={false}
          density={0.8}
          hueShift={200}
          glowIntensity={0.1}
          twinkleIntensity={0.1}
          starSpeed={0.5}
          rotationSpeed={0}      
          speed={0.3}              
          transparent={true}
          animationspeed={1}
        />
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 w-full px-4">
        
        {/* --- WRAPPER SEJAJAR --- */}
        {/* w-fit: lebar mengikuti konten terpanjang (ELSHA) */}
        {/* mx-auto: agar posisi wrapper tetap di tengah layar */}
        {/* items-start: agar semua anak rata kiri */}
        <div className="w-fit mx-auto flex flex-col items-start">


          <p className={`text-slate-300 text-left 
            text-xl sm:text-3xl md:text-4xl lg:text-5xl 
            tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] 
            pl-2 md:pl-4 
            ${montserrat.className}`}
          >
            エルシャ
          </p>

          {/* CONTAINER JUDUL UTAMA */}
          <div className="relative bg-black mix-blend-screen p-2 md:p-4 select-none outline-4 outline-black
            -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8"
          >

            <h1
              className={`font-black tracking-tight leading-none text-white bg-black relative z-0 
              text-[70px] sm:text-[140px] md:text-[200px] lg:text-[280px]
              ${montserrat.className}`}
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