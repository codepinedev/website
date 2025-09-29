"use client";

import { useAnimationFrame } from "framer-motion";
import { Fragment, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface MotionMarqueeProps {
  items: React.ReactNode[];
  className?: string;
  gapClassName?: string;
  speedPxPerSecond?: number;
  pauseOnHover?: boolean;
}

/**
 * Horizontally scrolling marquee that loops infinitely using a transform-x animation.
 * Duplicates the content to ensure seamless wrapping.
 */
export function MotionMarquee({
  items,
  className,
  gapClassName = "gap-4",
  speedPxPerSecond = 80,
  pauseOnHover = true,
}: MotionMarqueeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Render the row twice for seamless wrap-around
  const content = useMemo(() => {
    return (
      <Fragment>
        {items.map((node, index) => (
          <Fragment key={`a-${index}`}>{node}</Fragment>
        ))}
        {items.map((node, index) => (
          <Fragment key={`b-${index}`}>{node}</Fragment>
        ))}
      </Fragment>
    );
  }, [items]);

  // Imperative animation using useAnimationFrame for smooth, independent timing
  const xRef = useRef(0);
  const lastWidthRef = useRef(0);

  useAnimationFrame((_, deltaMs) => {
    const container = containerRef.current;
    if (!container)
      return;
    const row = container.firstElementChild as HTMLDivElement | null;
    if (!row)
      return;

    const totalWidth = row.scrollWidth / 2;
    lastWidthRef.current = totalWidth;

    const pixelsPerMs = (pauseOnHover && isHovering) ? 0 : speedPxPerSecond / 1000;
    xRef.current -= pixelsPerMs * deltaMs;

    if (xRef.current <= -totalWidth) {
      xRef.current += totalWidth; // wrap seamlessly
    }

    row.style.transform = `translateX(${xRef.current}px)`;
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setIsHovering(true)}
      onMouseLeave={() => pauseOnHover && setIsHovering(false)}
    >
      <div className={cn("flex whitespace-nowrap will-change-transform", gapClassName)}>
        {content}
      </div>
    </div>
  );
}

export default MotionMarquee;
