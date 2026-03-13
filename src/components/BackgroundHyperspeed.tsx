"use client";

import { useEffect, useRef, useState } from "react";
import Hyperspeed, { hyperspeedPresets } from "./Hyperspeed";

export function BackgroundHyperspeed() {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMq = window.matchMedia("(max-width: 767px)");
    if (mq.matches || mobileMq.matches) return;

    // Defer until après le premier paint pour ne pas bloquer le LCP
    const hasRIC = typeof (window as any).requestIdleCallback === "function";
    if (hasRIC) {
      idleRef.current = (window as any).requestIdleCallback(() => setShow(true), { timeout: 800 });
    } else {
      timeoutRef.current = setTimeout(() => setShow(true), 200);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (idleRef.current !== null && typeof (window as any).cancelIdleCallback === "function") {
        (window as any).cancelIdleCallback(idleRef.current);
      }
    };
  }, []);

  if (!show) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <Hyperspeed effectOptions={hyperspeedPresets.highway} />
      </div>
    </div>
  );
}
