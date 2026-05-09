"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

export function MagneticLink({ href, children, className }: { href: string; children: ReactNode; className: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.35 });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - rect.left - rect.width / 2;
    const relativeY = event.clientY - rect.top - rect.height / 2;
    x.set(Math.max(-4, Math.min(4, relativeX * 0.08)));
    y.set(Math.max(-4, Math.min(4, relativeY * 0.08)));
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span style={{ x: springX, y: springY }} className="inline-flex" onMouseLeave={reset}>
      <Link href={href} className={className} onMouseMove={handleMove} onBlur={reset}>
        {children}
      </Link>
    </motion.span>
  );
}
