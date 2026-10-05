"use client";

import { business, links } from "@/data/siteData";

export default function Instagram() {
  return (
    <section
      aria-label="Instagram"
      className="relative isolate overflow-hidden bg-[#101116] py-24 sm:py-32"
    >
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-80 w-80 animate-pulse rounded-full bg-purple-600/20 blur-[100px]" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 animate-pulse rounded-full bg-red/20 blur-[110px] [animation-delay:2s]" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-pink-500/10 blur-[100px] [animation-delay:4s]" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:55px_55px]" />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-14 text-center shadow-2xl backdrop-blur-sm sm:px-12 sm:py-20">

          {/* Instagram Icon */}
          <div className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white shadow-xl shadow-pink-500/20 transition-transform duration-500 hover:scale-110">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="18"
                cy="6"
                r="0.8"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Heading */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-pink-400">
            Behind The Shine
          </p>

          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Follow Our{" "}
            <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
              Work.
            </span>
          </h2>

          {/* Accent Line */}
          <div className="mx-auto mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400" />

          <p className="mt-6 text-sm text-zinc-400 sm:text-base">
            Car transformations, detailing and more.
          </p>

          <p className="mt-3 text-sm font-medium text-zinc-200">
            @{business.instagram}
          </p>

          {/* Instagram Button */}
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-8 text-sm font-bold text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/30"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="18"
                cy="6"
                r="0.8"
                fill="currentColor"
              />
            </svg>

            Follow on Instagram

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}