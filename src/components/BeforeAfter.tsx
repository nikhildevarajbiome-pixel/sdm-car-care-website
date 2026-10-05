"use client";

import { useState } from "react";
import Photo from "./Photo";
import { beforeAfter } from "@/data/siteData";

function Pair({
  label,
  before,
  after,
}: {
  label: string;
  before: string;
  after: string;
}) {
  const [v, setV] = useState(50);

  return (
    <figure className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#151820] transition-all duration-500 hover:border-red/30 hover:shadow-xl hover:shadow-black/30">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#101217]">
        {/* After image */}
        <Photo
          src={after}
          alt={`${label} after`}
          className="absolute inset-0"
          sizes="(max-width:768px) 100vw, 50vw"
        />

        {/* Before image */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - v}% 0 0)` }}
        >
          <Photo
            src={before}
            alt={`${label} before`}
            className="absolute inset-0"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </div>

        {/* Labels */}
        <span className="absolute left-4 top-4 rounded-md border border-white/20 bg-black/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          Before
        </span>

        <span className="absolute right-4 top-4 rounded-md border border-white/20 bg-black/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          After
        </span>

        {/* Comparison divider */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]"
          style={{ left: `${v}%` }}
        >
          <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-red text-sm font-bold text-white shadow-lg">
            ↔
          </div>
        </div>

        {/* Slider control */}
        <input
          type="range"
          min={0}
          max={100}
          value={v}
          onChange={(e) => setV(Number(e.target.value))}
          aria-label={`${label} before and after comparison`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />

        {/* Bottom hint */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm">
          Drag to compare
        </div>
      </div>

      <figcaption className="flex items-center justify-between gap-3 p-5">
        <div>
          <h3 className="font-display text-base font-semibold text-white sm:text-lg">
            {label}
          </h3>
          <p className="mt-1 text-xs text-zinc-500">
            Professional automotive care
          </p>
        </div>

        <span className="text-xl text-red">✦</span>
      </figcaption>
    </figure>
  );
}

export default function BeforeAfter() {
  if (!beforeAfter.length) return null;

  return (
    <section
      id="before-after"
      className="relative overflow-hidden bg-[#0b0d11] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-red/[0.04] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-2xl sm:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red">
              The Transformation
            </span>
          </div>

          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            See the
            <span className="block text-red">Difference.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            Explore the transformation with our before and after comparisons.
            Drag the slider to see the difference.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {beforeAfter.map((p) => (
            <Pair key={p.label} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}