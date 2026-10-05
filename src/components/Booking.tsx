"use client";

import { FormEvent } from "react";
import { categories, links } from "@/data/siteData";

export default function Booking() {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const v = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as Record<string, string>;

    const msg = [
      "Hi SDM Car Care, I would like to enquire.",
      `Name: ${v.name}`,
      v.phone && `Phone: ${v.phone}`,
      v.car && `Car: ${v.car}`,
      v.service && `Service: ${v.service}`,
      v.date && `Preferred date: ${v.date}`,
      v.message && `Message: ${v.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(links.wa(msg), "_blank", "noopener,noreferrer");
  };

  const i =
    "block min-w-0 w-full max-w-full box-border min-h-[52px] rounded-xl border border-white/10 bg-[#171e2a] px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 hover:border-white/20 focus:border-red focus:ring-1 focus:ring-red/30";

  return (
    <form
      onSubmit={submit}
      className="grid min-w-0 w-full gap-5 overflow-hidden"
    >
      <div>
        <h3 className="font-display text-3xl font-bold text-white">
          Enquire on WhatsApp
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Tell us about your car and the service you need. Our team
          will connect with you on WhatsApp.
        </p>
      </div>

      {/* Name and Phone */}
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="min-w-0">
          <label
            htmlFor="booking-name"
            className="mb-2 block text-sm font-medium text-zinc-200"
          >
            Your Name *
          </label>

          <input
            id="booking-name"
            className={i}
            name="name"
            type="text"
            placeholder="Enter your name"
            autoComplete="name"
            required
          />
        </div>

        <div className="min-w-0">
          <label
            htmlFor="booking-phone"
            className="mb-2 block text-sm font-medium text-zinc-200"
          >
            Phone Number
          </label>

          <input
            id="booking-phone"
            className={i}
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            autoComplete="tel"
          />
        </div>
      </div>

      {/* Car Model and Date */}
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="min-w-0">
          <label
            htmlFor="booking-car"
            className="mb-2 block text-sm font-medium text-zinc-200"
          >
            Car Model
          </label>

          <input
            id="booking-car"
            className={i}
            name="car"
            type="text"
            placeholder="e.g. Hyundai Creta"
          />
        </div>

        <div className="min-w-0">
          <label
            htmlFor="booking-date"
            className="mb-2 block text-sm font-medium text-zinc-200"
          >
            Preferred Date
          </label>

          <input
            id="booking-date"
            className={`${i} appearance-none`}
            name="date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>

      {/* Service */}
      <div className="min-w-0">
        <label
          htmlFor="booking-service"
          className="mb-2 block text-sm font-medium text-zinc-200"
        >
          Select Service
        </label>

        <select
          id="booking-service"
          className={`${i} appearance-auto`}
          name="service"
          defaultValue=""
        >
          <option value="" disabled>
            Choose your required service
          </option>

          {categories.map((category) => (
            <optgroup key={category.title} label={category.title}>
              {category.items.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Additional Details */}
      <div className="min-w-0">
        <label
          htmlFor="booking-message"
          className="mb-2 block text-sm font-medium text-zinc-200"
        >
          Additional Details
        </label>

        <textarea
          id="booking-message"
          className={`${i} min-h-[130px] resize-y`}
          name="message"
          rows={4}
          placeholder="Tell us more about your requirements..."
        />
      </div>

      {/* Submit */}
      <button
        className="btn btn-wa min-h-[60px] w-full justify-center rounded-xl text-base font-bold"
        type="submit"
      >
        Send Enquiry on WhatsApp
        <span className="ml-2 text-xl" aria-hidden="true">
          ↗
        </span>
      </button>

      <p className="text-center text-xs text-zinc-500">
        Your enquiry will open directly in WhatsApp.
      </p>
    </form>
  );
}