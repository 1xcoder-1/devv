import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCursorContext } from "../../context/CursorContext";

interface TiltLinkProps {
    to: string;
    title: string;
    label: string;
    className?: string;
}

const TiltLink: React.FC<TiltLinkProps> = ({ to, title, label, className }) => {
    const { mouseOverEvent, mouseOutEvent } = useCursorContext();
    const ref = useRef<HTMLDivElement>(null);

    // Motion values for X and Y rotation
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for the rotation
    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    // Transform motion values to rotation degrees
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    // Motion values for glare position
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);
    const glareOpacity = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
        glareOpacity.set(0.15);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        glareOpacity.set(0);
        mouseOutEvent();
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={mouseOverEvent}
            className="relative flex items-center justify-start cursor-pointer w-fit overflow-visible"
            style={{ perspective: "1000px" }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="w-full h-full relative"
            >
                {/* Glare effect */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.4) 0%, transparent 80%)",
                        opacity: glareOpacity,
                        pointerEvents: "none",
                        zIndex: 10,
                        "--x": glareX,
                        "--y": glareY,
                    } as any}
                />

                <Link
                    to={to}
                    title={title}
                    className={`${className} inline-block transition-all duration-300 hover:opacity-80`}
                    style={{ transform: "translateZ(30px)" }}
                >
                    {label}
                </Link>
            </motion.div>
        </div>
    );
};

export default TiltLink;
