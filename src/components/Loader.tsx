import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Grain from './Grain';

interface LoaderProps {
  onComplete?: () => void;
}

interface Greeting {
  text: string;
  fontClass?: string;
}

const GREETINGS: Greeting[] = [
  { text: "hello", fontClass: "font-handwriting" },
  { text: "bonjour", fontClass: "font-sacramento" },
  { text: "hola", fontClass: "font-handwriting" },
  { text: "你好", fontClass: "font-sans font-extralight tracking-widest" },
  { text: "안녕", fontClass: "font-sans font-extralight tracking-widest" },
  { text: "سلام", fontClass: "font-serif font-light" },
  { text: "welcome", fontClass: "font-handwriting" },
];

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => setFontsReady(true)).catch(() => setFontsReady(true));
    } else {
      setFontsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!fontsReady) return;

    if (index < GREETINGS.length - 1) {
      // Balanced display time per greeting so each word is clear and readable without rushing
      const delay = index === 0 ? 650 : index === GREETINGS.length - 2 ? 600 : 550;
      const timer = setTimeout(() => {
        setIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      // Hold "welcome" gracefully before page reveal
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 850);
      return () => clearTimeout(timer);
    }
  }, [index, fontsReady, onComplete]);

  const currentGreeting = GREETINGS[index];
  const progressPercent = Math.min(100, Math.round(((index + 1) / GREETINGS.length) * 100));

  return (
    <motion.div
      initial={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[10000] bg-[#141414] text-[#ece7e1] flex flex-col justify-center items-center overflow-hidden select-none shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
    >
      <Grain />

      {/* Apple Setup Ambient Radial Glow */}
      <div className="apple-glow-orb" />

      {/* Apple Handwriting / Multilingual Greetings Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-12 min-h-[280px]">
        <AnimatePresence mode="wait">
          {fontsReady && (
            <motion.div
              key={currentGreeting.text}
              initial={{ opacity: 0, y: 18, scale: 0.95, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, scale: 1.04, filter: "blur(8px)" }}
              transition={{ duration: 0.30, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center w-full max-w-[95vw]"
            >
              {/* Handwriting Text Container with No Edge Crop */}
              <div className="relative py-4 px-6 sm:px-12 flex justify-center items-center w-full overflow-visible">
                <span
                  className={`block text-[28vw] sm:text-[22vw] md:text-[16vw] lg:text-[13vw] xl:text-[11vw] font-normal leading-tight tracking-normal text-[#ece7e1] drop-shadow-[0_4px_24px_rgba(236,231,225,0.22)] whitespace-nowrap overflow-visible ${currentGreeting.fontClass || 'font-handwriting'}`}
                  style={{
                    WebkitTextStroke: "0.5px rgba(236, 231, 225, 0.4)",
                  }}
                >
                  {currentGreeting.text}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Minimalist Apple Setup Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-[3px] bg-[#ece7e112] z-20">
        <motion.div
          animate={{ width: `${progressPercent}%` }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
          className="h-full bg-[#ece7e1] shadow-[0_0_10px_rgba(236,231,225,0.7)]"
        />
      </div>


    </motion.div>
  );
};

export default Loader;


