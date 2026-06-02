import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import ExperienceCarousel from './components/ExperienceCarousel.jsx'
import Achievements from './components/Achievements.jsx'
import ResumeSection from './components/ResumeSection.jsx'
import Contact from './components/Contact.jsx'
import FloatingParticles from './components/FloatingParticles.jsx'

const useSpotlight = () => {
  useEffect(() => {
    let frame = null
    const handleMove = (event) => {
      const { clientX, clientY } = event
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--spotlight-x', `${clientX}px`)
        document.documentElement.style.setProperty('--spotlight-y', `${clientY}px`)
        document.documentElement.style.setProperty('--cursor-x', `${clientX}px`)
        document.documentElement.style.setProperty('--cursor-y', `${clientY}px`)
        frame = null
      })
    }

    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])
}

function App() {
  useSpotlight()

  return (
    <div className="relative min-h-screen overflow-hidden bg-navy-900 text-slate-100">
      <div className="spotlight" />
      <div className="cursor-glow" />
      <FloatingParticles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <ExperienceCarousel />
        <div className="section-divider" />
        <Achievements />
        <div className="section-divider" />
        <ResumeSection />
        <div className="section-divider" />
        <Contact />
      </main>
    </div>
  )
}

export default App
