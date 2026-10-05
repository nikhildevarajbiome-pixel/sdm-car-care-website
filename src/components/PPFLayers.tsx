"use client";

export default function PPFLayers() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Soft glow */}
      <div className="absolute right-[-25%] top-[20%] h-[260px] w-[260px] rounded-full bg-cyan-300/[0.035] blur-[80px] sm:right-[-15%] sm:h-[340px] sm:w-[340px] lg:right-[-5%] lg:top-[15%] lg:h-[420px] lg:w-[420px] lg:blur-[120px]" />

      {/* PPF layered structure */}
      <div className="absolute right-[-18%] top-[12%] h-[75%] w-[72%] sm:right-[-10%] sm:w-[65%] lg:right-[-2%] lg:top-[10%] lg:h-[80%] lg:w-[58%]">
        
        {/* Back layer */}
        <div
          className="absolute left-[8%] top-[8%] h-[72%] w-[78%] rounded-[45%_12%_42%_16%]"
          style={{
            border: "1px solid rgba(190,240,255,0.08)",
            background:
              "linear-gradient(115deg, rgba(255,255,255,0.008), rgba(190,235,255,0.035), rgba(255,255,255,0.008))",
            boxShadow: "inset 0 0 35px rgba(200,240,255,0.015)",
            transform: "rotate(-10deg)",
            animation: "ppfBack 7s ease-in-out infinite",
          }}
        />

        {/* Middle layer */}
        <div
          className="absolute left-[4%] top-[17%] h-[70%] w-[82%] rounded-[42%_14%_38%_18%]"
          style={{
            border: "1px solid rgba(210,245,255,0.13)",
            background:
              "linear-gradient(110deg, rgba(255,255,255,0.01), rgba(210,245,255,0.055), rgba(255,255,255,0.01))",
            boxShadow: "inset 0 0 45px rgba(210,245,255,0.025)",
            transform: "rotate(-4deg)",
            animation: "ppfMiddle 5.5s ease-in-out infinite",
          }}
        />

        {/* Front layer */}
        <div
          className="absolute left-[8%] top-[27%] h-[65%] w-[86%] rounded-[38%_18%_35%_20%]"
          style={{
            border: "1px solid rgba(235,255,255,0.22)",
            background:
              "linear-gradient(105deg, rgba(255,255,255,0.012), rgba(220,250,255,0.075), rgba(255,255,255,0.012))",
            boxShadow:
              "inset 0 0 45px rgba(255,255,255,0.025), 0 0 35px rgba(130,220,255,0.025)",
            transform: "rotate(3deg)",
            animation: "ppfFront 4.5s ease-in-out infinite",
          }}
        />

        {/* Moving reflection */}
        <div
          className="absolute left-[8%] top-[23%] h-[2px] w-[72%] rounded-full bg-white/25 blur-[1px]"
          style={{
            animation: "ppfReflection 4s ease-in-out infinite",
          }}
        />

        {/* Edge reflection */}
        <div
          className="absolute right-[1%] top-[11%] h-14 w-24 rounded-[50%] sm:h-16 sm:w-28 lg:h-20 lg:w-36"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.16)",
            transform: "rotate(12deg)",
            animation: "ppfEdge 3.5s ease-in-out infinite",
          }}
        />

        {/* Label */}
        <div className="absolute bottom-[5%] right-[5%] hidden items-center gap-2 sm:flex lg:gap-3">
          <span className="h-px w-6 bg-cyan-100/20 lg:w-10" />

          <span className="text-[7px] font-semibold uppercase tracking-[0.22em] text-cyan-100/20 lg:text-[9px] lg:tracking-[0.3em]">
            Paint Protection Film
          </span>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes ppfBack {
          0%, 100% {
            transform: rotate(-10deg) translate3d(0, 0, 0);
          }
          50% {
            transform: rotate(-7deg) translate3d(8px, -5px, 0);
          }
        }

        @keyframes ppfMiddle {
          0%, 100% {
            transform: rotate(-4deg) translate3d(0, 0, 0);
          }
          50% {
            transform: rotate(-1deg) translate3d(-6px, 5px, 0);
          }
        }

        @keyframes ppfFront {
          0%, 100% {
            transform: rotate(3deg) translate3d(0, 0, 0);
          }
          50% {
            transform: rotate(5deg) translate3d(5px, -7px, 0);
          }
        }

        @keyframes ppfReflection {
          0%, 100% {
            opacity: 0.2;
            transform: translateX(-10px);
          }
          50% {
            opacity: 0.55;
            transform: translateX(45px);
          }
        }

        @keyframes ppfEdge {
          0%, 100% {
            opacity: 0.2;
            transform: rotate(12deg) translateX(0);
          }
          50% {
            opacity: 0.5;
            transform: rotate(15deg) translateX(-8px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}