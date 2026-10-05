"use client";

import { useState } from "react";
import { prices, sizes, links, serviceMsg } from "@/data/siteData";
import { inr } from "@/lib/img";

export default function Pricing() {
  const [s, setS] = useState(0);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#0b0d11] py-20 sm:py-28"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-amber/[0.04] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-10 max-w-2xl sm:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red">
              Transparent Pricing
            </span>
          </div>

          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Premium Care.
            <span className="block text-red">Clear Pricing.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            Choose your vehicle size to explore our service prices.
            Select a service to enquire or book directly through WhatsApp.
          </p>
        </div>

        {/* Vehicle selector */}
        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Select Your Vehicle
          </p>

          <div
            role="group"
            aria-label="Car size"
            className="grid max-w-lg grid-cols-3 gap-2 rounded-xl border border-white/[0.08] bg-[#151820] p-1.5"
          >
            {sizes.map((z, i) => (
              <button
                key={z}
                aria-pressed={s === i}
                onClick={() => setS(i)}
                className={`min-h-12 rounded-lg px-3 text-sm font-semibold transition-all duration-300 ${
                  s === i
                    ? "bg-red text-white shadow-lg shadow-red/20"
                    : "text-zinc-400 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {z}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div
          aria-live="polite"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {prices.map((p, index) => (
            <a
              key={p.name}
              href={links.wa(
                serviceMsg(`${p.name} for my ${sizes[s].toLowerCase()}`)
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[155px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#1a1e27] to-[#11141a] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-xl hover:shadow-black/30 sm:p-6"
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-amber transition-all duration-500 group-hover:w-full" />

              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-amber sm:text-xl">
                    {p.name}
                  </h3>
                </div>

                <span className="text-lg text-red transition-transform duration-300 group-hover:scale-110">
                  ✦
                </span>
              </div>

              <div className="mt-6 flex items-end justify-between gap-2 border-t border-white/[0.07] pt-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                    {sizes[s]} Car
                  </p>

                  <p
                    key={`${p.name}-${s}`}
                    className="rise mt-1 font-display text-3xl font-bold tracking-tight text-amber"
                  >
                    {inr(p.p[s])}
                  </p>
                </div>

                <span className="mb-1 flex items-center gap-2 text-xs font-semibold text-zinc-400 transition-colors group-hover:text-white">
                  Enquire
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Booking note */}
        <div className="mt-8 flex flex-col gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm leading-6 text-zinc-400">
            Need help choosing a service? Our team is happy to assist.
          </p>

          <a
            href={links.wa(
              "Hi SDM Car Care, please help me choose the right service for my car."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-red px-5 text-sm font-semibold text-white transition hover:bg-red/90"
          >
            Chat with Us
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}