"use client";

import { useState } from "react";
import Photo from "./Photo";
import Lightbox from "./Lightbox";
import { gallery, galleryFilters } from "@/data/siteData";

export default function Gallery() {
  const [f, setF] = useState<string>("All");
  const [lb, setLb] = useState<number | null>(null);

  const list = gallery.filter((g) => f === "All" || g.cat === f);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#0b0d11] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-red/[0.04] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section heading */}
        <div className="mb-10 max-w-2xl sm:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red">
              Our Portfolio
            </span>
          </div>

          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Work That
            <span className="block text-red">
              Speaks for Itself.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            Explore automotive care and detailing work from our Basaveshwar
            Nagar workshop. Select a photo to view it in detail.
          </p>
        </div>

        {/* Category filters */}
        <div
          role="group"
          aria-label="Gallery filter"
          className="noscroll mb-8 flex gap-2 overflow-x-auto pb-2"
        >
          {galleryFilters.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={f === c}
              onClick={() => {
                setF(c);
                setLb(null);
              }}
              className={`min-h-11 flex-none rounded-full border px-5 text-xs font-semibold transition-all duration-300 ${
                f === c
                  ? "border-red bg-red text-white shadow-lg shadow-red/20"
                  : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/25 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        {list.length > 0 ? (
          <div className="grid grid-flow-dense grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-4">
            {list.map((g, i) => (
              <button
                key={g.src}
                type="button"
                onClick={() => setLb(i)}
                aria-label={`Enlarge: ${g.alt}`}
                className={`group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#151820] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red ${
                  i % 7 === 0
                    ? "col-span-2 row-span-2 aspect-square"
                    : "aspect-square"
                }`}
              >
                <Photo
                  src={g.src}
                  alt={g.alt}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                  priority={i < 2}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-3 sm:p-4">
                  <span className="text-xs font-medium text-white/90 sm:text-sm">
                    {g.alt}
                  </span>

                  <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-white/30 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    ↗
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-16 text-center">
            <p className="font-display text-lg font-semibold text-white">
              Photos coming soon
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              We’re preparing our workshop gallery.
            </p>
          </div>
        )}

        {/* Photo count */}
        {list.length > 0 && (
          <p className="mt-5 text-right text-xs tracking-wide text-zinc-500">
            {list.length} {list.length === 1 ? "PHOTO" : "PHOTOS"}
          </p>
        )}
      </div>

      {/* Lightbox */}
      {lb !== null && (
        <Lightbox
          items={list}
          index={lb}
          onChange={setLb}
          onClose={() => setLb(null)}
        />
      )}
    </section>
  );
}