import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ComboOffer from "@/components/ComboOffer";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Instagram from "@/components/Instagram";
import Location from "@/components/Location";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCTA from "@/components/MobileCTA";
import { business, links } from "@/data/siteData";
const ld = {
  "@context": "https://schema.org", "@type": "AutoRepair", name: business.name, telephone: `+${business.waNumber}`, url: business.url,
  address: { "@type": "PostalAddress", streetAddress: "14, 8th Main Cross Rd, 4th Block, West of Chord Road, 3rd Stage", addressLocality: "Bengaluru", addressRegion: "Karnataka", postalCode: "560079", addressCountry: "IN" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "08:30", closes: "20:30" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: business.rating, reviewCount: business.reviewCount }, sameAs: [links.instagram],
};
export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Navbar />
      <main className="pb-[72px] md:pb-0">
        <Hero /><TrustSection /><Services /><Features /><Pricing /><ComboOffer /><BeforeAfter /><Gallery /><Reviews /><Instagram />
        <section id="contact" className="bg-navy py-16"><div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2"><Location /><Booking /></div></section>
      </main>
      <Footer /><WhatsAppFloat /><MobileCTA />
    </>
  );
}
