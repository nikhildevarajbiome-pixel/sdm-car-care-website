"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export type Item = {
  src: string;
  alt: string;
};

type Props = {
  items: Item[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
};

export default function Lightbox({
  items,
  index,
  onClose,
  onChange,
}: Props) {
  const indexRef = useRef(index);
  indexRef.current = index;

  const go = (direction: number) => {
    const total = items.length;

    if (total <= 1) return;

    const next =
      (indexRef.current + direction + total) % total;

    onChange(next);
  };

  useEffect(() => {
    const scrollY = window.scrollY;

    const html = document.documentElement;
    const body = document.body;

    const oldHtmlOverflow = html.style.overflow;
    const oldBodyOverflow = body.style.overflow;
    const oldBodyPosition = body.style.position;
    const oldBodyTop = body.style.top;
    const oldBodyWidth = body.style.width;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        go(-1);
      }

      if (event.key === "ArrowRight") {
        go(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      html.style.overflow = oldHtmlOverflow;
      body.style.overflow = oldBodyOverflow;
      body.style.position = oldBodyPosition;
      body.style.top = oldBodyTop;
      body.style.width = oldBodyWidth;

      window.scrollTo(0, scrollY);
    };
  }, []);

  if (typeof document === "undefined") {
    return null;
  }

  if (!items[index]) {
    return null;
  }

  /*
   * Use the same optimized WebP path as Photo.tsx.
   */
  const optimizedSrc = items[index].src
    .replace("/images/", "/optimized-images/")
    .replace(/\.(jpg|jpeg|png)$/i, ".webp");

  const lightbox = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[999999] flex h-[100dvh] w-full items-center justify-center bg-black/95 p-3 overscroll-none"
      style={{
        touchAction: "none",
      }}
      onClick={onClose}
    >
      {/* IMAGE */}
      <div
        className="relative h-full w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={optimizedSrc}
          alt={items[index].alt}
          fill
          priority
          sizes="100vw"
          className="select-none object-contain"
          draggable={false}
        />
      </div>

      {/* CLOSE */}
      <button
        type="button"
        aria-label="Close photo viewer"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="fixed right-4 top-4 z-[1000000] grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-black/80 text-2xl font-medium text-white shadow-xl backdrop-blur-md transition active:scale-90"
      >
        ×
      </button>

      {/* PREVIOUS */}
      {items.length > 1 && (
        <button
          type="button"
          aria-label="Previous photo"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          className="fixed left-3 top-1/2 z-[1000000] grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/75 text-3xl text-white shadow-xl backdrop-blur-md transition active:scale-90"
        >
          ‹
        </button>
      )}

      {/* NEXT */}
      {items.length > 1 && (
        <button
          type="button"
          aria-label="Next photo"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          className="fixed right-3 top-1/2 z-[1000000] grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/75 text-3xl text-white shadow-xl backdrop-blur-md transition active:scale-90"
        >
          ›
        </button>
      )}

      {/* COUNTER */}
      <div className="fixed bottom-5 left-1/2 z-[1000000] -translate-x-1/2 rounded-full border border-white/15 bg-black/75 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
        {index + 1} / {items.length}
      </div>
    </div>
  );

  return createPortal(lightbox, document.body);
}