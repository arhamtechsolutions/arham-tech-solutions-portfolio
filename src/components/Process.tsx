import React from 'react';
import { motion } from 'framer-motion';
import { processStages } from '../data/process';
import { CheckCircle2, Clock, Sparkles, Search, Compass, Layers, Code, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const renderStageIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Search':
        return <Search {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Code':
        return <Code {...props} />;
      case 'Rocket':
        return <Rocket {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="process" className="relative py-28 bg-[#05070B] overflow-hidden">
      {/* Background Cyber Accents */}
      <div className="absolute inset-0 cyber-bg-lines opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF1738]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00E5FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141822] border border-[#FF1738]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1738]" />
            <span className="text-xs font-mono font-semibold tracking-widest text-white uppercase">
              HOW WE BRING IDEAS TO LIFE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            A Disciplined Five-Stage{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#FF1738] bg-clip-text text-transparent">
              Engineering Lifecycle.
            </span>
          </h2>

          <p className="mt-4 text-base text-[#A1A1AA] max-w-2xl font-light">
            From initial requirement mapping to post-deployment scaling, our agile process ensures total transparency, precision milestones, and zero surprises.
          </p>
        </div>

        {/* Connected Timeline Architecture */}
        <div className="relative">
          {/* Vertical connecting line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#00E5FF] via-[#FF1738] to-[#00E5FF] opacity-30" />

          <div className="space-y-12 lg:space-y-16">
            {processStages.map((stage, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={stage.number}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Left / Right Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="interactive-card p-8 rounded-3xl bg-[#0E1117] border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300 shadow-xl group">
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-display font-black text-[#FF1738]">
                          {stage.number}
                        </span>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-emerald-400">
                          <Clock className="w-3.5 h-3.5" />
                          {stage.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-display font-bold text-white mb-1">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-mono text-[#00E5FF] mb-3 uppercase tracking-wider">
                        {stage.subtitle}
                      </p>

                      <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
                        {stage.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="pt-4 border-t border-white/5 space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#A1A1AA] block mb-2">
                          Stage Deliverables:
                        </span>
                        {stage.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                  {/* Center Node Badge */}
                  <div className="relative z-10 shrink-0 w-14 h-14 rounded-2xl bg-[#0B0D12] border-2 border-[#00E5FF] text-[#00E5FF] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                    {renderStageIcon(stage.icon)}
                  </div>

                  {/* Empty Spacer Column on Desktop */}
                  <div className="hidden lg:block w-1/2" />

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

