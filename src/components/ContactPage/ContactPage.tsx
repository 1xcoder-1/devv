import { motion as m, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useCursorContext } from "../../context/CursorContext";
import Magnetic from "../Magnetic";


const ContactPage: React.FC = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  // Update Pakistan time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("1xcoder@proton.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1818] text-[#ece7e1] w-full min-h-screen flex flex-col justify-center items-center px-6 sm500:px-10 md:px-16 xl1100:px-20 pt-28 pb-16 sm:py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-bold Avegas-Royale-Regular pointer-events-none select-none"
      >
        Contact
      </m.div>

      {/* Main Layout Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 xl1100:grid-cols-2 gap-12 xl1100:gap-20 relative z-10">

        {/* Left Section: Large Heading & Status */}
        <div className="flex flex-col justify-center gap-8 sm:gap-12 lg:pl-10 xl1100:pl-16">
          <div className="overflow-visible py-2 pr-2 sm:pr-4">
            <m.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-[12.5vw] sm350:text-[11vw] sm500:text-[9.5vw] sm:text-[8vw] xl1100:text-[6.5vw] Avegas-Royale-Regular leading-[0.85] tracking-tight"
            >
              Let's <br />
              <span className="inline-block Avegas-Royale-Regular pl-2 sm350:pl-3 sm:pl-6 pr-2 sm:pr-4 text-outline">Connect.</span>
            </m.h1>
          </div>

          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-6 pl-3 sm:pl-0"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#ece7e150]"></div>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-50">Local Time / Pakistan</p>
            </div>
            <p className="text-3xl sm:text-6xl font-light tracking-tighter Avegas-Royale-Regular pl-1 sm:pl-0">{time}</p>
          </m.div>
        </div>

        {/* Right Section: Contact Methods */}
        <div className="flex flex-col justify-center gap-12 xl1100:gap-16 xl1100:pl-16">

          {/* Email Card/Button */}
          <div className="group relative">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4 sm:mb-6 font-medium">Drop a line</p>
            <Magnetic>
              <div
                onClick={copyToClipboard}
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="cursor-pointer relative pt-4"
              >
                <AnimatePresence>
                  {copied && (
                    <m.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute top-0 left-0 text-xs font-medium uppercase tracking-[0.2em] text-green-400"
                    >
                      Copied!
                    </m.span>
                  )}
                </AnimatePresence>
                <h2 className="text-xl sm350:text-2xl sm500:text-3xl sm:text-4xl md:text-5xl font-light tracking-tight hover:opacity-70 transition-opacity underline decoration-[1px] underline-offset-8 break-all sm:break-normal">
                  1xcoder@proton.me
                </h2>
              </div>
            </Magnetic>
          </div>

          {/* Social Links List */}
          <div className="flex flex-col gap-8 sm:gap-10">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-medium">Digital Presence</p>
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/in/1xcoder/" },
                { name: "GitHub", url: "https://github.com/1xcoder-1" },
                { name: "Instagram", url: "https://www.instagram.com/1x.coder/" },
                { name: "Threads", url: "https://www.threads.com/@1x.coder" }
              ].map((social, i) => (
                <m.div
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                >
                  <Magnetic>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={mouseOverEvent}
                      onMouseOut={mouseOutEvent}
                      className="text-base sm:text-2xl font-light hover:opacity-50 transition-all flex items-center gap-2 sm:gap-3"
                    >
                      <span className="text-[10px] opacity-30">0{i + 1}</span>
                      {social.name}
                    </a>
                  </Magnetic>
                </m.div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5 }}
            className="text-sm font-light leading-relaxed max-w-md pt-8 sm:pt-10 border-t border-[#ece7e110]"
          >
            I’m always open to discussing new projects, creative ideas or original opportunities to be part of your visions.
          </m.p>

        </div>
      </div>

      {/* Subtle Floating Shapes */}
      <m.div
        animate={{
          rotate: 360,
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="fixed -top-20 -right-20 w-80 h-80 rounded-full border border-[#ece7e105] pointer-events-none"
      />
      <m.div
        animate={{
          rotate: -360,
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="fixed -bottom-40 -left-20 w-[40rem] h-[40rem] rounded-full border border-[#ece7e108] pointer-events-none"
      />
    </div>
  );
};

export default ContactPage;
