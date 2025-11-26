"use client"

import TypingText from "@/components/animations/typing-text"
import { Montserrat } from "next/font/google"
import Image from "next/image"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function ProjectPage() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 w-screen h-screen bg-linear-to-b from-black via-black to-black z-0" />

      {/* Main container */}
      <div className="relative z-10 w-full">
        {/* Header Section */}
        <div className="pt-28 px-20">
          {/* Top subtitle - Japanese and English
          <div className="text-center mb-12 space-y-2">
            <p className={`text-blue-400 text-sm tracking-widest font-medium ${montserrat.className}`}>オーバビュー</p>
            <p className={`text-slate-500 text-xs tracking-widest ${montserrat.className}`}>
              LIST OF FEATURED PORTFOLIO
            </p>
          </div> */}

          {/* Main title */}
          <div className="text-right  mb-14">
            <p className={`text-slate-400 text-lg tracking-widest leading-relaxed ${montserrat.className}`}>
              FEATURED WORKS
            </p>
            <h1 className={`text-white text-9xl font-black tracking-tight drop-shadow-lg ${montserrat.className}`}>
              <TypingText text="PROJECTS" speed={50} />
            </h1>
          </div>
        </div>

        {/* Projects Grid Section */}
        <div className="px-20 pb-20">
          {/* Featured Project Card */}
          <div className="relative bg-cover bg-center rounded-lg overflow-hidden h-[600px] border border-slate-800">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/airplane-wing-clouds-sky-aerial-view.jpg')",
                opacity: 0.3,
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black" />

            {/* Content Container */}
            <div className="relative h-full flex items-center z-10">
              {/* Left Content */}
              <div className="w-1/2 px-16 space-y-8">
                {/* Project Title */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h2 className={`text-white text-4xl font-black tracking-tight ${montserrat.className}`}>
                      PT GIKEN PRECISION INDONESIA
                    </h2>
                    <span className="text-blue-400 text-2xl">↗</span>
                  </div>
                  <p className={`text-slate-400 text-sm tracking-widest ${montserrat.className}`}>
                    2025 | BATAM, INDONESIA
                  </p>
                </div>

                {/* Role */}
                <div>
                  <p className={`text-slate-500 text-xs tracking-widest mb-3 ${montserrat.className}`}>FULLSTACK</p>
                  <h3 className={`text-white text-3xl font-bold leading-tight ${montserrat.className}`}>
                    MONITORING SYSTEM
                    <br />
                    CYCLE TIME REALTIME
                    <br />
                    IOT BASED
                  </h3>
                </div>

                {/* Description */}
                <p className={`text-slate-400 text-sm leading-relaxed max-w-md ${montserrat.className}`}>
                  Assisted and contributed to the 1-to-1 migration of a legacy application to a modern React-based
                  solution, while enhancing feature functionality and improving UI/UX
                </p>

                {/* CTA Button */}
                <button
                  className={`mt-8 px-6 py-3 border border-slate-400 text-slate-300 text-xs font-semibold tracking-widest hover:bg-slate-900 transition-colors ${montserrat.className}`}
                >
                  UNDER NDA - NO CASE STUDY
                </button>
              </div>

              {/* Right Content - Website Mockup */}
              <div className="w-1/2 pr-16 h-full flex items-center justify-center">
                <div className="relative w-full max-w-sm h-[450px] bg-black border border-slate-700 rounded overflow-hidden shadow-2xl">
                  {/* Website mockup image */}
                  <Image
                    src="/dark-website-ui-aviation-dashboard.jpg"
                    alt="Aerotalon website mockup"
                    fill
                    className="object-cover"
                  />
                  {/* Browser chrome effect */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-black border-b border-slate-700 flex items-center px-3 gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
