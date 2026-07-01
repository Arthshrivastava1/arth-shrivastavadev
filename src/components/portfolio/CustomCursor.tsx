import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // disable on touch devices
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);

    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let rx = x, ry = y;

    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    let raf = 0;
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a,button,[data-cursor='hover']"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,opacity,border-color] duration-200"
        style={{
          width: hovering ? 56 : 34,
          height: hovering ? 56 : 34,
          border: "1px solid rgba(139,92,246,0.6)",
          boxShadow: "0 0 24px rgba(59,130,246,0.5)",
          mixBlendMode: "screen",
          marginLeft: hovering ? -28 : -17,
          marginTop: hovering ? -28 : -17,
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "linear-gradient(135deg,#3B82F6,#8B5CF6,#06B6D4)",
          marginLeft: -4,
          marginTop: -4,
          boxShadow: "0 0 14px rgba(6,182,212,0.9)",
        }}
      />
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
}
