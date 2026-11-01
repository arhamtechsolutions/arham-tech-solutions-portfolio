import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '../types';
import { X, CheckCircle2, Clock, Sparkles, ArrowRight, Layers } from 'lucide-react';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onContactClick }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#0B0D12] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Glowing Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF1738]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm font-bold text-[#FF1738] bg-[#FF1738]/10 px-3 py-1 rounded-full border border-[#FF1738]/30">
              {service.number}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">
              {service.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
            {service.title}
          </h3>

          <p className="text-sm font-medium text-emerald-400 mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 shrink-0" />
            {service.tagline}
          </p>

          <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
            {service.fullDescription}
          </p>

          {/* Features Included */}
          <div className="mb-6">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00E5FF]" />
              Core Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-2 text-xs text-white bg-[#141822] px-3 py-2 rounded-xl border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FF1738] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Timeline */}
          <div className="mb-6 p-4 rounded-2xl bg-[#141822]/60 border border-white/10">
            <div className="flex items-center justify-between mb-3 text-xs font-mono">
              <span className="text-[#A1A1AA]">Standard Timeline:</span>
              <span className="text-white font-bold flex items-center gap-1.5 text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                {service.deliverableTimeline}
              </span>
            </div>
            <div className="space-y-1.5">
              {service.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                  <span className="text-[#00E5FF] font-mono mt-0.5">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#A1A1AA] mb-2.5">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-white hover:bg-white/5 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#0066FF] text-black font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all"
            >
              <span>Inquire For This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

