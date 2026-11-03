import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Mail,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'Flutter App Development',
    budgetRange: '$2,500 - $5,000',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Flutter App Development',
    'Laravel / Web Development',
    'UI/UX & Design Systems',
    'Database Architecture',
    'SEO & Ads Marketing',
    'Full-Stack Custom Platform'
  ];

  const budgetRanges = [
    'Under $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.projectDetails.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00E5FF', '#FF1738', '#FFFFFF']
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#0B0D12] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-bg-lines opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF1738]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141822] border border-[#00E5FF]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
            <span className="text-xs font-mono font-semibold tracking-widest text-white uppercase">
              LET'S COLLABORATE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-tight max-w-4xl">
            HAVE AN IDEA?{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#FF1738] bg-clip-text text-transparent">
              LET'S BUILD SOMETHING GREAT.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] max-w-2xl font-light">
            Tell us about your project. Let's transform your vision into a powerful digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Agency Channels & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Quick Contact Info Cards */}
            <div className="rounded-3xl glass-panel bg-[#0E1117] border border-white/10 p-8 shadow-xl">
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#00E5FF]" />
                Direct Communication
              </h3>

              <div className="space-y-6">

                {/* WhatsApp Direct Chat */}
                <a
                  href="https://wa.me/601111375876?text=Hello%20Arham%20Tech%20Solutions!%20I%20would%20like%20to%20discuss%20a%20new%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#141822] hover:bg-[#1f2433] border border-white/5 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wider block">
                      WhatsApp Quick Chat
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      +60 111-137-5876
                    </span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">Average reply in &lt; 15 minutes</p>
                  </div>
                </a>

                {/* Email Channel */}
                <a
                  href="mailto:arhamtech052@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#141822] hover:bg-[#1f2433] border border-white/5 hover:border-[#00E5FF]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center shrink-0 border border-[#00E5FF]/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wider block">
                      Official Inquiries
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                      arhamtech052@gmail.com
                    </span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">Formal proposals & RFPs</p>
                  </div>
                </a>

                {/* Instagram Channel */}
                <a
                  href="https://instagram.com/arhamtech.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#141822] hover:bg-[#1f2433] border border-white/5 hover:border-[#FF1738]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF1738]/10 text-[#FF1738] flex items-center justify-center shrink-0 border border-[#FF1738]/20 group-hover:scale-110 transition-transform">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wider block">
                      Instagram Showcase
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-[#FF1738] transition-colors">
                      @arhamtech.dev
                    </span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">Daily development insights & reels</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#141822] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wider block">
                      Delivery Footprint
                    </span>
                    <span className="text-sm font-bold text-white">
                      Global Remote & Headquartered Hub
                    </span>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">Serving clients in US, UK, UAE & worldwide</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Non-Disclosure Guarantee */}
            <div className="p-6 rounded-2xl bg-[#0E1117] border border-white/5 flex items-center gap-4 text-xs text-[#A1A1AA]">
              <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">100% Confidentiality & NDA Ready</span>
                We treat your intellectual property with strict banking-grade privacy from day one.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel bg-[#0E1117] border border-white/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden">

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h3 className="text-2xl font-display font-extrabold text-white mb-2">
                      Inquiry Received Successfully!
                    </h3>

                    <p className="text-sm text-[#A1A1AA] max-w-md mb-8 leading-relaxed">
                      Thank you, <span className="text-white font-bold">{formData.fullName}</span>. An engineering director from ARHAM TECH SOLUTIONS will review your specifications and contact you at <span className="text-[#00E5FF] font-mono">{formData.email}</span> within 24 hours.
                    </p>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          projectType: 'Flutter App Development',
                          budgetRange: '$2,500 - $5,000',
                          projectDetails: ''
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 font-mono">
                        {errorMessage}
                      </div>
                    )}

                    {/* Full Name & Email Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-mono text-[#A1A1AA] block mb-2 font-medium">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl bg-[#141822] border border-white/10 text-white text-sm focus:border-[#00E5FF] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-[#A1A1AA] block mb-2 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#141822] border border-white/10 text-white text-sm focus:border-[#00E5FF] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Project Type Select Pills */}
                    <div>
                      <label className="text-xs font-mono text-[#A1A1AA] block mb-2.5 font-medium">
                        Project Type *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${formData.projectType === type
                              ? 'bg-[#00E5FF] text-black font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                              : 'bg-[#141822] text-[#A1A1AA] hover:text-white border border-white/5'
                              }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Range Select Pills */}
                    <div>
                      <label className="text-xs font-mono text-[#A1A1AA] block mb-2.5 font-medium">
                        Budget Range (USD) *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgetRanges.map((range) => (
                          <button
                            type="button"
                            key={range}
                            onClick={() => setFormData({ ...formData, budgetRange: range })}
                            className={`py-2 px-3 rounded-xl text-xs font-mono text-center transition-all ${formData.budgetRange === range
                              ? 'bg-[#FF1738] text-white font-bold shadow-[0_0_15px_rgba(255,23,56,0.5)]'
                              : 'bg-[#141822] text-[#A1A1AA] hover:text-white border border-white/5'
                              }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Details Description */}
                    <div>
                      <label className="text-xs font-mono text-[#A1A1AA] block mb-2 font-medium">
                        Project Details & Core Goals *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        placeholder="Tell us about your target platform, desired features, deadlines, or existing tech stack..."
                        className="w-full px-4 py-3 rounded-xl bg-[#141822] border border-white/10 text-white text-sm focus:border-[#00E5FF] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Submit CTA Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00E5FF] via-[#0066FF] to-[#FF1738] text-black font-display font-extrabold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(255,23,56,0.6)] transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            Dispatching Inquiry...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Project Inquiry
                          </>
                        )}
                      </span>
                    </button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
