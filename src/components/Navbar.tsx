"use client";

import { useEffect, useState } from "react";
import { links } from "@/data/siteData";

const nav = [
  ["Services", "#services"],
  ["Pricing", "#pricing"],
  ["Our Work", "#work"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`sticky top-0 z-[100] transition-all duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-[#0d1015]/95 backdrop-blur-xl"
            : "bg-[#0d1015]"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5">
          {/* LOGO */}
          <a
            href="#home"
            onClick={closeMenu}
            className="relative z-[120] font-display text-2xl font-bold tracking-wide"
          >
            SDM <span className="text-red">CAR CARE</span>
          </a>

          {/* DESKTOP NAV */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 md:flex"
          >
            <a
              href="#home"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              Home
            </a>

            {nav.map(([name, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {name}
              </a>
            ))}

            <a
              href={links.wa(
                "Hi SDM Car Care, I would like to know more about your services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa !min-h-[42px]"
            >
              WhatsApp
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative z-[120] flex h-[46px] min-w-[112px] items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-red/60 hover:bg-white/[0.06]"
          >
            <span>{open ? "Close" : "Menu"}</span>

            <span className="relative flex h-5 w-5 items-center justify-center">
              <span
                className={`absolute h-[1.5px] w-5 bg-white transition-all duration-300 ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />

              <span
                className={`absolute h-[1.5px] w-5 bg-white transition-all duration-300 ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[90] md:hidden ${
          open
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
      >
        {/* VERY SUBTLE BACKGROUND CAR IMAGE */}
        <div className="absolute inset-0 overflow-hidden bg-[#080a0d]">
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center opacity-[0.12] blur-[5px]"
            style={{
              backgroundImage: "url('/images/wash/full-car-wash-01.jpg')",
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#080a0d]/90" />

          {/* Red glow */}
          <div className="absolute right-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-red/10 blur-[110px]" />

          {/* Bottom glow */}
          <div className="absolute bottom-[-120px] left-[-120px] h-[300px] w-[300px] rounded-full bg-blue-500/[0.04] blur-[110px]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        {/* MENU CONTENT */}
        <div
          className={`relative h-full overflow-y-auto pt-[68px] transition-all duration-500 ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-6xl px-5 pb-10 pt-8">
            {/* MENU HEADER */}
            <div className="mb-7 flex items-end justify-between border-b border-white/10 pb-5">
              <div>
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-red">
                  SDM Car Care
                </p>

                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Navigation
                </h2>
              </div>

              <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-500">
                Bengaluru
              </span>
            </div>

            {/* NAV LINKS */}
            <nav aria-label="Mobile navigation">
              {/* HOME */}
              <a
                href="#home"
                onClick={closeMenu}
                className="group flex items-center gap-4 border-b border-white/10 py-5"
              >
                <span className="w-8 text-[10px] font-bold tracking-widest text-red">
                  01
                </span>

                <span className="text-[22px] font-medium text-white transition-transform duration-300 group-hover:translate-x-2">
                  Home
                </span>

                <span className="ml-auto text-xl text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red">
                  →
                </span>
              </a>

              {nav.map(([name, href], index) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="group flex items-center gap-4 border-b border-white/10 py-5"
                >
                  <span className="w-8 text-[10px] font-bold tracking-widest text-zinc-600 transition-colors group-hover:text-red">
                    {String(index + 2).padStart(2, "0")}
                  </span>

                  <span className="text-[22px] font-medium text-zinc-200 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">
                    {name}
                  </span>

                  <span className="ml-auto text-xl text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red">
                    →
                  </span>
                </a>
              ))}
            </nav>

            {/* QUICK ACTIONS */}
            <div className="mt-7 grid grid-cols-2 gap-3">
              {/* WHATSAPP */}
              <a
                href={links.wa(
                  "Hi SDM Car Care, I would like to know more about your services."
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-all duration-300 hover:border-green-500/40"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-none stroke-current"
                    strokeWidth="1.8"
                  >
                    <path d="M20 11.5a8.5 8.5 0 0 1-12.9 7.3L4 20l1.2-3A8.5 8.5 0 1 1 20 11.5Z" />
                    <path d="M8.7 8.4c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.6 1.4c.1.3.1.4-.1.6l-.5.6c.7 1.2 1.6 2 2.8 2.7l.6-.5c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.2.4.5v.4c0 .3-.1.5-.4.7-.4.3-1 .4-1.5.2-2.2-.6-.6-2.8-5.9-5-.3-.6-.1-1.2.1-1.7Z" />
                  </svg>
                </div>

                <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                  Quick Contact
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  WhatsApp Us
                </p>
              </a>

              {/* CALL */}
              <a
                href={links.tel}
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-all duration-300 hover:border-red/40"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red/10 text-red">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-none stroke-current"
                    strokeWidth="1.8"
                  >
                    <path d="M6.6 3.8 8.8 3c.6-.2 1.2.1 1.5.7l1.2 2.8c.2.5.1 1-.3 1.4L9.8 9.3a14.6 14.6 0 0 0 4.9 4.9l1.4-1.4c.4-.4.9-.5 1.4-.3l2.8 1.2c.6.3.9.9.7 1.5l-.8 2.2c-.2.6-.8 1-1.4 1C10.2 18.1 5.9 13.8 5.9 5.2c0-.6.3-1.2.7-1.4Z" />
                  </svg>
                </div>

                <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                  Speak to us
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Call Now
                </p>
              </a>
            </div>

            {/* LOCATION */}
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-4">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                  Visit us
                </p>

                <p className="mt-1 text-xs text-zinc-300">
                  Basaveshwar Nagar · Bengaluru
                </p>
              </div>

              <a
                href={links.maps}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="text-[10px] font-semibold uppercase tracking-[0.15em] text-red"
              >
                Directions →
              </a>
            </div>

            {/* FOOTER */}
            <div className="mt-6 flex items-center justify-between text-[8px] uppercase tracking-[0.25em] text-zinc-600">
              <span>Premium Automotive Care</span>
              <span>SDM CAR CARE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}