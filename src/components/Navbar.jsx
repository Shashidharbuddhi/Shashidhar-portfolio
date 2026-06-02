import { useState, useEffect } from 'react'
import { Menu, X, Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons.jsx'
import { profile } from '../data/portfolio.js'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Simple active section highlights
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'experience', 'resume', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-navy-900/70 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo / Name */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-base font-semibold shadow-inner transition-all duration-300 group-hover:border-silver-200/50">
            S
            <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          </span>
          <span className="hidden sm:inline bg-gradient-to-r from-white via-silver-200 to-silver-500 bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-80">
            Shashidhar Buddhi
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`relative text-xs font-semibold uppercase tracking-[0.15em] transition duration-300 hover:text-white ${
                activeSection === link.href.slice(1) ? 'text-white' : 'text-slate-400'
              }`}
            >
              {link.name}
              {activeSection === link.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-silver-200 to-white shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              )}
            </a>
          ))}
        </nav>

        {/* Social Links / Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-slate-400 transition hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:border-white/20 hover:text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-x-0 top-[73px] bottom-0 z-40 flex flex-col justify-between bg-navy-900/95 backdrop-blur-xl transition-all duration-300 border-t border-white/10 px-6 py-10 lg:hidden ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-lg font-medium tracking-wide transition duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-white pl-3 border-l-2 border-silver-200'
                  : 'text-slate-400 pl-3 border-l border-transparent hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Social Drawer Footer */}
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8">
          <div className="flex items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-slate-500">© 2026 Shashidhar Buddhi. All rights reserved.</p>
        </div>
      </div>
    </header>
  )
}
