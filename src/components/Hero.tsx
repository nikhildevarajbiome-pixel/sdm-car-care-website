import { links } from "@/data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative -mt-[68px] flex min-h-[100svh] items-end overflow-hidden bg-navy pb-5 pt-[110px] sm:min-h-[88vh] sm:pb-10"
    >
      {/* HERO VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      >
        <source
          src="/videos/hero-optimized.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAYS */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end px-5 pb-2 sm:px-8 sm:pb-0 lg:px-12">
        <div className="w-full max-w-3xl translate-y-2 sm:translate-y-0">

          {/* LABEL */}
          <div className="mb-4 flex items-center gap-3 sm:mb-6">
            <span className="h-[2px] w-8 bg-red sm:w-10" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-200 sm:text-sm sm:tracking-[0.28em]">
              Premium Automotive Care
            </p>
          </div>

          {/* HEADING */}
          <h1 className="rise font-display text-[clamp(34px,8.5vw,68px)] font-bold leading-[1.02] tracking-[-0.045em] text-white sm:text-[clamp(48px,6vw,88px)]">
            KEEP YOUR CAR
            <span className="mt-1 block text-red">
              LOOKING NEW.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="rise mt-4 max-w-lg text-[13px] leading-6 text-zinc-200 sm:mt-6 sm:text-base sm:leading-8">
            Premium car detailing, paint protection and complete automotive
            care in Basaveshwar Nagar, Bengaluru.
          </p>

          {/* RATING */}
          <div className="mt-4 flex items-center gap-2 text-xs sm:mt-6 sm:text-sm">
            <span className="tracking-wider text-amber">
              ★★★★★
            </span>

            <span className="font-semibold text-white">
              4.5
            </span>

            <span className="text-zinc-300">
              Google Rating
            </span>
          </div>

          {/* BUTTONS */}
          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">

            <a
              className="btn btn-wa min-h-12 justify-center px-3 text-sm sm:px-6 sm:text-base"
              href={links.wa(
                "Hi SDM Car Care, I would like to know more about your services."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>

            <a
              className="btn min-h-12 justify-center border border-white/30 bg-white/10 px-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20 sm:px-6 sm:text-base"
              href={links.tel}
            >
              Call Now
            </a>

            <a
              className="btn col-span-2 min-h-11 justify-center border border-white/30 bg-transparent px-5 text-sm text-white transition hover:bg-white/10 sm:col-span-1 sm:min-h-12 sm:px-6 sm:text-base"
              href={links.maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>

          </div>

          {/* LOCATION */}
          <p className="mt-4 pb-1 text-[10px] tracking-[0.12em] text-zinc-300 sm:mt-7 sm:pb-0 sm:text-xs sm:tracking-wide">
            BASAVESHWAR NAGAR · BENGALURU
          </p>

        </div>
      </div>
    </section>
  );
}