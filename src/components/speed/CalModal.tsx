'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

interface CalModalProps {
  isOpen: boolean
  onClose: () => void
  calLink?: string
}

export function CalModal({ isOpen, onClose, calLink = "speed/pilot-call" }: CalModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Load Cal.com embed script
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.innerHTML = `
        (function (C, A, L) { 
          let p = function (a, ar) { a.q.push(ar); }; 
          let d = C.document; 
          C.Cal = C.Cal || function () { 
            let cal = C.Cal; 
            let ar = arguments; 
            if (!cal.loaded) { 
              cal.ns = {}; 
              cal.q = cal.q || []; 
              d.head.appendChild(d.createElement("script")).src = A; 
              cal.loaded = true; 
            } 
            if (ar[0] === L) { 
              const api = function () { p(api, arguments); }; 
              const namespace = ar[1]; 
              api.q = api.q || []; 
              if(typeof namespace === "string"){
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar); 
              return;
            } 
            p(cal, ar); 
          }; 
        })(window, "https://app.cal.com/embed/embed.js", "init");
        
        Cal("init", "speed-pilot", {origin:"https://app.cal.com"});
        
        Cal.ns["speed-pilot"]("inline", {
          elementOrSelector:"#speed-cal-embed",
          config: {"layout":"month_view","theme":"dark"},
          calLink: "${calLink}",
        });
        
        Cal.ns["speed-pilot"]("ui", {"hideEventTypeDetails":false,"layout":"month_view","theme":"dark"});
      `
      
      document.body.appendChild(script)
      document.body.style.overflow = 'hidden'
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
        document.body.style.overflow = ''
      }
    }
  }, [isOpen, calLink])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-full h-full max-w-5xl mx-auto glass-intense rounded-3xl overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Schedule Your Pilot Call
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    30 minutes • Video call • No commitment
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-accent-blue/20 transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              
              {/* Cal.com Embed */}
              <div className="flex-1 p-0 bg-background overflow-auto">
                <div 
                  id="speed-cal-embed"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '500px',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
