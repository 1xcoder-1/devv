import { motion as m } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";

const AboutPage: React.FC = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="relative w-full min-h-screen bg-[#1a1818] text-[#ece7e1] flex flex-col items-center pt-28 pb-20 px-6 md:px-0 overflow-x-hidden select-text">
      <div className="w-full max-w-[900px] flex flex-col items-start gap-12 md:ml-20 lg:ml-40 xl:ml-0">
        {/* About Header */}
        <div className="overflow-hidden w-full relative">
          <m.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
            className="Avegas-Royale-Regular text-[25vw] sm:text-[20vw] md:text-[180px] leading-[0.8] mt-10 -ml-1 md:-ml-2"
          >
            About
          </m.div>
          {/* Subtle line reveal */}
          <m.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="h-[1px] w-full bg-[#ece7e120] origin-left mt-4"
          />
        </div>

        {/* Subheader with Staggered Words */}
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {"I'm Abdullah. A programmer, developer and problem solver.".split(" ").map((word, i) => (
            <div key={i} className="overflow-hidden">
              <m.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.8 + (i * 0.05)
                }}
                className="block Avegas-Royale-Regular text-3xl md:text-[42px] leading-[1.2]"
              >
                {word}
              </m.span>
            </div>
          ))}
        </div>

        {/* Body Text */}
        <div className="flex flex-col gap-10 text-[15px] md:text-[17px] leading-[1.8] opacity-90 max-w-[750px] font-light">
          {[
            "I am a developer and designer who loves building things that work. Whether it’s designing a clean interface or writing the code behind it, I enjoy the entire process of creating digital products from scratch.",
            "I specialize in turning big ideas into simple, high-performing websites. Whether it's a small landing page or a complex application, I focus on making it fast, beautiful, and easy for everyone to use.",
            "I believe great software comes from understanding what the user needs, choosing the right tech stack, and constantly improving the product. I’m always learning, always building, and always looking for the next challenge in web development and design."
          ].map((para, i) => (
            <m.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + (i * 0.2), ease: "easeOut" }}
            >
              {para}
            </m.p>
          ))}
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-4 italic border-t pt-6 border-[#ece7e1]/10"
          >
            This is one of my favorite quotes (by Steve Jobs):
          </m.p>
        </div>

        {/* Quote Section */}
        <div className="w-full flex flex-col gap-14 py-6 ">
          <div className="Avegas-Royale-Regular text-[42px] md:text-[72px] leading-[1.1] italic max-w-[800px]">
            "Design is not just what it looks like and feels like. Design is how it works."
          </div>
          <div className="text-[15px] md:text-[17px] leading-[1.8] opacity-90 max-w-[650px] font-light">
            I live by this quote every day. To me, a great website isn't just about good looks it's about how well it works. I focus on building digital tools that are fast, useful, and actually make life easier for the people who use them.
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex flex-col gap-10 w-full pt-16 mt-8 border-t border-[#ece7e1]/10">
          <div className="Avegas-Royale-Regular text-2xl uppercase tracking-[0.15em] opacity-80">Experience</div>
          <div className="flex flex-col gap-6 text-[15px] md:text-[16px] leading-relaxed opacity-90 list-none font-light">
            <div className="flex items-start gap-3">
              <span className="mt-2.5 w-[3px] h-[3px] bg-[#ece7e1] rounded-full flex-shrink-0"></span>
              <span>Computer Science and Web Development Student</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-2.5 w-[3px] h-[3px] bg-[#ece7e1] rounded-full flex-shrink-0"></span>
              <span>Student Developer Experience with focus on Full Stack Web Development</span>
            </div>

            <div className="mt-4 pl-4 flex flex-col gap-6 border-l border-[#ece7e1]/10">
              <span className="italic opacity-70 text-sm">During my learning journey, I have earned:</span>
              <div className="flex flex-col gap-4">
                {[
                  { text: "Frontend Developer Certification (FreeCodeCamp)", file: "/Legacy%20Frontend.png" },
                  { text: "Back End Development and APIs Certification (FreeCodeCamp)", file: "/Legacy%20Backend.png" },
                  { text: "Student Experience & Programming Certification (GeeksforGeeks)", file: "/fullstackdev.png" },
                  { text: "Frontend Developer Certification (Simplilearn)", file: "/fronted%20Developer_page-0001.jpg" },
                  { text: "3 years of Web Development fundamentals", file: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="mt-3 w-4 h-[1px] bg-[#ece7e1]/30 flex-shrink-0"></span>
                    {item.file ? (
                      <a
                        href={item.file}
                        download
                        onMouseOver={mouseOverEvent}
                        onMouseOut={mouseOutEvent}
                        className="hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-[#ece7e1]/30 hover:decoration-white"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col gap-10 w-full pt-16 mt-8 border-t border-[#ece7e1]/10">
          <div className="Avegas-Royale-Regular text-2xl uppercase tracking-[0.15em] opacity-80">Skills</div>
          <div className="text-[15px] md:text-[16px] opacity-90 leading-[2.2] max-w-[750px] font-light tracking-wide">
            React / Next.js / JavaScript / TypeScript / Node.js / Express / MERN Stack / PostgreSQL / MongoDB / Prisma / Docker / AWS / Sanity / Strapi / Tailwind CSS / Framer Motion / Git / API  Performance Optimization / Web socket / CI/CD / GraphQL / Electron / Python
          </div>
        </div>

        {/* How I Work Section */}
        <div className="flex flex-col gap-10 w-full pt-16 mt-8 border-t border-[#ece7e1]/10">
          <div className="Avegas-Royale-Regular text-2xl uppercase tracking-[0.15em] opacity-80">How I Work</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] md:text-[16px] opacity-90 font-light">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-[#ece7e1]">01. Plan</span>
              <p>I start by understanding the goal and researching the best way to solve the problem.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-[#ece7e1]">02. Design</span>
              <p>I create a clean and easy to use interface that looks great on all devices.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-[#ece7e1]">03. Code</span>
              <p>I build the solution using modern tools, writing clean and maintainable code.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-[#ece7e1]">04. Deploy</span>
              <p>I launch the project and make sure it runs smoothly and fast for everyone.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 w-full pt-16 mt-8 border-t border-[#ece7e1]/10">
          <div className="Avegas-Royale-Regular text-2xl uppercase tracking-[0.15em] opacity-80">Beyond the Code</div>
          <p className="text-[15px] md:text-[16px] opacity-90 leading-[1.8] max-w-[750px] font-light">
            When I’m not coding, I love exploring the latest AI tools and discovering new ways technology can help us build better. I'm also an avid gamer who enjoys diving into different virtual worlds. These interests keep me excited about the future of tech and help me bring creative ideas to my work.
          </p>
        </div>
        {/* Contact Link */}
        <div className="mt-14 self-start pb-10">
          <Link
            to="mailto:1xcoder@proton.me"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="py-4 px-14 border border-[#ece7e1]/30 text-[#ece7e1] Avegas-Royale-Regular text-xl rounded-full hover:bg-[#ece7e1] hover:text-[#1a1818] transition-all duration-500 ease-in-out"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
