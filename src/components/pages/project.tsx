"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import { X, ArrowRight, Play, Info } from "lucide-react"

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
    bgImage: "",
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
    // FIX: Hapus 'min-h-screen' dan 'overflow-hidden' agar konten bisa discroll penuh di HP
    <div className="relative w-full h-full bg-transparent"> 
      
      {/* CONTAINER */}
      {/* FIX: Tambah pb-32 di mobile biar bagian bawah tidak ketutup */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pb-32 px-4 md:px-12">
        
        {/* HEADER */}
        <div className="mb-16 mt-4 md:mt-14">
           <p className={`text-slate-400 text-xs md:text-sm tracking-widest mb-2 ${montserrat.className}`}>FEATURED WORKS</p>
           <h1 className={`text-white text-4xl md:text-6xl font-black tracking-tight ${montserrat.className}`}>
             PROJECTS
           </h1>
           <div className="h-1 w-20 bg-pink-500 rounded-full mt-4"></div>
        </div>

        {/* LIST LAYOUT (ZIGZAG) */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => {
            const isEvenIndex = index % 2 === 0;
            const textOrderDesktop = isEvenIndex ? "md:order-1" : "md:order-2";
            const imageOrderDesktop = isEvenIndex ? "md:order-2" : "md:order-1";

            return (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col md:flex-row items-center gap-8 md:gap-16 cursor-pointer"
            >
              
              {/* KOLOM TEKS */}
              <div className={`w-full md:w-5/12 order-2 ${textOrderDesktop} flex flex-col gap-4`}>
                 <div className={`text-6xl md:text-8xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors duration-500 select-none ${montserrat.className}`}>
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

                 <p className={`text-zinc-400 text-sm md:text-base leading-relaxed line-clamp-3 ${montserrat.className}`}>
                    {project.description}
                 </p>

                 <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[10px] text-zinc-500 border border-zinc-800 px-2 py-1 rounded-full uppercase tracking-wider">
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 3 && (
                        <span className="text-[10px] text-zinc-600 px-1 py-1">+{project.techStack.length - 3}</span>
                    )}
                 </div>

                 <div className="flex items-center gap-2 text-white text-xs font-bold mt-4 group/btn">
                     <span className="border-b border-transparent group-hover/btn:border-white transition-all pb-0.5">VIEW PROJECT</span>
                     <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-300"/>
                 </div>
              </div>

              {/* KOLOM GAMBAR */}
              <div className={`w-full md:w-7/12 order-1 ${imageOrderDesktop}`}>
                 <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 group-hover:border-zinc-600 transition-all duration-500 shadow-2xl shadow-black/50">
                    {project.thumbnail ? (
                      <Image 
                        src={project.thumbnail} 
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                       <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-800 font-black text-4xl">
                          NO IMAGE
                       </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500" />
                 </div>
              </div>

            </div>
          )})}
        </div>
      </div>

      {/* --- NETFLIX STYLE MODAL --- */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300"> 
          
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-4xl bg-[#141414] rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] md:max-h-[95vh]">
            
            {/* HERO SECTION */}
            <div className="relative w-full h-[40vh] md:h-[55vh] shrink-0 bg-black group">
                {selectedProject.bgImage ? (
                  <Image 
                    src={selectedProject.bgImage}
                    alt={selectedProject.title}
                    fill
                    className="object-cover opacity-80"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-zinc-800 to-black" />
                )}

                <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-[#141414]/20 to-transparent" />

                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-50 p-2 bg-[#181818] hover:bg-[#2a2a2a] text-white rounded-full transition-colors border border-white/10"
                >
                  <X size={20} />
                </button>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
                    <div className="flex flex-col gap-4">
                        <h1 className={`text-4xl md:text-6xl font-black text-white drop-shadow-lg leading-tight ${montserrat.className}`}>
                           {selectedProject.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-bold tracking-wide">
                            <span className="text-green-400">98% Match</span>
                            <span className="text-zinc-300">{selectedProject.year}</span>
                            <span className="border border-zinc-500 px-1.5 py-0.5 rounded text-[10px] text-zinc-300">HD</span>
                            <span className="text-zinc-300">{selectedProject.category}</span>
                        </div>

                        <div className="flex gap-3 mt-2">
                             {!selectedProject.isNDA ? (
                               <a 
                                 href={selectedProject.link} 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-6 py-2 rounded font-bold transition-colors"
                               >
                                 <Play size={20} fill="black" />
                                 <span>Visit</span>
                               </a>
                             ) : (
                                <button disabled className="flex items-center gap-2 bg-zinc-500/50 text-white/50 px-6 py-2 rounded font-bold cursor-not-allowed">
                                   <Play size={20} />
                                   <span>NDA</span>
                                </button>
                             )}
                             
                             <button className="flex items-center gap-2 bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.4)] text-white px-6 py-2 rounded font-bold transition-colors backdrop-blur-sm">
                                <Info size={20} />
                                <span>More Info</span>
                             </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* DETAILS SECTION */}
            <div className="flex-1 overflow-y-auto bg-[#141414] p-6 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div className="md:col-span-2 space-y-6">
                        <div className="flex items-center gap-2 text-green-400 font-bold text-sm">
                           <span>New</span>
                           <span className="text-zinc-400 font-normal">Project for</span>
                           <span className="text-white">{selectedProject.location}</span>
                        </div>

                        <p className={`text-white text-sm md:text-base leading-relaxed ${montserrat.className}`}>
                           {selectedProject.fullDescription}
                        </p>
                    </div>

                    <div className="md:col-span-1 space-y-4 text-sm">
                        <div>
                            <span className="text-zinc-500 block text-xs mb-1">Role:</span>
                            <span className="text-zinc-200 hover:underline cursor-pointer">{selectedProject.role}</span>
                        </div>
                        <div>
                            <span className="text-zinc-500 block text-xs mb-1">Tech Stack:</span>
                            <div className="flex flex-wrap gap-1">
                                {selectedProject.techStack.map((tech, idx) => (
                                    <span key={idx} className="text-zinc-200 hover:underline cursor-pointer">
                                        {tech}{idx < selectedProject.techStack.length - 1 ? ", " : ""}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="text-zinc-500 block text-xs mb-1">Year:</span>
                            <span className="text-zinc-200">{selectedProject.year}</span>
                        </div>
                    </div>

                </div>
            </div>

          </div>
        </div>,
        document.body
      )}

    </div>
  )
}