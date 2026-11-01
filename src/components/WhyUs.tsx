import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUsData } from '../data/whyUs';
import {
  Cpu,
  FileCode,
  Users,
  MonitorSmartphone,
  Zap,
  ShieldCheck,
  MessageSquare,
  Headphones,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Cpu':
        return <Cpu {...props} />;
      case 'FileCode':
        return <FileCode {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'MonitorSmartphone':
        return <MonitorSmartphone {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'MessageSquare':
        return <MessageSquare {...props} />;
      case 'Headphones':
        return <Headphones {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="why-us" className="relative py-28 bg-[#0B0D12] overflow-hidden">
      {/* Background Cyber Glow */}
      <div className="absolute inset-0 cyber-bg-lines opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF1738]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141822] border border-[#00E5FF]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
            <span className="text-xs font-mono font-semibold tracking-widest text-white uppercase">
              WHY PARTNER WITH US
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            TECHNOLOGY WITH PURPOSE.{' '}
            <span className="bg-gradient-to-r from-[#FF1738] to-[#00E5FF] bg-clip-text text-transparent">
              RESULTS WITH IMPACT.
            </span>
          </h2>

          <p className="mt-4 text-base text-[#A1A1AA] max-w-2xl font-light">
            We don't just ship code; we deliver durable competitive advantages through robust engineering, world-class user experiences, and steadfast accountability.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="interactive-card group relative p-6 rounded-2xl bg-[#0E1117] border border-white/10 hover:border-[#FF1738]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
            >
              <div className="relative z-10">
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#141822] text-[#00E5FF] group-hover:text-[#FF1738] group-hover:bg-[#FF1738]/10 transition-colors flex items-center justify-center border border-white/5">
                    {renderIcon(feature.icon)}
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-emerald-400 border border-white/5">
                    {feature.stats}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-white mb-1 group-hover:text-white">
                  {feature.title}
                </h3>

                <p className="text-[11px] font-mono text-[#00E5FF] mb-2 uppercase tracking-wide">
                  {feature.tagline}
                </p>

                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="relative z-10 pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#A1A1AA]">
                <span>Standard</span>
                <span className="text-emerald-400 font-bold">100% Guaranteed</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

