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
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden "> 
      
      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-12 pb-20">
        
        {/* HEADER SECTION */}
        <div className="mb-10 md:mb-16 mt-0 md:mt-14">
           <p className={`text-slate-400 text-xs md:text-sm tracking-widest mb-2 ${montserrat.className}`}>PROFESSIONAL HISTORY</p>
           <h1 className={`text-white text-4xl md:text-6xl font-black tracking-tight ${montserrat.className}`}>
             <TypingText text="EXPERIENCE" speed={50} />
           </h1>
           <div className="h-1 w-16 md:w-20 bg-pink-500 rounded-full mt-4"></div>
        </div>

        {/* LIST EXPERIENCE */}
        <div className="space-y-6 backdrop-blur-xl">
            {experienceData.map((exp) => (
                <div 
                    key={exp.id} 
                    className={`relative w-full rounded-2xl border transition-all duration-300 overflow-hidden group
                        ${expandedId === exp.id 
                            ? "bg-zinc-900/80 border-zinc-700 shadow-xl" 
                            : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700/50 hover:bg-zinc-900/60"
                        }
                    `}
                >
                    
                    {/* --- CLICKABLE HEADER AREA --- */}
                    <div 
                        onClick={() => toggleExpand(exp.id)}
                        className="p-5 md:p-6 cursor-pointer"
                    >
                        <div className="flex gap-4 md:gap-6 items-start">
                            
                            {/* Logo */}
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white p-1.5 shrink-0 shadow-sm">
                                <Image 
                                    src={exp.logo} 
                                    alt={exp.company} 
                                    width={64} 
                                    height={64} 
                                    className="object-contain w-full h-full" 
                                />
                            </div>

                            {/* Main Info */}
                            <div className="flex-1 min-w-0">
                                <h3 className={`text-white text-lg md:text-xl font-bold truncate ${montserrat.className}`}>
                                    {exp.role}
                                </h3>
                                <p className={`text-zinc-400 text-sm md:text-base font-medium mb-2 ${montserrat.className}`}>
                                    {exp.company}
                                </p>

                                {/* Meta Data Row (Date, Duration, Type) */}
                                <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] md:text-xs text-zinc-500 font-medium tracking-wide ${montserrat.className}`}>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} /> {exp.period}
                                    </span>
                                    <span className="hidden sm:inline text-zinc-700">•</span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} /> {exp.duration}
                                    </span>
                                    <span className="hidden sm:inline text-zinc-700">•</span>
                                    <span className="flex items-center gap-1 text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">
                                        <Briefcase size={12} /> {exp.type}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin size={12} /> {exp.location}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Toggle Button */}
                        <div className="mt-5 flex items-center gap-2 text-xs md:text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors select-none">
                            {expandedId === exp.id ? (
                                <ChevronDown size={16} />
                            ) : (
                                <ChevronRight size={16} />
                            )}
                            <span>{expandedId === exp.id ? "Hide Details" : "Show Responsibilities"}</span>
                        </div>
                    </div>

                    {/* --- EXPANDABLE CONTENT --- */}
                    <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out border-t border-zinc-800/50 bg-black/20
                            ${expandedId === exp.id ? "max-h-250 opacity-100" : "max-h-0 opacity-0"}
                        `}
                    >
                        <div className="p-5 md:p-8 pt-6">
                            
                            {/* Description */}
                            <p className={`text-zinc-300 text-sm leading-relaxed mb-6 ${montserrat.className}`}>
                                {exp.description}
                            </p>

                            {/* Bullet Points */}
                            <ul className="space-y-3 mb-8">
                                {exp.responsibilities.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm">
                                        <span className="text-pink-500 mt-1.5 text-[10px]">▹</span>
                                        <span className={montserrat.className}>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div>
                                <h4 className={`text-zinc-500 text-[10px] font-bold tracking-widest uppercase mb-4 ${montserrat.className}`}>
                                    Technology Used
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {exp.techStack.map((tech, tIdx) => (
                                        <div 
                                            key={tIdx} 
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-xs hover:bg-zinc-800 transition-colors"
                                        >
                                            <div className={`text-base ${tech.color}`}>
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