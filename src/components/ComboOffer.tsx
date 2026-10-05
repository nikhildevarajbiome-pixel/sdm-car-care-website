import { combo, sizes, links, comboMsg } from "@/data/siteData";
import { inr } from "@/lib/img";
export default function ComboOffer() {
  return (
    <section aria-label="Combo offer" className="mx-auto max-w-6xl px-5 py-16">
      <div className="rounded-2xl bg-gradient-to-br from-[#6d130b] via-[#b5281a] to-[#d68a00] p-6 sm:p-12">
        <h2 className="h2 mb-2">Complete Car Care Combo</h2>
        <p>{combo.includes.join(" + ")}</p>
        <div className="my-6 grid gap-3 sm:grid-cols-3">
          {sizes.map((s, i) => <div key={s} className="rounded-lg bg-black/30 p-4 backdrop-blur">{s}<strong className="block font-display text-4xl">{inr(combo.p[i])}</strong></div>)}
        </div>
        <a className="btn border-white bg-white text-black" href={links.wa(comboMsg)} target="_blank" rel="noopener noreferrer">Book this combo</a>
      </div>
    </section>
  );
}
