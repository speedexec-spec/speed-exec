'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const infrastructure = [
  {
    title: 'Lead Sourcing & Qualification',
    description: 'Multi-channel prospecting with intent signals',
  },
  {
    title: 'CRM & Routing',
    description: 'Seamless lead distribution and pipeline management',
  },
  {
    title: 'Follow-up Systems',
    description: 'Automated sequences that never let leads go cold',
  },
  {
    title: 'Call Tracking',
    description: 'Full visibility into every conversation',
  },
  {
    title: 'Reporting & Analytics',
    description: 'Real-time dashboards and performance metrics',
  },
]

export function BackendSupport() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Header */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-sm text-accent-blue tracking-wider uppercase mb-4 block">
              [ Infrastructure ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              Backend & Support
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The operational layer that enables our closers to focus on what they do best—closing.
            </p>
            
            {/* Decorative sphere */}
            <div className="hidden lg:block">
              <div className="w-48 h-48 rounded-full glass-card float-orb opacity-50" />
            </div>
          </motion.div>
          
          {/* Right - Infrastructure list */}
          <div className="space-y-4">
            {infrastructure.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card rounded-2xl p-6 hover:border-accent-blue/40 transition-all duration-300 group"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-shadow" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
