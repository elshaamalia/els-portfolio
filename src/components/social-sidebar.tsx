"use client"
import { Linkedin, Github, Instagram, Mail, FileDown, X, Download } from "lucide-react"
import { useState } from "react"

export default function SocialSidebar() {
  const [showCV, setShowCV] = useState(false)

  const socialLinks = [
    { id: "linkedin", icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/elshaamalia", color: "hover:text-blue-600" },
    { id: "github", icon: Github, label: "GitHub", url: "https://github.com/elshaamalia", color: "hover:text-gray-400" },
    { id: "instagram", icon: Instagram, label: "Instagram", url: "https://instagram.com/abcdelsssss", color: "hover:text-pink-500" },
    { id: "email", icon: Mail, label: "Email", url: "mailto:elshaaml14@gmail.com", color: "hover:text-red-500" },
  ]

  return (
    <>
      {/* SIDEBAR */}
      <aside className="w-50 h-full backdrop-blur-md bg-black border-l border-slate-800/50 flex flex-col items-center py-8 gap-6 relative z-20">
        
        <nav className="flex-1 flex flex-col gap-3 justify-center items-center w-full">
          {socialLinks.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded transition text-slate-200/50 ${item.color}`}
                title={item.label}
              >
                <Icon size={18} />
              </a>
            )
          })}
        </nav>

        {/* BUTTON PREVIEW CV */}
        <div className="absolute bottom-8 w-full flex justify-center">
          <button
            onClick={() => setShowCV(true)}
            className="px-4 py-2 bg-neutral-500/20 hover:bg-neutral-800 text-slate-200 rounded-lg flex items-center gap-2 transition"
          >
            <FileDown size={18} />
            <span className="text-xs">Preview CV</span>
          </button>
        </div>
        
      </aside>

      {/* MODAL */}
      {showCV && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-999">
          
          <div className="bg-slate-900 rounded-xl shadow-xl w-[90%] h-[90%] max-w-4xl relative overflow-hidden flex flex-col">

            {/* TOP BAR */}
            <div className="flex items-center justify-between p-3 bg-slate-800 border-b border-slate-700">

              {/* DOWNLOAD BUTTON */}
              <a
                href="/CV - Elsha Amalia Pusponegoro.pdf"
                download
                className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-md flex items-center gap-2 text-slate-100 transition"
              >
                <Download size={18} />
                <span>Download</span>
              </a>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowCV(false)}
                className="p-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md"
              >
                <X size={18} />
              </button>
            </div>

            {/* PDF PREVIEW */}
            <iframe
              src="/CV - Elsha Amalia Pusponegoro.pdf"
              className="w-full h-full bg-slate-900"
            ></iframe>

          </div>
        </div>
      )}
    </>
  )
}