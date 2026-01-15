"use client";

type Props = { position?: "flow" | "hero" };

export default function ScrollMouse({ position = "flow" }: Props) {
  const handleScroll = () => {
    const header = document.querySelector("header");
    const headerH = header ? (header as HTMLElement).offsetHeight : 0;
    const target = window.scrollY + window.innerHeight - headerH;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") handleScroll();
  };

  const containerClass =
    position === "hero"
      ? "absolute left-1/2 top-[80vh] -translate-x-1/2 hidden md:block"
      : "hidden md:flex w-full justify-center mt-8 md:mt-12";

  return (
    <div aria-hidden className={containerClass}>
      <button
        aria-label="Scroll down"
        onClick={handleScroll}
        onKeyDown={onKey}
        className="mouse flex flex-col items-center gap-2 bg-transparent border-0 p-0"
      >
        <div className="mouse-shell relative flex items-center justify-center">
          <div className="mouse-trackball" />
        </div>
        <p className="scroll-text mt-2 text-[11px] uppercase tracking-widest text-white/60">Scroll</p>
      </button>
    </div>
  );
}
