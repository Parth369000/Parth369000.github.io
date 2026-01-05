import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Cursor Dot - Diamond Shape */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-primary rotate-45 z-50 pointer-events-none mix-blend-difference"
                animate={{
                    x: position.x - 6,
                    y: position.y - 6,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />

            {/* Outer Reticle - Rotating Crosshair */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-primary/50 z-50 pointer-events-none mix-blend-difference flex items-center justify-center"
                style={{ borderRadius: "20%" }}
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: isHovering ? 1.8 : 1,
                    rotate: isHovering ? 90 : 0,
                    borderColor: isHovering ? "hsl(var(--primary))" : "hsla(var(--primary), 0.3)",
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            >
                {/* Crosshair lines */}
                <div className="absolute w-full h-[1px] bg-primary/30" />
                <div className="absolute h-full w-[1px] bg-primary/30" />
            </motion.div>
        </>
    );
};

export default Cursor;
