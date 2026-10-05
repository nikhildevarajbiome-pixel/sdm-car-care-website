"use client";

import Image from "next/image";
import { useState } from "react";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export default function Photo({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: PhotoProps) {
  const [bad, setBad] = useState(false);

  const optimizedSrc = src
    .replace("/images/", "/optimized-images/")
    .replace(/\.(jpg|jpeg|png)$/i, ".webp");

  return (
    <div
      className={`relative overflow-hidden bg-[#12151a] ${className}`}
    >
      {!bad && (
        <Image
          src={optimizedSrc}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          quality={75}
          onError={() => setBad(true)}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {bad && (
        <div className="absolute inset-0 grid place-items-center p-3 text-center text-xs text-zinc-500">
          Image unavailable
        </div>
      )}
    </div>
  );
}