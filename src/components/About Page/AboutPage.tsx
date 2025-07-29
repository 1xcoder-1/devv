import { motion as m } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";

const AboutPage: React.FC = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="relative w-full h-auto flex justify-start items-start md:items-center pt-28 md:pt-0 px-8 md:px-20">
      {/* Main Content Wrapper */}
      <div className="w-full xl1100:w-[60%] h-auto flex flex-col justify-start md:justify-start items-start md:ml-20 xl1100:ml-60 pb-20 md:pt-20">
        {/* Animated Header */}
        <div className="overflow-hidden w-full xl1100:-mb-10">
          <m.div
            initial={{ transform: "translateY(100%)" }}
            animate={{ transform: "translateY(0%)" }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
            className="Avegas-Royale-Regular text-[20vw] sm500:text-[22vw] md:text-[15vw]"
          >
            About
          </m.div>
        </div>

        {/* Main Content Area */}
        <div className="z-40 relative w-full bg-[#ece7e1]">
          <div className="w-full md:w-3/5 flex flex-col justify-center items-start gap-8">
            {/* Introduction Text */}
            <div className="Avegas-Royale-Regular ml-[5%] text-[5vw] md:text-[2.5vw] leading-6 sm350:leading-8 sm500:leading-10 xl:leading-[3rem]">
              I'm Abdullah. A web developer, designer and problem solver.
            </div>

            {/* Personal Background */}
            <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7 mt-4">
            I've always been excited by the mix of art and technology. I'm not afraid to try new things, whether it's learning Javascript, Python, Firebase, or using Figma. Ever since I got my first computer, I've been creating and designing websites just for the fun of it.
            </div>

            {/* Professional Passion */}
            <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7">
            What I love most about being a web developer is creating things that matter and solve real problems. It’s not just about making websites look good – it’s about designing experiences that help people. That could mean helping someone promote their business online or making it easier for someone to buy something. To do this well, it's important to understand what users need, figure out the right problems to solve, build solutions quickly, learn from them, and keep making them better over time. That’s what makes web development meaningful to me.

            </div>

            {/* Skills Section */}
            <div className="w-[85%] Avegas-Royale-Regular uppercase text-xl sm500:text-2xl sm500 mt-4 ml-[4%]">
              Skills
            </div>
            <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7">
              <div className="flex flex-col">
                <div>
                  <span className="font-medium">Front-End Development:</span>{" "}
                  React, TypeScript, JavaScript, HTML, CSS, Tailwind
                </div>
                <div>
                  <span className="font-medium">Back-End & Services:</span>{" "}
                  Python, Node.js, Firebase, Express, REST API
                </div>
                <span className="font-medium">App Development:</span>{" "}
                  React Native, Electron
                </div>
                <div>
                  <span className="font-medium">Design & Tools:</span> 
                  Figma, Framer
                </div>
                <div>
                  <span className="font-medium">Version Control:</span>
                  GitHub, GIt, GitLab
                </div>
                <div>
                <div>
                </div>
              </div>
            </div>  

            {/* Education Section */}
            <div className="w-[85%] Avegas-Royale-Regular uppercase text-xl sm500:text-2xl sm500 ml-[4%]">
              Education
            </div>
            <div className="w-[85%] flex flex-col gap-4 text-xs leading-5 sm500:text-sm sm500:leading-7">
              <div className="flex flex-col">
                <div className="font-medium leading-5 text-sm sm500:text-base">
                 Form Free Cooding Camp
                </div>
                <div className="opacity-75">
                 Fronted Developement
                </div>
                <div className="text-xs">Feb 2023</div>
              </div>

                 <div className="w-[85%] flex flex-col gap-4 text-xs leading-5 sm500:text-sm sm500:leading-7">
              <div className="flex flex-col">
                <div className="font-medium leading-5 text-sm sm500:text-base">
                 Form Udemy & Coursera
                </div>
                <div className="opacity-75">
                Backend Development 
                </div>
                <div className="text-xs">Sep 2024</div>
              </div>
  
            {/* Contact Link */}
            <Link
              to="mailto:1xcoder@proton.me"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="w-auto py-2 px-10 bg-[#1a1818] text-[#ece7e1] Avegas-Royale-Regular text-[3vw] md:text-[1.5vw] text-center rounded-full hover:opacity-50 duration-300 ease-in-out"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
