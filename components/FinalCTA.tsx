'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative glass-strong rounded-3xl p-16 border-white/10 overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-ai-blue to-ai-purple rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-ai-cyan to-ai-purple rounded-full blur-3xl"
            />
          </div>

          {/* Content */}
          <div className="relative text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">Klaar voor</span>
              <br />
              <span className="gradient-text">Private AI?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-white/70 mb-12 max-w-2xl mx-auto"
            >
              Plan een gratis gesprek met onze AI experts. We bespreken je use case, 
              laten concrete oplossingen zien en adviseren over de beste implementatie.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium text-lg px-12 py-5"
              >
                Plan een gesprek
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glass text-lg px-12 py-5"
              >
                Ontdek AI Hardware
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50"
            >
              <div className="flex items-center gap-2">
                <span className="text-ai-cyan">✓</span>
                <span>Gratis adviesgesprek</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-ai-cyan">✓</span>
                <span>Geen verplichtingen</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-ai-cyan">✓</span>
                <span>Expert support</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
