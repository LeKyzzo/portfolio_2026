"use client";

import { ReactNode, useEffect, useState } from "react";

export function ParallaxBackdrop({ children }: { children: ReactNode }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const y = window.scrollY;
        const next = Math.min(y * 0.12, 160);
        setOffset((prev) => (Math.abs(prev - next) < 0.5 ? prev : next));
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="parallax-layer absolute inset-0 blur-3xl"
        style={{
          transform: `translate3d(0, ${offset * -0.4}px, 0)`,
          background:
            "radial-gradient(circle at 20% 30%, rgba(168,141,255,0.25), transparent 35%), " +
            "radial-gradient(circle at 80% 20%, rgba(125,208,255,0.25), transparent 30%)"
        }}
      />
      <div
        className="parallax-layer absolute inset-10 rounded-[32px] border border-white/5 opacity-60"
        style={{
          transform: `translate3d(0, ${offset * 0.25}px, 0)`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
