// src/components/PointerDot.tsx
import { useEffect, useRef } from "react";


/* Used Chat GPT */

export default function PointerDot() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const state = {
      w: 0,
      h: 0,
      x: 0,
      y: 0,
      raf: 0 as number,
    };

    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      state.w = window.innerWidth;
      state.h = window.innerHeight;

      canvas.width = Math.floor(state.w * dpr);
      canvas.height = Math.floor(state.h * dpr);
      canvas.style.width = `${state.w}px`;
      canvas.style.height = `${state.h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // clear any old trail after resize
      ctx.clearRect(0, 0, state.w, state.h);
    };

    const onMove = (e: MouseEvent) => {
      // Follow exactly (no smoothing/lag)
      state.x = e.clientX;
      state.y = e.clientY;
    };

    const draw = () => {
      // Less afterglow (more clearing each frame)
      // Increase the alpha here to leave *more* trail; decrease for *less* trail.
      ctx.fillStyle = "rgba(0,0,0,0.22)";
      ctx.fillRect(0, 0, state.w, state.h);

      // Smaller glow + pointer
      const glowRadius = 9; // was 14
      const coreRadius = 1.6; // was 2.4

      const gradient = ctx.createRadialGradient(
        state.x,
        state.y,
        0,
        state.x,
        state.y,
        glowRadius
      );
      gradient.addColorStop(0, "rgba(180,230,255,0.85)");
      gradient.addColorStop(0.45, "rgba(120,180,255,0.28)");
      gradient.addColorStop(1, "rgba(120,180,255,0.0)");

      // Glow
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(state.x, state.y, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // Core dot
      ctx.fillStyle = "rgba(200,240,255,0.95)";
      ctx.beginPath();
      ctx.arc(state.x, state.y, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      state.raf = requestAnimationFrame(draw);
    };

    resize();

    // Start centered (so it's visible before first mousemove)
    state.x = window.innerWidth / 2;
    state.y = window.innerHeight / 2;

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });

    state.raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(state.raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        mixBlendMode: "screen",
      }}
    />
  );
}
