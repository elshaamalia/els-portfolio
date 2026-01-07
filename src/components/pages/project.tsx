"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
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
    title: "MONITORING SYSTEM",
    category: "IOT Dashboard",
    thumbnail: "/assets/Monitoring Sistem.png",
    description: "Realtime Cycle Time Monitoring System IoT Based.",
    fullDescription: "Assisted and contributed to the 1-to-1 migration of a legacy application to a modern React-based solution, while enhancing feature functionality and improving UI/UX for realtime factory monitoring.",
    year: "2025",
    location: "PT Giken Precision Indonesia, Batam",
    role: "FULLSTACK",
    bgImage: "/assets/Monitoring Sistem.png",
    link: "https://github.com/elshaamalia/giken-project-2",
    isNDA: false,
    techStack: ["React", "Express.js", "Socket.io", "MySQL", "MQTT", "Arduino IDE"]
  },
  {
    id: 2,
    title: "Health & Fitness Evaluator AI",
    category: "AI Web-Based",
    thumbnail: "/assets/Health and Fitness.png",
    description: "AI-based web application that evaluates user health and fitness data to provide personalized recommendations.",
    fullDescription: "Health & Fitness Evaluator AI is a web-based application that analyzes personal health data such as body metrics, activity level, and fitness goals to generate personalized meal and workout recommendations.",
    year: "2025",
    location: "BATAM, INDONESIA",
    role: "Frontend & AI Model Trainer",
    bgImage: "/assets/Health and Fitness.png",
    link: "https://pbl.polibatam.ac.id/pamerin/detail.php?title=website-health-fitness-evaluator-ai-&id=MzU1Mw==&ta=Ng==&id_tim=NDE4NQ==",
    isNDA: false,
    techStack: ["Laravel", "TailwindCSS", "MySQL", "XGBoost", "NLP", "Google Colab"]
  },
  {
    id: 3,
    title: "Minutes.ai",
    category: "AI Web-Based",
    thumbnail: "",
    description: "Automated Notulen & Transcription",
    fullDescription: "A fun and insightful tool that analyzes GitHub profiles to generate witty 'roasts' and constructive criticism about coding habits and repository structures.",
    year: "2024",
    location: "Batam, Indonesia",
    role: "Fullstack & AI Model Trainer",
    bgImage: "",
    link: "https://pbl.polibatam.ac.id/pamerin/detail.php?title=minutes-ai-automated-meeting-transcription-minutes&id=MjQ0MA==&ta=NQ==&id_tim=MzA5Nw==",
    isNDA: false,
    techStack: ["Laravel", "Tailwind CSS", "Google Colab", "Whisper", "Pyannote", "Kaggle"]
  },
  {
    id: 4,
    title: "IKA UNDIP",
    category: "Web Development",
    thumbnail: "",
    description: "Web-based alumni information system for IKA UNDIP KEPRI.",
    fullDescription: "A comprehensive web platform designed for the UNDIP Alumni Association (Kepri Region). The system manages both public information (events, news) and restricted member data.",
    year: "2024",
    location: "Batam, Indonesia",
    role: "UI Design & Frontend Developer",
    bgImage: "/images/cv-roasted-bg.jpg",
    link: "https://pbl.polibatam.ac.id/pamerin/detail.php?title=website-alumni-ika-undip&id=MTc1Ng==&ta=NA==&id_tim=MjE2NA==",
    isNDA: false,
    techStack: ["Tailwind CSS", "Figma", "Canva", "Laravel"]
  },
]

export default function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedProject])

  if (!mounted) return null

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden">
      
      {/* 1. CONTAINER */}
      <div className="relative z-10 w-full max-w-3xl mx-auto pb-20 px-6 md:px-8">
        
        {/* HEADER */}
        <div className="mb-8 md:mb-12 mt-4 md:mt-12">
           <p className={`text-slate-400 text-[10px] md:text-xs tracking-widest mb-2 ${montserrat.className}`}>FEATURED WORKS</p>
           <h1 className={`text-white text-2xl md:text-5xl font-black tracking-tight ${montserrat.className}`}>PROJECTS</h1>
           <div className="h-1 w-12 md:w-16 bg-pink-500 rounded-full mt-3"></div>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10"
            >
              {/* Thumbnail Image  */}
              <div className="relative h-36 w-full overflow-hidden bg-black">
                {project.thumbnail && (
                  <Image src={project.thumbnail} alt={project.title} fill className="object-contain transition-transform duration-500 group-hover:scale-105" />
                )}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                   <span className={`text-[9px] font-semibold text-white tracking-wider -mt-3 ${montserrat.className}`}>{project.category}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className={`text-sm md:text-base font-bold text-white mb-1.5 transition-colors ${montserrat.className}`}>{project.title}</h3>
                <p className={`text-zinc-400 text-xs leading-relaxed line-clamp-2 ${montserrat.className}`}>{project.description}</p>
                <div className="mt-3 flex items-center text-zinc-500 text-[10px] font-medium tracking-wide">
                  <span>View Details</span>
                  <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL DETAIL  --- */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
          
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />

          <div className="relative w-full max-w-2xl bg-[#111] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] animate-in fade-in zoom-in duration-300">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 z-50 p-1.5 bg-black/50 hover:bg-zinc-700 text-white rounded-full transition-colors"
            >
              <X size={16} />
            </button>

            {/* Left Side: Image */}
            <div className="relative w-full md:w-1/2 h-36 md:h-auto bg-zinc-900 shrink-0 border-r border-zinc-800">
               {selectedProject.bgImage && (
                 <Image
                   src={selectedProject.bgImage}
                   alt={selectedProject.title}
                   fill
                   className="object-contain p-4" 
                 />
               )}
            </div>

            {/* Right Side: Details */}
            <div className="w-full md:w-1/2 p-5 md:p-6 flex flex-col overflow-y-auto bg-[#111]">
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                   {/* Title Font: text-xl / text-2xl */}
                   <h2 className={`text-xl md:text-2xl font-black text-white uppercase leading-none ${montserrat.className}`}>
                     {selectedProject.title}
                   </h2>
                   {!selectedProject.isNDA && (
                     <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors ml-1">
                       <ExternalLink size={16} />
                     </a>
                   )}
                </div>
                <div className="flex gap-2 text-[10px] font-bold text-blue-500 tracking-widest mt-1.5">
                  <span>{selectedProject.year}</span>
                  <span>•</span>
                  <span>{selectedProject.location}</span>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                   <h4 className={`text-zinc-500 text-[9px] font-bold tracking-widest mb-1 uppercase ${montserrat.className}`}>ROLE</h4>
                   <p className="text-white font-bold text-xs">{selectedProject.role}</p>
                </div>
                
                <div>
                   <h4 className={`text-zinc-500 text-[9px] font-semibold tracking-widest mb-1 uppercase ${montserrat.className}`}>ABOUT</h4>
                   <p className={`text-zinc-400 leading-relaxed text-xs ${montserrat.className}`}>
                     {selectedProject.fullDescription}
                   </p>
                </div>

                {selectedProject.techStack && (
                  <div>
                    <h4 className={`text-zinc-500 text-[9px] font-bold tracking-widest mb-2 uppercase ${montserrat.className}`}>TECH STACK</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-2.5 py-0.5 bg-zinc-800 rounded-full text-[9px] text-zinc-300 font-medium ${montserrat.className}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-800">
                {selectedProject.isNDA ? (
                   <button disabled className={`w-full py-2.5 bg-zinc-800 text-zinc-500 text-[10px] font-bold tracking-widest uppercase cursor-not-allowed rounded ${montserrat.className}`}>
                     Under NDA
                   </button>
                ) : (
                   <a
                     href={selectedProject.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`block w-full py-2.5 bg-white hover:bg-gray-200 text-black text-center text-[10px] font-bold tracking-widest uppercase transition-colors rounded ${montserrat.className}`}
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