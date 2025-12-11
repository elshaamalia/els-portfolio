'use client'

import { useEffect, useState } from 'react'
import HomePage from '@/components/pages/home-page'
import AboutPage from '@/components/pages/about'
import ProjectPage from '@/components/pages/project'
import ActivityPage from '@/components/pages/activity'
import ExperiencePage from '@/components/pages/experience'
import Sidebar from '@/components/sidebar'
import SocialSidebar from '@/components/social-sidebar'

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) setCurrentPage(id)
          }
        })
      },
      {
        threshold: 0.3, // Kita turunkan sedikit biar deteksi lebih cepat
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      
      {/* --- LAYER 1: BACKGROUND (HOMEPAGE FIXED) --- */}
      <div className="fixed inset-0 z-0 flex items-center justify-center px-60">
        <HomePage />
      </div>

      {/* --- LAYER 2: INTERFACE (SIDEBARS) --- */}
      <div className="fixed left-0 top-0 h-full z-30 flex flex-col justify-center">
        <Sidebar 
          currentPage={currentPage}
          onPageChange={(page) => {
            setCurrentPage(page)
            document.getElementById(page)?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }}
        />
      </div>

      <div className="fixed right-0 top-0 h-full z-30 flex flex-col justify-center">
        <SocialSidebar />
      </div>

      {/* --- LAYER 3: SCROLLABLE CONTENT (OVERLAY) --- */}
      {/* Class 'no-scrollbar' ditambahkan untuk menyembunyikan batang scroll */}
      <main className="relative z-10 h-full overflow-y-auto scroll-smooth no-scrollbar">
        
        {/* INJECT CSS: HILANGKAN SCROLLBAR TAPI TETAP BISA SCROLL */}
        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}</style>

        {/* SECTION 1: TRANSPARANT SPACER */}
        <section id="home" className="min-h-screen w-full bg-transparent pointer-events-none">
          {/* Kosong */}
        </section>

        <div className=" backdrop-blur-sm shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/5">
            
            <section id="about" className="min-h-screen flex items-center px-60 py-20">
              <AboutPage />
            </section>

            <section id="project" className="min-h-screen flex items-center px-60 py-20">
              <ProjectPage />
            </section>

            <section id="activity" className="min-h-screen flex items-center px-60 py-20">
              <ActivityPage />
            </section>

            <section id="experience" className="min-h-screen flex items-center px-60 py-20">
              <ExperiencePage />
            </section>

            <div className="py-10 text-center text-gray-500 text-xs tracking-widest">
              © 2025 ELSHA AMALIA.
            </div>
        </div>

      </main>
    </div>
  )
}