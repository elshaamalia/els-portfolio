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
      
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-0 md:pt-10 px-0 md:px-12">
        
        {/* HEADER SECTION */}
        <div className="mb-10 md:mb-16 mt-0 md:mt-14">
           <p className={`text-slate-400 text-xs md:text-sm tracking-widest mb-2 ${montserrat.className}`}>LIVE UPDATES</p>
           <h1 className={`text-white text-4xl md:text-6xl font-black tracking-tight ${montserrat.className}`}>
             <TypingText text="ACTIVITY" speed={50} />
           </h1>
           <div className="h-1 w-16 md:w-20 bg-pink-500 rounded-full mt-4"></div>
        </div>

        {/* CONTENT AREA */}
        <div className="relative w-full rounded-3xl border border-zinc-900  backdrop-blur-sm overflow-hidden shadow-2xl p-4 md:p-10 group transition-all duration-500">
            
            <div className="absolute top-0 right-0 w-40 h-40 md:w-60 md:h-60 bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 h-full min-h-100">
                <RealtimeActivityFeed />
            </div>

        </div>

      </div>
    </div>
  )
}