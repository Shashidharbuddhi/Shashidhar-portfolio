import { motion } from 'framer-motion'
import { FileText, Download, ExternalLink, AlertCircle } from 'lucide-react'

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-24 md:py-32 bg-navy-900/40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <span className="chip mb-3 inline-block">Curriculum Vitae</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            My Resume
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400 text-sm md:text-base">
            Preview or download my official backend engineering resume.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-silver-200 to-white" />
        </div>

        {/* Layout */}
        <div className="mx-auto max-w-4xl space-y-8">
          
          {/* Top Bar Action Drawer */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-navy-800/80 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Official Resume PDF</h3>
                <p className="text-xs text-slate-400 mt-0.5">Recruiter-ready technical engineering document.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                download="Shashidhar_Buddhi_Resume.pdf"
                className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-silver-50 to-silver-200 px-5 py-2.5 text-xs font-bold text-navy-900 transition-all duration-300 hover:from-white hover:to-white hover:shadow-glow hover:scale-[1.02]"
              >
                <Download className="h-3.5 w-3.5" />
                Download PDF
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="lux-button lux-outline group text-xs px-5 py-2.5"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                View Fullscreen
              </a>
            </div>
          </div>

          {/* Interactive Document Sheet Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-[650px] rounded-3xl border border-white/10 bg-white/5 shadow-card backdrop-blur-md overflow-hidden relative"
          >
            {/* Embedded PDF Viewer */}
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0"
              className="w-full h-full border-none rounded-3xl z-10 relative bg-navy-900/20"
              title="Shashidhar Buddhi Resume"
            />

            {/* Smart Backend Hint / Warning Overlay if PDF is missing in public folder */}
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center p-8 text-center bg-navy-900/60 pointer-events-none">
              <div className="max-w-md p-6 rounded-2xl border border-white/5 bg-navy-800/80 backdrop-blur-md shadow-card">
                <AlertCircle className="h-10 w-10 text-slate-400 mx-auto mb-4" />
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">PDF Placement Configuration</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  The PDF reader will display your resume here. Ensure your resume file is named exactly <strong className="text-white">resume.pdf</strong> and placed inside the <strong className="text-white">public/</strong> folder in your project workspace.
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-mono text-slate-500 border-t border-white/5 pt-3">
                  <span>Target:</span>
                  <span className="text-silver-300">public/resume.pdf</span>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
