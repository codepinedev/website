"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Needle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  rotation: number;
  size: number;
  opacity: number;
}

interface FallingNeedlesProps {
  count?: number;
}

export function FallingNeedles({ count = 20 }: FallingNeedlesProps) {
  const [needles, setNeedles] = useState<Needle[]>([]);

  useEffect(() => {
    const generated: Needle[] = Array.from({ length: count }, (_, i): Needle => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 8,
      rotation: Math.random() * 360,
      size: 16 + Math.random() * 16,
      opacity: 0.15 + Math.random() * 0.25,
    }));
    setNeedles(generated);
  }, [count]);

  if (needles.length === 0)
    return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {needles.map(needle => (
        <motion.div
          key={needle.id}
          className="absolute"
          style={{
            left: `${needle.x}%`,
            top: -30,
          }}
          animate={{
            y: ["0vh", "105vh"],
            x: [0, 40, -30, 20, 0],
            rotate: [needle.rotation, needle.rotation + 360],
          }}
          transition={{
            duration: needle.duration,
            delay: needle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Pine needle cluster - more visible */}
          <svg
            width={needle.size}
            height={needle.size * 0.6}
            viewBox="0 0 32 20"
            style={{ opacity: needle.opacity }}
            className="text-primary"
          >
            {/* Three needles in a cluster */}
            <path
              d="M0 10 Q8 6 16 10 Q24 14 32 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6 Q12 2 20 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8 14 Q16 18 24 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export default FallingNeedles;
