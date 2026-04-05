import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AIComputers from '@/components/AIComputers';
import AISolutions from '@/components/AISolutions';
import KnowledgeBase from '@/components/KnowledgeBase';
import NewsSection from '@/components/NewsSection';
import WhyAIOW from '@/components/WhyAIOW';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ai-dark">
      <Navigation />
      <Hero />
      <AIComputers />
      <AISolutions />
      <KnowledgeBase />
      <NewsSection />
      <WhyAIOW />
      <FinalCTA />
      <Footer />
    </main>
  );
}
