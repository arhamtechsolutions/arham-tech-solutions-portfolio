import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, BookOpen, Sparkles, ArrowRight, Eye } from 'lucide-react';

interface PortfolioProps {
  onContactClick: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onContactClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Mobile Applications',
    'Websites',
    'Ecommerce',
    'Web Applications',
    'UI/UX Design',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-28 bg-[#05070B] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-bg-lines opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF1738]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141822] border border-[#FF1738]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1738]" />
            <span className="text-xs font-mono font-semibold tracking-widest text-white uppercase">
              SELECTED WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            OUR WORK SPEAKS{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#FF1738] bg-clip-text text-transparent">
              FOR ITSELF.
            </span>
          </h2>

          <p className="mt-3 text-base text-[#A1A1AA] max-w-2xl font-light">
            Explore our curated showcase of cross-platform mobile apps, enterprise cloud software, high-conversion e-commerce engines, and modern UI/UX systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-mono tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'text-black font-bold bg-gradient-to-r from-[#00E5FF] to-[#0066FF] shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                    : 'text-[#A1A1AA] hover:text-white bg-[#141822] border border-white/5 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="interactive-card group relative rounded-3xl bg-[#0E1117] border border-white/10 hover:border-[#00E5FF]/60 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Card Image with Zoom effect */}
                  <div className="relative w-full h-56 overflow-hidden bg-[#141822]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-transparent to-transparent opacity-90" />

                    {/* Category Tag Overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-[#05070B]/80 text-[#00E5FF] border border-[#00E5FF]/30 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Interactive quick overlay button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black border border-white/30 text-xs font-mono flex items-center gap-2 backdrop-blur-md transition-all shadow-xl"
                      >
                        <Eye className="w-4 h-4" />
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-[#141822] text-[#A1A1AA] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#141822] text-[#A1A1AA]">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions: Live Preview & Case Study buttons */}
                <div className="p-6 pt-0 border-t border-white/5 mt-auto flex items-center justify-between gap-3 pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>Case Study</span>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-[#141822] hover:bg-[#FF1738] text-white hover:text-white border border-white/10 hover:border-[#FF1738] text-xs font-mono flex items-center justify-center gap-1.5 transition-all"
                      title="Live Preview"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-panel bg-[#0E1117] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-xl font-display font-bold text-white mb-1">
              Have a tailored software project in mind?
            </h4>
            <p className="text-xs text-[#A1A1AA]">
              We customize architecture, timelines, and milestones to fit your precise business roadmap.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF1738] to-[#FF5722] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[0_0_25px_rgba(255,23,56,0.4)] hover:shadow-[0_0_35px_rgba(255,23,56,0.6)] flex items-center gap-2 shrink-0 transition-all"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={onContactClick}
      />
    </section>
  );
};

