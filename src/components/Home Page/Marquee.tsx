import React from "react";
import { motion } from "framer-motion";

const Marquee: React.FC = () => {

    const marqueeText = "• Full Stack Developer • Web Designer • Problem Solver • TypeScript Enthusiast • Clean Code Advocate";

    return (
        <div className="absolute bottom-20 left-0 w-full overflow-hidden whitespace-nowrap py-10 opacity-10 pointer-events-none -z-10 xl1100:hidden">
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="inline-block text-[20vw] font-bold uppercase tracking-normal Avegas-Royale-Regular leading-none"
            >
                {marqueeText} {marqueeText} {marqueeText} {marqueeText}
            </motion.div>
        </div>
    );
};

export default Marquee;
