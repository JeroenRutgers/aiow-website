'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'Jouw data blijft op jouw hardware. Geen cloud, geen leaks, volledige controle.',
    stat: '100%',
    statLabel: 'Data ownership',
  },
  {
    icon: '⚡',
    title: 'Zero Latency',
    description: 'Lokale processing betekent instant responses. Geen wachttijden, geen API limits.',
    stat: '<50ms',
    statLabel: 'Response time',
  },
  {
    icon: '🛡️',
    title: 'GDPR Compliant',
    description: 'On-premise AI is standaard GDPR-proof. Geen complexe DPA\'s of privacy risks.',
    stat: '100%',
    statLabel: 'Compliant',
  },
  {
    icon: '💰',
    title: 'Predictable Costs',
    description: 'Geen verrassingen, geen per-token kosten. Eenmalige investering, unlimited usage.',
    stat: '€0',
    statLabel: 'Per API call',
  },
  {
    icon: '🎯',
    title: 'Custom Solutions',
    description: 'Maatwerk AI-oplossingen specifiek voor jouw bedrijf en use cases.',
    stat: '100%',
    statLabel: 'Customizable',
  },
  {
    icon: '📚',
    title: 'Knowledge & Support',
    description: 'Uitgebreide kennisbank, training en ongoing support van AI experts.',
    stat: '24/7',
    statLabel: 'Support',
  },
];

export default function WhyAIOW() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-ai-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="glass px-6 py-2 rounded-full text-sm font-medium text-ai-purple border border-ai-purple/30 inline-block mb-6">
            💎 Waarom AIOW
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">De slimme keuze voor</span>
            <br />
            <span className="gradient-text">Enterprise AI</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Bedrijven kiezen voor AIOW omdat we privacy, performance en praktische 
            toepassingen combineren in één compleet pakket.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-strong rounded-2xl p-8 border-white/10 hover:border-ai-cyan/50 transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-6xl mb-6"
                >
                  {reason.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-ai-cyan transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 mb-6">
                  {reason.description}
                </p>

                {/* Stat */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-4xl font-bold gradient-text mb-1">
                    {reason.stat}
                  </div>
                  <div className="text-sm text-white/50">
                    {reason.statLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-strong rounded-2xl p-12 border-white/10"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">50+</div>
              <div className="text-white/60">Bedrijven geholpen</div>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-white/60">Uptime garantie</div>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-white/60">Expert support</div>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-white/60">Privacy compliance</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
