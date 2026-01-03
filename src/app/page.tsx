'use client'

import { useEffect, useState } from 'react'
import HomePage from '@/components/pages/home-page'
import AboutPage from '@/components/pages/about'
import ProjectPage from '@/components/pages/project'
import ActivityPage from '@/components/pages/activity'
import ExperiencePage from '@/components/pages/experience'
import Sidebar from '@/components/sidebar'
import SocialSidebar from '@/components/social-sidebar'
import SectionReveal from '@/components/animations/section-reveal'

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
      { threshold: 0.3 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      
      {/* LAYER 1: BACKGROUND */}
      <div className="fixed inset-0 z-0 flex items-center justify-center">
        <HomePage />
      </div>

      {/* LAYER 2: INTERFACE (Hidden on Mobile/Tablet < md) */}
      <div className="hidden lg:flex fixed left-0 top-0 h-full z-30 flex-col justify-center">
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

      <div className="hidden lg:flex fixed right-0 top-0 h-full z-30 flex-col justify-center">
        <SocialSidebar />
      </div>

      {/* LAYER 3: CONTENT */}
      <main className="relative z-10 h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth">
        
        {/* SPACER HOME */}
        <section id="home" className="min-h-screen w-full bg-transparent pointer-events-none">
        </section>

        {/* CONTENT CONTAINER */}
        <div className="bg-black/60 backdrop-blur-md shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/10 rounded-t-3xl">

            {/* ABOUT */}
            <section id="about" className="min-h-screen flex items-center px-4 sm:px-8 md:px-20 lg:px-40 relative overflow-hidden py-20 lg:py-0">
              <SectionReveal>
                <AboutPage />
              </SectionReveal>
            </section>

            {/* PROJECT */}
            <section id="project" className="min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 relative py-20 lg:py-0">
              <SectionReveal delay={0.1}>
                <ProjectPage />
              </SectionReveal>
            </section>

            {/* ACTIVITY */}
            <section id="activity" className="min-h-screen flex items-center px-4 sm:px-8 md:px-20 lg:px-40 relative overflow-hidden py-20 lg:py-0 mt-10 lg:mt-20">
              <SectionReveal delay={0.1}>
                <ActivityPage />
              </SectionReveal>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="min-h-screen flex items-center px-4 sm:px-8 md:px-20 lg:px-40 relative overflow-hidden py-20 lg:py-0 mt-10 lg:mt-20">
              <SectionReveal delay={0.1}>
                <ExperiencePage />
              </SectionReveal>
            </section>

            <div className="text-center mb-12 mt-16 text-gray-500 text-[10px] md:text-xs tracking-widest px-4">
              © 2025 ELSHA AMALIA PUSPONEGORO.
            </div>
        </div>

      </main>
    </div>
  )
}