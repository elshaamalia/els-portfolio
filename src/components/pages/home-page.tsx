"use client"
import { Quicksand, Montserrat } from "next/font/google"
import Particles from "../animations/Particles"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function HomePage() {
  return (
    <div className="relative flex items-center justify-center h-full w-full bg-black overflow-hidden">
      {/* 1. Background Particles */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <Particles
          particleColors={["#d1d1d1", "#410235"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={70}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Konten Utama */}
      <div className="max-w-6xl space-y-6 relative z-10 text-center flex flex-col items-center justify-center">
        <div className="space-y-0 w-full flex flex-col items-center">
          
          <p className={`text-slate-300 text-5xl tracking-[0.5em] w-full text-left pl-6 ${montserrat.className}`}>
            エルシャ
          </p>
          {/* mix-blend-screen: INI KUNCINYA. */}
          {/* Ini bikin warna Hitam (bg-black) jadi TRANSPARAN 100% terhadap background particles */}
          <div className="relative -mt-6 bg-black mix-blend-screen p-4 select-none outline outline-4 outline-black">
            
            {/* 1. Teks (Warna Putih) */}
            {/* Teks putih ini akan jadi 'wadah' buat videonya */}
            <h1
              className={`text-[250px] font-black tracking-wide leading-none text-white bg-black relative z-0 ${montserrat.className}`}
            >
              ELSHA
            </h1>

            {/* 2. Video (mix-blend-multiply) */}
            {/* Logika: Video x Putih (Teks) = Muncul Video */}
            {/* Logika: Video x Hitam (Sisa Background) = Jadi Hitam Peat */}
            {/* Nah, Hitam Pekat ini lalu di-hilangkan oleh 'mix-blend-screen' di wrapper tadi */}
            <video
              className="absolute inset-0 w-full h-full object-cover z-10 mix-blend-multiply pointer-events-none"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/Download.mp4" type="video/mp4" />
            </video>
            
          </div>
          {/* <p className={`mt-2 text-2xl text-slate-300 tracking-[0.3em] w-full text-right ${quicksand.className}`}>
            PORTFOLIO
          </p> */}
        </div>
      </div>
    </div>
  )
}