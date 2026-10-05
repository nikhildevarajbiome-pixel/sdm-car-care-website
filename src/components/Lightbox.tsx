"use client";
import { useEffect } from "react";
import Photo from "./Photo";
export type Item = { src: string; alt: string };
export default function Lightbox({ items, index, onClose, onChange }: { items: Item[]; index: number; onClose: () => void; onChange: (i: number) => void }) {
  const go = (d: number) => onChange((index + d + items.length) % items.length);
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowLeft") go(-1); if (e.key === "ArrowRight") go(1); };
    window.addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  });
  const b = "absolute grid h-12 w-12 place-items-center rounded-full bg-zinc-800 text-xl text-white";
  return (
    <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-[60] grid place-items-center bg-black/95 p-4">
      <Photo src={items[index].src} alt={items[index].alt} sizes="100vw" className="aspect-[4/3] w-[min(92vw,900px)] [&_img]:!object-contain" />
      <button className={`${b} right-4 top-4`} onClick={onClose} aria-label="Close">✕</button>
      <button className={`${b} left-3`} onClick={() => go(-1)} aria-label="Previous photo">‹</button>
      <button className={`${b} right-3`} onClick={() => go(1)} aria-label="Next photo">›</button>
      <span className="absolute bottom-5 text-sm text-zinc-300">{index + 1} / {items.length}</span>
    </div>
  );
}
