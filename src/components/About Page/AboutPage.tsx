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
                <div className="font-semibold text-base mt-2 mb-1">🖥️ Front-End & UI</div>
                <div>
                  <span className="font-medium">Core: </span> Next.js, TypeScript (Building Full Stack Apps with Static Typing and SSR/SSG).
                </div>
                <div>
                  <span className="font-medium">React Ecosystem: </span> React.js (Building Dynamic, Component-Based User Interfaces).
                </div>
                <div>
                  <span className="font-medium">Modern Alternatives: </span> Preact, Astro
                </div>
                <div>
                  <span className="font-medium">Styling: </span> Tailwind CSS, MUI, Chakra UI, Bootstrap, ShadCN
                </div>

                <div className="font-semibold text-base mt-4 mb-1">⚙️ Back-End & Data</div>
                <div>
                  <span className="font-medium">APIs: </span> Node.js, Express.js, Bunjs.
                </div>
                <div>
                  <span className="font-medium"> Databases: </span> PostgreSQL, MySQL, MongoDB, Redis.
                </div>
                <div>
                  <span className="font-medium">Database Providers: </span> Firebase, Supabase, NeonDB, Appwrite
                </div>
                <div>
                  <span className="font-medium">ORMs: </span> Prisma, Drizzle ORM.
                </div>

                <div className="font-semibold text-base mt-4 mb-1">☁️ Cloud & AI Integration</div>
                <div>
                  <span className="font-medium">Cloud Platforms: </span> AWS (Experience Deploying, Hosting, and Scaling Applications on the Cloud).
                </div>
                <div>
                  <span className="font-medium">AI Integration: </span> Experience Integrating SDKs and APIs from Gemini, GPT, and other Providers to Build Intelligent Features.
                </div>

                <div className="font-semibold text-base mt-4 mb-1">🛠️ DevOps & Performance</div>
                <div>
                  <span className="font-medium">Version Control: </span> Git, GitHub, GitLab (Expertise in Collaboration and Code Management).
                </div>
                <div>
                  <span className="font-medium">Containerization: </span> Docker (Ensuring Consistent Application Environments).
                </div>
                <div>
                  <span className="font-medium">Deployment: </span> Vercel, Netlify, Heroku.
                </div>
                <div>
                  <span className="font-medium">Build Tools: </span> Vite, Webpack, ESBuild, Turbopack
                </div>

                <div className="font-semibold text-base mt-4 mb-1">🧪 Testing & Other Tools</div>
                <div>
                  <span className="font-medium">Testing: </span> Jest, Cypress, React Testing Library
                </div>
                <div>
                  <span className="font-medium">Code Quality: </span> Prettier, Eslint (Maintaining Consistent Code Style Across Projects).
                </div>
                <div>
                  <span className="font-medium">Design: </span> Figma, Canva, .
                </div>
                <div>
                  <span className="font-medium">Desktop: </span> Electron.js (Developing Cross-Platform Desktop Applications).
                </div>
              </div>
            </div>

            {/* Certificates Section (Replaces old Education) */}
            {/* Certificates Section */}
            <div className="w-[85%] Avegas-Royale-Regular uppercase text-xl sm500:text-2xl sm500 ml-[4%] mt-8 mb-4">
              Certificates
            </div>
            <div className="w-[85%] grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  issuer: "FreeCodeCamp",
                  title: "Legacy Frontend",
                  image: "/Legacy Frontend.png",
                },
                {
                  issuer: "Simple Learn",
                  title: "Frontend Developer",
                  image: "/fronted Developer_page-0001.jpg",
                },
                {
                  issuer: "FreeCodeCamp",
                  title: "Legacy Backend",
                  image: "/Legacy Backend.png",
                },
                {
                  issuer: "FreeCodeCamp",
                  title: "Back End Development and APIs",
                  image: "/Back End Development and APIs V8.png",
                },
                {
                  issuer: "One Roadmap",
                  title: "Full Stack Developer",
                  image: "/Full Stack Developer-Certificate_page-0001.jpg",
                },
                {
                  issuer: "One Roadmap",
                  title: "TypeScript",
                  image: "/TypeScript-Certificate_page-0001.jpg",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col justify-between p-4 rounded-2xl bg-[#e3ded8] border border-black/5 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-default overflow-hidden"
                  onMouseOver={mouseOverEvent}
                  onMouseOut={mouseOutEvent}
                >
                  <div className="flex flex-col gap-1 mb-4">
                    <div className="text-[10px] uppercase tracking-wider opacity-60 font-semibold text-black">
                      {cert.issuer}
                    </div>
                    <div className="text-xl leading-tight font-medium text-black/90 group-hover:text-black transition-colors line-clamp-2">
                      {cert.title}
                    </div>
                  </div>

                  <div className="flex items-center justify-end border-t border-black/5 pt-3 mt-auto">
                    <a
                      href={cert.image}
                      download={`${cert.title.replace(/\s+/g, '-').toLowerCase()}.png`}
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full bg-black/5 hover:bg-black hover:text-white transition-all duration-300 group/btn"
                      title="Download Certificate"
                    >
                      <span>Download</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform duration-300"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Link */}
            <Link
              to="mailto:1xcoder@proton.me"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="w-auto py-2 px-10 bg-[#1a1818] text-[#ece7e1] Avegas-Royale-Regular text-[3vw] md:text-[1.5vw] text-center rounded-full hover:opacity-50 duration-300 ease-in-out mt-4"
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
