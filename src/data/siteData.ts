// ===== EDIT CONTENT HERE =====

export const business = {
  name: "SDM Car Care",
  phone: "9611444777",
  waNumber: "919611444777",
  address: [
    "14, 8th Main Cross Rd",
    "4th Block, West of Chord Road",
    "3rd Stage, Basaveshwar Nagar",
    "Bengaluru, Karnataka 560079",
  ],
  hours: "Every day, 8:30 AM – 8:30 PM",
  rating: "4.5",
  reviewCount: "44",
  instagram: "sdmcarcarebasaveshwaranagar",
  mapsUrl: "",
  reviewsUrl: "",
  url: "https://example.com",
};

export const links = {
  wa: (text: string) =>
    `https://wa.me/${business.waNumber}?text=${encodeURIComponent(text)}`,

  tel: `tel:+${business.waNumber}`,

  maps:
    business.mapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "SDM Car Care, " + business.address.join(", ")
    )}`,

  reviews:
    business.reviewsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "SDM Car Care Basaveshwar Nagar"
    )}`,

  instagram: `https://www.instagram.com/${business.instagram}/`,
};

export const serviceMsg = (s: string) =>
  `Hi SDM Car Care, I am interested in ${s}. Please share availability and details.`;

export const comboMsg =
  "Hi SDM Car Care, I am interested in the Complete Car Care Combo. Please share availability and details.";

// ===== SERVICE CATEGORIES =====

export const categories = [
  {
    title: "Wash & Detailing",
    items: [
      "Full Car Wash",
      "Glow Touch",
      "Interior Cleaning",
      "Interior Enrichment",
      "Premium Interior Enrichment",
      "Paint Rejuvenation",
      "Body Polishing",
    ],
  },
  {
    title: "Paint & Protection",
    items: [
      "PPF",
      "Ceramic Coating",
      "Graphene Coating",
      "Nano Glass Coating",
      "Alloy Wheel Protection",
      "Headlight Restoration",
      "Windshield Scratch Removal",
      "Paint Polishing",
      "Car Wraps",
      "Sun Film",
    ],
  },
  {
    title: "Body Work",
    items: ["Body & Trim", "Body Painting", "Painting", "Welding"],
  },
  {
    title: "Automotive Care",
    items: [
      "Air & Cabin Filter Replacement",
      "Air Conditioning",
      "Battery",
      "Brakes",
      "Carburetor Cleaning",
      "Electrical",
      "Exhaust",
      "Oil Change",
      "Steering & Suspension Repair",
      "Transmission",
      "Tyres",
      "Vehicle Engine Diagnostics",
    ],
  },
  {
    title: "Special",
    items: ["Classic Cars"],
  },
];

// ===== CAR SIZES =====

export const sizes = ["Small Car", "Medium Car", "Large Car"] as const;

export type Prices = [number, number, number];

// ===== SERVICE PRICES =====

export const prices: { name: string; p: Prices }[] = [
  { name: "Full Car Wash", p: [400, 500, 500] },
  { name: "Glow Touch", p: [1500, 1800, 2100] },
  { name: "Interior Enrichment", p: [2000, 3000, 3500] },
  { name: "Premium Interior Enrichment", p: [2500, 3500, 4500] },
  { name: "Paint Rejuvenation", p: [2500, 2800, 3200] },
  { name: "Windshield Scratch Removing", p: [900, 1000, 1200] },
  { name: "Nano Glass Coating", p: [1000, 1100, 1200] },
  { name: "Alloy Wheel Protection", p: [700, 800, 900] },
  { name: "Head Light Restoration", p: [500, 500, 600] },
  { name: "Logo Cleaning", p: [300, 300, 300] },
];

// ===== COMBO OFFER =====

export const combo: { includes: string[]; p: Prices } = {
  includes: [
    "Full Car Wash",
    "Premium Interior Enrichment",
    "Glow Touch",
  ],
  p: [3500, 4000, 4500],
};

// ===== SERVICE DETAIL SECTIONS =====

export type Feature = {
  id: string;
  title: string;
  text: string;
  dir: string;
  prefix: string;
  count: number;
  waService: string;
  price?: string;
  bullets?: string[];
};

export const features: Feature[] = [
  {
    id: "wash",
    title: "Full Car Wash",
    text: "Keep your car looking new.",
    dir: "wash",
    prefix: "full-car-wash",
    count: 3,
    waService: "Full Car Wash for my car",
    price: "Full Car Wash",
    bullets: [
      "Under Chassis Wash",
      "Engine Room Clean",
      "Full Car Shampoo Wash",
    ],
  },
  {
    id: "detailing",
    title: "Detailing",
    text: "Glow Touch, interior cleaning and enrichment, paint rejuvenation and body polishing.",
    dir: "detailing",
    prefix: "detailing",
    count: 3,
    waService: "Detailing",
    price: "Glow Touch",
  },
  {
    id: "interior",
    title: "Interior Cleaning",
    text: "Interior cleaning, interior enrichment and premium interior enrichment.",
    dir: "interior",
    prefix: "interior-cleaning",
    count: 3,
    waService: "Interior Cleaning",
    price: "Interior Enrichment",
  },
  {
    id: "paint",
    title: "Paint Polishing",
    text: "Paint polishing, body polishing and paint rejuvenation.",
    dir: "paint",
    prefix: "paint-polishing",
    count: 3,
    waService: "Paint Polishing",
    price: "Paint Rejuvenation",
  },
  {
    id: "ppf",
    title: "PPF",
    text: "Paint protection film for your car.",
    dir: "protection",
    prefix: "ppf",
    count: 3,
    waService: "PPF",
  },
  {
    id: "ceramic",
    title: "Ceramic Coating",
    text: "Ceramic coating for your car's paint.",
    dir: "protection",
    prefix: "ceramic-coating",
    count: 3,
    waService: "Ceramic Coating",
  },
  {
    id: "graphene",
    title: "Graphene Coating",
    text: "Graphene coating for your car's paint.",
    dir: "protection",
    prefix: "graphene-coating",
    count: 3,
    waService: "Graphene Coating",
  },
  {
    id: "body",
    title: "Body Work",
    text: "Body & trim, body painting, painting and welding.",
    dir: "body",
    prefix: "body-work",
    count: 3,
    waService: "Body Work",
  },
];

// ===== GALLERY =====

export const galleryFilters = [
  "All",
  "Wash",
  "Detailing",
  "Interior",
  "Paint",
  "Protection",
] as const;

export const gallery = [
  {
    cat: "Wash",
    src: "/images/wash/full-car-wash-01.jpg",
    alt: "Full car wash at SDM Car Care",
  },
  {
    cat: "Detailing",
    src: "/images/detailing/detailing-01.jpg",
    alt: "Car detailing at SDM Car Care",
  },
  {
    cat: "Interior",
    src: "/images/interior/interior-cleaning-01.jpg",
    alt: "Car interior cleaning at SDM Car Care",
  },
  {
    cat: "Paint",
    src: "/images/paint/paint-polishing-01.jpg",
    alt: "Paint polishing at SDM Car Care",
  },
  {
    cat: "Protection",
    src: "/images/protection/ppf-01.jpg",
    alt: "Paint protection at SDM Car Care",
  },
];

// ===== BEFORE / AFTER =====

export const beforeAfter: {
  label: string;
  before: string;
  after: string;
}[] = [];

// ===== REVIEWS =====

export const reviews: {
  name: string;
  text: string | null;
  rating: number;
  source: string;
  role?: string;
}[] = [
  {
    name: "Jagadish T",
    text: "Quick Clean Car Wash near Basaveshwara Nagar offers excellent service with very polite staff and attentive managers. The process is hassle-free, and the cleaners are highly professional. I would definitely recommend giving it a try!",
    rating: 4,
    source: "Google Review",
    role: "Local Guide",
  },
  {
    name: "Customer",
    text: "Very satisfied.. Detailed cleaning done",
    rating: 5,
    source: "Customer Feedback",
  },
  {
    name: "Customer",
    text: "Good service with best price",
    rating: 5,
    source: "Customer Feedback",
  },
];