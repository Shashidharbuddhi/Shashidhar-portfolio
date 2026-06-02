import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Binary, Cpu, PenTool as Tool } from 'lucide-react'
import { experiences } from '../data/portfolio.js'

export default function ExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  // Custom visual components for the carousel slides (Cinematic vector schemas)
  const renderSlideGraphic = (idx) => {
    switch (idx) {
      case 0: // Caterpillar
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-yellow-500/10 via-amber-600/5 to-transparent flex flex-col items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-white/5">
            {/* Ambient glowing circles */}
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-yellow-500/5 blur-[50px]" />
            <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-amber-500/5 blur-[50px]" />
            
            {/* Gear Outline Vector using purely CSS */}
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-4 border-dashed border-yellow-500/20 p-2 animate-[spin_40s_linear_infinite]">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-double border-white/20">
                <Tool className="h-10 w-10 text-yellow-500/60" />
              </div>
            </div>
            
            {/* Text Overlay */}
            <div className="mt-6 text-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400">Industrial Manufacturing</div>
              <div className="text-xs text-slate-400 mt-1">Caterpillar Inside the Machines • 2026</div>
            </div>
          </div>
        )
      case 1: // CIDECODE Hackathon
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-transparent flex flex-col items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-cyan-500/5 blur-[50px]" />
            
            {/* Coding Matrix block */}
            <div className="w-full max-w-[240px] rounded-xl border border-cyan-500/20 bg-black/40 p-4 font-mono text-[10px] text-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.05)]">
              <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-2 text-slate-500">
                <span className="h-2 w-2 rounded-full bg-cyan-500/60" />
                <span>main.rs • 24H_HACK</span>
              </div>
              <div className="space-y-1">
                <div><span className="text-slate-500">1</span> <span className="text-purple-400">fn</span> <span className="text-blue-400">main</span>() &#123;</div>
                <div><span className="text-slate-500">2</span>   <span className="text-slate-400">let core = SystemsEngine::new();</span></div>
                <div><span className="text-slate-500">3</span>   <span className="text-slate-400">core.run_optimization();</span></div>
                <div><span className="text-slate-500">4</span>   <span className="text-emerald-400">println!("Success!");</span></div>
                <div><span className="text-slate-500">5</span> &#125;</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 flex items-center gap-1">
                <Binary className="h-3.5 w-3.5" />
                Intensive 24H Hackathon
              </div>
              <div className="text-xs text-slate-400 mt-1">CIDECODE Problem Solving • 2026</div>
            </div>
          </div>
        )
      case 2: // Google Generative AI
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-indigo-500/10 via-purple-600/5 to-transparent flex flex-col items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-36 rounded-full bg-indigo-500/5 blur-[50px]" />
            
            {/* AI Node layout */}
            <div className="relative flex h-28 w-28 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-ping opacity-40" />
              <div className="absolute h-20 w-20 rounded-full border border-purple-500/20" />
              <div className="absolute h-12 w-12 rounded-full border border-indigo-500/40 flex items-center justify-center bg-navy-900 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <Cpu className="h-5 w-5 text-indigo-400 animate-pulse" />
              </div>
              
              {/* Outer floating nodes */}
              <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full border border-white/20 bg-purple-500/60 shadow-[0_0_10px_#a855f7]" />
              <span className="absolute -bottom-1 -left-1 h-3.5 w-3.5 rounded-full border border-white/20 bg-indigo-500/60 shadow-[0_0_10px_#6366f1]" />
            </div>

            <div className="mt-6 text-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400">Cognitive ML Jams</div>
              <div className="text-xs text-slate-400 mt-1">Google Generative AI Lab Labs</div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  // Handle slide timing loop
  useEffect(() => {
    if (isPaused) return

    timerRef.current = setInterval(() => {
      handleNext()
    }, 6000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [currentIndex, isPaused])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-navy-900/50">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <span className="chip mb-3 inline-block">Milestones</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Experience & Engagement
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-silver-200 to-white" />
        </div>

        {/* Cinematic Slider Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-navy-800/60 shadow-card backdrop-blur-xl overflow-hidden"
        >
          {/* Main Content Area */}
          <div className="grid lg:grid-cols-12 min-h-[360px]">
            {/* Visual Vector Column */}
            <div className="lg:col-span-5 h-[260px] lg:h-auto overflow-hidden">
              {renderSlideGraphic(currentIndex)}
            </div>

            {/* Description Text Column */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Highlight {currentIndex + 1} of {experiences.length}
                </span>

                {/* Animated content text switch */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                      {experiences[currentIndex].title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                      {experiences[currentIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider controls bottom area */}
              <div className="flex items-center justify-between border-t border-white/5 pt-8 mt-8">
                {/* Arrow navigation buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:bg-white/10 hover:text-white"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:bg-white/10 hover:text-white"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-2">
                  {experiences.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentIndex === idx ? 'w-6 bg-white' : 'w-2.5 bg-white/20'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
