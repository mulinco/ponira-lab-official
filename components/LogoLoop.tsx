"use client";

interface LogoLoopProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  accentColor?: string;
  className?: string;
}

export default function LogoLoop({
  items,
  speed = 22,
  direction = "left",
  pauseOnHover = true,
  accentColor = "#C68D07",
  className = "",
}: LogoLoopProps) {
  const doubled = [...items, ...items];

  return (
    <>
      <style>{`
        @keyframes logo-loop {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .logo-loop-track { animation: logo-loop ${speed}s linear infinite; }
        .logo-loop-track.reverse { animation-direction: reverse; }
        .logo-loop-wrap:hover .logo-loop-track { animation-play-state: ${pauseOnHover ? "paused" : "running"}; }
      `}</style>

      <div
        className={`logo-loop-wrap relative overflow-hidden ${className}`}
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className={`logo-loop-track flex w-max ${direction === "right" ? "reverse" : ""}`}
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 pr-6"
              style={{ whiteSpace: "nowrap" }}
            >
              <span
                className="font-body font-black text-[10px] uppercase tracking-widest"
                style={{ color: `${accentColor}90` }}
              >
                {item}
              </span>
              <span
                className="text-[8px] shrink-0"
                style={{ color: `${accentColor}35` }}
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
