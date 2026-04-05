'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const solutions = [
  {
    icon: '🤖',
    title: 'Private AI Assistant',
    description: 'Intelligente assistent die draait op jouw hardware. Volledige privacy, geen data leaks.',
    features: ['24/7 beschikbaar', 'Bedrijfskennis integratie', 'Multi-taal support', 'Custom training'],
    color: 'blue',
  },
  {
    icon: '📚',
    title: 'Knowledge AI',
    description: 'Transformeer je documentatie in een intelligente kennisbank. Instant antwoorden voor je team.',
    features: ['Document processing', 'Semantic search', 'Auto-updates', 'Access control'],
    color: 'purple',
  },
  {
    icon: '⚡',
    title: 'Workflow Automation',
    description: 'Automatiseer repetitieve taken met AI. Bespaar tijd, verhoog efficiëntie.',
    features: ['Email automation', 'Data processing', 'Report generation', 'Integration ready'],
    color: 'cyan',
  },
  {
    icon: '🔒',
    title: 'Secure Local Inference',
    description: 'AI processing volledig on-premise. Jouw data blijft binnen je netwerk.',
    features: ['Zero cloud dependency', 'GDPR compliant', 'Air-gap ready', 'Full control'],
    color: 'blue',
  },
  {
    icon: '📊',
    title: 'Data Analysis AI',
    description: 'Analyseer data, genereer inzichten en voorspel trends met lokale AI modellen.',
    features: ['Pattern detection', 'Predictive analytics', 'Visual dashboards', 'Real-time processing'],
    color: 'purple',
  },
  {
    icon: '💬',
    title: 'Customer Support AI',
    description: 'Intelligent support systeem dat leert van je kennisbank en interacties.',
    features: ['Instant responses', 'Ticket routing', 'Sentiment analysis', 'Multi-channel'],
    color: 'cyan',
  },
];

export default function AISolutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="solutions" className="relative py-32 px-6" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-ai-glow opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="glass px-6 py-2 rounded-full text-sm font-medium text-ai-purple border border-ai-purple/30 inline-block mb-6">
            🚀 AI Oplossingen
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Lokale AI voor</span>
            <br />
            <span className="gradient-text">Elk Bedrijfsproces</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Van customer support tot data analyse. AI-oplossingen die draaien op jouw hardware, 
            met volledige controle en privacy.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Hover glow effect */}
              {hoveredIndex === index && (
                <motion.div
                  layoutId="hoverGlow"
                  className={`absolute inset-0 glow-${solution.color} rounded-2xl -z-10`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              <div className="glass-strong rounded-2xl p-8 h-full border-white/10 hover:border-white/30 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  animate={hoveredIndex === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  className="text-6xl mb-6"
                >
                  {solution.icon}
                </motion.div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {solution.title}
                </h3>
                <p className="text-white/60 mb-6">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <motion.li
                      key={feature}
                      initial={{ x: 0 }}
                      animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                      className="text-sm text-white/70 flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-ai-cyan rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-sm font-medium text-ai-cyan hover:text-ai-blue transition-colors flex items-center gap-2"
                >
                  Lees meer
                  <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glass px-10 py-5"
          >
            Ontdek alle oplossingen
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
