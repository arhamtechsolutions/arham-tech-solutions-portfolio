import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { initialTestimonials } from '../data/testimonials';
import { Testimonial } from '../types';
import { Star, Quote, Plus, X, Check, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('arham_testimonials');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialTestimonials;
      }
    }
    return initialTestimonials;
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newFeedback, setNewFeedback] = useState({
    name: '',
    company: '',
    role: '',
    rating: 5,
    feedback: '',
    projectType: 'Mobile App Development',
    country: 'Global'
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeedback.name || !newFeedback.feedback) return;

    const newEntry: Testimonial = {
      id: `test-${Date.now()}`,
      name: newFeedback.name,
      company: newFeedback.company || 'Enterprise Client',
      role: newFeedback.role || 'Partner',
      rating: newFeedback.rating,
      feedback: newFeedback.feedback,
      projectType: newFeedback.projectType,
      country: newFeedback.country,
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    };

    const updated = [newEntry, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem('arham_testimonials', JSON.stringify(updated));
    setIsAddModalOpen(false);
    setNewFeedback({
      name: '',
      company: '',
      role: '',
      rating: 5,
      feedback: '',
      projectType: 'Mobile App Development',
      country: 'Global'
    });
  };

  return (
    <section id="testimonials" className="relative py-28 bg-[#05070B] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-bg-lines opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141822] border border-[#FF1738]/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1738]" />
              <span className="text-xs font-mono font-semibold tracking-widest text-white uppercase">
                CLIENT TRUST & ENDORSEMENTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              PROVEN TRACK RECORD.{' '}
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#FF1738] bg-clip-text text-transparent">
                AUTHENTIC VOICES.
              </span>
            </h2>

            <p className="mt-3 text-base text-[#A1A1AA] max-w-2xl font-light">
              Read direct feedback from founders, product directors, and executive stakeholders who entrusted their core technology to ARHAM TECH SOLUTIONS.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141822] hover:bg-[#1f2433] border border-white/10 hover:border-[#00E5FF]/40 text-xs font-mono text-white transition-all shadow-lg"
            >
              <Plus className="w-4 h-4 text-[#00E5FF]" />
              <span>Submit Client Feedback</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="interactive-card p-8 rounded-3xl bg-[#0E1117] border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative group"
            >
              <div className="relative z-10">
                {/* Rating & Project Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#141822] text-[#00E5FF] border border-white/5">
                    {item.projectType}
                  </span>
                </div>

                {/* Feedback Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-white/10 absolute -top-4 -left-2 pointer-events-none" />
                  <p className="text-sm text-[#D4D4D8] leading-relaxed relative z-10 pl-4 font-light">
                    "{item.feedback}"
                  </p>
                </div>
              </div>

              {/* Client Info & Avatar */}
              <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/10 shadow-md"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {item.name}
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </h4>
                    <p className="text-xs text-[#A1A1AA] font-mono">
                      {item.role} • {item.company}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-[#A1A1AA]">
                  {item.country}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Admin / Client Feedback Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#0B0D12] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#00E5FF]" />
                  Add Authentic Testimonial
                </h3>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 text-[#A1A1AA] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-[#A1A1AA] mb-6">
                Client reviews are stored securely in your browser cache and immediately reflected in this section.
              </p>

              <form onSubmit={handleAddSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-[#A1A1AA] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={newFeedback.name}
                    onChange={(e) => setNewFeedback({ ...newFeedback, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#141822] border border-white/10 text-white text-xs focus:border-[#00E5FF] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-[#A1A1AA] block mb-1">Company</label>
                    <input
                      type="text"
                      value={newFeedback.company}
                      onChange={(e) => setNewFeedback({ ...newFeedback, company: e.target.value })}
                      placeholder="e.g. TechCorp"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#141822] border border-white/10 text-white text-xs focus:border-[#00E5FF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-[#A1A1AA] block mb-1">Role</label>
                    <input
                      type="text"
                      value={newFeedback.role}
                      onChange={(e) => setNewFeedback({ ...newFeedback, role: e.target.value })}
                      placeholder="e.g. CTO"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#141822] border border-white/10 text-white text-xs focus:border-[#00E5FF] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-[#A1A1AA] block mb-1">Feedback</label>
                  <textarea
                    required
                    rows={3}
                    value={newFeedback.feedback}
                    onChange={(e) => setNewFeedback({ ...newFeedback, feedback: e.target.value })}
                    placeholder="Describe the collaboration quality, performance, and communication..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#141822] border border-white/10 text-white text-xs focus:border-[#00E5FF] focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-mono text-[#A1A1AA] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#0066FF] text-black font-bold text-xs uppercase tracking-wider"
                  >
                    Post Testimonial
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

