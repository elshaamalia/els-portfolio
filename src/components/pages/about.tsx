'use client'

import { useState } from 'react'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('personal')

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 bg-black">
      {/* Sidebar Menu */}
      <div className="col-span-1 space-y-2">
        <h3 className="text-white font-bold mb-4">About Me</h3>
        <button
          onClick={() => setActiveTab('personal')}
          className={`block w-full text-left px-4 py-2 rounded font-mono text-sm transition ${
            activeTab === 'personal'
              ? 'bg-blue-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          👤 personal.js
        </button>
        <button
          onClick={() => setActiveTab('tech')}
          className={`block w-full text-left px-4 py-2 rounded font-mono text-sm transition ${
            activeTab === 'tech'
              ? 'bg-blue-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          ⚙️ tech-stack.js
        </button>
      </div>

      {/* Content */}
      <div className="col-span-2 font-mono text-sm space-y-4">
        {activeTab === 'personal' && (
          <>
            <div>
              <span className="text-red-400">const</span> <span className="text-cyan-400">NAME</span> = <span className="text-green-400">&apos;Elsha Amalia&apos;</span>
            </div>
            <div>
              <span className="text-red-400">let</span> <span className="text-cyan-400">location</span> = <span className="text-green-400">&apos;Indonesia&apos;</span>
            </div>
            <div>
              <span className="text-red-400">let</span> <span className="text-cyan-400">hobbies</span> = [
              <div className="pl-4">
                <span className="text-green-400">&apos;Coding&apos;</span>,<br/>
                <span className="text-green-400">&apos;Reading Tech Articles&apos;</span>,<br/>
                <span className="text-green-400">&apos;Contributing to Open Source&apos;</span>,<br/>
                <span className="text-green-400">&apos;Coffee & Development&apos;</span>
              </div>
              ]
            </div>
            <div>
              <span className="text-red-400">let</span> <span className="text-cyan-400">status</span> = <span className="text-green-400">&apos;Available for freelance projects&apos;</span>
            </div>
          </>
        )}

        {activeTab === 'tech' && (
          <>
            <div className="text-slate-500">
              {'//'} <span>Skills Information</span>
            </div>
            <div className="text-slate-500">
              {'//'} <span>Most important skills</span>
            </div>
            <div>
              <span className="text-red-400">let</span> <span className="text-cyan-400">languages</span> = [<span className="text-green-400">&apos;JavaScript&apos;, &apos;TypeScript&apos;, &apos;PHP&apos;, &apos;Python&apos;</span>]
            </div>
            <div>
              <span className="text-red-400">let</span> <span className="text-cyan-400">frontend</span> = [<span className="text-green-400">&apos;React&apos;, &apos;Next.js&apos;, &apos;Tailwind CSS&apos;, &apos;Vue.js&apos;</span>]
            </div>
            <div>
              <span className="text-red-400">let</span> <span className="text-cyan-400">backend</span> = [<span className="text-green-400">&apos;Node.js&apos;, &apos;Laravel&apos;, &apos;Express&apos;</span>]
            </div>
            <div>
              <span className="text-red-400">let</span> <span className="text-cyan-400">databases</span> = [<span className="text-green-400">&apos;PostgreSQL&apos;, &apos;MongoDB&apos;, &apos;MySQL&apos;</span>]
            </div>
            <div>
              <span className="text-red-400">let</span> <span className="text-cyan-400">tools</span> = [<span className="text-green-400">&apos;Git&apos;, &apos;Docker&apos;, &apos;AWS&apos;, &apos;Vercel&apos;</span>]
            </div>
          </>
        )}
      </div>
    </div>
  )
}