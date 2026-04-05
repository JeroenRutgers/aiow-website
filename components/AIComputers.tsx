'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const computers = [
  {
    name: 'Mac Mini AI Station',
    tagline: 'Compact. Krachtig. Lokaal.',
    specs: [
      'Apple Silicon M2 Pro/Max',
      '32-64GB Unified Memory',
      'Lokale AI inference',
      'Ultra-low latency',
    ],
    useCases: ['Private AI Assistant', 'Knowledge Processing', 'Content Generation', 'Data Analysis'],
    price: 'Vanaf €1.499',
  },
  {
    name: 'AI Workstation Pro',
    tagline: 'Enterprise-grade lokale AI.',
    specs: [
      'NVIDIA RTX 4090',
      '128GB RAM',
      'NVMe SSD Storage',
      'Optimized for LLMs',
    ],
    useCases: ['Fine-tuning', 'Multi-model Hosting', 'Heavy Inference', 'Research & Development'],
    price: 'Vanaf €3.999',
  },
  {
    name: 'Edge AI Cluster',
    tagline: 'Schaalbare AI voor teams.',
    specs: [
      'Multi-node setup',
      'Load balancing',
      'High availability',
      'Private cloud AI',
    ],
    useCases: ['Team Collaboration', 'Departmental AI', 'Secure Operations', 'Custom Deployments'],
    price: 'Op maat',
  },
];

export default function AIComputers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="glass px-6 py-2 rounded-full text-sm font-medium text-ai-blue border border-ai-blue/30 inline-block mb-6">
            💻 AI Hardware
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">AI Computers voor</span>
            <br />
            <span className="gradient-text">Serieuze Bedrijven</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Lokale AI-hardware die privacy, snelheid en controle combineert. 
            Van compact tot enterprise-grade.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {computers.map((computer, index) => (
            <motion.div
              key={computer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-strong rounded-2xl p-8 h-full border-white/10 hover:border-ai-blue/50 transition-all duration-300">
                {/* Product Image Placeholder */}
                <div className="relative mb-6 h-48 bg-gradient-to-br from-ai-blue/20 to-ai-purple/20 rounded-xl overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-ai-blue/30 to-ai-purple/30 blur-2xl opacity-50"
                  />
                  <div className="relative h-full flex items-center justify-center">
                    <div className="glass w-32 h-32 rounded-xl glow-blue" />
                  </div>
                </div>

                {/* Product Info */}
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-glow transition-all">
                  {computer.name}
                </h3>
                <p className="text-ai-cyan mb-6">{computer.tagline}</p>

                {/* Specs */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white/70 mb-3">Specificaties</h4>
                  <ul className="space-y-2">
                    {computer.specs.map((spec) => (
                      <li key={spec} className="text-sm text-white/60 flex items-center gap-2">
                        <span className="w-1 h-1 bg-ai-blue rounded-full" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white/70 mb-3">Ideaal voor</h4>
                  <div className="flex flex-wrap gap-2">
                    {computer.useCases.map((useCase) => (
                      <span
                        key={useCase}
                        className="glass-subtle px-3 py-1 rounded-full text-xs text-white/80"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">{computer.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass px-6 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
                    >
                      Meer info
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
