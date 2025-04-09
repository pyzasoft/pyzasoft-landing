'use client';

import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// This component only renders on the client side to avoid hydration issues
const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Don't render anything during SSR
  if (!mounted) {
    return (
      <div className="fixed inset-0 z-0 bg-slate-950"></div>
    );
  }
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-slate-950">
      {/* Static base layers - no randomness */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-900/5 to-transparent"></div>
      
      {/* Simple grid for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(66,153,225,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,153,225,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Fixed static stars */}
    {/*   {[...Array(15)].map((_, i) => (
        <div 
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: `${i % 3 + 1}px`,
            height: `${i % 3 + 1}px`,
            top: `${(i * 7) % 100}%`,
            left: `${(i * 11) % 100}%`,
            opacity: 0.5 + ((i % 5) * 0.1),
          }}
        />
      ))} */}
      
      {/* Animated glowing orbs that won't cause hydration issues */}
      {/* <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      /> */}
      
     {/*  <motion.div 
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      /> */}
      
     {/*  <motion.div 
        className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"
        animate={{
          opacity: [0.05, 0.2, 0.05],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      /> */}

      {/* Premium neon accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent"></div>
      
      {/* Futuristic hexagon pattern */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;