"use client"

import TypingText from "@/components/animations/typing-text"
import { Montserrat } from "next/font/google"
import RealtimeActivityFeed from "@/components/activity/realtime-activity"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function ActivityPage() {

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden">
      
      {/* 1. CONTAINER */}
      <div className="relative z-10 w-full max-w-3xl mx-auto pt-4 md:pt-10 px-6 md:px-8">
        
        {/* HEADER SECTION */}
        <div className="mb-8 md:mb-12 mt-4 md:mt-12">
           <p className={`text-slate-400 text-[10px] md:text-xs tracking-widest mb-2 ${montserrat.className}`}>LIVE UPDATES</p>
           
           <h1 className={`text-white text-2xl md:text-5xl font-black tracking-tight ${montserrat.className}`}>
             <TypingText text="ACTIVITY" speed={50} />
           </h1>
           <div className="h-1 w-12 md:w-16 bg-pink-500 rounded-full mt-3"></div>
        </div>

        {/* CONTENT AREA */}
        <div className="relative w-full rounded-xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-md overflow-hidden shadow-2xl p-4 md:p-8 group transition-all duration-500">
            
            <div className="absolute top-0 right-0 w-40 h-40 md:w-60 md:h-60 bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 h-full min-h-100">
                <RealtimeActivityFeed />
            </div>

        </div>

      </div>
    </div>
  )
}