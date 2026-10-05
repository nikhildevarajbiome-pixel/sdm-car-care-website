import { business, links } from "@/data/siteData";
export default function Location() {
  return (
    <div>
      <h2 className="h2 mb-4">Visit SDM Car Care</h2>
      <address className="mb-5 not-italic text-zinc-400">{business.address.map((l) => <span key={l} className="block">{l}</span>)}<span className="mt-2 block">{business.hours}</span></address>
      <div className="flex flex-wrap gap-3">
        <a className="btn" href={links.maps} target="_blank" rel="noopener noreferrer">Get directions</a>
        <a className="btn" href={links.tel}>Call now</a>
        <a className="btn btn-wa" href={links.wa("Hi SDM Car Care, I would like to know more about your services.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </div>
  );
}
