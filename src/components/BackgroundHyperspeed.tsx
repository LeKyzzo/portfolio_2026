"use client";

import { useEffect, useState } from "react";
import Hyperspeed, { hyperspeedPresets } from "./Hyperspeed";

export function BackgroundHyperspeed() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    // Defer until après le premier paint pour ne pas bloquer le LCP
    let handle: ReturnType<typeof setTimeout>;
    const hasRIC = typeof (window as any).requestIdleCallback === "function";
    if (hasRIC) {
      (window as any).requestIdleCallback(() => setShow(true), { timeout: 800 });
    } else {
      handle = setTimeout(() => setShow(true), 200);
    }
    return () => clearTimeout(handle);
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
