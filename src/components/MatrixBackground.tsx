import { useEffect, useRef } from "react";

/**
 * Matrix rain of 0s and 1s. Fixed full-viewport, behind all content.
 */
export function MatrixBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = Array(columns)
      .fill(1)
      .map(() => Math.random() * -50);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array(columns)
        .fill(1)
        .map(() => Math.random() * -50);
    };
    window.addEventListener("resize", resize);

    let raf = 0;
    let last = 0;
    const draw = (t: number) => {
      if (t - last > 60) {
        last = t;
        ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
        ctx.fillRect(0, 0, width, height);
        ctx.font = `${fontSize}px JetBrains Mono, monospace`;
        for (let i = 0; i < columns; i++) {
          const char = Math.random() > 0.5 ? "1" : "0";
          const x = i * fontSize;
          const y = drops[i] * fontSize;
          // leading char bright
          ctx.fillStyle = "rgba(23, 5, 218, 0.95)";
          ctx.fillText(char, x, y);
          // trail dim
          ctx.fillStyle = "rgba(23, 5, 218, 0.35)";
          ctx.fillText(Math.random() > 0.5 ? "1" : "0", x, y - fontSize);

          if (y > height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 16% 16%, rgba(1, 48, 151, 1), transparent 28%), radial-gradient(ellipse at 78% 0%, rgba(23,5,218,0.34), transparent 24%), radial-gradient(ellipse at 50% 100%, rgba(23,5,218,0.2), transparent 42%), linear-gradient(180deg, rgba(11,14,82,0.2), rgba(0,0,0,0.72))",
        }}
      />
    </div>
  );
}
