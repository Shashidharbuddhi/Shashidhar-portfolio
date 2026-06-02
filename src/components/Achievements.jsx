import { motion } from 'framer-motion'
import { Trophy, Code, Award } from 'lucide-react'
import { achievements } from '../data/portfolio.js'

export default function Achievements() {
  const getAchievementIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Code className="h-6 w-6 text-sky-400" />
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />
      case 2:
        return <Award className="h-6 w-6 text-emerald-400" />
      default:
        return <Award className="h-6 w-6 text-slate-400" />
    }
  }

  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <span className="chip mb-3 inline-block">Credentials</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Achievements
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-silver-200 to-white" />
        </div>

        {/* Achievements Grid */}
        <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-card backdrop-blur-md"
            >
              {/* Internal subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-300">
                  {getAchievementIcon(idx)}
                </span>

                <h3 className="font-display text-base font-semibold leading-relaxed text-white">
                  {achievement}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
