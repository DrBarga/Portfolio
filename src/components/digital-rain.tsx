"use client";

import { useEffect, useRef } from "react";

const glyphs = "0101101<>[]{}#/+=*";

export function DigitalRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!canvas || reducedMotion.matches) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    let frameId = 0;
    let lastFrame = 0;
    const fontSize = 16;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.max(1, Math.floor(width / fontSize));
      drops = Array.from({ length: columns }, () => Math.random() * (height / fontSize));
    };

    const draw = () => {
      context.fillStyle = "rgba(4, 7, 13, 0.12)";
      context.fillRect(0, 0, width, height);
      context.font = `600 ${fontSize}px var(--font-ibm-plex-mono), monospace`;

      drops.forEach((drop, index) => {
        const x = index * fontSize;
        const y = drop * fontSize;
        const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
        const alpha = 0.12 + Math.random() * 0.24;

        context.fillStyle = `rgba(122, 227, 255, ${alpha})`;
        context.fillText(glyph, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[index] = 0;
        } else {
          drops[index] += 0.52 + Math.random() * 0.22;
        }
      });
    };

    const loop = (time: number) => {
      if (time - lastFrame > 55) {
        draw();
        lastFrame = time;
      }

      frameId = window.requestAnimationFrame(loop);
    };

    resize();
    context.fillStyle = "#04070d";
    context.fillRect(0, 0, width, height);
    frameId = window.requestAnimationFrame(loop);

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-60"
    />
  );
}
