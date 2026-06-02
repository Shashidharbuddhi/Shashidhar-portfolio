import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight, CheckCircle2, Kanban, Cpu, Database, Network } from 'lucide-react'
import { Github } from './BrandIcons.jsx'
import { projects } from '../data/portfolio.js'

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 15,
      },
    },
  }

  // Get project specific visual background gradient
  const getGradient = (idx) => {
    const gradients = [
      'from-blue-500/10 via-indigo-500/5 to-transparent',
      'from-emerald-500/10 via-teal-500/5 to-transparent',
      'from-purple-500/10 via-fuchsia-500/5 to-transparent',
      'from-rose-500/10 via-orange-500/5 to-transparent',
    ]
    return gradients[idx % gradients.length]
  }

  // Get project generic icon
  const getProjectIcon = (title) => {
    if (title.toLowerCase().includes('jira')) return <Kanban className="h-6 w-6 text-sky-400" />
    if (title.toLowerCase().includes('finca')) return <Network className="h-6 w-6 text-emerald-400" />
    if (title.toLowerCase().includes('diagno')) return <Cpu className="h-6 w-6 text-rose-400" />
    return <Database className="h-6 w-6 text-purple-400" />
  }

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <span className="chip mb-3 inline-block">Showcase</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Featured Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-silver-200 to-white" />
        </div>

        {/* Projects Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* 1. HERO PROJECT: JiraLite (Rendered large first) */}
          {projects.filter(p => p.featured).map((project, idx) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800/80 to-navy-900 p-6 md:p-10 shadow-card backdrop-blur-xl transition-all duration-500 hover:border-white/20"
            >
              {/* Animated Glow Border Accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] pointer-events-none" />
              
              {/* Internal glow backdrop */}
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />

              <div className="grid gap-8 lg:grid-cols-12 lg:items-center relative z-10">
                {/* Visual card badge */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/15 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                      ★ Hero Project
                    </span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      MERN STACK ENGINEERING
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-extrabold text-white sm:text-3.5xl md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="text-base text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bullet features list */}
                  <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-300">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-silver-300 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition duration-300 hover:border-white/15 hover:bg-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dashboard Frame or Action box */}
                <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md h-full min-h-[220px]">
                  <div className="space-y-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                      {getProjectIcon(project.title)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Agile Workflows Platform</h4>
                      <p className="text-xs text-slate-400 mt-1">Kanban task workflows, robust protected routes, role management, role-based backend REST routing APIs.</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-silver-50 to-silver-200 px-4 py-2.5 text-xs font-bold text-navy-900 transition duration-300 hover:from-white hover:to-white hover:scale-[1.03]"
                      >
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-[1.03]"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Secondary Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => !p.featured).map((project, idx) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2.5xl border border-white/10 bg-navy-800/50 p-6 shadow-soft transition-all duration-300 hover:border-white/20 hover:bg-navy-800/80 hover:shadow-card backdrop-blur-md"
              >
                {/* Background lighting */}
                <div className={`absolute inset-0 bg-gradient-to-b ${getGradient(idx)} pointer-events-none z-0`} />

                <div className="relative z-10 space-y-4">
                  {/* Top Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                      {getProjectIcon(project.title)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Engineering Project
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white transition duration-300 group-hover:text-silver-200">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bullet highlights */}
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {project.features.map(f => (
                      <li key={f} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-slate-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech & Actions */}
                <div className="relative z-10 mt-6 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-navy-900 transition duration-300 hover:bg-slate-100"
                      >
                        Live Demo
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-slate-300 transition duration-300 hover:bg-white/10 hover:text-white"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
