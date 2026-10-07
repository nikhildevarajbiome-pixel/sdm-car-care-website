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

  tel: `tel:+${business.phone}`,

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
    support: true,
    supportText:
      "GUIDANCE & SUPPORT — We’ll help you find the right solution.",
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
      "Automotive Car Sourcing",
    ],
  },
];

// ===== CAR SIZES =====

export const sizes = ["Small Car", "Medium Car", "Large Car"] as const;

export type Prices = [number, number, number];

// ===== SERVICE PRICES =====

export const prices: { name: string; p: Prices }[] = [
  { name: "Full Car Wash", p: [400, 500, 500] },
  { name: "Glow Touch", p: [1500, 1800, 2100] },
  { name: "Interior Cleaning", p: [3000, 3500, 4500] },
  { name: "Interior Enrichment", p: [2000, 3000, 3500] },
  { name: "Premium Interior Enrichment", p: [2500, 3500, 4500] },
  { name: "Paint Rejuvenation", p: [2500, 2800, 3200] },
  { name: "3M Rubbing & Polishing", p: [6000, 8000, 12000] },
];

// ===== COMBO OFFER =====

export const combo: { includes: string[]; p: Prices } = {
  includes: [
    "Full Car Wash",
    "Premium Interior Enrichment",
    "Glow Touch",
  ],
  p: [4000, 5000, 6000],
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
    title: "Detailing Wash",
    text: "Glow Touch, interior cleaning and enrichment, paint rejuvenation and body polishing.",
    dir: "detailing",
    prefix: "detailing",
    count: 3,
    waService: "Detailing Wash",
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
    price: "Interior Cleaning",
  },
  {
    id: "paint",
    title: "3M Rubbing & Polishing",
    text: "3M rubbing and polishing for a refreshed and glossy finish.",
    dir: "paint",
    prefix: "paint-polishing",
    count: 3,
    waService: "3M Rubbing & Polishing",
    price: "3M Rubbing & Polishing",
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
  "Workshop",
  "Detailing",
] as const;

export const gallery = [
  {
    cat: "Workshop",
    src: "/images/gallery/sdm-work-01.jpg",
    alt: "Red Jeep inside SDM Car Care workshop",
  },
  {
    cat: "Workshop",
    src: "/images/gallery/sdm-work-02.jpg",
    alt: "White SUV inside SDM Car Care workshop",
  },
  {
    cat: "Detailing",
    src: "/images/gallery/sdm-work-03.jpg",
    alt: "Black hatchback after automotive care",
  },
  {
    cat: "Detailing",
    src: "/images/gallery/sdm-work-04.jpg",
    alt: "Toyota Crysta inside SDM Car Care",
  },
  {
    cat: "Workshop",
    src: "/images/gallery/sdm-work-05.jpg",
    alt: "SDM Car Care workshop exterior",
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