"use client"

import { useState } from "react"
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
import { ChevronRight, ChevronDown, Calendar, MapPin, Briefcase, Clock } from "lucide-react"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

// --- DATA EXPERIENCE ---
const experienceData = [
  {
    id: 1,
    role: "Fullstack IoT Engineer",
    company: "PT GIKEN PRECISION INDONESIA",
    logo: "/assets/logo_giken.png",
    location: "Batam, Indonesia",
    period: "March 2025 - Nov 2025",
    duration: "9 Months",
    type: "Internship",
    mode: "On-site",
    description: "Engineered the complete software ecosystem for a real-time Cycle Time Monitoring System. Responsible for the end-to-end data flow—from programming the hardware logic to developing the web-based visualization dashboard.",
    responsibilities: [
      "Built a high-performance dashboard to stream live production data, ensuring low-latency updates for real-time monitoring.",
      "Developed backend services to process incoming sensor data streams and managed the database for historical logging and reporting.",
      "Programmed the microcontroller firmware to capture sensor readings and implemented messaging protocols to bridge hardware with the central server."
    ],
    techStack: [
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
      { name: "IoT (MQTT)", icon: SiMqtt, color: "text-purple-400" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
      { name: "Arduino", icon: SiArduino, color: "text-teal-400" },
      { name: "Socket.io", icon: SiSocketdotio, color: "text-gray-400" },
    ]
  }
]

export default function ExperiencePage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="relative w-full min-h-screen bg-overflow-hidden"> 
      
      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-8 pb-20">
        
        {/* HEADER SECTION */}
        <div className="mb-8 md:mb-12 mt-4 md:mt-12">
           <p className={`text-slate-400 text-[10px] md:text-xs tracking-widest mb-2 ${montserrat.className}`}>PROFESSIONAL HISTORY</p>
           <h1 className={`text-white text-2xl md:text-5xl font-black tracking-tight ${montserrat.className}`}>
             <TypingText text="EXPERIENCE" speed={50} />
           </h1>
           <div className="h-1 w-12 md:w-16 bg-pink-500 rounded-full mt-3"></div>
        </div>

        {/* LIST EXPERIENCE */}
        <div className="space-y-4 md:space-y-5 backdrop-blur-xl rounded-xl">
            {experienceData.map((exp) => (
                <div 
                    key={exp.id} 
                    className={`relative w-full rounded-xl border transition-all duration-300 overflow-hidden group 
                        ${expandedId === exp.id 
                            ? "bg-zinc-900/80 border-zinc-700 shadow-xl" 
                            : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700/50 hover:bg-zinc-900/60"
                        }
                    `}
                >
                    
                    {/* --- CLICKABLE HEADER AREA --- */}
                    <div 
                        onClick={() => toggleExpand(exp.id)}
                        className="p-4 md:p-5 cursor-pointer"
                    >
                        <div className="flex gap-3 md:gap-5 items-start">
                            
                            {/* Logo */}
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white p-1 shrink-0 shadow-sm mt-0.5">
                                <Image 
                                    src={exp.logo} 
                                    alt={exp.company} 
                                    width={48} 
                                    height={48} 
                                    className="object-contain w-full h-full" 
                                />
                            </div>

                            {/* Main Info */}
                            <div className="flex-1 min-w-0">
                                {/* Role: */}
                                <h3 className={`text-white text-sm md:text-base font-bold truncate ${montserrat.className}`}>
                                    {exp.role}
                                </h3>
                                {/* Company */}
                                <p className={`text-zinc-400 text-xs font-medium mb-1.5 ${montserrat.className}`}>
                                    {exp.company}
                                </p>

                                {/* Meta Data Row*/}
                                <div className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-zinc-500 font-medium tracking-wide ${montserrat.className}`}>
                                    <span className="flex items-center gap-1 bg-zinc-800/50 px-1.5 py-0.5 rounded">
                                        <Calendar size={10} /> {exp.period}
                                    </span>
                                    <span className="flex items-center gap-1 bg-zinc-800/50 px-1.5 py-0.5 rounded">
                                        <Clock size={10} /> {exp.duration}
                                    </span>
                                    <span className="flex items-center gap-1 text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded border border-blue-400/20">
                                        <Briefcase size={10} /> {exp.type}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin size={10} /> {exp.location}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Toggle Button */}
                        <div className="mt-3 md:mt-0 md:absolute md:top-5 md:right-5 flex items-center justify-end gap-1 text-[10px] font-semibold text-zinc-500 group-hover:text-white transition-colors select-none">
                            <span>{expandedId === exp.id ? "" : "Details"}</span>
                            {expandedId === exp.id ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        </div>
                    </div>

                    {/* --- EXPANDABLE CONTENT --- */}
                    <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out border-t border-zinc-800/50 bg-black/20
                            ${expandedId === exp.id ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
                        `}
                    >
                        <div className="p-4 md:p-5 pt-4">
                            
                            {/* Description*/}
                            <p className={`text-zinc-300 text-xs leading-relaxed mb-4 ${montserrat.className}`}>
                                {exp.description}
                            </p>

                            {/* Bullet Points*/}
                            <ul className="space-y-2 mb-5">
                                {exp.responsibilities.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-zinc-400 text-xs">
                                        <span className="text-pink-500 mt-1 text-[9px]">▹</span>
                                        <span className={`leading-relaxed ${montserrat.className}`}>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div>
                                <h4 className={`text-zinc-500 text-[9px] font-bold tracking-widest uppercase mb-2 ${montserrat.className}`}>
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.techStack.map((tech, tIdx) => (
                                        <div 
                                            key={tIdx} 
                                            className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-[10px] hover:bg-zinc-800 transition-colors"
                                        >
                                            <div className={`text-sm ${tech.color}`}>
                                                <tech.icon />
                                            </div>
                                            <span className={montserrat.className}>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            ))}
        </div>

      </div>
    </div>
  )
}