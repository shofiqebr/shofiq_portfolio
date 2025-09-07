import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";
export default function Particle() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
  };

  return (
    <>
      {init && (
       <Particles
  id="tsparticles"
  particlesLoaded={particlesLoaded}
  style={{
    position: "absolute", // or "absolute"
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // keeps it behind other content
  }}
  options={{
    background: {
      color: {
        // value: "#000", // or leave transparent
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#fff" },
      links: {
        color: "#fff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
        outModes: { default: "bounce" },
      },
      number: { density: { enable: true, area: 800 }, value: 160 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  }}
/>

      )}
    </>
  );
}