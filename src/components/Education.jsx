import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award } from 'lucide-react'
import { education } from '../data/portfolio.js'

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      {/* Visual background ambient gradient */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy-800/10 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <span className="chip mb-3 inline-block">Academics</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Education
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-silver-200 to-white" />
        </div>

        {/* Timeline Layout */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Center Line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-silver-300/30 to-transparent md:left-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            
            {/* ITEM 1: University */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col md:flex-row md:justify-between"
            >
              {/* Dot indicator */}
              <div className="absolute left-4 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-navy-900 shadow-[0_0_10px_rgba(255,255,255,0.15)] md:left-1/2">
                <GraduationCap className="h-4 w-4 text-white" />
              </div>

              {/* Card - Left Side for Desktop, Full width for mobile */}
              <div className="ml-12 md:ml-0 md:w-[45%]">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft transition-all duration-300 hover:border-white/25 hover:shadow-card backdrop-blur-md">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-silver-300">
                      <Calendar className="h-3.5 w-3.5" />
                      {education.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-400">
                      CGPA: {education.cgpa}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold text-white sm:text-xl">
                    {education.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-300 mt-1">
                    {education.university}
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    Bengaluru, India
                  </p>
                </div>
              </div>

              {/* Spacing for Desktop (Right side is blank for item 1) */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>

            {/* ITEM 2: Secondary / Intermediate Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex flex-col md:flex-row md:justify-between"
            >
              {/* Dot indicator */}
              <div className="absolute left-4 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-navy-900 shadow-[0_0_10px_rgba(255,255,255,0.15)] md:left-1/2">
                <Award className="h-4 w-4 text-slate-300" />
              </div>

              {/* Spacing for Desktop (Left side is blank for item 2) */}
              <div className="hidden md:block md:w-[45%]" />

              {/* Card - Right Side for Desktop, Full width for mobile */}
              <div className="ml-12 md:ml-0 md:w-[45%]">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft transition-all duration-300 hover:border-white/25 hover:shadow-card backdrop-blur-md">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-silver-300">
                    School Credentials
                  </span>
                  
                  <h3 className="mt-3 font-display text-lg font-bold text-white">
                    High School & Intermediate
                  </h3>
                  
                  <div className="mt-4 space-y-3 border-t border-white/5 pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">12th CBSE (Sri Chaitanya Techno School)</span>
                      <span className="font-semibold text-white">72.2%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">10th ICSE (The Oxford English School)</span>
                      <span className="font-semibold text-white">87.6%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
