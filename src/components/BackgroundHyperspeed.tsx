"use client";

import Hyperspeed, { hyperspeedPresets } from "./Hyperspeed";

export function BackgroundHyperspeed() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0">
        <Hyperspeed effectOptions={hyperspeedPresets.highway} />
      </div>
    </div>
  );
}
