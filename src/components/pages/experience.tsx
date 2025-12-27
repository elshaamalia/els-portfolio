"use client"

import { Montserrat } from "next/font/google"
import TypingText from "@/components/animations/typing-text" 
import Image from "next/image"
import { 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiMqtt, 
  SiMysql, 
  SiArduino,
  SiSocketdotio,
} from "react-icons/si"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

// --- DEFINISI DATA ---
const techStack = [
  { name: "React.js", icon: SiReact, color: "hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50" },
  { name: "Node.js", icon: SiNodedotjs, color: "hover:text-green-500 hover:bg-green-500/10 hover:border-green-500/50" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-cyan-300 hover:bg-cyan-300/10 hover:border-cyan-300/50" },
  { name: "IoT (MQTT)", icon: SiMqtt, color: "hover:text-purple-400 hover:bg-purple-400/10 hover:border-purple-400/50" },
  { name: "MySQL", icon: SiMysql, color: "hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/50" },
  { name: "Arduino", icon: SiArduino, color: "hover:text-teal-400 hover:bg-teal-400/10 hover:border-teal-400/50" },
  { name: "Socket.io", icon: SiSocketdotio, color: "hover:text-gray-400 hover:bg-gray-400/10 hover:border-gray-400/50" },
]

export default function ExperiencePage() {
  return (
    // OUTER WRAPPER 
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden"> 
      
      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-0 md:px-12">
        
        {/* HEADER SECTION */}
        <div className="mb-10 md:mb-16 mt-0 md:mt-14">
           <p className={`text-slate-400 text-xs md:text-sm tracking-widest mb-2 ${montserrat.className}`}>PROFESSIONAL HISTORY</p>
           {/* Font size responsive */}
           <h1 className={`text-white text-4xl md:text-6xl font-black tracking-tight ${montserrat.className}`}>
             <TypingText text="EXPERIENCE" speed={50} />
           </h1>
           <div className="h-1 w-16 md:w-20 bg-pink-500 rounded-full mt-4"></div>
        </div>

        {/* CONTENT AREA */}
        <div className="relative w-full rounded-3xl border border-zinc-900 backdrop-blur-xs overflow-hidden shadow-2xl p-6 md:p-12 group transition-all duration-500">
            
            {/* --- CARD HEADER --- */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 md:mb-10 gap-6 relative z-10 border-b border-zinc-800/50 pb-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                    {/* Logo Company */}
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl ring-1 ring-white/10 shrink-0 overflow-hidden flex items-center justify-center bg-white p-2">
                       <Image 
                            src="/assets/giken.png" 
                            alt="Giken Precision Indonesia Logo"
                            width={100} 
                            height={64} 
                            className="object-contain w-full h-full drop-shadow-sm" 
                        />
                    </div>
                    
                    <div className="space-y-1">
                        <h2 className={`text-white text-lg md:text-2xl font-bold tracking-tight ${montserrat.className}`}>
                            PT GIKEN PRECISION INDONESIA
                        </h2>

                        <div className={`flex items-center gap-2 text-zinc-500 text-[10px] md:text-xs font-bold tracking-widest uppercase ${montserrat.className}`}>
                            <span>Manufacturing & Assembly</span>
                        </div>

                        <div className="flex items-center gap-2 text-zinc-400 pt-1">
                            <span className="text-xs md:text-sm">📍 Batam, Indonesia</span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-3 pt-3">
                            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border border-blue-800/60 bg-blue-950/30 text-blue-400 text-[10px] font-bold tracking-wide uppercase shadow-inner ${montserrat.className}`}>
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                              <span>Internship</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Date Badge */}
                <div className={`shrink-0 px-4 py-2 border border-zinc-800 rounded-lg bg-black/20 text-zinc-300 text-xs md:text-sm font-medium tracking-wide ${montserrat.className}`}>
                    March 2025 - Nov 2025
                </div>
            </div>

            {/* --- ROLE & DESCRIPTION --- */}
            <div className="mb-10 relative z-10">
                <h3 className={`text-2xl md:text-3xl font-black mb-4 text-transparent bg-clip-text bg-linear-to-r from-white via-blue-100 to-zinc-400 ${montserrat.className}`}>
                    Fullstack IoT Engineer
                </h3>
                
                <p className={`text-zinc-300 text-sm md:text-base leading-relaxed max-w-4xl ${montserrat.className} opacity-90 text-justify`}>
                    Engineered the complete software ecosystem for a real-time Cycle Time Monitoring System. Responsible for the end-to-end data flow—from programming the hardware logic to developing the web-based visualization dashboard.               
                </p>

                <ul className={`mt-6 space-y-3 text-zinc-400 text-sm ${montserrat.className}`}>
                    <li className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Built a high-performance dashboard to stream live production data, ensuring low-latency updates for real-time monitoring.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Developed backend services to process incoming sensor data streams and managed the database for historical logging and reporting.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Programmed the microcontroller firmware to capture sensor readings and implemented messaging protocols to bridge hardware with the central server</span>
                    </li>
                </ul>
            </div>

            {/* --- TECH STACK SECTION --- */}
            <div className="relative z-10">
                <h4 className={`text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase mb-6 ${montserrat.className}`}>
                    Core Technologies
                </h4>
                
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    {techStack.map((tech, index) => (
                        <div 
                        key={index}
                        className="group/icon relative flex flex-col items-center"
                        >
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-800/40 border border-zinc-700/30 flex items-center justify-center text-zinc-400 text-xl md:text-2xl transition-all duration-300 group-hover/icon:scale-110 shadow-lg ${tech.color}`}>
                                <tech.icon />
                            </div>

                            <div className="absolute -bottom-8 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-100 px-2 py-1  text-[10px] md:text-[12px] text-zinc-300 whitespace-nowrap z-20 pointer-events-none">
                                {tech.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

      </div>
    </div>
  )
}