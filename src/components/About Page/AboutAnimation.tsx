import React from "react";
import { motion as m } from "framer-motion";

const AboutAnimation: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {/* First animation layer */}
      <m.div
        initial={{ transform: "translateY(0%)" }}
        animate={{ transform: "translateY(-101%)" }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: "easeIn",
        }}
        className="absolute top-0 left-0 w-full h-full bg-[#1a1818] z-50"
      ></m.div>

      {/* Second animation layer */}
      <m.div
        initial={{ transform: "translateY(30%)" }}
        animate={{ transform: "translateY(-101%)" }}
        transition={{
          duration: 1,
          delay: 0,
          ease: "ease",
        }}
        className="absolute top-0 left-0 w-full h-full bg-[#1a1818] z-50"
      ></m.div>
    </div>
  );
};

export default AboutAnimation;
