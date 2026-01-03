"use client"
import { Home, User, Briefcase, Activity, Rocket } from "lucide-react"

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "project", icon: Rocket, label: "Project" },
    { id: "activity", icon: Activity, label: "Activity" },
    { id: "experience", icon: Briefcase, label: "Experience" },
  ]

  return (
    <aside className="w-55 h-full backdrop-blur-md bg-black border-r border-slate-800/50 flex flex-col items-center py-8 gap-6 relative z-20">

      <nav className="flex-1 flex flex-col gap-6 justify-center items-center w-full">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`p-3 rounded transition ${
                currentPage === item.id
                  ? "bg-neutral-500/20 text-white"
                  : "text-slate-200/50 hover:text-white hover:bg-neutral-500/20"
              }`}
              title={item.label}
            >
              <Icon size={24} />
            </button>
          )
        })}
      </nav>
    </aside>
  )
}