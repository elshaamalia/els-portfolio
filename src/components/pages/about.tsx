"use client"

import { Montserrat } from "next/font/google"
import TypingText from "@/components/animations/typing-text" 

// IMPORT ICONS LENGKAP
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFigma, 
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiCanva,
  SiArduino,
  SiMysql,
  SiExpress,
  SiGithub,
  SiGooglecolab,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiScikitlearn
} from 'react-icons/si'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})

// TIPE DATA SKILL
type SkillItem = {
  name: string;
  icon: React.ReactNode;
  color: string;
}

// DATA SKILLS
// Saya tambahkan beberapa dummy data agar terlihat penuh (5x5 look)
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
    category: "AI & Data Science", // KATEGORI BARU PALING ATAS (Highlight)
    items: [
      { name: "Google Colab", icon: <SiGooglecolab />, color: "text-orange-400" },
      { name: "PyTorch", icon: <SiPytorch />, color: "text-red-500" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-500" },
      { name: "OpenCV", icon: <SiOpencv />, color: "text-green-500" },
      { name: "Jupyter", icon: <SiJupyter />, color: "text-orange-500" },
      { name: "Pandas", icon: <SiPandas />, color: "text-blue-800" },
      { name: "NumPy", icon: <SiNumpy />, color: "text-blue-400" },
      { name: "Scikit-learn", icon: <SiScikitlearn />, color: "text-orange-300" },
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
    // OUTER WRAPPER 
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex items-center justify-center">
      
      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto py-20 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- KOLOM KIRI: DESKRIPSI DIRI --- */}
        <div className="w-full flex flex-col justify-center space-y-8 order-2 lg:order-1 pt-10">
            <div>
                <p className={`text-slate-400 text-sm tracking-[0.2em] mb-4 ${montserrat.className}`}>
                    INTRODUCTION
                </p>
                <h1 className={`text-white text-5xl md:text-7xl font-black tracking-tight mb-2 ${montserrat.className}`}>
                    <TypingText text="PROFILE" speed={100} />
                </h1>
                <div className="h-1 w-20 bg-blue-500 rounded-full mt-4"></div>
            </div>

            <div className="space-y-6">
                <p className={`text-slate-200 text-xl md:text-2xl font-medium leading-relaxed ${montserrat.className}`}>
                   My name is <span className="text-blue-400">Elsha Amalia Pusponegoro</span>.
                   <br/>I&apos;m a Software Engineer.
                </p>

                <p className={`text-slate-400 text-base leading-loose text-justify ${montserrat.className}`}>
                   I blend artwork with cutting-edge technology, designing immersive visual and functional user interfaces. With over five years of experience in programming, I specialize in frontend development and IoT integrations, creating dynamic web and mobile applications.
                </p>
                
                <div className="flex gap-8 pt-4">
                    <div>
                        <h3 className="text-3xl font-bold text-white">5+</h3>
                        <p className="text-xs text-slate-500 tracking-wider">YEARS EXP</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white">10+</h3>
                        <p className="text-xs text-slate-500 tracking-wider">PROJECTS</p>
                    </div>
                </div>
            </div>
        </div>

        {/* --- KOLOM KANAN: TECH STACK --- */}
        <div className="w-full flex flex-col justify-center order-1 lg:order-2">
            
            <div className="bg-transparent border border-slate-800 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <h3 className={`text-white text-xl font-bold mb-6 border-l-4 border-blue-500 pl-4 ${montserrat.className}`}>
                    Tech Stack
                </h3>

                <div className="space-y-8">
                    {skillsData.map((group, idx) => (
                        <div key={idx}>
                            <h4 className={`text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3 ${montserrat.className}`}>
                                {group.category}
                            </h4>
                            
                            {/* Grid 5 Kolom (grid-cols-5) */}
                            <div className="grid grid-cols-5 gap-y-6 gap-x-2">
                                {group.items.map((skill, sIdx) => (
                                    <div 
                                        key={sIdx} 
                                        className="group relative flex flex-col items-center justify-center p-1 cursor-pointer"
                                    >
                                        {/* Icon tanpa background blok */}
                                        <div className={`text-3xl md:text-4xl ${skill.color} drop-shadow-md transform transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}>
                                            {skill.icon}
                                        </div>
                                        
                                        {/* Tooltip Nama (Tetap ada biar user tau logo apa) */}
                                        <span className={`absolute -bottom-6 opacity-0 group-hover:opacity-100 text-[9px] font-bold text-slate-300 transition-opacity duration-300 whitespace-nowrap ${montserrat.className}`}>
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