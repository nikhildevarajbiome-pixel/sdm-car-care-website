"use client";

import { useState } from "react";
import { categories } from "@/data/siteData";

const categoryIcons: Record<string, string> = {
  "Wash & Detailing": "✦",
  "Paint & Protection": "◈",
  "Body Work": "⚙",
  "Automotive Care": "⌁",
  Special: "★",
};

const categoryDescriptions: Record<string, string> = {
  "Wash & Detailing":
    "Deep cleaning, detailing and restoration to keep your vehicle looking its best.",

  "Paint & Protection":
    "Advanced paint care and protection designed to preserve your vehicle's finish.",

  "Body Work":
    "Professional body repair, painting and restoration for exterior damage and wear.",

  "Automotive Care":
    "Guidance & support — we'll help you find the right solution.",

  Special:
    "Specialised automotive care for unique and classic vehicles.",
};

export default function Services() {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleCategory = (title: string) => {
    setExpanded((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#080a0e] py-24 sm:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-red/[0.07] blur-[150px]" />
        <div className="absolute -left-40 bottom-20 h-[450px] w-[450px] rounded-full bg-blue-500/[0.035] blur-[150px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-red" />

              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-red">
                Our Expertise
              </span>
            </div>

            <h2 className="font-display text-[clamp(42px,7vw,82px)] font-bold leading-[0.95] tracking-[-0.045em] text-white">
              Complete
              <span className="block text-red">
                Care.
              </span>
              <span className="block text-zinc-600">
                Every Detail.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-lg text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
              From everyday cleaning to advanced paint protection and
              complete automotive care, SDM Car Care brings everything
              your vehicle needs under one roof.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <div className="h-px w-16 bg-white/10" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Basaveshwar Nagar · Bengaluru
              </span>
            </div>
          </div>
        </div>

        {/* SERVICE GRID */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category, index) => {
            const isExpanded = expanded.includes(category.title);

            const visibleItems = isExpanded
              ? category.items
              : category.items.slice(0, 5);

            const hasMore = category.items.length > 5;

            const isSupport =
              category.title === "Automotive Care";

            return (
              <article
                key={category.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#11141a] transition-all duration-500 hover:-translate-y-1 hover:border-red/30 hover:shadow-[0_25px_80px_rgba(0,0,0,0.45)] ${
                  index === 0
                    ? "md:col-span-2 lg:col-span-2"
                    : ""
                }`}
              >

                {/* Top accent */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-red transition-all duration-700 group-hover:w-full" />

                {/* Background glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red/[0.035] blur-[70px] transition-all duration-700 group-hover:bg-red/[0.10]" />

                <div className="relative p-7 sm:p-9">

                  {/* Number + icon */}
                  <div className="mb-10 flex items-start justify-between">

                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-red/20 bg-red/[0.07] text-2xl text-red transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-red/[0.12]">
                      {categoryIcons[category.title] ?? "✦"}
                    </div>

                    <span className="font-display text-5xl font-bold tracking-[-0.05em] text-white/[0.045] transition-colors duration-500 group-hover:text-red/[0.12]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="max-w-md font-display text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-red sm:text-3xl">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-4 max-w-xl leading-7 ${
                      isSupport
                        ? "text-sm font-semibold uppercase tracking-[0.08em] text-zinc-300"
                        : "text-sm text-zinc-500"
                    }`}
                  >
                    {categoryDescriptions[category.title]}
                  </p>

                  {/* Service list */}
                  <div className="mt-7 grid gap-x-6 sm:grid-cols-2">
                    {visibleItems.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 border-b border-white/[0.06] py-3"
                      >
                        <span className="h-1.5 w-1.5 flex-none rounded-full bg-red transition-transform duration-300 group-hover:scale-125" />

                        <span className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* View all */}
                  {hasMore && (
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.title)}
                      aria-expanded={isExpanded}
                      className="mt-7 flex min-h-11 items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-red/40 hover:bg-red/[0.06] hover:text-white"
                    >
                      <span>
                        {isExpanded
                          ? "Show Less"
                          : `View All ${category.items.length} Services`}
                      </span>

                      <span
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        ↓
                      </span>
                    </button>
                  )}

                  {/* Footer */}
                  <div className="mt-9 flex items-center justify-between border-t border-white/[0.06] pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
                      SDM Car Care
                    </span>

                    <span className="text-xs text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red">
                      Explore →
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
            Wash · Detail · Protect · Restore · Maintain
          </p>

          <p className="text-sm text-zinc-500">
            Everything your car needs.{" "}
            <span className="font-semibold text-white">
              Done right.
            </span>
          </p>

        </div>
      </div>
    </section>
  );
}