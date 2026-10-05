"use client";

import { reviews, business, links } from "@/data/siteData";

export default function Reviews() {
  const visibleReviews = reviews.filter((r) => r.text?.trim());

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-navy py-20 sm:py-24"
    >
      <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-red/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-red" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Customer Experiences
              </p>
            </div>

            <h2 className="h2 max-w-2xl">
              Trusted Care.{" "}
              <span className="text-red">Real Experiences.</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400">
              Discover what customers have shared about their experience
              with SDM Car Care.
            </p>
          </div>

          {/* Google Rating */}
          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-400">
                Google Rating
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {business.rating}
                <span className="ml-1 text-lg text-amber">★</span>
              </p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <p className="text-sm font-semibold text-white">Google</p>
              <p className="mt-1 text-xs text-zinc-400">
                Customer Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        {visibleReviews.length > 0 ? (
          <div className="noscroll flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5">
            {visibleReviews.map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="group w-[88%] max-w-[380px] flex-none snap-start rounded-2xl border border-white/10 bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-red/40 sm:p-7"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {review.name}
                    </h3>

                    {review.role && (
                      <p className="mt-1 text-xs text-zinc-400">
                        {review.role}
                      </p>
                    )}
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-zinc-400">
                    {review.source}
                  </span>
                </div>

                {/* Actual Rating */}
                <div
                  className="mt-5 flex items-center gap-1 text-lg text-amber"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < review.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <div className="mt-4 min-h-28">
                  <span className="text-3xl font-serif leading-none text-red">
                    “
                  </span>

                  <p className="text-sm leading-7 text-zinc-300">
                    {review.text}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-xs text-zinc-500">
                    Customer feedback for SDM Car Care
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-card p-8 text-center">
            <p className="text-sm text-zinc-400">
              Explore customer feedback on Google.
            </p>
          </div>
        )}

        {/* Google Reviews Button */}
        <div className="mt-8 flex justify-center">
          <a
            className="btn btn-primary min-h-12 justify-center px-7"
            href={links.reviews}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Google Reviews <span className="ml-2">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}