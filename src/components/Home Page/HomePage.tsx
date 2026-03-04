import { motion as m } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";
import TiltLink from "./TiltLink";
import Marquee from "./Marquee";

const HomePage: React.FC = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="w-full min-h-screen flex flex-col xl1100:flex-row pt-28 md:pt-60 xl1100:pt-0 justify-start xl1100:justify-between items-center gap-2 sm500:gap-4 md:gap-12 xl1100:gap-20 px-8 md:px-20">
      {/* Left section with name and titles */}
      <div className="w-full xl1100:w-[35%] h-auto xl1100:h-full flex justify-start md:justify-center xl1100:justify-end items-end xl1100:items-center mb-4 xl1100:mb-20">
        <div className="w-full sm350:w-3/4 h-auto flex flex-col justify-center items-start gap-4 mt-0 xl1100:mt-[45%]">
          {/* Name animation */}
          <div className="overflow-hidden mb-2">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="uppercase font-medium tracking-wider text-sm sm500:text-base"
            >
              Abdullah Ramzan
            </m.div>
          </div>

          {/* Job title animation */}
          <div className="overflow-hidden">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              className="text-[12px] leading-5 sm500:text-[14px] sm500:leading-7"
            >
              Full Stack Web Developer / Designer
            </m.div>
          </div>

          {/* Description animation */}
          <div className="overflow-hidden">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              className="text-[12px] leading-5 sm500:text-[14px] sm500:leading-7"
            >
              Passionate about developing responsive, visually appealing and
              complex applications.
            </m.div>
          </div>
        </div>
      </div>

      {/* Right section with navigation links */}
      <m.div
        initial={{ filter: "blur(50px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.25,
          ease: "easeOut",
        }}
        className="w-full xl1100:w-[55%] h-auto xl1100:h-full flex justify-center items-start xl1100:items-center mt-8 md:mt-20 xl1100:mt-0"
      >
        <div className="w-full md:w-3/4 xl1100:w-full flex flex-col justify-center items-start pl-2 sm500:pl-4 md:pl-0 xl:pl-20">
          {/* Navigation link to "Work" */}
          <div className="uppercase text-[16vw] sm500:text-[18vw] md:text-[13vw] xl1100:text-[11vw] tracking-tighter -mb-[3%] sm500:-mb-[5%] md:-mb-[10%] -ml-[-3%]">
            <TiltLink
              to="/work"
              title="Work"
              label="work"
              className="Avegas-Royale-Regular"
            />
          </div>

          {/* Navigation link to "About" */}
          <div className="uppercase text-[16vw] sm500:text-[18vw] md:text-[13vw] xl1100:text-[11vw] tracking-tighter -mb-[3%] sm500:-mb-[5%] md:-mb-[10%] -ml-[-3%]">
            <TiltLink
              to="/about"
              title="About"
              label="about"
              className="Avegas-Royale-Regular"
            />
          </div>

          {/* Navigation link to "Contact" */}
          <div className="uppercase text-[16vw] sm500:text-[18vw] md:text-[13vw] xl1100:text-[11vw] tracking-tighter -ml-[-3%]">
            <TiltLink
              to="/contact"
              title="Contact"
              label="contact"
              className="Avegas-Royale-Regular"
            />
          </div>
        </div>
      </m.div>

      {/* Mobile-only background marquee to fill empty space */}
      <Marquee />

      {/* Mobile-only status bar for an attractive finish */}
      <div className="xl1100:hidden w-full px-8 pb-10 flex flex-col gap-4 mt-auto">
        <div className="w-full h-[1px] bg-black/10"></div>
        <div className="flex justify-center items-center text-[10px] uppercase font-medium tracking-widest opacity-50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Based in Pakistan
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;