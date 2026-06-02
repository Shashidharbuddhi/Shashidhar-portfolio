import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MapPin, Sparkles } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons.jsx'
import { profile } from '../data/portfolio.js'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construct pre-filled email mailto action
    const emailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Recruiter'}`)
    const emailBody = encodeURIComponent(
      `Hello Shashidhar,\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    )
    
    window.location.href = `mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-500/5 blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <span className="chip mb-3 inline-block">Connection</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let's Build Something Meaningful
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400 text-sm md:text-base">
            {profile.cta}
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-silver-200 to-white" />
        </div>

        {/* Contact Layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start max-w-5xl mx-auto">
          {/* Left Side: Information cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-silver-300" />
                Direct Communication
              </h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3.5 rounded-xl border border-white/5 bg-white/5 p-3.5 transition duration-300 hover:border-white/15 hover:bg-white/10"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white">
                    <Mail className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">{profile.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 rounded-xl border border-white/5 bg-white/5 p-3.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white">
                    <MapPin className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">{profile.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Professional Networks
              </h3>
              
              <div className="flex gap-4">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-semibold text-slate-300 transition duration-300 hover:bg-white/10 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-semibold text-slate-300 transition duration-300 hover:bg-white/10 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Message form */}
          <div className="lg:col-span-7">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-navy-800/80 p-6 md:p-8 shadow-card backdrop-blur-xl space-y-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-white/30 focus:bg-white/10 focus:outline-none transition duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Subject / Goal
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-white/30 focus:bg-white/10 focus:outline-none transition duration-300"
                    placeholder="e.g. Internship Offer"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-white/30 focus:bg-white/10 focus:outline-none transition duration-300 resize-none"
                  placeholder="Tell me about your proposal or project details..."
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-silver-50 to-silver-200 py-3.5 text-xs font-bold text-navy-900 transition-all duration-300 hover:from-white hover:to-white hover:shadow-glow hover:scale-[1.01]"
              >
                Send Direct Message
                <Send className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.form>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-20 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
          <p>© 2026 Shashidhar Buddhi. Engineered with React, Tailwind CSS, & Framer Motion.</p>
        </div>
      </div>
    </section>
  )
}
