import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { X, ExternalLink, ArrowRight, CheckCircle2, Layers, Cpu, TrendingUp } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#0B0D12] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Large Hero Image */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FF1738] text-white">
                {project.category}
              </span>
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl sm:text-3xl font-display font-black text-white mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-3.5 rounded-2xl bg-[#141822] border border-white/5 text-center"
              >
                <div className="text-lg sm:text-xl font-display font-black text-[#00E5FF]">
                  {metric.value}
                </div>
                <div className="text-[10px] font-mono text-[#A1A1AA] uppercase mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Challenge & Engineered Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-[#0E1117] border border-red-500/20">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF1738] mb-2 flex items-center gap-1.5 font-bold">
                <Cpu className="w-4 h-4" />
                The Technical Challenge
              </h4>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0E1117] border border-cyan-500/20">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] mb-2 flex items-center gap-1.5 font-bold">
                <TrendingUp className="w-4 h-4" />
                The Engineered Solution
              </h4>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mb-8">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white mb-2.5">
              Technology Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-[#141822] border border-white/10 text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="text-xs text-[#A1A1AA] font-mono">
              Ready to engineer a similar solution?
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-white/20 hover:border-white text-xs font-mono text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Preview Architecture</span>
                </a>
              )}
              <button
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#0066FF] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

