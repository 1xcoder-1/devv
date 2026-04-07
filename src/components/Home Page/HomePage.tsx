import { motion as m } from "framer-motion";
import React from "react";
import TiltLink from "./TiltLink";
import Marquee from "./Marquee";

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col xl1100:flex-row pt-20 md:pt-32 xl1100:pt-0 justify-start xl1100:justify-between items-center gap-2 sm500:gap-4 md:gap-8 xl1100:gap-20 px-8 md:px-20">
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
        <div className="w-full md:w-3/4 xl1100:w-full flex flex-col justify-center items-start pr-5">
          {/* Navigation link to "Work" */}
          <div className="uppercase text-[14vw] sm500:text-[16vw] md:text-[11vw] xl1100:text-[9vw] tracking-tighter -mb-[3%] sm500:-mb-[5%] md:-mb-[10%]">
            <TiltLink
              to="/work"
              title="Work"
              label="work"
              className="Avegas-Royale-Regular"
            />
          </div>

          {/* Navigation link to "About" */}
          <div className="uppercase text-[14vw] sm500:text-[16vw] md:text-[11vw] xl1100:text-[9vw] tracking-tighter -mb-[3%] sm500:-mb-[5%] md:-mb-[10%]">
            <TiltLink
              to="/about"
              title="About"
              label="about"
              className="Avegas-Royale-Regular"
            />
          </div>

          {/* Navigation link to "Contact" */}
          <div className="uppercase text-[14vw] sm500:text-[16vw] md:text-[11vw] xl1100:text-[9vw] tracking-tighter">
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
      <div className="md:hidden">
        <Marquee />
      </div>
    </div>
  );
};

export default HomePage;