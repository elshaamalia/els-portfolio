    "use client"

    import TypingText from "@/components/animations/typing-text"
    import { Montserrat } from "next/font/google"
    // import { FaDatabase, FaMicrochip, FaIndustry } from "react-icons/fa"

    // IMPORT ICON DARI REACT-ICONS
    import { 
    SiPython, 
    SiReact, 
    SiNodedotjs, 
    SiTypescript, 
    SiTailwindcss, 
    SiMqtt, 
    SiFirebase 
    } from "react-icons/si"

    const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    })

    // DEFINISI TECH STACK (Nama, Icon, dan Warna Hover)
    const techStack = [
    { name: "Python", icon: SiPython, color: "hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/50" },
    { name: "React.js", icon: SiReact, color: "hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50" },
    { name: "Node.js", icon: SiNodedotjs, color: "hover:text-green-500 hover:bg-green-500/10 hover:border-green-500/50" },
    { name: "TypeScript", icon: SiTypescript, color: "hover:text-blue-600 hover:bg-blue-600/10 hover:border-blue-600/50" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-cyan-300 hover:bg-cyan-300/10 hover:border-cyan-300/50" },
    { name: "IoT (MQTT)", icon: SiMqtt, color: "hover:text-purple-400 hover:bg-purple-400/10 hover:border-purple-400/50" },
    { name: "Realtime DB", icon: SiFirebase, color: "hover:text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/50" },
    ]

    export default function ExperiencePage() {
    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden">
        {/* Background gradient overlay */}
        <div className="fixed inset-0 w-full h-screen bg-linear-to-b from-black via-black to-black z-0" />
        
        {/* Subtle ambient light */}
        <div className="fixed top-0 left-1/4 w-96 h-96  blur-[150px] rounded-full z-0 pointer-events-none" />
        <div className="fixed bottom-0 right-1/4 w-96 h-96 blur-[150px] rounded-full z-0 pointer-events-none" />

        {/* Main Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto">
            
            {/* Header Section */}
            <div className="pt-28 px-10 md:px-36">
            <div className="text-left mb-14">
                <h1 className={`text-white text-9xl font-black tracking-tight drop-shadow-lg ${montserrat.className}`}>
                <TypingText text="EXPERIENCE" speed={50} />
                </h1>
            </div>
            </div>

            {/* Experience Section */}
            <div className="px-10 md:px-20 pb-20">
            
            <div className="relative w-full max-w-6xl mx-auto p-8 md:p-10 rounded-3xl border border-slate-800 bg-black/60 backdrop-blur-xl overflow-hidden shadow-2xl ">
                
                <div className="absolute -top-20 -left-20 w-40 h-40  blur-[100px] rounded-full pointer-events-none" />

                {/* HEADER CARD */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 relative z-10 border-b border-slate-800/50 pb-8">
                <div className="flex items-center gap-5">
                    {/* Logo */}
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 ring-1 ring-white/10 shrink-0">
                    <span className={`text-white text-3xl font-black ${montserrat.className}`}>G</span>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className={`text-white text-xl md:text-2xl font-bold tracking-tight ${montserrat.className}`}>
                            PT GIKEN PRECISION
                        </h2>

                        {/* --- INDUSTRY TAG --- */}
                        <div className={`flex items-center gap-2 text-slate-500 text-xs font-bold tracking-widest uppercase ${montserrat.className}`}>
                            <span>Manufacturing & Assembly</span>
                        </div>

                        {/* Location with Ping */}
                        <div className="flex items-center gap-2 -ml-2">
                            <span className="text-lg leading-none">📍</span>
                            
                            <p className={`text-slate-400 text-sm font-medium ${montserrat.className}`}>
                                Batam, Indonesia
                            </p>
                        </div>
                        
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-3 pt-2 -ml-1">
                            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-800/60 bg-blue-950/50 text-blue-400 text-[11px] font-bold tracking-wide uppercase shadow-inner shadow-blue-900/20 ${montserrat.className}`}>
                            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                            <span>Internship</span>
                            </div>
                        </div>
                        </div>
                </div>

                {/* Date Badge */}
                <div className={`shrink-0 px-4 py-2 text-yellow-200 text-s  tracking-wide shadow-sm ${montserrat.className}`}>
                    March 2025 - Nov 2025
                </div>
                </div>

                {/* ROLE & DESCRIPTION */}
                <div className="mb-10 relative z-10 pl-2">
                <h3 className={`text-3xl font-black mb-4 text-transparent bg-clip-text bg-linear-to-r from-white via-blue-100 to-slate-300 ${montserrat.className}`}>
                    Fullstack IoT Engineer
                </h3>
                
                <p className={`text-slate-300 text-base leading-relaxed max-w-3xl ${montserrat.className} opacity-90`}>
                    Developed a realtime Cycle Time Monitoring System based on IoT infrastructure. Assisted and contributed to the 1-to-1 migration of legacy applications to modern React-based solutions, significantly enhancing feature functionality and improving overall UI/UX efficiency.
                </p>

                <ul className={`mt-6 space-y-3 text-slate-400 text-sm ${montserrat.className}`}>
                    <li className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Spearheaded the development of IoT-based realtime monitoring dashboard.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Executed legacy system migration using modern React ecosystem.</span>
                    </li>
                </ul>
                </div>

                {/* --- TECH STACK SECTION --- */}
                <div className="relative z-10 pl-2">
                <h4 className={`text-slate-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 ${montserrat.className}`}>
                    Core Technologies
                </h4>
                
                <div className="flex flex-wrap items-center gap-4">
                    {techStack.map((tech, index) => (
                        <div 
                        key={index}
                        className="group relative flex flex-col items-center"
                        >
                        {/* Icon Container */}
                        <div 
                            className={`w-12 h-12 rounded-xl bg-slate-800/40 border border-slate-700/30 flex items-center justify-center text-slate-400 text-2xl transition-all duration-300 hover:scale-110 shadow-lg ${tech.color}`}
                        >
                            <tech.icon />
                        </div>

                        {/* Tooltip */}
                        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-110 px-2 py-1  rounded text-[12px] text-slate-300 whitespace-nowrap z-20 pointer-events-none">
                            {tech.name}
                        </div>
                        </div>
                    ))}
                </div>
                </div>

            </div>
            </div>
        </div>
        </div>
    )
    }