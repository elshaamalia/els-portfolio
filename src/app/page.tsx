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
        threshold: 0.5, // 50% terlihat → dianggap aktif
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">

        {/* SIDEBAR FIXED */}
        <div className="fixed left-0 top-0 h-full z-20 flex flex-col justify-center">
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

        {/* SOCIAL SIDEBAR FIXED */}
        <div className="fixed right-0 top-0 h-full z-20 flex flex-col justify-center">
          <SocialSidebar />
        </div>

        {/* MAIN */}
        <main className="flex-1 overflow-y-auto scroll-smooth px-60">

          <section id="home" className="min-h-screen flex items-center">
            <HomePage />
          </section>

          <section id="about" className="min-h-screen flex items-center">
            <AboutPage />
          </section>

          <section id="project" className="min-h-screen flex items-center">
            <ProjectPage />
          </section>

          <section id="activity" className="min-h-screen flex items-center">
            <ActivityPage />
          </section>

          <section id="experience" className="min-h-screen flex items-center">
            <ExperiencePage />
          </section>

        </main>

      </div>
    </div>
  )
}
