"use client";

import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
    };

    handler({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 } as MouseEvent);
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return null;
}
