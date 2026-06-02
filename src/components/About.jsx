import { motion } from 'framer-motion'
import { Server, ShieldCheck, Cpu, Database } from 'lucide-react'
import { aboutCopy } from '../data/portfolio.js'

export default function About() {
  const systemNodes = [
    { name: 'Client App (React)', type: 'frontend', color: 'from-sky-400 to-blue-500' },
    { name: 'REST Gateway (Node)', type: 'gateway', color: 'from-slate-100 to-silver-500' },
    { name: 'Worker Service', type: 'service', color: 'from-indigo-400 to-purple-500' },
    { name: 'Database (MongoDB)', type: 'database', color: 'from-emerald-400 to-teal-500' },
  ]

  return (
    <section id="about" className="relative py-24 md:py-32 bg-navy-900/50">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16 text-center md:text-left">
          <span className="chip mb-3 inline-block">Introduction</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            About Me
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-silver-200 to-white" />
        </div>

        {/* Content Layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Side: Premium Systems Architecture Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md rounded-2xl border border-white/10 bg-navy-800/80 p-6 shadow-card backdrop-blur-xl relative overflow-hidden"
            >
              {/* Top Bar Decoration */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500">
                  Systems Engine v1.0.4
                </span>
              </div>

              {/* Glowing architectural diagram */}
              <div className="relative space-y-4">
                <div className="text-xs font-semibold text-slate-400 mb-2">ARCHITECTURAL TOPOLOGY</div>
                
                {/* Node 1 */}
                <div className="flex items-center justify-between rounded-xl border border-sky-500/20 bg-sky-500/5 p-3.5">
                  <div className="flex items-center gap-3">
                    <Cpu className="h-5 w-5 text-sky-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">Client Interface</div>
                      <div className="text-[10px] text-slate-400">React.js • Tailwind CSS</div>
                    </div>
                  </div>
                  <span className="inline-block rounded-full bg-sky-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-sky-400">
                    Live
                  </span>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center -my-2">
                  <div className="h-6 w-[2px] bg-gradient-to-b from-sky-500/40 to-slate-200/40" />
                </div>

                {/* Node 2 */}
                <div className="flex items-center justify-between rounded-xl border border-slate-200/20 bg-white/5 p-3.5">
                  <div className="flex items-center gap-3">
                    <Server className="h-5 w-5 text-slate-200" />
                    <div>
                      <div className="text-xs font-semibold text-white">REST Gateway & APIs</div>
                      <div className="text-[10px] text-slate-400">Node.js • Express • JWT Auth</div>
                    </div>
                  </div>
                  <span className="inline-block rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
                    Secure
                  </span>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center -my-2">
                  <div className="h-6 w-[2px] bg-gradient-to-b from-slate-200/40 to-emerald-500/40" />
                </div>

                {/* Node 3 */}
                <div className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-emerald-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">State Repository</div>
                      <div className="text-[10px] text-slate-400">MongoDB • Replica Sets</div>
                    </div>
                  </div>
                  <span className="inline-block rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-400">
                    Active
                  </span>
                </div>
              </div>

              {/* Status Glow Footnote */}
              <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4 text-[10px] text-slate-400">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Distributed systems synchronized and operational.</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Copy & Quick Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg"
            >
              <p>{aboutCopy}</p>
              
              {/* Highlight Cards Grid */}
              <div className="grid gap-4 sm:grid-cols-2 pt-4">
                <div className="rounded-xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:border-white/10">
                  <div className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    9.35 / 10
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                    B.Tech CGPA
                  </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:border-white/10">
                  <div className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Backend & Systems
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                    Primary Specialization
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
