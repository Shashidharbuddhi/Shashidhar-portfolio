import { motion } from 'framer-motion'
import { Code, Layout, Server, Database, Cpu, Terminal, Wrench } from 'lucide-react'
import { skillGroups } from '../data/portfolio.js'

export default function Skills() {
  // Map icons to the group title
  const getGroupIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'languages':
        return <Code className="h-5 w-5 text-sky-400" />
      case 'frontend':
        return <Layout className="h-5 w-5 text-indigo-400" />
      case 'backend':
        return <Server className="h-5 w-5 text-emerald-400" />
      case 'databases':
        return <Database className="h-5 w-5 text-purple-400" />
      case 'ai / ml':
      case 'ai/ml':
        return <Cpu className="h-5 w-5 text-teal-400" />
      case 'core cs':
        return <Terminal className="h-5 w-5 text-rose-400" />
      case 'tools':
        return <Wrench className="h-5 w-5 text-amber-400" />
      default:
        return <Code className="h-5 w-5 text-slate-400" />
    }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  }

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-navy-900/40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <span className="chip mb-3 inline-block">Competency</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Skills & Expertise
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-silver-200 to-white" />
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-card backdrop-blur-md"
            >
              {/* Group Header */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-all duration-300 group-hover:scale-105">
                  {getGroupIcon(group.title)}
                </span>
                <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                  {group.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 font-medium transition duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
