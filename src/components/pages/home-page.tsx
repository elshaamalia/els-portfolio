"use client"

import TypingText from "@/components/animations/typing-text"

export default function HomePage() {
  return (
    <div className="flex items-center h-full pl-64">
      <div className="max-w-4xl space-y-6 relative z-10">
        <div className="space-y-4">
          <p className="text-slate-400 font-mono text-sm">
            <TypingText text="Hello. I Am" speed={50} />
          </p>
          <h1 className="text-6xl font-bold text-white tracking-tight">
            <TypingText text="ELSHA AMALIA PUSPONEGORO" speed={80} cursor={false} />
          </h1>
          <p className="text-2xl text-slate-400 font-mono">{">"} Full Stack Developer</p>
        </div>

        <div className="space-y-3 pt-6 font-mono text-sm">
          <p className="text-slate-500">
            {"// "}
            <span className="text-slate-400">Explore my work and connect with me</span>
          </p>
          <div className="text-green-400">
            <span className="text-red-400">const</span> portfolio = {`{'{}'}`}
            <span className="block pl-4">{`website: 'https://elshaamalia.com',`}</span>
            <span className="block pl-4">{`github: 'https://github.com/elshaamalia',`}</span>
            <span className="block pl-4">{`linkedin: 'https://linkedin.com/in/elshaamalia'`}</span>
            {`{'}'}`}
          </div>
        </div>

        <div className="pt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibel transition">
            View My Work
          </button>
        </div>
      </div>
    </div>
  )
}