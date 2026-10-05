import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { business } from "@/data/siteData";
const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display", display: "swap" });
const title = "SDM Car Care | Car Wash, Detailing & Protection in Basaveshwar Nagar, Bengaluru";
const description = "Car wash, car detailing, PPF, ceramic and graphene coating in Basaveshwar Nagar, Bengaluru, near West of Chord Road. Open daily 8:30 AM to 8:30 PM.";
export const metadata: Metadata = {
  metadataBase: new URL(business.url), title, description,
  keywords: ["car wash in Basaveshwar Nagar", "car detailing Basaveshwar Nagar", "car care Basaveshwar Nagar", "car polishing Bengaluru", "car interior cleaning Bengaluru", "PPF Basaveshwar Nagar", "ceramic coating Basaveshwar Nagar", "graphene coating Bengaluru"],
  openGraph: { title, description, type: "website", locale: "en_IN", siteName: business.name, images: ["/images/hero/sdm-car-care-hero.jpg"] },
};
export const viewport: Viewport = { themeColor: "#12151a", viewportFit: "cover" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${body.variable} ${display.variable}`}><body>{children}</body></html>;
}
