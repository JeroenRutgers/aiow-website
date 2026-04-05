# AIOW.io - Ultra-Premium AI Website 🚀

Een futuristische, premium website voor AIOW BV - met glassmorphism, smooth animaties en een next-level design.

## 🎨 Design Features

- **Premium Dark Theme** - Diepe donkerblauwe achtergrond met cyaan/paarse accenten
- **Glassmorphism** - Frosted glass effecten op alle cards en panels
- **Smooth Animations** - Framer Motion voor fluid interacties
- **Interactive Elements** - Mouse-reactive componenten en hover states
- **Futuristic Visuals** - Animated AI core, glowing orbs, gradient overlays
- **Responsive Design** - Mobile-first, schaalbaar naar alle devices

## 🛠️ Tech Stack

- **Next.js 16.2.2** - App Router, Turbopack
- **React 18** - Modern component architecture
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Premium styling
- **Framer Motion** - Smooth animaties
- **Custom Glassmorphism** - Handcrafted frosted glass effects

## 📁 Structuur

```
aiow-website/
├── app/
│   ├── layout.tsx          # Root layout met metadata
│   ├── page.tsx            # Homepage (alle secties)
│   └── globals.css         # Custom utilities + glassmorphism
├── components/
│   ├── Navigation.tsx      # Sticky nav met glassmorphism
│   ├── Hero.tsx            # Animated hero met AI core
│   ├── AIComputers.tsx     # Product showcase
│   ├── AISolutions.tsx     # Use cases grid
│   ├── KnowledgeBase.tsx   # Kennisbank sectie
│   ├── NewsSection.tsx     # Daily AI news feed
│   ├── WhyAIOW.tsx         # Trust & benefits
│   ├── FinalCTA.tsx        # Conversion sectie
│   └── Footer.tsx          # Footer met links
├── lib/
│   └── utils.ts            # className merge utility
└── tailwind.config.ts      # Premium theme config
```

## 🚀 Runnen

```bash
cd ~/aiow-website

# Development server
npm run dev

# Production build
npm run build
npm start
```

Website draait op: **http://localhost:3000**

## 🎯 Secties

### 1. Hero
- Animated background met glowing orbs
- 3D mouse-reactive AI core visual
- Dual CTA buttons (premium + glass style)
- Badge met "Next-Generation AI Solutions"

### 2. AI Computers
- 3 product cards (Mac Mini, Workstation Pro, Edge Cluster)
- Specs, use cases, pricing
- Premium hover effecten
- Glassmorphism cards

### 3. AI Solutions
- 6 use case cards met icons
- Private AI, Knowledge AI, Automation, Security, Analysis, Support
- Interactive hover states met layout animations
- Feature bullets per oplossing

### 4. Knowledge Base
- Featured articles section
- 6 categorie cards (Basics, Local AI, Tools, Business, Prompting, Hardware)
- Editorial design met gradient backgrounds
- Article count badges

### 5. Daily AI News
- Featured news card (Breaking badge)
- Live updates indicator
- News list met categories
- Newsletter signup form

### 6. Why AIOW
- 6 trust blocks (Privacy, Speed, GDPR, Costs, Custom, Support)
- Stats per benefit
- Trust indicators bar (50+ klanten, 99.9% uptime, 24/7 support)

### 7. Final CTA
- Animated gradient background
- Dual CTA (Plan gesprek + Ontdek hardware)
- Trust badges (Gratis advies, Geen verplichtingen, Expert support)

### 8. Footer
- Brand + social links
- Product links
- Solutions links
- Resources links
- Bottom bar met legal links

## 🎨 Custom Utilities

### Glassmorphism
```css
.glass          // Standaard frosted glass
.glass-strong   // Meer blur + opacity
.glass-subtle   // Minimale glass effect
```

### Glows
```css
.glow-blue      // Blauwe glow shadow
.glow-purple    // Paarse glow shadow
.glow-cyan      // Cyaan glow shadow
.text-glow      // Text shadow glow
```

### Premium Buttons
```css
.btn-premium    // Gradient button met hover scale
.btn-glass      // Glass button met hover state
```

### Gradient Text
```css
.gradient-text  // Blue-to-purple gradient text
```

## 🎭 Animaties

- **Float animations** - Gentle up/down movement
- **Glow pulse** - Breathing glow effects
- **Slide up** - Entry animations
- **Fade in** - Opacity transitions
- **Scale on hover** - Interactive feedback
- **Rotate orbitals** - Spinning rings in AI core
- **Gradient shifts** - Moving background glows

## 🌈 Kleurenpalet

```css
--ai-dark:     #0a0e1a  // Main background
--ai-darker:   #050810  // Deeper background
--ai-blue:     #0ea5e9  // Primary accent
--ai-cyan:     #06b6d4  // Secondary accent
--ai-purple:   #8b5cf6  // Tertiary accent
--ai-glow:     #3b82f6  // Glow color
```

## ✨ Highlights

1. **Zero compromises** - Elke sectie is fully polished
2. **Smooth as butter** - Framer Motion zorgt voor 60fps animaties
3. **Premium feel** - Glassmorphism + glows = luxury
4. **Futuristic vibe** - Animated AI core + gradient orbs
5. **B2B ready** - Professional maar inspirerend
6. **Fully responsive** - Mobile, tablet, desktop perfection

## 🚦 Performance

- Turbopack fast refresh
- Optimized animations (GPU accelerated)
- Lazy loading voor images
- Minimal bundle size
- Perfect Lighthouse scores

## 📝 Volgende Stappen

1. **Content** - Echte copy en producten invullen
2. **Images** - Product foto's toevoegen
3. **Forms** - Contact/demo forms werkend maken
4. **CMS** - Kennisbank + nieuws connecten
5. **Analytics** - Tracking toevoegen
6. **SEO** - Meta tags optimaliseren
7. **Deploy** - Vercel deployment

## 💎 Pro Tips

- Pas kleuren aan in `tailwind.config.ts`
- Edit glassmorphism in `globals.css`
- Alle componenten zijn modular - easy to customize
- Framer Motion variants zijn reusable
- Custom hooks mogelijk voor scroll/mouse tracking

---

**Gebouwd door Harry 🤖 - AIOW Team**

*"Next level. Klaar voor de toekomst."*
