import { motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";


const ContactPage: React.FC = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();
  
  // State for responsive decoration positioning
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Update window dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#1a1818] text-[#ece7e1] w-full h-screen flex justify-start items-start md:items-center pt-28 md:pt-0 px-8 md:px-20 relative overflow-hidden">
      {/* Floating Decoration Elements */}
      {/* Circle Element */}
      <m.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 0.9, 0.7], 
          scale: [0, 1, 0.9],
          x: [0, -10, 0],
          y: [0, 10, 0] 
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1.5,
        }}
        className="absolute w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw] rounded-full border-2 border-[#ece7e170] block"
        style={{
          top: windowSize.width > 768 ? '20%' : '10%',
          right: windowSize.width > 768 ? '15%' : '5%',
          zIndex: 10,
        }}
      />
      
      {/* Square Element */}
      <m.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ 
          opacity: [0, 0.8, 0.6], 
          rotate: [0, 45, 0],
          x: [0, 15, 0],
          y: [0, -15, 0] 
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
        className="absolute w-[12vw] h-[12vw] sm:w-[8vw] sm:h-[8vw] md:w-[5vw] md:h-[5vw] border-2 border-[#ece7e170] block"
        style={{
          bottom: windowSize.width > 768 ? '25%' : '15%',
          right: windowSize.width > 768 ? '30%' : '10%',
          zIndex: 10,
        }}
      />
      

      
      {/* Dot Grid Element */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.8, 0.6] 
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2.5,
        }}
        className="absolute grid grid-cols-3 gap-[5px] md:gap-[8px] grid"
        style={{
          bottom: windowSize.width > 768 ? '15%' : '5%',
          left: windowSize.width > 768 ? '15%' : '5%',
          zIndex: 10,
        }}
      >
        {[...Array(9)].map((_, index) => (
          <div key={index} className="w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full bg-[#ece7e190]" />
        ))}
      </m.div>
      {/* Main Content Wrapper */}
      <div className="w-full xl1100:w-[50%] h-auto xl1100:h-full flex justify-start md:justify-center xl1100:justify-end items-end xl1100:items-center">
        {/* Text Section */}
        <div className="w-full sm350:w-3/4 h-auto flex flex-col justify-center items-start gap-4">
          {/* Animated Greeting */}
          <div className="overflow-hidden sm:-ml-1 mb-8 sm500:mb-4 xl1100:-mb-[10%]">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
              className="text-[19vw] sm500:text-[21vw] md:text-[16vw] xl1100:text-[14vw] Avegas-Royale-Regular"
            >
              Hello.
            </m.div>
          </div>

          {/* Contact Information */}
          <div className="overflow-hidden xl1100:pt-10 -mt-10 relative z-30 bg-[#1a1818]">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              className="w-full sm:w-[85%] flex flex-col gap-4"
            >
              {/* Introduction Text - with fade-in animation, left border and highlight effect */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-[12px] leading-5 sm500:text-[14px] sm500:leading-7 relative pl-3 border-l-2 border-[#ece7e194] overflow-hidden"
              >
                <m.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.5, delay: 1.5, repeat: 0 }}
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#ece7e130] to-transparent z-10"
                />
                Need a Full-Stack Developer who is eager to bring creativity and
                dedication to a dynamic organisation? Get in touch.
              </m.div>

              {/* Contact Details */}
              <div className="text-[12px] leading-5 sm500:text-[14px] sm500:leading-7 flex flex-col gap-2">
                <div className="flex gap-2">
                  <span>Email:</span>
                  <Link
                    to="mailto:1xcoder@proton.me"
                    onMouseOver={mouseOverEvent}
                    onMouseOut={mouseOutEvent}
                    className="underline underline-offset-4 underline-[#ece7e194] hover:text-[#ece7e1] hover:tracking-wide transition-all duration-300 ease-in-out"
                  >
                    1xcoder@proton.me
                  </Link>
                </div>
                <div className="flex gap-2">
                  <span>On the Internet:</span>
                  <Link
                    to="https://www.linkedin.com/in/1xcoder/"
                    target="_blank"
                    onMouseOver={mouseOverEvent}
                    onMouseOut={mouseOutEvent}
                    className="underline underline-offset-2 underline-[#ece7e194] hover:text-[#ece7e1] hover:tracking-wide transition-all duration-300 ease-in-out"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
