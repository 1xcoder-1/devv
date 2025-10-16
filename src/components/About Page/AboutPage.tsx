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
              
            I'm a passionate full-stack developer with a love for building intuitive and dynamic web applications. I specialize in creating clean, efficient code and enjoy solving complex problems to deliver seamless user experiences
            </div>

            {/* Professional Passion */}
            <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7">
            My journey into coding began when I built a simple website for a friend's band. I was hooked by the process of turning an idea into a functional, live product. Since then, I’ve dedicated myself to mastering modern web technologies to create powerful digital solutions.

            </div>

            {/* Skills Section */}
            <div className="w-[85%] Avegas-Royale-Regular uppercase text-xl sm500:text-2xl sm500 mt-4 ml-[4%]">
              Skills
            </div>
            <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7">
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-base mt-2 mb-1">Languages & Frameworks</div>
                <div>
                  <span className="font-medium">Front-End: </span> JavaScript (ES6+), React, Nextjs, Typescript
                </div>
                <div>
                  <span className="font-medium">Back-End & Server-Side: </span> Python, Node.js, Express, Flask, Rest Api
                </div>
                <div>
                  <span className="font-medium">App Development:</span> Streamlit (for data-driven web apps), Electron.js (for cross-platform desktop apps)
                </div>
                <div className="font-semibold text-base mt-4 mb-1">Cloud & DevOps</div>
                <div>
                  <span className="font-medium">Cloud Platforms: </span> AWS ( knowledge of services like EC2, S3, and Amplify)
                </div>
                <div>
                  <span className="font-medium">Databases: </span> MySQL, PostgreSQL, MongoDB
                </div>
                <div>
                  <span className="font-medium">Other Languages & Tools: </span> C Language, Git, GitHub, Docker, Vercel, Superbase , Firebase
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="w-[85%] Avegas-Royale-Regular uppercase text-xl sm500:text-2xl sm500 ml-[4%]">
             Relevant Education & Self-Study
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

<div className="flex flex-col">
                <div className="font-medium leading-5 text-sm sm500:text-base">
                 From Coursera & Free Cooding Camp
                </div>
                <div className="opacity-75">
                 Python Developement
                </div>
                <div className="text-xs">Dec 2024</div>
              </div>
              
                 <div className="w-[85%] flex flex-col gap-4 text-xs leading-5 sm500:text-sm sm500:leading-7">
              <div className="flex flex-col">
                <div className="font-medium leading-5 text-sm sm500:text-base">
                 Form Udemy & Free Cooding Camp
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
    </div>
    </div>
  );
};

export default AboutPage;
