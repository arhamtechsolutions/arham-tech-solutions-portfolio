import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.jpg';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('INITIALIZING CORE...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus('EXPERIENCE READY');
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }

        const increment = Math.floor(Math.random() * 8) + 3;
        const next = Math.min(prev + increment, 100);

        if (next > 25 && next <= 55) {
          setStatus('CALIBRATING 3D SHADERS...');
        } else if (next > 55 && next <= 85) {
          setStatus('LOADING ARHAM TECH ASSETS...');
        } else if (next > 85) {
          setStatus('SYSTEM READY...');
        }

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -30,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070B] overflow-hidden select-none"
        >
          {/* Subtle Cyber Grid Background */}
          <div className="absolute inset-0 cyber-bg-lines opacity-30 pointer-events-none" />

          {/* Glowing Ambient Radial light */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FF1738]/20 via-[#00E5FF]/10 to-transparent blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md w-full">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-28 h-28 mb-8 flex items-center justify-center"
            >
              {/* Rotating glowing frame */}
              <div className="absolute inset-0 rounded-2xl border border-[#00E5FF]/40 rotate-45 animate-spin-slow" />
              <div className="absolute inset-1 rounded-2xl border border-[#FF1738]/40 -rotate-45" />

              {/* Logo Image */}
              <img
                src={logoImg}
                alt="Arham Tech Solutions Logo"
                className="w-20 h-20 object-cover rounded-xl shadow-2xl relative z-10 border border-white/20"
              />
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl font-display font-extrabold tracking-widest text-white mb-2"
            >
              ARHAM TECH <span className="text-[#FF1738]">SOLUTIONS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs uppercase tracking-[0.3em] text-[#00E5FF] font-mono mb-8"
            >
              Ideas • Technology • Growth
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-full bg-[#141822] rounded-full h-1.5 p-0.5 overflow-hidden border border-white/10 mb-4 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF1738] via-[#FF5722] to-[#00E5FF] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Progress percentage and status */}
            <div className="w-full flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
              <span>{status}</span>
              <span className="text-white font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

