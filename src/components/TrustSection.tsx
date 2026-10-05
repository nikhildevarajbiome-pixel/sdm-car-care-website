import { business } from "@/data/siteData";

export default function TrustSection() {
  const stats = [
    {
      value: `${business.rating} ★`,
      label: "Google Rating",
    },
    {
      value: business.reviewCount,
      label: "Google Reviews",
    },
    {
      value: "8:30 AM – 8:30 PM",
      label: "Open Daily",
    },
    {
      value: "Basaveshwar Nagar",
      label: "Bengaluru",
    },
  ];

  return (
    <section
      aria-label="Business highlights"
      className="relative overflow-hidden border-y border-white/10 bg-[#0d1726]"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.035),transparent_70%)]" />

      <dl className="relative mx-auto grid max-w-6xl grid-cols-2 gap-x-5 gap-y-7 px-5 py-8 sm:px-8 sm:py-9 md:grid-cols-4 md:gap-0 md:py-10 lg:px-12">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`group relative border-l-2 border-amber/80 pl-4 transition-all duration-300 hover:border-red sm:pl-5 ${
              index >= 2 ? "md:border-l-2" : ""
            }`}
          >
            <dt className="font-display text-xl font-bold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-amber sm:text-2xl lg:text-[26px]">
              {stat.value}
            </dt>

            <dd className="mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400 sm:text-xs">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}