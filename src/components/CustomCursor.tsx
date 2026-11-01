import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = 
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer');

        setIsPointer(!!isClickable);

        const isSpecialCard = !!target.closest('.interactive-card');
        setIsHovered(isSpecialCard);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer glowing follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-screen"
        animate={{
          x: mousePosition.x - (isPointer ? 24 : 16),
          y: mousePosition.y - (isPointer ? 24 : 16),
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          borderColor: isHovered ? '#FF1738' : '#00E5FF',
          backgroundColor: isPointer ? 'rgba(0, 229, 255, 0.12)' : 'transparent',
          boxShadow: isPointer 
            ? '0 0 25px rgba(0, 229, 255, 0.4)' 
            : '0 0 15px rgba(255, 23, 56, 0.3)'
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 250,
          mass: 0.5
        }}
        style={{
          borderWidth: '1.5px',
          borderStyle: 'solid'
        }}
      />

      {/* Center sharp dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isPointer ? 0 : 1,
          backgroundColor: isHovered ? '#FF1738' : '#00E5FF',
          boxShadow: '0 0 8px #00E5FF'
        }}
        transition={{ duration: 0.05 }}
        style={{
          width: 6,
          height: 6
        }}
      />
    </>
  );
};

