import { motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";

interface SkillCategory {
  title: string;
  skills: string[];
  isHighlight?: boolean;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Architecture",
    skills: ["Next.js", "React", "Astro", "TypeScript", "Tailwind CSS", "ShadCN", "Framer Motion", "GSAP", "Zustand", "Zod"],
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Express", "Prisma", "Drizzle ORM", "REST APIs", "Socket.IO", "Inngest"],
  },
  {
    title: "Database & Cloud",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "AWS", "Docker", "Vercel", "Cloudflare"],
  },
  {
    title: "AI & Automation",
    skills: ["Gemini", "OpenAI API", "LLMs", "AI Agents", "Agentic AI", "MCP"],
  },
  {
    title: "Apps & Dev Tools",
    skills: ["React Native", "Expo", "Electron.js", "Git", "GitHub", "Figma", "Cursor", "VS Code"],
  },
];

const SkillBadge: React.FC<{ skill: string; isHighlight?: boolean }> = ({ skill, isHighlight }) => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <m.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseOver={mouseOverEvent}
      onMouseOut={mouseOutEvent}
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`relative group overflow-hidden px-4 py-2 text-xs sm:text-sm rounded-full border transition-all duration-300 cursor-pointer inline-flex items-center gap-2 select-none ${isHighlight
        ? "bg-gradient-to-r from-[#ece7e1]/[0.12] via-[#ece7e1]/[0.06] to-[#ece7e1]/[0.12] text-[#ece7e1] border-[#ece7e1]/35 font-medium shadow-[0_4px_15px_rgba(236,231,225,0.06)]"
        : "bg-[#ece7e1]/[0.035] text-[#ece7e1]/90 border-[#ece7e1]/15 hover:border-[#ece7e1]/60"
        }`}
      style={{
        boxShadow: isHovered
          ? isHighlight
            ? "0px 12px 30px rgba(236, 231, 225, 0.25), 0px 0px 15px rgba(255, 255, 255, 0.15)"
            : "0px 10px 25px rgba(236, 231, 225, 0.18), 0px 0px 10px rgba(236, 231, 225, 0.1)"
          : undefined,
      }}
    >
      {/* Dynamic Hover Sheen Light Sweep Effect */}
      <m.div
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none skew-x-12"
      />

      {/* Glowing Dot Accent */}
      <span
        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isHighlight
          ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
          : isHovered
            ? "bg-[#ece7e1] scale-125 shadow-[0_0_8px_#ece7e1]"
            : "bg-[#ece7e1]/30 group-hover:bg-[#ece7e1]"
          }`}
      />

      {/* Skill Label */}
      <span className="relative z-10 font-normal tracking-wide transition-colors duration-200 group-hover:text-white group-hover:font-medium">
        {skill}
      </span>
    </m.div>
  );
};

const CERTIFICATIONS = [
  { text: "Frontend Developer Certification", issuer: "FreeCodeCamp", file: "/Legacy%20Frontend.png" },
  { text: "Back End Development and APIs Certification", issuer: "FreeCodeCamp", file: "/Legacy%20Backend.png" },
  { text: "Full Stack Development & Programming Certification", issuer: "GeeksforGeeks", file: "/fullstackdev.png" },
  { text: "Frontend Developer Certification", issuer: "Simplilearn", file: "/fronted%20Developer_page-0001.jpg" },
  { text: "Web Development Fundamentals", issuer: "3+ Years Experience", file: null },
];

const WORK_STEPS = [
  {
    step: "01",
    title: "Plan",
    description: "Deeply understand project goals, define technical scope, and research optimal architectural solutions.",
  },
  {
    step: "02",
    title: "Design",
    description: "Craft responsive, user-centered interfaces with attention to visual detail, typography, and micro-interactions.",
  },
  {
    step: "03",
    title: "Code",
    description: "Engineer scalable, high-performance web applications using modern frameworks and clean code principles.",
  },
  {
    step: "04",
    title: "Deploy",
    description: "Rigorously test performance, optimize bundle size, and launch seamless, reliable digital products.",
  },
];

const QUICK_STATS = [
  { label: "Experience", target: 2, suffix: "+ Years" },
  { label: "Tech Stack", target: 20, suffix: "+ Tools" },
  { label: "Certifications", target: 4, suffix: " Earned" },
  { label: "Commitment", target: 100, suffix: "% Quality" },
];

const CounterNumber: React.FC<{ target: number; suffix?: string; delay?: number }> = ({
  target,
  suffix = "",
  delay = 1.0,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1600;
    let animFrame: number;

    const timer = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));
        if (progress < 1) {
          animFrame = window.requestAnimationFrame(step);
        }
      };
      animFrame = window.requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      if (animFrame) window.cancelAnimationFrame(animFrame);
    };
  }, [target, delay]);

  return <span>{count}{suffix}</span>;
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const AboutPage: React.FC = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="relative w-full min-h-screen bg-[#1a1818] text-[#ece7e1] flex flex-col items-center pt-28 pb-24 px-6 md:px-0 overflow-x-hidden select-text">
      {/* Ambient background glow */}
      <div className="apple-glow-orb opacity-30 pointer-events-none" />

      <div className="w-full max-w-[900px] flex flex-col items-start gap-16 md:ml-20 lg:ml-40 xl:ml-0 z-10">

        {/* About Header */}
        <div className="overflow-hidden w-full relative">
          <m.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
            className="Avegas-Royale-Regular text-[25vw] sm:text-[20vw] md:text-[180px] leading-[0.8] mt-8 -ml-1 md:-ml-2 text-[#ece7e1]"
          >
            About
          </m.div>

          <m.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="h-[1px] w-full bg-[#ece7e120] origin-left mt-6"
          />
        </div>

        {/* Subheader Title */}
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {"I'm Abdullah. A Developer, AI Builder and Tech Explorer.".split(" ").map((word, i) => (
            <div key={i} className="overflow-hidden">
              <m.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.7 + (i * 0.04),
                }}
                className="block Avegas-Royale-Regular text-3xl md:text-[42px] leading-[1.2] text-[#ece7e1]"
              >
                {word}
              </m.span>
            </div>
          ))}
        </div>

        {/* Start-of-Page Stats Revealing Section with Animated Counter */}
        <div className="w-full relative py-4 -mt-6 flex flex-col gap-4">
          <m.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, delay: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="h-[1px] w-full bg-[#ece7e1]/20 origin-left"
          />

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 sm:gap-6 py-2">
            {QUICK_STATS.map((stat, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-1 overflow-hidden ${idx % 2 === 1 ? "border-l border-[#ece7e1]/15 pl-4" : "pl-0 sm:border-l sm:border-[#ece7e1]/15 sm:pl-4 sm:first:border-l-0 sm:first:pl-0"
                  }`}
              >
                <m.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 0.6 }}
                  transition={{ duration: 0.6, delay: 1.0 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
                  className="block text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-[#ece7e1] font-medium whitespace-nowrap"
                >
                  {stat.label}
                </m.span>

                <m.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1.1 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
                  className="block Avegas-Royale-Regular text-xl sm:text-2xl md:text-3xl text-[#ece7e1] whitespace-nowrap"
                >
                  <CounterNumber target={stat.target} suffix={stat.suffix} delay={1.1 + (idx * 0.1)} />
                </m.span>
              </div>
            ))}
          </div>

          <m.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="h-[1px] w-full bg-[#ece7e1]/20 origin-right"
          />
        </div>

        {/* Body Text Paragraphs */}
        <div className="flex flex-col gap-8 text-[15px] md:text-[17px] leading-[1.85] text-[#ece7e1]/85 max-w-[760px] font-light">
          {[
            "I am a developer and designer who loves building things that work. Whether it’s designing a clean interface or writing the code behind it, I enjoy the entire process of creating digital products from scratch.",
            "I specialize in turning big ideas into simple, high-performing websites. Whether it's a small landing page or a complex application, I focus on making it fast, beautiful, and easy for everyone to use.",
            "I believe great software comes from understanding what the user needs, choosing the right tech stack, and constantly improving the product. I’m always learning, always building, and always looking for the next challenge in web development and design."
          ].map((para, i) => (
            <m.p
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
              custom={i * 0.12}
            >
              {para}
            </m.p>
          ))}
        </div>

        {/* Guiding Mindset Quote Section - Jack Ma */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          custom={0.15}
          whileHover={{ y: -4, borderColor: "rgba(236, 231, 225, 0.3)" }}
          transition={{ duration: 0.4 }}
          onMouseOver={mouseOverEvent}
          onMouseOut={mouseOutEvent}
          className="w-full my-6 p-8 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[#ece7e1]/[0.05] via-[#ece7e1]/[0.02] to-transparent border border-[#ece7e1]/15 backdrop-blur-md relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer"
        >
          <div className="relative z-10 flex flex-col gap-5 text-left">
            <div className="flex items-center justify-between">
              <span className="text-[11px] tracking-[0.25em] text-[#ece7e1]/50 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ece7e1]/60" />
                Guiding Mindset
              </span>
              <span className="text-xs tracking-[0.18em] px-3.5 py-1 rounded-full border border-[#ece7e1]/20 bg-[#ece7e1]/[0.05] text-[#ece7e1]/80 font-medium">
                Jack Ma
              </span>
            </div>

            <blockquote className="Avegas-Royale-Italic italic text-xl sm:text-2xl md:text-3xl leading-relaxed text-[#ece7e1] text-left pt-1">
              "Today is difficult, tomorrow is much more difficult, but the day after tomorrow is beautiful. Most people die tomorrow evening."
            </blockquote>

            <div className="h-[1px] w-full bg-gradient-to-r from-[#ece7e1]/20 via-[#ece7e1]/10 to-transparent my-1" />

            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] text-[#ece7e1]/80 font-light max-w-[750px] text-left">
              I live by this mindset every day. Building great digital products requires resilience through tough challenges, learning from every obstacle, and pushing forward with passion to achieve long-term success.
            </p>
          </div>
        </m.div>

        {/* Experience & Certifications Section */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          custom={0.1}
          className="flex flex-col gap-6 sm:gap-8 w-full pt-0 sm:pt-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 sm:px-0">
            <h3 className="Avegas-Royale-Regular text-3xl sm:text-4xl text-[#ece7e1]">
              Experience & Certifications
            </h3>
          </div>

          <div className="flex flex-col gap-8 w-full">
            {/* Student & Education Focus Card */}
            <div className="w-full p-6 md:p-7 rounded-2xl bg-[#ece7e1]/[0.025] border border-[#ece7e1]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden">
              <div className="flex flex-col gap-2 max-w-full sm:max-w-[78%] overflow-hidden break-words">
                <span className="text-[11px] uppercase tracking-widest text-[#ece7e1]/50 font-semibold">Education & Experience</span>
                <h4 className="text-xl sm:text-2xl text-[#ece7e1] font-normal tracking-wide leading-snug break-words">
                  Computer Science & Web Development Student
                </h4>
                <p className="text-xs sm:text-sm text-[#ece7e1]/70 font-light leading-relaxed break-words">
                  Student Developer Experience focused on Full Stack Web Architecture.
                </p>
              </div>
              <span className="text-xs text-[#ece7e1]/80 bg-[#ece7e1]/[0.06] border border-[#ece7e1]/10 px-3.5 py-1.5 rounded-full w-fit flex-shrink-0 self-start sm:self-center">
                3+ Years Practice
              </span>
            </div>

            {/* Certifications Grid */}
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-[#ece7e1]/50 font-semibold mb-1">
                Earned Certifications:
              </span>

              <div className="grid grid-cols-1 gap-3">
                {CERTIFICATIONS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#ece7e1]/[0.02] border border-[#ece7e1]/10 hover:border-[#ece7e1]/25 hover:bg-[#ece7e1]/[0.035] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-[#ece7e1] font-medium text-[15px] sm:text-[16px] leading-snug">
                        {item.text}
                      </span>
                      <span className="text-[11px] text-[#ece7e1]/60 bg-[#ece7e1]/[0.06] border border-[#ece7e1]/10 px-2.5 py-0.5 rounded-full w-fit">
                        {item.issuer}
                      </span>
                    </div>

                    {item.file ? (
                      <a
                        href={item.file}
                        download
                        onMouseOver={mouseOverEvent}
                        onMouseOut={mouseOutEvent}
                        className="text-xs text-[#ece7e1]/80 group-hover:text-white underline underline-offset-4 decoration-[#ece7e1]/30 hover:decoration-white transition-all flex items-center gap-1.5 w-fit flex-shrink-0 pt-1 sm:pt-0"
                      >
                        <span>Download Certificate</span>
                        <span className="text-sm font-sans">↗</span>
                      </a>
                    ) : (
                      <span className="text-xs text-[#ece7e1]/40 italic flex-shrink-0">Verified Milestone</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </m.div>

        {/* Skills Section */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          custom={0.1}
          className="flex flex-col gap-6 sm:gap-8 w-full pt-4 sm:pt-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 sm:px-0">
            <h3 className="Avegas-Royale-Regular text-3xl sm:text-4xl text-[#ece7e1]">
              Skills & Tech Stack
            </h3>

          </div>

          <div className="flex flex-col divide-y divide-[#ece7e1]/10 border-t border-b border-[#ece7e1]/10">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="py-6 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8 hover:bg-[#ece7e1]/[0.015] px-2 rounded-xl transition-colors duration-300"
              >
                <div className="w-56 flex-shrink-0 flex items-center gap-2.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ece7e1]/50" />
                  <span className="text-[14px]  tracking-[0.1em] text-[#ece7e1]/70 font-normal">
                    {cat.title}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5 flex-grow">
                  {cat.skills.map((skill, sIdx) => (
                    <SkillBadge key={sIdx} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </m.div>

        {/* How I Work Section */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          custom={0.1}
          className="flex flex-col gap-6 sm:gap-8 w-full pt-4 sm:pt-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 sm:px-0">
            <h3 className="Avegas-Royale-Regular text-3xl sm:text-4xl text-[#ece7e1]">
              How I Work
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-2">
            {WORK_STEPS.map((item, idx) => (
              <m.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#ece7e1]/[0.04] via-[#ece7e1]/[0.015] to-transparent border border-[#ece7e1]/12 hover:border-[#ece7e1]/35 backdrop-blur-md transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.3)] group relative overflow-hidden flex flex-col justify-between gap-6 cursor-pointer"
              >
                {/* Top Animated Glow Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ece7e1]/40 via-[#ece7e1]/80 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex items-center justify-between">
                  <span className="Avegas-Royale-Regular text-3xl sm:text-4xl text-[#ece7e1] tracking-wide">
                    {item.title}
                  </span>
                  <span className="Avegas-Royale-Regular text-4xl sm:text-5xl text-[#ece7e1]/20 group-hover:text-[#ece7e1]/80 transition-colors duration-500">
                    {item.step}
                  </span>
                </div>

                <p className="text-[14px] sm:text-[15px] text-[#ece7e1]/75 leading-relaxed font-light">
                  {item.description}
                </p>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Beyond the Code Section */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          custom={0.1}
          className="flex flex-col gap-4 w-full pt-6 sm:pt-14 border-t border-[#ece7e1]/10"
        >
          <h3 className="Avegas-Royale-Regular text-3xl sm:text-4xl text-[#ece7e1] px-3 sm:px-0">
            Beyond the Code
          </h3>

          <p className="text-[15px] md:text-[17px] text-[#ece7e1]/85 leading-[1.85] max-w-[860px] font-light">
            When I’m not coding, I love exploring the latest AI tools and discovering new ways technology can help us build better. I'm also an avid gamer who enjoys diving into different virtual worlds. These interests keep me excited about the future of tech and help me bring creative ideas to my work.
          </p>
        </m.div>

        {/* Contact Link */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.1}
          className="mt-0 self-start"
        >
          <Link
            to="mailto:1xcoder@proton.me"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="group inline-flex items-center gap-3 py-4 px-12 border border-[#ece7e1]/30 text-[#ece7e1] Avegas-Royale-Regular text-xl rounded-full hover:bg-[#ece7e1] hover:text-[#1a1818] transition-all duration-500 ease-in-out"
          >
            <span>Contact Me</span>
            <span className="transform group-hover:translate-x-1.5 transition-transform duration-300 font-sans text-sm">→</span>
          </Link>
        </m.div>

      </div>
    </div>
  );
};

export default AboutPage;
