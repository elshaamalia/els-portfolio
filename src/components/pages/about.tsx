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
      
      <div className="relative z-10 w-full max-w-208 mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* --- KOLOM KIRI: TEXT CONTENT --- */}
        <div className="w-full flex flex-col justify-center space-y-6 order-1">
            <div>
                <p className={`text-slate-400 text-[10px] tracking-[0.2em] mb-2 font-normal uppercase ${montserrat.className}`}>
                    Introduction
                </p>
                
                <h1 className={`text-white text-4xl md:text-6xl font-black tracking-tight leading-none mb-4 ${montserrat.className}`}>
                    <TypingText text="PROFILE" speed={100} />
                </h1>
                
                <div className="h-1 w-16 bg-pink-500 rounded-full"></div>
            </div>

            <div className="space-y-5">
                <h2 className={`text-gray-100 text-sm sm:text-base md:text-lg font-normal leading-relaxed ${montserrat.className}`}>
                   <span className="whitespace-nowrap">
                      My name is <span className="text-pink-500 font-semibold">Elsha Amalia Pusponegoro</span>.
                   </span>
                   <br/>I&apos;m a Software Engineer.
                </h2>

                <p className={`text-slate-400 text-xs leading-relaxed md:leading-loose text-justify ${montserrat.className}`}>
                  I am an emerging Software Engineer with a knack for blending artwork with cutting-edge technology. During my academic years, I have specialized in <span className="text-zinc-100 font-bold">Frontend Development</span> and <span className="text-zinc-100 font-bold">AI-IoT Integrations</span>, transforming theoretical concepts into functional web applications. I bring practical experience from the manufacturing industry, ready to craft dynamic digital experiences.
                </p>
            </div>
        </div>

        {/* --- KOLOM KANAN: SKILLS CARD --- */}
        <div className="w-full flex flex-col justify-center order-2">
            
            <div className="bg-transparent backdrop-blur-xs border border-gray-900 rounded-3xl p-5 shadow-2xl">

                <div className="space-y-5">
                    {skillsData.map((group, idx) => (
                        <div key={idx}>
                            <h4 className={`text-slate-500 text-[8px] font-bold uppercase tracking-widest mb-2 ml-1 ${montserrat.className}`}>
                                {group.category}
                            </h4>
                            
                            <div className="grid grid-cols-5 gap-2">
                                {group.items.map((skill, sIdx) => (
                                    <div 
                                        key={sIdx} 
                                        className="group relative flex items-center justify-center aspect-square p-1 rounded-lg md:rounded-xl bg-black border border-gray-900 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className={`text-xl md:text-2xl ${skill.color} grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                                            {skill.icon}
                                        </div>
                                        
                                        <span className={`absolute -bottom-5 opacity-0 group-hover:opacity-100 z-20 text-[9px] text-white px-2 py-0.5 rounded shadow-lg transition-all duration-200 whitespace-nowrap pointer-events-none ${montserrat.className}`}>
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