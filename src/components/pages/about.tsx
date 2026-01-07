"use client"

import { Montserrat } from "next/font/google"
import TypingText from "@/components/animations/typing-text" 

// IMPORT ICONS
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma, 
  SiPython, SiJavascript, SiNodedotjs, SiCanva, SiMysql, 
  SiExpress, SiGithub, SiGooglecolab, SiTensorflow, SiOpencv, 
  SiJupyter, SiScikitlearn, SiMqtt, SiEspressif, SiArduino, SiSocketdotio 
} from 'react-icons/si'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})

type SkillItem = {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const skillsData: { category: string; items: SkillItem[] }[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
      { name: "Python", icon: <SiPython />, color: "text-blue-300" },
      { name: "C++ / Arduino", icon: <SiArduino />, color: "text-teal-500" },
      { name: "SQL", icon: <SiMysql />, color: "text-blue-400" },
    ]
  },
  {
    category: "Frameworks & Libs",
    items: [
      { name: "React", icon: <SiReact />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-300" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
      { name: "Express", icon: <SiExpress />, color: "text-white" },
    ]
  },
  {
    category: "AI & IoT Integrations", 
    items: [
      { name: "Google Colab", icon: <SiGooglecolab />, color: "text-orange-400" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-500" },
      { name: "OpenCV", icon: <SiOpencv />, color: "text-green-500" },
      { name: "Jupyter", icon: <SiJupyter />, color: "text-orange-500" },
      { name: "Scikit-learn", icon: <SiScikitlearn />, color: "text-orange-300" },
      { name: "MQTT", icon: <SiMqtt />, color: "text-yellow-400" },
      { name: "ESP32", icon: <SiEspressif />, color: "text-blue-400" },
      { name: "Socket.io", icon: <SiSocketdotio />, color: "text-gray-400" },
    ]
  },
  {
    category: "Tools & Design",
    items: [
      { name: "GitHub", icon: <SiGithub />, color: "text-white" },
      { name: "Figma", icon: <SiFigma />, color: "text-purple-400" },
      { name: "Canva", icon: <SiCanva />, color: "text-blue-400" },
    ]
  }
];

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex items-center justify-center py-12 lg:py-0">
      
      {/* 1. CONTAINER */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* --- KOLOM KIRI: TEXT CONTENT --- */}
        <div className="w-full flex flex-col justify-center space-y-5 order-1">
            <div>
                <p className={`text-slate-400 text-[10px] md:text-xs tracking-[0.2em] mb-2 font-normal uppercase ${montserrat.className}`}>
                    Introduction
                </p>
                
                <h1 className={`text-white text-2xl md:text-5xl font-black tracking-tight leading-none mb-3 ${montserrat.className}`}>
                    <TypingText text="PROFILE" speed={100} />
                </h1>
                
                <div className="h-1 w-12 md:w-16 bg-pink-500 rounded-full"></div>
            </div>

            <div className="space-y-4">
                {/* Subtitle */}
                <h2 className={`text-gray-100 text-sm md:text-base font-normal leading-relaxed ${montserrat.className}`}>
                   <span className="block sm:inline">My name is </span>
                   <span className="text-pink-500 font-semibold block sm:inline">Elsha Amalia Pusponegoro</span>.
                   <br className="hidden sm:block"/>I&apos;m a Software Engineer.
                </h2>

                {/* Description */}
                <p className={`text-slate-400 text-xs leading-relaxed md:leading-loose text-justify ${montserrat.className}`}>
                  I am an emerging Software Engineer with a knack for blending artwork with cutting-edge technology. During my academic years, I have specialized in <span className="text-zinc-100 font-bold">Frontend Development</span> and <span className="text-zinc-100 font-bold">AI-IoT Integrations</span>, transforming theoretical concepts into functional web applications.
                </p>
            </div>
        </div>

        {/* --- KOLOM KANAN: SKILLS CARD --- */}
        <div className="w-full flex flex-col justify-center order-2 mt-4 md:mt-0">
            
            {/* Card Background */}
            <div className="bg-zinc-900/20 backdrop-blur-md border border-zinc-800 rounded-2xl p-4 md:p-5 shadow-2xl">

                <div className="space-y-4">
                    {skillsData.map((group, idx) => (
                        <div key={idx}>
                            <h4 className={`text-slate-500 text-[8px] font-bold uppercase tracking-widest mb-2 ml-1 ${montserrat.className}`}>
                                {group.category}
                            </h4>
                            
                            {/* Grid */}
                            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                                {group.items.map((skill, sIdx) => (
                                    <div 
                                        key={sIdx} 
                                        className="group relative flex items-center justify-center aspect-square p-1.5 rounded-lg bg-black/50 border border-zinc-900 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className={`text-lg md:text-xl ${skill.color} grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                                            {skill.icon}
                                        </div>
                                        
                                        <span className={`absolute -bottom-3 opacity-0 group-hover:opacity-100 z-20 text-[9px] text-white px-2 py-0.5 rounded shadow-lg transition-all duration-100 whitespace-nowrap pointer-events-none ${montserrat.className}`}>
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
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