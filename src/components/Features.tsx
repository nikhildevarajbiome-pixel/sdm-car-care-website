"use client";

import { useEffect, useRef, useState } from "react";
import {
  features,
  prices,
  sizes,
  links,
  serviceMsg,
} from "@/data/siteData";
import { imgs, inr } from "@/lib/img";
import ServiceSlider from "./ServiceSlider";
import PPFLayers from "./PPFLayers";

function LazyService({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "500px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible ? (
        children
      ) : (
        <div className="min-h-[420px] rounded-2xl bg-[#11151c] animate-pulse" />
      )}
    </div>
  );
}

export default function Features() {
  return (
    <section
      aria-label="Featured services"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl space-y-20 px-5 sm:space-y-28">

        {features.map((f, k) => {
          const pr = prices.find((p) => p.name === f.price);

          return (
            <LazyService key={f.id}>
              <article
                id={f.id}
                className="relative grid items-center gap-8 overflow-hidden rounded-3xl md:grid-cols-[1.2fr_1fr]"
              >

                {/* PPF animated film layers */}
                {f.id === "ppf" && <PPFLayers />}

                {/* Image */}
                <div
                  className={
                    k % 2
                      ? "relative z-10 md:order-2"
                      : "relative z-10"
                  }
                >
                  <ServiceSlider
                    title={f.title}
                    images={imgs(f.dir, f.prefix, f.count)}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 px-1 md:px-3">

                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-[2px] w-8 bg-red" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-red">
                      SDM Car Care
                    </span>
                  </div>

                  <h2 className="h2 mb-3">
                    {f.title}
                  </h2>

                  <p className="max-w-md text-zinc-400">
                    {f.text}
                  </p>

                  {f.bullets && (
                    <ul className="mt-4 space-y-2">
                      {f.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-3 text-sm text-zinc-300"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-red" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {pr && (
                    <ul className="my-5 max-w-md">
                      {sizes.map((s, i) => (
                        <li
                          key={s}
                          className="flex justify-between border-b border-line py-2"
                        >
                          <span>{s}</span>

                          <b className="text-amber">
                            {inr(pr.p[i])}
                          </b>
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    className="btn btn-wa mt-4"
                    href={links.wa(serviceMsg(f.waService))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp this service
                  </a>
                </div>

              </article>
            </LazyService>
          );
        })}

      </div>
    </section>
  );
}