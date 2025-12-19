"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
// import TypingText from "@/components/animations/typing-text"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import { X, ExternalLink } from "lucide-react"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

// --- 1. DEFINISI TIPE DATA ---
interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  fullDescription: string;
  year: string;
  location: string;
  role: string;
  bgImage: string;
  link: string;
  isNDA: boolean;
  techStack: string[];
}

// --- 2. DATA PROJECTS ---
const projects: Project[] = [
  {
    id: 1,
    title: "IKA UNDIP",
    category: "Study Case",
    thumbnail: "/images/cv-roasted-thumb.jpg", 
    description: "Web-based alumni information system for IKA UNDIP KEPRI.",
    fullDescription: "A comprehensive web platform designed for the UNDIP Alumni Association (Kepri Region). The system manages both public information (events, news) and restricted member data (alumni directory by major and location). It serves as a central hub for alumni networking, event documentation, and organizational updates.",
    year: "2024",
    location: "Batam, Indonesia",
    role: "UI Design & Frontend Developer",
    bgImage: "/images/cv-roasted-bg.jpg",
    link: "https://pbl.polibatam.ac.id/pamerin/detail.php?title=website-alumni-ika-undip&id=MTc1Ng==&ta=NA==&id_tim=MjE2NA==",
    isNDA: false,
    techStack: ["Tailwind CSS", "Figma", "Canva", "Laravel"] 
  },
  {
    id: 2,
    title: "Minutes.ai",
    category: "AI TOOL",
    thumbnail: "/images/github-roasted-thumb.jpg",
    description: "Automated Notulen & Transcription",
    fullDescription: "A fun and insightful tool that analyzes GitHub profiles to generate witty 'roasts' and constructive criticism about coding habits and repository structures.",
    year: "2024",
    location: "Batam, Indonesia",
    role: "FRONTEND ENGINEER",
    bgImage: "/images/github-roasted-bg.jpg",
    link: "https://pbl.polibatam.ac.id/pamerin/detail.php?title=minutes-ai-automated-meeting-transcription-minutes&id=MjQ0MA==&ta=NQ==&id_tim=MzA5Nw==",
    isNDA: false,
    techStack: ["React", "Vite", "Tailwind CSS", "GitHub API", "Gemini AI"]
  },
  {
    id: 3,
    title: "MONITORING SYSTEM",
    category: "IOT DASHBOARD",
    thumbnail: "/dark-website-ui-aviation-dashboard.jpg", 
    description: "Realtime Cycle Time Monitoring System IoT Based.",
    fullDescription: "Assisted and contributed to the 1-to-1 migration of a legacy application to a modern React-based solution, while enhancing feature functionality and improving UI/UX for realtime factory monitoring.",
    year: "2025",
    location: "BATAM, INDONESIA",
    role: "FULLSTACK",
    bgImage: "/airplane-wing-clouds-sky-aerial-view.jpg",
    link: "#",
    isNDA: true,
    techStack: ["Next.js", "Express.js", "Socket.io", "PostgreSQL", "MQTT", "Docker"]
  },
]

export default function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [mounted, setMounted] = useState(false)

  // --- FIX PAMUNGKAS: TRIK SETTIMEOUT ---
  // Error "Synchronous" hilang karena kita membungkusnya dalam setTimeout.
  // Ini membuat update state menjadi "Asynchronous" (dijadwalkan).
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 0)
    
    // Bersihkan timer jika component unmount (best practice)
    return () => clearTimeout(timer)
  }, []) 

  // --- FIX 2: SCROLL LOCK LOGIC ---
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => { document.body.style.overflow = 'auto' }
  }, [selectedProject])

  // Cegah render jika belum mounted (mencegah error hydration)
  if (!mounted) {
    return null
  }

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden"> 
      
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-20 pb-20 px-8 md:px-12">
        
        {/* HEADER */}
        <div className="mb-16 mt-14">
           <p className={`text-slate-400 text-sm tracking-widest mb-2 ${montserrat.className}`}>FEATURED WORKS</p>
           <h1 className={`text-white text-6xl font-black tracking-tight ${montserrat.className}`}>PROJECTS
             {/* <TypingText text="PROJECTS" speed={50} /> */}
           </h1>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10"
            >
              {/* Thumbnail Image Area */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                <div className="absolute inset-0 bg-linear-to-br from-zinc-800 to-zinc-950" />
                {project.thumbnail && (
                  <Image 
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                   <span className={`text-[10px] font-bold text-white tracking-wider ${montserrat.className}`}>
                     {project.category}
                   </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors ${montserrat.className}`}>
                  {project.title}
                </h3>
                <p className={`text-zinc-400 text-sm leading-relaxed line-clamp-2 ${montserrat.className}`}>
                  {project.description}
                </p>
                <div className="mt-4 flex items-center text-zinc-500 text-xs font-medium tracking-wide">
                  <span>View Details</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL DETAIL (PORTAL) --- */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 md:p-8"> 
          
          {/* Overlay Gelap */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          {/* Konten Modal */}
          <div className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in duration-300">
            
            {/* Tombol Close */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left Side: Image / Visual */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-black shrink-0">
               {selectedProject.bgImage && (
                 <Image 
                   src={selectedProject.bgImage}
                   alt={selectedProject.title}
                   fill
                   className="object-cover opacity-60"
                 />
               )}
               <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent md:bg-linear-to-r" />
               <div className="absolute bottom-6 left-6 md:hidden">
                  <h2 className={`text-3xl font-black text-white ${montserrat.className}`}>{selectedProject.title}</h2>
               </div>
            </div>

            {/* Right Side: Details */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto bg-zinc-900">
              <div className="hidden md:block mb-6">
                <div className="flex items-center gap-3 mb-2">
                   <h2 className={`text-3xl lg:text-4xl font-black text-white ${montserrat.className}`}>
                     {selectedProject.title}
                   </h2>
                   {!selectedProject.isNDA && (
                     <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                       <ExternalLink size={24} />
                     </a>
                   )}
                </div>
                <div className="flex gap-4 text-xs font-bold text-blue-400 tracking-widest">
                  <span>{selectedProject.year}</span>
                  <span>•</span>
                  <span>{selectedProject.location}</span>
                </div>
              </div>

              <div className="space-y-6 flex-1">
                <div>
                   <h4 className={`text-zinc-500 text-xs font-bold tracking-widest mb-2 ${montserrat.className}`}>ROLE</h4>
                   <p className="text-white font-medium">{selectedProject.role}</p>
                </div>
                
                <div>
                   <h4 className={`text-zinc-500 text-xs font-bold tracking-widest mb-2 ${montserrat.className}`}>ABOUT</h4>
                   <p className={`text-zinc-300 leading-relaxed text-sm ${montserrat.className}`}>
                     {selectedProject.fullDescription}
                   </p>
                </div>

                {/* --- TECH STACK SECTION --- */}
                {selectedProject.techStack && (
                  <div>
                    <h4 className={`text-zinc-500 text-xs font-bold tracking-widest mb-3 ${montserrat.className}`}>TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span 
                          key={index} 
                          className={`px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-300 font-medium hover:bg-zinc-700 hover:text-white transition-colors ${montserrat.className}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                {selectedProject.isNDA ? (
                   <button disabled className={`w-full py-4 border border-zinc-700 text-zinc-500 text-xs font-bold tracking-widest uppercase cursor-not-allowed ${montserrat.className}`}>
                     Under NDA - No Case Study
                   </button>
                ) : (
                   <a 
                     href={selectedProject.link} 
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`block w-full py-4 bg-white hover:bg-zinc-200 text-black text-center text-xs font-bold tracking-widest uppercase transition-colors ${montserrat.className}`}
                   >
                     Visit Project
                   </a>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  )
}