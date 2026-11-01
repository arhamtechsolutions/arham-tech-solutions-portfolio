import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { technologiesData } from '../data/technologies';
import { Technology } from '../types';
import { Sparkles, Layers, Cpu, Code2, Globe } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Mobile', 'Backend', 'Frontend', 'Database', 'Design & Tools'];

  const filteredTech =
    activeCategory === 'All'
      ? technologiesData
      : technologiesData.filter((t) => t.category === activeCategory);

  // High-fidelity custom SVG logos for recognizable tech icons
  const renderTechIcon = (name: string) => {
    switch (name) {
      case 'Flutter':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M14.314 0L2.3 12 6.8 16.5 21.6 1.714z" fill="#02569B" />
            <path d="M14.314 13.714L8.6 19.429 13.1 23.929l5.714-5.715 4.586-4.5z" fill="#0175C2" />
            <path d="M8.6 19.429L14.314 13.714 18.814 18.214z" fill="#29B6F6" />
          </svg>
        );
      case 'Dart':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h8l8 8-8 8H4L12 12z" fill="#0175C2" />
            <path d="M12 4l8 8-4 4-8-8z" fill="#00E5FF" />
          </svg>
        );
      case 'Laravel':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M3 7l8-4.5 8 4.5v10L11 21.5 3 17z" stroke="#FF2D20" strokeWidth="2" strokeLinejoin="round" />
            <path d="M3 7l8 4.5 8-4.5M11 11.5v10" stroke="#FF2D20" strokeWidth="2" />
            <circle cx="11" cy="11.5" r="2" fill="#FF2D20" />
          </svg>
        );
      case 'PHP':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="5" width="20" height="14" rx="4" stroke="#777BB4" strokeWidth="2" />
            <text x="5" y="15" fill="#777BB4" fontSize="9" fontWeight="bold" fontFamily="monospace">PHP</text>
          </svg>
        );
      case 'HTML5':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M4 2l1.6 18 6.4 2 6.4-2L20 2H4z" fill="#E34F26" />
            <path d="M12 3.8v16.4l5.2-1.6L18.4 3.8H12z" fill="#EF652A" />
            <path d="M7.5 7h9l-.4 4.5H9.5l.2 2.5h6.4l-.5 5-3.6 1.1-3.6-1.1-.3-3.2h2.2l.1 1.5 1.6.4 1.6-.4.2-2H7.2L6.8 7z" fill="#FFFFFF" />
          </svg>
        );
      case 'CSS3':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M4 2l1.6 18 6.4 2 6.4-2L20 2H4z" fill="#1572B6" />
            <path d="M12 3.8v16.4l5.2-1.6L18.4 3.8H12z" fill="#33A9DC" />
            <path d="M7.5 7h9l-.4 4.5H9.5l.2 2.5h6.4l-.5 5-3.6 1.1-3.6-1.1-.3-3.2h2.2l.1 1.5 1.6.4 1.6-.4.2-2H7.2L6.8 7z" fill="#FFFFFF" />
          </svg>
        );
      case 'JavaScript':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
            <text x="6" y="17" fill="#000000" fontSize="11" fontWeight="bold" fontFamily="sans-serif">JS</text>
          </svg>
        );
      case 'MySQL':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#00758F" strokeWidth="1.8" />
            <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#00758F" strokeWidth="1.8" />
            <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#F29111" strokeWidth="1.8" />
          </svg>
        );
      case 'Bootstrap':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" fill="#7952B3" />
            <text x="7" y="17" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">B</text>
          </svg>
        );
      case 'REST APIs':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <circle cx="6" cy="12" r="3" stroke="#00E5FF" strokeWidth="2" />
            <circle cx="18" cy="6" r="3" stroke="#FF1738" strokeWidth="2" />
            <circle cx="18" cy="18" r="3" stroke="#00E5FF" strokeWidth="2" />
            <path d="M9 12h6M15 12l-3-3M15 12l-3 3" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
        );
      case 'Git':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M21.6 10.9L13.1 2.4a1.8 1.8 0 00-2.5 0L8.2 4.8l3.2 3.2a2.1 2.1 0 012.7 2.7l3 3a2.1 2.1 0 11-1.3 1.3l-2.8-2.8v4.4a2.1 2.1 0 11-1.8 0V9.8a2.1 2.1 0 01-1.1-2.7L7 4.7 2.4 9.3a1.8 1.8 0 000 2.5l8.5 8.5a1.8 1.8 0 002.5 0l8.2-8.2a1.8 1.8 0 000-2.5z" fill="#F05032" />
          </svg>
        );
      case 'Figma':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <circle cx="15" cy="12" r="3" fill="#1ABCFE" />
            <path d="M12 3h3a3 3 0 013 3 3 3 0 01-3 3h-3z" fill="#FF7262" />
            <path d="M6 3h6v6H6a3 3 0 010-6z" fill="#F24E1E" />
            <path d="M6 9h6v6H6a3 3 0 010-6z" fill="#A259FF" />
            <path d="M6 15h6v3a3 3 0 01-3 3 3 3 0 01-3-3z" fill="#0ACF83" />
          </svg>
        );
      default:
        return <Code2 className="w-8 h-8 text-[#00E5FF]" />;
    }
  };

  return (
    <section id="technologies" className="relative py-28 bg-[#0B0D12] overflow-hidden">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 cyber-bg-lines opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#00E5FF]/5 via-transparent to-[#FF1738]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141822] border border-[#00E5FF]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="text-xs font-mono font-semibold tracking-widest text-white uppercase">
              POWERED BY MODERN TECHNOLOGIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            Battle-Tested Frameworks,{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#FF1738] bg-clip-text text-transparent">
              Engineered for Scale.
            </span>
          </h2>

          <p className="mt-4 text-base text-[#A1A1AA] max-w-2xl font-light">
            We reject fragile boilerplate in favor of proven, enterprise-tested stacks optimized for peak throughput, bulletproof security, and seamless maintainability.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#FF1738] text-white font-bold shadow-[0_0_15px_rgba(255,23,56,0.5)]'
                    : 'bg-[#141822] text-[#A1A1AA] hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="interactive-card group relative p-6 rounded-2xl bg-[#0E1117] border border-white/10 hover:border-[#00E5FF]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
            >
              {/* Subtle top glow bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: tech.color || '#00E5FF' }}
              />

              <div>
                {/* Tech Icon and Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#141822] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {renderTechIcon(tech.name)}
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-[#A1A1AA] border border-white/5">
                    {tech.category}
                  </span>
                </div>

                {/* Tech Name */}
                <h3 className="text-lg font-display font-bold text-white mb-1.5 group-hover:text-[#00E5FF] transition-colors">
                  {tech.name}
                </h3>

                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                  {tech.description}
                </p>
              </div>

              {/* Proficiency Level Bar */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                  <span className="text-[#A1A1AA]">Mastery</span>
                  <span className="text-white font-bold">{tech.level}%</span>
                </div>
                <div className="w-full bg-[#141822] h-1.5 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[#00E5FF] to-[#FF1738] rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

