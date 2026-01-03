"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import { X, ExternalLink, ArrowRight } from "lucide-react"

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
    fullDescription: "Health & Fitness Evaluator AI is a web-based application that analyzes personal health data such as body metrics, activity level, and fitness goals to generate personalized meal and workout recommendations. The system utilizes AI models to evaluate user needs, supports realtime interaction through a modern dashboard, and helps users track their fitness progress effectively.",
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
    description: "Automated Notulen & Transcription.",
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
    fullDescription: "A comprehensive web platform designed for the UNDIP Alumni Association (Kepri Region). The system manages both public information (events, news) and restricted member data (alumni directory by major and location).",
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

  // FIX HYDRATION
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 0)
    return () => clearTimeout(timer)
  }, []) 

  // SCROLL LOCK
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedProject])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative w-full min-h-screen bg-transparent"> 
      
      {/* CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pb-20 px-4 md:px-12">
        
        {/* HEADER */}
        <div className="mb-16 mt-4 md:mt-14">
           <p className={`text-slate-400 text-xs md:text-sm tracking-widest mb-2 ${montserrat.className}`}>FEATURED WORKS</p>
           <h1 className={`text-white text-4xl md:text-6xl font-black tracking-tight ${montserrat.className}`}>
             PROJECTS
           </h1>
           <div className="h-1 w-20 bg-pink-500 rounded-full mt-4"></div>
        </div>

        {/* --- LIST LAYOUT (ZIGZAG) --- */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => {
            const isEvenIndex = index % 2 === 0;
            const textOrderDesktop = isEvenIndex ? "md:order-1" : "md:order-2";
            const imageOrderDesktop = isEvenIndex ? "md:order-2" : "md:order-1";

            return (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col md:flex-row items-center gap-6 md:gap-16 cursor-pointer"
            >
              
              {/* KOLOM TEKS & INFO */}
              <div className={`w-full md:w-5/12 order-2 ${textOrderDesktop} flex flex-col gap-4 p-4 rounded-xl md:p-0 bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-filter-none border border-white/5 md:border-none`}>
                 
                 {/* NOMOR INDEX */}
                 <div className={`text-5xl md:text-8xl font-black text-zinc-700 md:text-zinc-800 group-hover:text-zinc-600 transition-colors duration-500 select-none ${montserrat.className}`}>
                    0{index + 1}
                 </div>

                 <div className="space-y-2">
                    <h3 className={`text-2xl md:text-4xl font-bold text-white group-hover:text-pink-500 transition-colors ${montserrat.className}`}>
                        {project.title}
                    </h3>
                    <p className={`text-pink-500 text-xs font-bold tracking-[0.2em] uppercase ${montserrat.className}`}>
                        {project.category}
                    </p>
                 </div>

                 <p className={`text-zinc-300 md:text-zinc-400 text-sm md:text-base leading-relaxed line-clamp-3 ${montserrat.className}`}>
                    {project.description}
                 </p>

                 {/* Tech Stack */}
                 <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[10px] text-zinc-400 border border-zinc-700 px-2 py-1 rounded-full uppercase tracking-wider bg-zinc-900/50">
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 3 && (
                        <span className="text-[10px] text-zinc-500 px-1 py-1">+{project.techStack.length - 3}</span>
                    )}
                 </div>

                 {/* Button View */}
                 <div className="flex items-center gap-2 text-white text-xs font-bold mt-4 group/btn">
                     <span className="border-b border-transparent group-hover/btn:border-white transition-all pb-0.5">VIEW PROJECT</span>
                     <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-300"/>
                 </div>
              </div>

              {/* KOLOM GAMBAR */}
              <div className={`w-full md:w-7/12 order-1 ${imageOrderDesktop}`}>
                 <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-800 group-hover:border-zinc-600 transition-all duration-500 shadow-2xl shadow-black/50">
                    {project.thumbnail ? (
                      <Image 
                        src={project.thumbnail} 
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                       <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-600 font-bold text-sm tracking-widest">
                          NO PREVIEW
                       </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                 </div>
              </div>

            </div>
          )})}
        </div>
      </div>

      {/* --- MODAL DETAIL (POPUP) --- */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 md:p-8"> 
          
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh] md:max-h-[90vh] animate-in fade-in zoom-in duration-300">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div className="relative w-full md:w-1/2 h-48 md:h-auto bg-black shrink-0">
               {selectedProject.bgImage && (
                 <Image 
                   src={selectedProject.bgImage}
                   alt={selectedProject.title}
                   fill
                   className="object-cover"
                 />
               )}
               <div className="absolute bottom-4 left-4 md:hidden bg-black/60 px-3 py-2 rounded-lg backdrop-blur-sm max-w-[80%]">
                  <h2 className={`text-xl font-black text-white leading-tight ${montserrat.className}`}>{selectedProject.title}</h2>
               </div>
            </div>

            {/* Modal Details */}
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col overflow-y-auto bg-zinc-900">
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

              <div className="md:hidden mb-6 flex gap-3 text-[10px] font-bold text-blue-400 tracking-widest">
                  <span>{selectedProject.year}</span>
                  <span>•</span>
                  <span className="truncate">{selectedProject.location}</span>
              </div>

              <div className="space-y-6 flex-1">
                <div>
                   <h4 className={`text-zinc-500 text-xs font-bold tracking-widest mb-2 ${montserrat.className}`}>ROLE</h4>
                   <p className="text-white font-medium text-sm">{selectedProject.role}</p>
                </div>
                
                <div>
                   <h4 className={`text-zinc-500 text-xs font-bold tracking-widest mb-2 ${montserrat.className}`}>ABOUT</h4>
                   <p className={`text-zinc-300 leading-relaxed text-sm ${montserrat.className}`}>
                     {selectedProject.fullDescription}
                   </p>
                </div>

                {selectedProject.techStack && (
                  <div>
                    <h4 className={`text-zinc-500 text-xs font-bold tracking-widest mb-3 ${montserrat.className}`}>TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span 
                          key={index} 
                          className={`px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-[10px] md:text-xs text-zinc-300 font-medium ${montserrat.className}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800 pb-4 md:pb-0">
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