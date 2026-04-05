'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const newsItems = [
  {
    title: 'OpenAI lanceert GPT-5: 10x sneller, 100% lokaal',
    source: 'TechCrunch',
    time: '2 uur geleden',
    category: 'Breaking',
    featured: true,
  },
  {
    title: 'Microsoft kondigt Azure Local AI Stack aan',
    source: 'The Verge',
    time: '5 uur geleden',
    category: 'Enterprise',
    featured: false,
  },
  {
    title: 'Nieuwe benchmark: Mac Mini M2 verslaat RTX 4090',
    source: 'ArsTechnica',
    time: '8 uur geleden',
    category: 'Hardware',
    featured: false,
  },
  {
    title: 'GDPR update: Strengere regels voor cloud AI',
    source: 'EU Commission',
    time: '12 uur geleden',
    category: 'Regulation',
    featured: false,
  },
  {
    title: 'Anthropic Claude 4: Focus op privacy en local deployment',
    source: 'VentureBeat',
    time: '1 dag geleden',
    category: 'Product',
    featured: false,
  },
  {
    title: 'Fortune 500 bedrijven migreren naar on-premise AI',
    source: 'Bloomberg',
    time: '1 dag geleden',
    category: 'Business',
    featured: false,
  },
];

export default function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="relative py-32 px-6" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-ai-purple/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="glass px-6 py-2 rounded-full text-sm font-medium text-ai-blue border border-ai-blue/30 inline-block mb-6">
              📰 AI Nieuws
            </span>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="text-white">Blijf</span>{' '}
              <span className="gradient-text">Up-to-date</span>
            </h2>
          </div>

          {/* Live indicator */}
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden md:flex items-center gap-3 glass px-6 py-3 rounded-full"
          >
            <span className="w-2 h-2 bg-ai-cyan rounded-full glow-cyan" />
            <span className="text-sm font-medium text-white">Live updates</span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-strong rounded-2xl overflow-hidden border-white/10 hover:border-ai-cyan/50 transition-all duration-300 h-full cursor-pointer group"
            >
              {/* Featured Image */}
              <div className="relative h-80 bg-gradient-to-br from-ai-blue via-ai-purple to-ai-cyan overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                />

                {/* Breaking badge */}
                <div className="absolute top-6 left-6">
                  <motion.span
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="glass-strong px-4 py-2 rounded-full text-sm font-bold text-ai-cyan border border-ai-cyan/50 glow-cyan"
                  >
                    🔥 BREAKING
                  </motion.span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-ai-cyan">{newsItems[0].source}</span>
                  <span className="text-sm text-white/40">•</span>
                  <span className="text-sm text-white/40">{newsItems[0].time}</span>
                </div>

                <h3 className="text-3xl font-bold text-white group-hover:text-ai-cyan transition-colors mb-4">
                  {newsItems[0].title}
                </h3>

                <p className="text-white/60 mb-6">
                  Een revolutionaire doorbraak in AI technologie die de industrie 
                  opnieuw definieert. Lokale deployment wordt eindelijk mainstream.
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-sm font-medium text-ai-cyan flex items-center gap-2"
                >
                  Lees volledig artikel
                  <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* News List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {newsItems.slice(1).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ x: -5 }}
                className="glass-strong rounded-xl p-6 border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="glass-subtle px-3 py-1 rounded-full text-xs font-medium text-ai-cyan">
                    {item.category}
                  </span>
                  <span className="text-xs text-white/40 mt-1">{item.time}</span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-ai-cyan transition-colors mb-2">
                  {item.title}
                </h4>

                <span className="text-sm text-white/50">{item.source}</span>
              </motion.div>
            ))}

            {/* View All */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full glass-strong rounded-xl p-6 border-white/10 hover:border-ai-blue/50 transition-all duration-300 font-medium text-white"
            >
              Bekijk alle nieuws →
            </motion.button>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-strong rounded-2xl p-12 text-center border-white/10"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            Mis geen enkel AI update
          </h3>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Ontvang dagelijkse samenvattingen van de belangrijkste AI ontwikkelingen 
            direct in je inbox. Gefilterd, relevant en actionable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="jouw@email.com"
              className="w-full glass-strong px-6 py-4 rounded-xl border border-white/10 focus:border-ai-cyan/50 bg-transparent text-white placeholder:text-white/40 outline-none transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium whitespace-nowrap"
            >
              Schrijf me in
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
