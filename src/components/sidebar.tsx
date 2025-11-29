"use client"
import { Home, User, Briefcase, ImageIcon} from "lucide-react"

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "project", icon: Briefcase, label: "Project" },
    { id: "activity", icon: ImageIcon, label: "Activity" },
  ]

  return (
    <aside className="w-60 backdrop-blur-md bg-black border-r border-slate-700/50 flex flex-col items-center py-8 gap-6 relative z-20">

      {/* MENAMBAHKAN justify-center */}
      <nav className="flex-1 flex flex-col gap-6 justify-center items-center w-full">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`p-3 rounded transition ${
                currentPage === item.id
                  ? "bg-slate-800/50 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
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
