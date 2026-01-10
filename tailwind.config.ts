import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        primary: "#7dd0ff",
        accent: "#a68dff",
        surface: "#0b0c10",
        border: "#1c1f26"
      },
      boxShadow: {
        glass: "0 20px 70px rgba(0,0,0,0.55)",
        glow: "0 0 40px rgba(125, 208, 255, 0.25)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(255,255,255,0.06) 1px, transparent 1px)",
        noise: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 200 200%27%3E%3Cfilter id=%27n%27 x%27-20%27 y%27-20%27 width%27140%25%27 height%27140%25%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.7%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.2%27/%3E%3C/svg%3E')"
      }
    }
  },
  plugins: []
};

export default config;
