"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

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
  screenshots: string[]; 
}

const projects: Project[] = [
  {
    id: 1,
    title: "MONITORING SYSTEM",
    category: "IOT Dashboard",
    thumbnail: "/assets/Monitoring_Sistem/Monitoring Sistem.png",
    description: "Realtime Cycle Time Monitoring System IoT Based.",
    fullDescription: "Assisted and contributed to the 1-to-1 migration of a legacy application to a modern React-based solution, while enhancing feature functionality and improving UI/UX for realtime factory monitoring.",
    year: "2025",
    location: "PT Giken Precision Indonesia, Batam",
    role: "FULLSTACK",
    bgImage: "/assets/Monitoring Sistem.png",
    link: "https://github.com/elshaamalia/giken-project-2",
    isNDA: false,
    techStack: ["React", "Express.js", "Socket.io", "MySQL", "MQTT", "Arduino IDE"],
    screenshots: ["/assets/Monitoring_Sistem/Monitoring Sistem.png", "/assets/Monitoring_Sistem/history.png"]
  },
  {
    id: 2,
    title: "Health & Fitness Evaluator AI",
    category: "AI Web-Based",
    thumbnail: "/assets/Health_Fitness_AI/Health and Fitness.png",
    description: "AI-based web application that evaluates user health and fitness data to provide personalized recommendations.",
    fullDescription: "Health & Fitness Evaluator AI is a web-based application that analyzes personal health data such as body metrics, activity level, and fitness goals to generate personalized meal and workout recommendations.",
    year: "2025",
    location: "BATAM, INDONESIA",
    role: "Frontend & AI Model Trainer",
    bgImage: "/assets/Health and Fitness.png",
    link: "https://pbl.polibatam.ac.id/pamerin/detail.php?title=website-health-fitness-evaluator-ai-&id=MzU1Mw==&ta=Ng==&id_tim=NDE4NQ==",
    isNDA: false,
    techStack: ["Laravel", "TailwindCSS", "MySQL", "XGBoost", "NLP", "Google Colab"],
    screenshots: ["/assets/Health_Fitness_AI/Health and Fitness.png", "/assets/Health_Fitness_AI/ai2.png", "/assets/Health_Fitness_AI/ai4.png", "/assets/Health_Fitness_AI/ai5.png", "/assets/Health_Fitness_AI/ai1.png", "/assets/Health_Fitness_AI/ai3.png", "/assets/Health_Fitness_AI/ai7.png"]
  },
  {
    id: 3,
    title: "Minutes.ai",
    category: "AI Web-Based",
    thumbnail: "/assets/Minutes_AI/minutes.png",
    description: "Automated Notulen & Transcription",
    fullDescription: "An AI-powered tool designed to automate meeting transcriptions and generate concise minutes of meeting, helping teams stay productive.",
    year: "2024",
    location: "Batam, Indonesia",
    role: "Fullstack & AI Model Trainer",
    bgImage: "/assets/Picture5.png",
    link: "https://pbl.polibatam.ac.id/pamerin/detail.php?title=minutes-ai-automated-meeting-transcription-minutes&id=MjQ0MA==&ta=NQ==&id_tim=MzA5Nw==",
    isNDA: false,
    techStack: ["Laravel", "Tailwind CSS", "Google Colab", "Whisper", "Pyannote", "Kaggle"],
    screenshots: ["/assets/Minutes_AI/minutes.png", "/assets/Minutes_AI/minutes1.png", "/assets/Minutes_AI/convonotes3.png", "/assets/Minutes_AI/convonotes4.png", "/assets/Minutes_AI/minutes6.png", "/assets/Minutes_AI/convonotes7.png", "/assets/Minutes_AI/convonotes8.png", "/assets/Minutes_AI/minutes9.png", "/assets/Minutes_AI/convonotes10.png"]
  },
  {
    id: 4,
    title: "IKA UNDIP",
    category: "Web Development",
    thumbnail: "/assets/IKA UNDIP/ika1.png",
    description: "Web-based alumni information system for IKA UNDIP KEPRI.",
    fullDescription: "A comprehensive web platform designed for the UNDIP Alumni Association (Kepri Region). The system manages both public information and restricted member data.",
    year: "2024",
    location: "Batam, Indonesia",
    role: "UI Design & Frontend Developer",
    bgImage: "/assets/Picture8.png",
    link: "https://pbl.polibatam.ac.id/pamerin/detail.php?title=website-alumni-ika-undip&id=MTc1Ng==&ta=NA==&id_tim=MjE2NA==",
    isNDA: false,
    techStack: ["Tailwind CSS", "Figma", "Canva", "Laravel"],
    screenshots: ["/assets/IKA UNDIP/ika1.png", "/assets/IKA UNDIP/ika2.png", "/assets/IKA UNDIP/ika3.png", "/assets/IKA UNDIP/ika4.png", "/assets/IKA UNDIP/ika5.png", "/assets/IKA UNDIP/ika6.png", "/assets/IKA UNDIP/ika7.png"]
  }
]

export default function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [mounted, setMounted] = useState(false)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [selectedProject])

  // Reset index slider pakai useEffect terpisah 
  useEffect(() => {
    setCurrentImgIndex(0)
  }, [selectedProject])

  if (!mounted) return null

  // Fungsi navigasi didefinisikan di sini
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedProject) {
      setCurrentImgIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      )
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedProject) {
      setCurrentImgIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      )
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-transparent">
      
      {/* 1. GRID PROJECTS */}
      <div className="relative z-10 w-full max-w-3xl mx-auto pb-20 px-6 md:px-8">
        <div className="mb-8 md:mb-12 mt-4 md:mt-12">
            <div className={`text-slate-400 text-[10px] md:text-xs tracking-widest mb-2 ${montserrat.className}`}>FEATURED WORKS</div>
            <h1 className={`text-white text-2xl md:text-5xl font-black tracking-tight ${montserrat.className}`}>PROJECTS</h1>
            <div className="h-1 w-12 md:w-16 bg-pink-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10"
            >
              <div className="relative h-36 w-full overflow-hidden bg-black">
                {project.thumbnail && (
                  <Image src={project.thumbnail} alt={project.title} fill className="object-contain transition-transform duration-500 group-hover:scale-105" />
                )}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                   <span className={`text-[9px] font-semibold text-white tracking-wider ${montserrat.className}`}>{project.category}</span>
                </div>
              </div>

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

      {/* 2. MODAL DETAIL */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
          <div className="absolute inset-0  backdrop-blur-md" onClick={() => setSelectedProject(null)} />

          <div className="relative w-full max-w-5xl bg-[#0a0a0a] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto max-h-[95vh] md:max-h-[85vh] animate-in fade-in zoom-in duration-300">
            
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-60 p-2 bg-black/50 hover:bg-zinc-800 text-white rounded-full md:hidden">
              <X size={20} />
            </button>

            {/* SLIDER GAMBAR */}
            <div className="relative w-full md:w-3/5 h-70 md:h-auto bg-[#050505] flex items-center justify-center group border-b md:border-b-0 md:border-r border-zinc-800">
              {selectedProject.screenshots && selectedProject.screenshots.length > 0 ? (
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={selectedProject.screenshots[currentImgIndex]}
                    alt="Preview"
                    fill
                    className="object-contain p-4"
                    priority
                  />
                  
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-white/70">
                      {currentImgIndex + 1} / {selectedProject.screenshots.length}
                  </div>

                  {selectedProject.screenshots.length > 1 && (
                    <>
                      <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/5 hover:bg-white/20 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md">
                        <ChevronLeft size={24} />
                      </button>
                      <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/5 hover:bg-white/20 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md">
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div className="text-zinc-700 text-xs tracking-widest uppercase">No Preview</div>
              )}
            </div>

            {/* DETAIL PROJECT */}
            <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col bg-[#0a0a0a] overflow-y-auto custom-scrollbar">
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <h2 className={`text-2xl md:text-3xl font-black text-white uppercase leading-none ${montserrat.className}`}>
                    {selectedProject.title}
                  </h2>
                  <button onClick={() => setSelectedProject(null)} className="hidden md:block p-1 hover:bg-zinc-800 text-zinc-500 rounded-full">
                    <X size={24} />
                  </button>
                </div>
                <div className="flex gap-3 text-[10px] font-bold text-blue-500 tracking-[0.2em] mt-3 uppercase">
                  <span>{selectedProject.year}</span>
                  <span className="text-zinc-800">•</span>
                  <span>{selectedProject.location}</span>
                </div>
              </div>

              <div className="space-y-8 flex-1">
                <div>
                   <h4 className={`text-zinc-500 text-[9px] font-black tracking-widest mb-2 uppercase ${montserrat.className}`}>ROLE</h4>
                   <div className="text-white font-bold text-xs md:text-sm">{selectedProject.role}</div>
                </div>
                
                <div>
                   <h4 className={`text-zinc-500 text-[9px] font-black tracking-widest mb-2 uppercase ${montserrat.className}`}>ABOUT PROJECT</h4>
                   <div className={`text-zinc-400 leading-relaxed text-xs md:text-sm font-medium ${montserrat.className}`}>
                     {selectedProject.fullDescription}
                   </div>
                </div>

                {selectedProject.techStack && (
                  <div>
                    <h4 className={`text-zinc-500 text-[9px] font-black tracking-widest mb-3 uppercase ${montserrat.className}`}>TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span key={index} className={`px-3 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-300 font-semibold ${montserrat.className}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-10 pt-6 border-t border-zinc-900">
                {selectedProject.isNDA ? (
                   <button disabled className={`w-full py-4 bg-zinc-900 text-zinc-600 text-[11px] font-black tracking-widest uppercase rounded-lg cursor-not-allowed`}>
                     Under NDA Agreement
                   </button>
                ) : (
                   <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 w-full py-4 bg-white hover:bg-zinc-200 text-black text-[11px] font-black tracking-widest uppercase transition-all rounded-lg`}>
                     Visit Project <ExternalLink size={14} />
                   </a>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #27272a; border-radius: 10px; }
      `}</style>
    </div>
  )
}