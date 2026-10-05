"use client";

import { useRef, useState } from "react";
import Photo from "./Photo";
import Lightbox from "./Lightbox";

export default function ServiceSlider({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  const [lb, setLb] = useState<number | null>(null);

  const items = images.map((src, i) => ({
    src,
    alt: `${title} at SDM Car Care, photo ${i + 1}`,
  }));

  const goTo = (index: number) => {
    if (!items.length || !ref.current) return;

    const next = (index + items.length) % items.length;

    ref.current.scrollTo({
      left: next * ref.current.clientWidth,
      behavior: "smooth",
    });

    setN(next);
  };

  const getDistance = (index: number) => {
    const total = items.length;

    if (total <= 1) return 0;

    const direct = Math.abs(index - n);
    return Math.min(direct, total - direct);
  };

  const b =
    "grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/70 text-xl text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-red hover:bg-red active:scale-90";

  if (!items.length) return null;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151820] shadow-2xl shadow-black/20">
      {/* Photo carousel */}
      <div
        ref={ref}
        role="region"
        aria-label={`${title} photos`}
        className="noscroll flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
        onScroll={(e) => {
          const width = e.currentTarget.clientWidth;

          if (width) {
            const next = Math.round(
              e.currentTarget.scrollLeft / width
            );

            if (next !== n) {
              setN(next % items.length);
            }
          }
        }}
      >
        {items.map((it, i) => {
          const shouldLoad = getDistance(i) <= 1;

          return (
            <button
              key={it.src}
              onClick={() => setLb(i)}
              aria-label={`Enlarge ${title} photo ${i + 1}`}
              className="relative aspect-[4/3] w-full flex-none snap-center overflow-hidden"
            >
              {shouldLoad ? (
                <Photo
                  src={it.src}
                  alt={it.alt}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              ) : (
                <div className="h-full w-full bg-[#151820]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Subtle image overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

      {/* Carousel controls */}
      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3">
        <button
          type="button"
          className={b}
          onClick={() => goTo(n - 1)}
          aria-label="Previous photo"
        >
          ‹
        </button>

        <span className="grid h-10 min-w-[76px] place-items-center rounded-full border border-white/15 bg-black/70 px-4 text-xs font-semibold tracking-wider text-white backdrop-blur-md">
          <span>
            {String(n + 1).padStart(2, "0")}
            <span className="mx-1.5 text-zinc-500">/</span>
            {String(items.length).padStart(2, "0")}
          </span>
        </span>

        <button
          type="button"
          className={b}
          onClick={() => goTo(n + 1)}
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      {/* Lightbox */}
      {lb !== null && (
        <Lightbox
          items={items}
          index={lb}
          onChange={setLb}
          onClose={() => setLb(null)}
        />
      )}
    </div>
  );
}