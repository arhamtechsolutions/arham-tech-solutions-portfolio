import React from 'react';
import { ArrowUp, Sparkles, Mail, MessageCircle } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, FacebookIcon, GithubIcon } from './SocialIcons';
import logoImg from '../assets/logo.jpg';

interface FooterProps {
  onNavClick: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070B] border-t border-white/10 pt-20 pb-12 overflow-hidden text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-bg-lines opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">

          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#00E5FF]/40 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                <img
                  src={logoImg}
                  alt="Arham Tech Solutions Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-black text-lg tracking-wider text-white block">
                  ARHAM TECH SOLUTIONS
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#00E5FF] uppercase block">
                  Ideas • Technology • Growth
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-sm mb-6">
              An elite software development and design agency committed to delivering high-performance cross-platform applications, bespoke web architectures, and award-winning digital experiences worldwide.
            </p>

            <div className="text-xs font-mono font-bold text-white uppercase tracking-widest text-[#FF1738] mb-6">
              "YOUR VISION. OUR EXPERTISE."
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/arhamtech.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141822] hover:bg-[#FF1738] border border-white/10 hover:border-[#FF1738] flex items-center justify-center text-[#A1A1AA] hover:text-white transition-all shadow-md"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141822] hover:bg-[#00E5FF] hover:text-black border border-white/10 hover:border-[#00E5FF] flex items-center justify-center text-[#A1A1AA] transition-all shadow-md"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141822] hover:bg-[#1877F2] border border-white/10 hover:border-[#1877F2] flex items-center justify-center text-[#A1A1AA] hover:text-white transition-all shadow-md"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/arhamtechsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141822] hover:bg-white hover:text-black border border-white/10 hover:border-white flex items-center justify-center text-[#A1A1AA] transition-all shadow-md"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00E5FF] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A1A1AA]">
              {['Home', 'About', 'Services', 'Portfolio', 'Technologies', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(`#${item.toLowerCase()}`);
                    }}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF1738] mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A1A1AA]">
              <li>Flutter App Development (iOS & Android)</li>
              <li>Laravel & Core PHP Web Applications</li>
              <li>UI/UX Design & Design Systems (Figma)</li>
              <li>MySQL & Relational Database Solutions</li>
              <li>Technical SEO & Performance Optimization</li>
              <li>Targeted Social Media Ads Management</li>
            </ul>
          </div>

          {/* Direct Contact (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-[#A1A1AA]">
              <div>
                <span className="block font-mono text-white text-[11px]">Email</span>
                <a href="mailto:arhamtech052@gmail.com" className="hover:text-[#00E5FF] transition-colors">
                  arhamtech052@gmail.com
                </a>
              </div>
              <div>
                <span className="block font-mono text-white text-[11px]">WhatsApp</span>
                <a href="https://wa.me/601111375876" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  +60 111-137-5876
                </a>
              </div>
              <div>
                <span className="block font-mono text-white text-[11px]">Instagram</span>
                <a href="https://instagram.com/arhamtech.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF1738] transition-colors">
                  @arhamtech.dev
                </a>
              </div>
              <div>
                <span className="block font-mono text-white text-[11px]">Availability</span>
                <span className="text-emerald-400 font-mono">Available Now</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA] font-mono">
          <div>
            © {new Date().getFullYear()} ARHAM TECH SOLUTIONS. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 hover:text-white transition-colors group"
            >
              <span>Back to Top</span>
              <div className="w-7 h-7 rounded-lg bg-[#141822] flex items-center justify-center border border-white/10 group-hover:border-[#00E5FF]">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
