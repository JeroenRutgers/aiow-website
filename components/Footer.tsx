'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold mb-4"
            >
              <span className="gradient-text">AIOW</span>
              <span className="text-white/60">.io</span>
            </motion.div>
            <p className="text-white/60 mb-6 max-w-sm">
              Private AI oplossingen en krachtige AI computers voor bedrijven 
              die voorop willen lopen.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <span className="text-lg">𝕏</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <span className="text-lg">in</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <span className="text-lg">gh</span>
              </motion.a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-4">Producten</h4>
            <ul className="space-y-3">
              <li>
                <FooterLink href="#products">Mac Mini AI Station</FooterLink>
              </li>
              <li>
                <FooterLink href="#products">AI Workstation Pro</FooterLink>
              </li>
              <li>
                <FooterLink href="#products">Edge AI Cluster</FooterLink>
              </li>
              <li>
                <FooterLink href="#products">Custom Hardware</FooterLink>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-white mb-4">Oplossingen</h4>
            <ul className="space-y-3">
              <li>
                <FooterLink href="#solutions">Private AI Assistant</FooterLink>
              </li>
              <li>
                <FooterLink href="#solutions">Knowledge AI</FooterLink>
              </li>
              <li>
                <FooterLink href="#solutions">Workflow Automation</FooterLink>
              </li>
              <li>
                <FooterLink href="#solutions">Data Analysis</FooterLink>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <FooterLink href="#knowledge">Kennisbank</FooterLink>
              </li>
              <li>
                <FooterLink href="#news">AI Nieuws</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Documentatie</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Contact</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 AIOW BV. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Cookie Policy</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      whileHover={{ x: 3 }}
      href={href}
      className="text-white/60 hover:text-white transition-colors inline-block"
    >
      {children}
    </motion.a>
  );
}
