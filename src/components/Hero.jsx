import { motion } from 'framer-motion'
import { ArrowRight, Download, Briefcase } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons.jsx'
import { profile } from '../data/portfolio.js'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
      },
    },
  }

  const handleScrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Background ambient luxury grids and glows */}
      <div className="absolute inset-0 bg-lux-radial pointer-events-none z-0" />
      
      {/* Elegant grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center gap-6"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to Internships
            </span>
          </motion.div>

          {/* Heading with Name & Pronouns */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block bg-gradient-to-b from-white via-silver-200 to-silver-500 bg-clip-text text-transparent drop-shadow-sm font-semibold">
                {profile.name}
              </span>
            </h1>
            <p className="text-sm font-medium tracking-wide text-slate-400/80 uppercase">
              {profile.pronouns} • Located in {profile.location}
            </p>
          </motion.div>

          {/* Headline - Developer-first emphasis */}
          <motion.h2
            variants={itemVariants}
            className="max-w-3xl text-lg font-medium text-slate-200 sm:text-xl md:text-2xl leading-relaxed"
          >
            {profile.headline}
          </motion.h2>

          {/* Subheadline & CTA Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-400"
          >
            {profile.subheadline}
            <span className="block mt-2 font-semibold text-silver-300">
              {profile.cta}
            </span>
          </motion.p>

          {/* Luxury CTA Actions */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center justify-center gap-4"
          >
            {/* View Projects (Primary Metallic Button) */}
            <button
              onClick={() => handleScrollTo('#projects')}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-silver-50 to-silver-200 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:from-white hover:to-white hover:shadow-glow hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
            </button>

            {/* Resume Button */}
            <button
              onClick={() => handleScrollTo('#resume')}
              className="lux-button lux-outline group px-7 py-3.5"
            >
              Resume
              <Download className="h-4 w-4 transition duration-300 group-hover:translate-y-0.5" />
            </button>

            {/* Social Group */}
            <div className="flex items-center gap-3 ml-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white hover:scale-105"
                title="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white hover:scale-105"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating UI Elements indicating scroll */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100"
          onClick={() => handleScrollTo('#about')}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-400">
            Scroll
          </span>
          <span className="block h-6 w-3.5 rounded-full border border-white/20 p-1">
            <span className="block h-1.5 w-1 rounded-full bg-slate-300" />
          </span>
        </motion.div>
      </div>
    </section>
  )
}
