import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Grain from './Grain';

interface LoaderProps {
  onComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (percent < 100) {
      // Variable speed for a more "organic" feel
      const delay = percent < 80 ? 15 : percent < 95 ? 40 : 80;
      interval = setTimeout(() => setPercent(prev => prev + 1), delay);
    } else {
      // Short pause at 100% before reveal
      setTimeout(() => {
        setIsComplete(true);
        if (onComplete) onComplete();
      }, 500);
    }
    return () => clearTimeout(interval);
  }, [percent, onComplete]);

  const words = ["Dreaming", "Crafting", "Designing", "Developing", "Presenting"];
  const currentWord = words[Math.floor((percent / 100) * words.length)];

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-[#1a1818] flex flex-col justify-center items-center overflow-hidden"
        >
          <Grain />

          {/* Centered Percentage with Premium Font */}
          <div className="relative overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              className="block text-[25vw] sm:text-[20vw] font-bold Avegas-Royale-Regular text-[#ece7e1] leading-none select-none"
            >
              {percent}%
            </motion.span>
          </div>

          {/* Dynamic Status Text */}
          <div className="mt-4 overflow-hidden h-6 flex flex-col items-center">
            <motion.p
              key={currentWord}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.4 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-[10px] uppercase tracking-[0.3em] text-[#ece7e1] font-medium"
            >
              {currentWord}
            </motion.p>
          </div>

          {/* Minimalist Progress Bar */}
          <div className="fixed bottom-0 left-0 w-full h-[2px] bg-[#ece7e110]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              transition={{ ease: "easeOut" }}
              className="h-full bg-[#ece7e1]"
            />
          </div>

          {/* Stylized Reveal Panels (Pre-positioned) */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: percent / 100 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#ece7e1] origin-bottom -z-10 opacity-[0.02]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
