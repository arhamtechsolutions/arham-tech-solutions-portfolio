import React from 'react';
import { motion } from 'framer-motion';
import { HeroCanvas } from './HeroCanvas';
import { ArrowDown, Code2, Sparkles, Terminal, Layers, CheckCircle2, MoveRight } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B0D12]"
    >
      {/* 3D WebGL Background Canvas */}
      <HeroCanvas />

      {/* Cyber Background Grid and Vignette */}
      <div className="absolute inset-0 cyber-bg-lines opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0D12]/60 to-[#0B0D12] pointer-events-none" />

      {/* Atmospheric Glow Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-[#FF1738]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] rounded-full bg-[#00E5FF]/15 blur-[160px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#141822]/80 border border-emerald-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-emerald-300">
                Available for New Projects
              </span>
              <span className="text-xs text-[#A1A1AA] font-mono">| Q1 2026</span>
            </motion.div>

            {/* Main Heading with Cinematic Animated Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-white leading-[1.08] mb-6"
            >
              WE BUILD DIGITAL{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#00E5FF] via-[#38bdf8] to-[#FF1738] bg-clip-text text-transparent">
                  EXPERIENCES
                </span>
              </span>{' '}
              THAT DRIVE GROWTH.
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl font-light leading-relaxed mb-8"
            >
              We transform ambitious ideas into powerful websites, mobile applications, and intelligent digital solutions through innovative technology and modern design.
            </motion.p>

            {/* Call to Actions (Primary: Electric Blue, Secondary: White) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              {/* Primary CTA: Electric Blue */}
              <button
                onClick={onContactClick}
                className="relative group overflow-hidden px-8 py-4 rounded-xl font-semibold text-sm tracking-wider uppercase text-black bg-gradient-to-r from-[#00E5FF] to-[#0066FF] shadow-[0_0_30px_rgba(0,229,255,0.45)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] transition-all duration-300 w-full sm:w-auto text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Start Your Project
                  <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              {/* Secondary CTA: White */}
              <button
                onClick={onExploreWork}
                className="relative group px-8 py-4 rounded-xl font-semibold text-sm tracking-wider uppercase text-white bg-white/5 border border-white/20 hover:border-white hover:bg-white hover:text-black shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300 w-full sm:w-auto text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Selected Work
                </span>
              </button>
            </motion.div>

            {/* Quick Metrics Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 w-full text-xs font-mono text-[#A1A1AA]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                <span>Flutter & Mobile Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF1738]" />
                <span>Laravel & Cloud Backends</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Award-Worthy UI/UX</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code Snippet & Floating Glass Mockup */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Interactive Code Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="w-full max-w-lg glass-panel bg-[#0B0D12]/90 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden relative group hover:border-[#00E5FF]/50 transition-all duration-500"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#141822]/90 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF1738]/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#A1A1AA]">
                  <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>ArhamEngine.dart</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  LIVE
                </span>
              </div>

              {/* Code Snippet Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-[#A1A1AA]">
                <div className="text-purple-400 font-semibold">// ARHAM TECH SOLUTIONS CORE ENGINE</div>
                <div>
                  <span className="text-[#FF1738]">final</span>{' '}
                  <span className="text-[#00E5FF]">agency</span> ={' '}
                  <span className="text-yellow-300">ArhamTechEngine</span>(
                </div>
                <div className="pl-4">
                  <span className="text-white">vision:</span>{' '}
                  <span className="text-emerald-300">'High-Growth Digital Products'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-white">technologies:</span> [
                  <span className="text-sky-300">'Flutter'</span>,{' '}
                  <span className="text-red-400">'Laravel'</span>,{' '}
                  <span className="text-yellow-300">'MySQL'</span>,{' '}
                  <span className="text-pink-400">'Figma'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-white">performance:</span>{' '}
                  <span className="text-orange-400">120_FPS_ULTRA</span>,
                </div>
                <div className="pl-4">
                  <span className="text-white">securityGrade:</span>{' '}
                  <span className="text-emerald-400">'Bank-Grade / OWASP'</span>,
                </div>
                <div>);</div>
                <div className="mt-2 text-white">
                  <span className="text-[#FF1738]">await</span> agency.
                  <span className="text-[#00E5FF]">bringVisionToReality</span>(
                  <span className="text-white">growthTarget: </span>
                  <span className="text-emerald-300">'10x'</span>
                  );
                </div>
              </div>

              {/* Interactive Status Footer */}
              <div className="px-5 py-2.5 bg-[#141822]/50 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Build Status: 100% Operational</span>
                </div>
                <span className="text-[#A1A1AA]">Latency: 14ms</span>
              </div>
            </motion.div>

            {/* Floating Floating Device / Tech Card Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-panel bg-[#0B0D12]/95 border border-[#FF1738]/40 shadow-[0_10px_30px_rgba(255,23,56,0.25)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FF1738]/20 flex items-center justify-center text-[#FF1738]">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">Production Ready</p>
                <p className="text-[10px] text-[#A1A1AA] font-mono">Zero Technical Debt</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-6 -right-4 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-panel bg-[#0B0D12]/95 border border-[#00E5FF]/40 shadow-[0_10px_30px_rgba(0,229,255,0.25)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF]">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">Cross-Platform</p>
                <p className="text-[10px] text-[#A1A1AA] font-mono">iOS • Android • Web</p>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-col items-center justify-center gap-2"
        >
          <span className="text-[11px] font-mono tracking-widest text-[#A1A1AA] uppercase">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-12 rounded-full border border-white/20 flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

