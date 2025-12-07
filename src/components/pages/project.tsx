"use client"

import { useState } from "react"
import TypingText from "@/components/animations/typing-text"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import { X, ExternalLink } from "lucide-react"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

// --- DATA PROJECTS (Updated with Tech Stack) ---
const projects = [
  {
    id: 1,
    title: "CV ROASTED",
    category: "AI TOOL",
    thumbnail: "/images/cv-roasted-thumb.jpg", 
    description: "AI-powered CV reviewer that provides instant professional feedback.",
    fullDescription: "An advanced AI application that analyzes resumes and provides detailed, actionable feedback to improve job application success rates. Built with Next.js and OpenAI API.",
    year: "2024",
    location: "INDONESIA",
    role: "FULLSTACK DEVELOPER",
    bgImage: "/images/cv-roasted-bg.jpg",
    link: "https://cvroasted.com",
    isNDA: false,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel"] // New Data
  },
  {
    id: 2,
    title: "GITHUB ROASTED",
    category: "AI TOOL",
    thumbnail: "/images/github-roasted-thumb.jpg",
    description: "AI tool for Roasted Your GitHub profiles.",
    fullDescription: "A fun and insightful tool that analyzes GitHub profiles to generate witty 'roasts' and constructive criticism about coding habits and repository structures.",
    year: "2024",
    location: "GLOBAL",
    role: "FRONTEND ENGINEER",
    bgImage: "/images/github-roasted-bg.jpg",
    link: "https://githubroasted.com",
    isNDA: false,
    techStack: ["React", "Vite", "Tailwind CSS", "GitHub API", "Gemini AI"] // New Data
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
    techStack: ["Next.js", "Express.js", "Socket.io", "PostgreSQL", "MQTT", "Docker"] // New Data
  },
]

export default function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden"> 
      
      {/* Background Particles/Gradient */}
      <div className="fixed inset-0 w-screen h-screen bg-linear-to-b from-black via-zinc-950 to-black z-0 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full  max-w-7xl mx-auto pt-20 pb-20 px-8 md:px-12">
        
        {/* HEADER */}
        <div className="mb-16 mt-14">
           <p className={`text-slate-400 text-sm tracking-widest mb-2 ${montserrat.className}`}>FEATURED WORKS</p>
           <h1 className={`text-white text-6xl font-black tracking-tight ${montserrat.className}`}>
             <TypingText text="PROJECTS" speed={50} />
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

      {/* --- MODAL DETAIL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pl-64"> 
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left Side: Image / Visual */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-black">
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
                     <a href={selectedProject.link} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
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
                     className={`block w-full py-4 bg-white hover:bg-zinc-200 text-black text-center text-xs font-bold tracking-widest uppercase transition-colors ${montserrat.className}`}
                   >
                     Visit Project
                   </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}