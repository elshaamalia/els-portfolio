'use client'

import { useState } from 'react'
import HomePage from '@/components/pages/home-page'
import AboutPage from '@/components/pages/about' 
import ProjectPage from '@/components/pages/project'  
import ActivityPage from '@/components/pages/activity'
import ExperiencePage from '@/components/pages/experience'
import Sidebar from '@/components/sidebar'
import SocialSidebar from '@/components/social-sidebar'
// import StatusBar from '@/components/status-bar'
// import SplashCursor from '@/components/animations/SplashCursor'


export default function Page() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* <SplashCursor /> */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          currentPage={currentPage} 
          onPageChange={setCurrentPage} 
        />
        <main className="flex-1 overflow-y-auto">
          {/* Render halaman sesuai state currentPage */}
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'project' && <ProjectPage />}
          {currentPage === 'activity' && <ActivityPage />}
          {currentPage === 'experience' && <ExperiencePage />}

          {/* Tambahkan halaman lainnya di sini */}
        </main>
        <SocialSidebar />
      </div>
      {/* <StatusBar /> */}
    </div>
  )
}