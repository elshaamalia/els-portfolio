"use client"
import { Linkedin, Github, Twitter, Instagram, Mail } from "lucide-react"

export default function SocialSidebar() {
  const socialLinks = [
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/elshaammalia",
      color: "hover:text-blue-600",
    },
    {
      id: "github",
      icon: Github,
      label: "GitHub",
      url: "https://github.com/elshaammalia",
      color: "hover:text-gray-400",
    },
    {
      id: "twitter",
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/elshaammalia",
      color: "hover:text-blue-400",
    },
    {
      id: "instagram",
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/elshaammalia",
      color: "hover:text-pink-500",
    },
    {
      id: "email",
      icon: Mail,
      label: "Email",
      url: "mailto:elsha.amalia@email.com",
      color: "hover:text-red-500",
    },
  ]

  return (
    <aside className="w-64 backdrop-blur-md bg-black border-l border-slate-700/50 flex flex-col items-center py-8 gap-6 relative z-20">
      <nav className="flex-1 flex flex-col gap-6 justify-center items-start pl-12 w-full">
        {socialLinks.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded transition text-slate-400 ${item.color}`}
              title={item.label}
            >
              <Icon size={30} />
            </a>
          )
        })}
      </nav>

    </aside>
  )
}
