import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { TechStack } from './components/TechStack';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0D12] text-white selection:bg-[#FF1738] selection:text-white">
      {/* Cinematic Intro Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Floating Glassmorphic Navbar */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Page Layout */}
      <main className="relative z-10">
        <Hero
          onExploreWork={scrollToPortfolio}
          onContactClick={scrollToContact}
        />
        <About />
        <Services onContactClick={scrollToContact} />
        <Portfolio onContactClick={scrollToContact} />
        <TechStack />
        <Process />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavClick={handleNavClick} />
    </div>
  );
};

export default App;

