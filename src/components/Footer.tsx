import { business, links } from "@/data/siteData";

export default function Footer() {
  const navLinks = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Pricing", "#pricing"],
    ["Our Work", "#work"],
    ["Reviews", "#reviews"],
    ["Contact", "#contact"],
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0b1019] text-zinc-400">

      {/* Background Accent */}
      <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-red/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">

          {/* Business */}
          <div>
            <a href="#home" className="inline-block">
              <p className="font-display text-2xl font-bold tracking-tight text-white">
                SDM <span className="text-red">CAR CARE</span>
              </p>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
              Premium automotive care, detailing and paint protection
              for your vehicle in Bengaluru.
            </p>

            <div className="mt-5 space-y-2 text-sm leading-6">
              {business.address.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            <p className="mt-4 text-sm text-white">
              {business.hours}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer Navigation">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white">
              Explore
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {navLinks.map(([name, href]) => (
                <a
                  key={href}
                  href={href}
                  className="w-fit text-sm transition-all duration-300 hover:translate-x-1 hover:text-red"
                >
                  {name}
                </a>
              ))}
            </div>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white">
              Connect With Us
            </h3>

            {/* Instagram */}
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-pink-500/40 hover:bg-white/[0.07]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white transition-transform duration-300 group-hover:scale-110">
                <svg
                  width="23"
                  height="23"
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
                  <circle cx="18" cy="6" r="0.8" fill="currentColor" />
                </svg>
              </span>

              <span className="min-w-0">
                <span className="block font-semibold text-white">
                  Instagram
                </span>
                <span className="mt-1 block break-all text-xs text-zinc-500">
                  @{business.instagram}
                </span>
              </span>

              <span className="ml-auto text-lg transition-transform group-hover:translate-x-1 group-hover:text-pink-400">
                ↗
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={links.wa(
                "Hi SDM Car Care, I would like to know more about your services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm transition-all duration-300 hover:border-red/40 hover:text-white"
            >
              WhatsApp
              <span>↗</span>
            </a>

            {/* Phone */}
            <a
              href={links.tel}
              className="mt-3 flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm transition-all duration-300 hover:border-red/40 hover:text-white"
            >
              {business.phone}
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-14 border-t border-white/10 pt-7">

          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

            {/* Copyright */}
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} SDM Car Care. All rights reserved.
            </p>

            {/* Developer Credit */}
            <div className="text-xs text-zinc-500">
              <span>Designed & Developed by </span>

              <a
                href="mailto:nikhildmdevraj@gmail.com"
                className="font-semibold text-white transition-colors duration-300 hover:text-red"
              >
                Nikhil Devaraj
              </a>

              <span className="mx-1">·</span>

              <a
                href="mailto:nikhildmdevraj@gmail.com"
                className="transition-colors duration-300 hover:text-red"
              >
                Email Me ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}