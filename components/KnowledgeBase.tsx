'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  {
    title: 'AI Basics',
    icon: '🎓',
    articles: 24,
    description: 'Fundamentals van AI, machine learning en LLMs',
    color: 'from-ai-blue/20 to-ai-cyan/20',
  },
  {
    title: 'Local AI',
    icon: '🏠',
    articles: 18,
    description: 'On-premise AI deployment, privacy en security',
    color: 'from-ai-purple/20 to-ai-blue/20',
  },
  {
    title: 'Tools & Frameworks',
    icon: '🛠️',
    articles: 32,
    description: 'Praktische tools, frameworks en implementaties',
    color: 'from-ai-cyan/20 to-ai-purple/20',
  },
  {
    title: 'Business Use Cases',
    icon: '💼',
    articles: 28,
    description: 'Concrete toepassingen en success stories',
    color: 'from-ai-blue/20 to-ai-purple/20',
  },
  {
    title: 'Prompting & Fine-tuning',
    icon: '✍️',
    articles: 21,
    description: 'Advanced technieken voor betere AI resultaten',
    color: 'from-ai-purple/20 to-ai-cyan/20',
  },
  {
    title: 'Hardware & Infrastructure',
    icon: '⚙️',
    articles: 16,
    description: 'Hardware specs, setup guides en optimalisatie',
    color: 'from-ai-cyan/20 to-ai-blue/20',
  },
];

const featuredArticles = [
  {
    title: 'Private AI implementeren in 2026: Complete gids',
    category: 'Local AI',
    readTime: '12 min',
    image: 'gradient-1',
  },
  {
    title: 'Mac Mini als AI Workstation: Performance review',
    category: 'Hardware',
    readTime: '8 min',
    image: 'gradient-2',
  },
  {
    title: 'GDPR-proof AI: Juridische aspecten van lokale AI',
    category: 'Business',
    readTime: '15 min',
    image: 'gradient-3',
  },
];

export default function KnowledgeBase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="knowledge" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="glass px-6 py-2 rounded-full text-sm font-medium text-ai-cyan border border-ai-cyan/30 inline-block mb-6">
            📚 Kennisbank
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Alles over AI,</span>
            <br />
            <span className="gradient-text">Op één plek</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Uitgebreide artikelen, guides en tutorials over lokale AI, 
            business implementaties en technische diepgang.
          </p>
        </motion.div>

        {/* Featured Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Featured</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.title}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="glass-strong rounded-2xl overflow-hidden border-white/10 hover:border-ai-cyan/50 transition-all duration-300">
                  {/* Image */}
                  <div className={`h-48 bg-gradient-to-br ${index === 0 ? 'from-ai-blue to-ai-purple' : index === 1 ? 'from-ai-cyan to-ai-blue' : 'from-ai-purple to-ai-cyan'} relative overflow-hidden`}>
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-ai-cyan">{article.category}</span>
                      <span className="text-xs text-white/40">•</span>
                      <span className="text-xs text-white/40">{article.readTime}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-ai-cyan transition-colors">
                      {article.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Categorieën</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="glass-strong rounded-2xl p-8 border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

                  {/* Icon & Count */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{category.icon}</span>
                    <span className="glass-subtle px-3 py-1 rounded-full text-sm font-medium text-white/70">
                      {category.articles} artikelen
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-xl font-bold mb-2 text-white group-hover:text-ai-cyan transition-colors">
                    {category.title}
                  </h4>
                  <p className="text-white/60 text-sm mb-4">
                    {category.description}
                  </p>

                  {/* CTA */}
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="text-sm font-medium text-ai-cyan flex items-center gap-2"
                  >
                    Verken categorie
                    <span>→</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium px-10 py-5"
          >
            Bekijk volledige kennisbank
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
