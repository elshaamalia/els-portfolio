"use client"

import { Montserrat } from "next/font/google"
import TypingText from "@/components/animations/typing-text" 
import { 
  SiPython, 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiMqtt, 
  SiFirebase 
} from "react-icons/si"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

// --- DEFINISI DATA ---
const techStack = [
  { name: "Python", icon: SiPython, color: "hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/50" },
  { name: "React.js", icon: SiReact, color: "hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50" },
  { name: "Node.js", icon: SiNodedotjs, color: "hover:text-green-500 hover:bg-green-500/10 hover:border-green-500/50" },
  { name: "TypeScript", icon: SiTypescript, color: "hover:text-blue-600 hover:bg-blue-600/10 hover:border-blue-600/50" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-cyan-300 hover:bg-cyan-300/10 hover:border-cyan-300/50" },
  { name: "IoT (MQTT)", icon: SiMqtt, color: "hover:text-purple-400 hover:bg-purple-400/10 hover:border-purple-400/50" },
  { name: "Realtime DB", icon: SiFirebase, color: "hover:text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/50" },
]

export default function ExperiencePage() {
  return (
    // OUTER WRAPPER 
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden"> 
      
      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto  px-8 md:px-12">
        
        {/* HEADER SECTION */}
        <div className="mb-16 mt-14">
           <p className={`text-slate-400 text-sm tracking-widest mb-2 ${montserrat.className}`}>PROFESSIONAL HISTORY</p>
           <h1 className={`text-white text-6xl font-black tracking-tight ${montserrat.className}`}>
             <TypingText text="EXPERIENCE" speed={50} />
           </h1>
        </div>

        {/* CONTENT AREA */}
        <div className="relative w-full rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl overflow-hidden shadow-2xl p-8 md:p-12 group hover:border-zinc-700 transition-all duration-500">
            
            
            {/* --- CARD HEADER --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 relative z-10 border-b border-zinc-800/50 pb-8">
                <div className="flex items-center gap-5">
                    {/* Logo Company */}
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 ring-1 ring-white/10 shrink-0">
                       <span className={`text-white text-3xl font-black ${montserrat.className}`}>G</span>
                    </div>
                    
                    <div className="space-y-1">
                        <h2 className={`text-white text-xl md:text-2xl font-bold tracking-tight ${montserrat.className}`}>
                            PT GIKEN PRECISION
                        </h2>

                        {/* Industry Tag */}
                        <div className={`flex items-center gap-2 text-zinc-500 text-xs font-bold tracking-widest uppercase ${montserrat.className}`}>
                            <span>Manufacturing & Assembly</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-zinc-400 pt-1">
                            <span className="text-sm">📍 Batam, Indonesia</span>
                        </div>
                        
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-3 pt-3">
                            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border border-blue-800/60 bg-blue-950/30 text-blue-400 text-[10px] font-bold tracking-wide uppercase shadow-inner ${montserrat.className}`}>
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                              <span>Internship</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Date Badge */}
                <div className={`shrink-0 px-4 py-2 border border-zinc-800 rounded-lg bg-black/20 text-zinc-300 text-sm font-medium tracking-wide ${montserrat.className}`}>
                    March 2025 - Nov 2025
                </div>
            </div>

            {/* --- ROLE & DESCRIPTION --- */}
            <div className="mb-10 relative z-10">
                <h3 className={`text-3xl font-black mb-4 text-transparent bg-clip-text bg-linear-to-r from-white via-blue-100 to-zinc-400 ${montserrat.className}`}>
                    Fullstack IoT Engineer
                </h3>
                
                <p className={`text-zinc-300 text-base leading-relaxed max-w-4xl ${montserrat.className} opacity-90`}>
                    Developed a realtime Cycle Time Monitoring System based on IoT infrastructure. Assisted and contributed to the 1-to-1 migration of legacy applications to modern React-based solutions, significantly enhancing feature functionality and improving overall UI/UX efficiency.
                </p>

                <ul className={`mt-6 space-y-3 text-zinc-400 text-sm ${montserrat.className}`}>
                    <li className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Spearheaded the development of IoT-based realtime monitoring dashboard.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Executed legacy system migration using modern React ecosystem.</span>
                    </li>
                </ul>
            </div>

            {/* --- TECH STACK SECTION --- */}
            <div className="relative z-10">
                <h4 className={`text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase mb-6 ${montserrat.className}`}>
                    Core Technologies
                </h4>
                
                <div className="flex flex-wrap items-center gap-4">
                    {techStack.map((tech, index) => (
                        <div 
                        key={index}
                        className="group/icon relative flex flex-col items-center"
                        >
                            {/* Icon Container */}
                            <div className={`w-12 h-12 rounded-xl bg-zinc-800/40 border border-zinc-700/30 flex items-center justify-center text-zinc-400 text-2xl transition-all duration-300 group-hover/icon:scale-110 shadow-lg ${tech.color}`}>
                                <tech.icon />
                            </div>

                            {/* Tooltip */}
                            <div className="absolute -bottom-8 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 px-2 py-1 rounded text-[10px] bg-black border border-zinc-800 text-zinc-300 whitespace-nowrap z-20 pointer-events-none">
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