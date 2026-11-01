import React from 'react';
import { motion } from 'framer-motion';
import { verifiedStats } from '../data/stats';
import { Shield, Target, Compass, Sparkles, CheckCircle, Award, Terminal } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#05070B] overflow-hidden">
      {/* Background Cybernetic Accents */}
      <div className="absolute inset-0 cyber-bg-lines opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#FF1738]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#00E5FF]/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141822] border border-[#FF1738]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1738]" />
            <span className="text-xs font-mono font-semibold tracking-widest text-white uppercase">
              BEHIND THE TECHNOLOGY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            We Turn Ideas Into{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#FF1738] bg-clip-text text-transparent">
              Digital Reality.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] max-w-3xl font-light leading-relaxed">
            ARHAM TECH SOLUTIONS is a technology-focused development brand dedicated to creating powerful digital experiences. We combine innovative development, creative design, and modern technologies to deliver scalable solutions for businesses worldwide.
          </p>
        </div>

        {/* Brand Spotlight Grid: Creative Illustration / Animated Logo + Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Left: Holographic Logo & Brand Tech Showcase */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative flex-1 rounded-3xl glass-panel bg-[#0B0D12]/90 border border-white/10 p-8 flex flex-col items-center justify-center text-center overflow-hidden group shadow-2xl"
            >
              {/* Animated Corner Brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#00E5FF]/60" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#FF1738]/60" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#FF1738]/60" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#00E5FF]/60" />

              {/* Glowing Background Radial */}
              <div className="absolute w-60 h-60 rounded-full bg-gradient-to-r from-[#00E5FF]/20 to-[#FF1738]/20 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              {/* High-Resolution Brand Logo */}
              <div className="relative w-44 h-44 mb-6 rounded-2xl overflow-hidden border-2 border-white/20 shadow-[0_0_35px_rgba(0,229,255,0.3)] transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105">
                <img
                  src={logoImg}
                  alt="Arham Tech Solutions Identity"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <h3 className="text-xl font-display font-extrabold text-white tracking-wide mb-1">
                ARHAM TECH SOLUTIONS
              </h3>
              <p className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase mb-4">
                Your Vision. Our Expertise.
              </p>
              <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-xs">
                Ideas • Technology • Growth. Crafting bespoke software that scales with market leaders.
              </p>

              {/* Verification Badge */}
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141822] border border-white/10 text-[11px] font-mono text-white">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Verified Engineering Studio</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Mission, Vision & Professional Working Approach */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Mission & Vision Dual Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Mission */}
              <div className="rounded-2xl glass-panel bg-[#0E1117] border border-white/10 p-6 relative overflow-hidden group hover:border-[#00E5FF]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center mb-4 border border-[#00E5FF]/20">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  Our Mission
                </h4>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  To empower startups, enterprises, and ambitious founders by translating visionary concepts into resilient, scalable, and revenue-driving digital ecosystems.
                </p>
              </div>

              {/* Vision */}
              <div className="rounded-2xl glass-panel bg-[#0E1117] border border-white/10 p-6 relative overflow-hidden group hover:border-[#FF1738]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#FF1738]/10 text-[#FF1738] flex items-center justify-center mb-4 border border-[#FF1738]/20">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  Our Vision
                </h4>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  To be globally recognized as the gold standard in premium software engineering, setting the benchmark for performance, aesthetic refinement, and technological trust.
                </p>
              </div>

            </div>

            {/* Professional Working Approach */}
            <div className="rounded-2xl glass-panel bg-[#0E1117] border border-white/10 p-6 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Our Engineering Approach</h4>
                  <p className="text-xs font-mono text-[#A1A1AA]">Precision-Driven • Collaborative • Zero Compromise</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#D4D4D8]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Modular, testable codebases built on SOLID and Clean Architecture principles.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Pixel-perfect responsive implementation matched to approved Figma specs.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Security audits, OWASP vulnerability screening, and encrypted credentials.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Transparent sprint retrospectives and rapid milestone communication.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Animated Verified Statistics Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verifiedStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="rounded-2xl glass-panel bg-[#0E1117]/80 border border-white/10 p-6 relative overflow-hidden group hover:border-[#00E5FF]/40 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl pointer-events-none" />

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight group-hover:text-[#00E5FF] transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-2xl font-display font-black text-[#FF1738]">
                  {stat.suffix}
                </span>
              </div>

              <h4 className="text-sm font-bold text-white mb-1.5">{stat.label}</h4>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

