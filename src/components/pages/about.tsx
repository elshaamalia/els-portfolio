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
  SiTensorflow,
  SiOpencv,
  SiJupyter,
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
    category: "AI & Data Science", 
    items: [
      { name: "Google Colab", icon: <SiGooglecolab />, color: "text-orange-400" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-500" },
      { name: "OpenCV", icon: <SiOpencv />, color: "text-green-500" },
      { name: "Jupyter", icon: <SiJupyter />, color: "text-orange-500" },
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
      <div className="relative z-10 w-full max-w-6xl mx-auto py-20 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- KOLOM KIRI: DESKRIPSI DIRI --- */}
        <div className="w-full flex flex-col justify-center space-y-8 order-2 lg:order-1 pt-10">
            <div>
                <p className={`text-slate-400 text-sm tracking-[0.2em] mb-2 ${montserrat.className}`}>
                    INTRODUCTION
                </p>
                <h1 className={`text-white text-5xl md:text-7xl font-black tracking-tight mb-2 ${montserrat.className}`}>
                    <TypingText text="PROFILE" speed={100} />
                </h1>
                <div className="h-1 w-20 bg-pink-500 rounded-full mt-4"></div>
            </div>

            <div className="space-y-6">
                <p className={`text-slate-200 text-xl md:text-2xl font-medium leading-relaxed ${montserrat.className}`}>
                   My name is <span className="text-pink-500">Elsha Amalia Pusponegoro</span>.
                   <br/>I&apos;m a Software Engineer.
                </p>

                <p className={`text-slate-400 text-base leading-loose text-justify ${montserrat.className}`}>
                  I am an emerging Software Engineer with a knack for blending artwork with cutting-edge technology. During my academic years, I have specialized in <span className="text-white font-bold">Frontend Development</span>  and <span className="text-white font-bold">AI-IoT Integrations</span>, transforming theoretical concepts into functional web applications. I bring practical experience from the manufacturing industry, ready to craft dynamic digital experiences
                </p>
            </div>
        </div>

        {/* --- KOLOM KANAN: TECH STACK --- */}
        <div className="w-full flex flex-col justify-center order-1 lg:order-2">
            
            <div className="bg-transparent border border-gray-900 backdrop-blur-xs rounded-3xl p-8 shadow-2xl">
                {/* <h3 className={`text-white text-xl font-bold mb-6 border-l-4 border-blue-500 pl-4 ${montserrat.className}`}>
                    TECH STACK
                </h3> */}

                <div className="space-y-8">
                    {skillsData.map((group, idx) => (
                        <div key={idx}>
                            <h4 className={`text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3 ${montserrat.className}`}>
                                {group.category}
                            </h4>
                            
                            {/* Grid 5 Kolom */}
                            <div className="grid grid-cols-5 gap-3">
                                {group.items.map((skill, sIdx) => (
                                    <div 
                                        key={sIdx} 
                                        // STYLE BLOK 
                                        className="group relative flex flex-col items-center justify-center p-3 rounded-xl border border-gray-900  transition-all duration-300 aspect-square cursor-pointer"
                                    >
                                        {/* STYLE GRAYSCALE (Hitam Putih) */}
                                        {/* grayscale = jadi abu-abu */}
                                        {/* opacity-60 = agak redup */}
                                        {/* group-hover:grayscale-0 = warna asli muncul pas di hover */}
                                        <div className={`text-3xl ${skill.color} grayscale opacity-100 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg`}>
                                            {skill.icon}
                                        </div>
                                        
                                        {/* Tooltip Nama */}
                                        <span className={`absolute -bottom-8 opacity-0 group-hover:opacity-100 z-20 text-[12px] text-white  px-2 py-1  transition-all duration-100 whitespace-nowrap ${montserrat.className}`}>
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