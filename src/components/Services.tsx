import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { Service } from '../types';
import { ServiceModal } from './ServiceModal';
import {
  Smartphone,
  Globe,
  Palette,
  Database,
  Search,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface ServicesProps {
  onContactClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Icon mapping
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-7 h-7' };
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'Globe':
        return <Globe {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Search':
        return <Search {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#0B0D12] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 cyber-bg-lines opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF1738]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141822] border border-[#00E5FF]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
            <span className="text-xs font-mono font-semibold tracking-widest text-white uppercase">
              WHAT WE DO
            </span>
          </div>

          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                Engineering World-Class{' '}
                <span className="bg-gradient-to-r from-[#FF1738] to-[#00E5FF] bg-clip-text text-transparent">
                  Digital Solutions.
                </span>
              </h2>
              <p className="mt-3 text-base text-[#A1A1AA] max-w-2xl font-light">
                Six dedicated pillars of technical excellence tailored for ambitious startups and global enterprises.
              </p>
            </div>

            <div className="shrink-0">
              <span className="font-mono text-xs text-[#A1A1AA] bg-[#141822] px-4 py-2 rounded-xl border border-white/5">
                06 Full-Stack Capabilities
              </span>
            </div>
          </div>
        </div>

        {/* 6 Premium Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const isBlue = service.accentColor === 'blue';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="interactive-card group relative rounded-3xl p-7 bg-[#0E1117] border border-white/10 hover:border-[#FF1738] transition-all duration-500 shadow-xl flex flex-col justify-between overflow-hidden"
                style={{
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                }}
              >
                {/* Glowing Hover Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF1738]/5 via-transparent to-[#00E5FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Glowing border effect */}
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#FF1738] via-transparent to-[#00E5FF] opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Card Header: Number & Animated Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-white/20 group-hover:text-white/60 transition-colors duration-300">
                      {service.number}
                    </span>

                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isBlue
                          ? 'bg-[#00E5FF]/10 text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(0,229,255,0.6)]'
                          : 'bg-[#FF1738]/10 text-[#FF1738] group-hover:bg-[#FF1738] group-hover:text-white group-hover:shadow-[0_0_25px_rgba(255,23,56,0.6)]'
                      }`}
                    >
                      {renderIcon(service.icon)}
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00E5FF]">
                      {service.category}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-[#D4D4D8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF1738] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Action Button */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-white group-hover:text-[#00E5FF] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <span className="text-[10px] font-mono text-[#A1A1AA]">
                    {service.deliverableTimeline}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onContactClick={onContactClick}
      />
    </section>
  );
};

