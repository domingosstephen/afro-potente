"use client";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export { Reveal, StaggerChildren, StaggerItem };

/**
 * Client-side animated wrapper for server components.
 * Use this to wrap sections in server pages that need scroll animations.
 */
export function AnimatedSection({
  children,
  className,
  direction = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
}) {
  return (
    <Reveal direction={direction} delay={delay} className={className}>
      {children}
    </Reveal>
  );
}
