'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { CalModal } from './CalModal'

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isCalOpen, setIsCalOpen] = useState(false)

  return (
    <section ref={ref} className="relative py-32 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-blue/10 blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-accent-blue tracking-wider uppercase mb-4 block">
            [ Start With a Pilot ]
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8">
            Ready to Move Fast?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Short evaluation period. Limited volume. Scale based on performance.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <button 
            onClick={() => setIsCalOpen(true)}
            className="glow-button px-12 py-5 rounded-2xl text-lg font-bold text-primary-foreground tracking-wide uppercase cursor-pointer"
          >
            Initiate Pilot
          </button>
        </motion.div>
        
        {/* Bottom decorative elements */}
        <motion.div
          className="mt-20 flex justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent-blue/50" />
          <span className="font-mono text-sm text-muted-foreground">
            No strings attached
          </span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent-blue/50" />
        </motion.div>
      </div>
      
      {/* Cal.com Modal */}
      <CalModal 
        isOpen={isCalOpen} 
        onClose={() => setIsCalOpen(false)}
        calLink="speed/pilot-call" // Replace with your Cal.com link
      />
    </section>
  )
}
