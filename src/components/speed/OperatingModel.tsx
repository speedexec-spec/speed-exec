'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const principles = [
  'Performance-only engagement',
  'No retainers',
  'No fixed costs',
  'Guaranteed incentives',
]

export function OperatingModel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 px-6 bg-card/50">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-sm text-accent-blue tracking-wider uppercase mb-4 block">
              [ The Philosophy ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8">
              How We Operate
            </h2>
            
            <div className="glass-intense rounded-2xl p-8 mb-8">
              <h3 className="text-3xl font-bold text-gradient-blue mb-4">
                "Eat What You Kill"
              </h3>
              <p className="text-lg text-muted-foreground">
                The framework that aligns everyone's incentives. Every team member—from lead gen to closer—earns based on closed revenue.
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Why?</span> This filters unserious partners and talent while removing ambiguity early. If you're not confident in what you're selling, we're not the right fit.
            </p>
          </motion.div>
          
          {/* Right content - principles list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  className="glass-card rounded-xl p-6 flex items-center gap-4 group hover:border-accent-blue/40 transition-all"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                >
                  <div className="w-3 h-3 rounded-full bg-accent-blue group-hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-shadow" />
                  <span className="text-xl font-semibold text-foreground">
                    {principle}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative element */}
            <motion.div 
              className="mt-12 flex justify-end"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="w-32 h-32 rounded-full glass-card pulse-glow-blue" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
