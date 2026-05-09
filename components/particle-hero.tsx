"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export function ParticleHero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (mounted) setReady(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: 80, density: { enable: true } },
          color: { value: "#00d4ff" },
          links: {
            enable: true,
            color: "#00d4ff",
            distance: 140,
            opacity: 0.28,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.55,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          opacity: { value: { min: 0.12, max: 0.36 } },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: { enable: true },
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.55 } },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
}
