import {
  BriefcaseBusiness,
  Car,
  GraduationCap,
  Home,
  Landmark,
  Package,
  Plane,
  Scale,
  Shirt,
  Wrench
} from "lucide-react";
import type React from "react";

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  examples: string[];
};

export type Guide = {
  slug: string;
  category: string;
  title: string;
  h1: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  updated: string;
  verdict: string;
  options: {
    name: string;
    cost: string;
    bestFor: string;
    watchOut: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const categories: Category[] = [
  {
    slug: "shipping-moving",
    name: "Shipping & Moving",
    description: "Compare cheap ways to ship clothes, boxes, furniture, bikes, luggage, cars, and other hard-to-price items.",
    icon: Package,
    examples: ["ship clothes", "ship boxes", "move out of state", "send luggage", "ship a bike"]
  },
  {
    slug: "cars",
    name: "Cars",
    description: "Find cheaper paths for insurance, repairs, keys, registration, charging, renting, and transporting vehicles.",
    icon: Car,
    examples: ["insure a car", "replace car keys", "ship a car", "fix a windshield", "rent long term"]
  },
  {
    slug: "home-repairs",
    name: "Home & Repairs",
    description: "Compare DIY, local service, and marketplace options for common home costs and repairs.",
    icon: Home,
    examples: ["heat a house", "replace windows", "remove junk", "fix a roof leak", "insulate attic"]
  },
  {
    slug: "travel",
    name: "Travel",
    description: "Plan cheaper routes for hotels, flights, airport parking, car rentals, pets, luggage, and destination trips.",
    icon: Plane,
    examples: ["book hotels", "rent a car", "visit Disney World", "fly with pets", "travel Europe"]
  },
  {
    slug: "money",
    name: "Money",
    description: "Compare costs for taxes, currency exchange, debt payoff, borrowing, insurance, and sending money.",
    icon: Landmark,
    examples: ["file taxes", "send money internationally", "exchange currency", "build credit", "borrow money"]
  },
  {
    slug: "legal-admin",
    name: "Legal & Admin",
    description: "Break down cheaper options for LLCs, wills, divorces, trademarks, passports, and document tasks.",
    icon: Scale,
    examples: ["start an LLC", "make a will", "get a passport fast", "trademark a name", "notarize documents"]
  },
  {
    slug: "education-career",
    name: "Education & Career",
    description: "Compare affordable certification, career training, textbooks, degree paths, and job-skill routes.",
    icon: GraduationCap,
    examples: ["learn coding", "get a CDL", "become a nurse", "get IT certified", "learn Spanish"]
  },
  {
    slug: "business",
    name: "Small Business",
    description: "Estimate cheaper ways to launch, insure, market, equip, and operate common small businesses.",
    icon: BriefcaseBusiness,
    examples: ["start a cleaning business", "get business insurance", "print flyers", "buy equipment", "hire payroll"]
  }
];

export const guides: Guide[] = [
  {
    slug: "ship-clothes",
    category: "shipping-moving",
    title: "Cheapest Way to Ship Clothes in 2026",
    h1: "Cheapest Way to Ship Clothes",
    description:
      "Compare USPS, UPS, FedEx, discounted postage, luggage, and moving-box options for sending clothes cheaply.",
    primaryKeyword: "cheapest way to ship clothes",
    secondaryKeywords: [
      "cheapest way to ship clothes to another state",
      "cheapest way to ship clothes usps",
      "what is the cheapest way to ship clothes",
      "cheapest way to ship clothes when moving",
      "cheapest way to ship a box of clothes",
      "cheapest way to mail clothes"
    ],
    updated: "2026-04-25",
    verdict:
      "For a few items, discounted USPS Ground Advantage or a poly mailer is usually the cheapest. For heavy boxes of clothes, compare discounted UPS/FedEx labels against USPS flat rate and checked luggage if you are moving.",
    options: [
      {
        name: "Discounted USPS Ground Advantage",
        cost: "Often lowest for light packages",
        bestFor: "T-shirts, jeans, small clothing bundles, sellers",
        watchOut: "Price climbs as weight and box size increase"
      },
      {
        name: "USPS Flat Rate",
        cost: "Predictable fixed box prices",
        bestFor: "Dense clothing that fits tightly in a flat-rate box",
        watchOut: "Bad deal for bulky but lightweight clothes"
      },
      {
        name: "Discounted UPS or FedEx labels",
        cost: "Competitive for heavier boxes",
        bestFor: "Moving boxes, coats, shoes, 20 lb+ shipments",
        watchOut: "Retail counter rates can be much higher"
      },
      {
        name: "Checked luggage",
        cost: "Sometimes cheapest when traveling too",
        bestFor: "Moving clothes while flying",
        watchOut: "Airline baggage fees and weight limits vary"
      }
    ],
    faqs: [
      {
        question: "What is the cheapest way to ship clothes to another state?",
        answer:
          "For light shipments, start with discounted USPS Ground Advantage. For a larger moving box, compare discounted UPS and FedEx labels because heavy boxes can beat USPS retail rates."
      },
      {
        question: "Is USPS cheapest for shipping clothes?",
        answer:
          "USPS is often cheapest for small and light clothing packages, especially poly mailers. It is not always cheapest for large boxes of clothes."
      },
      {
        question: "Should I use a box or poly mailer for clothes?",
        answer:
          "Use a poly mailer for soft, non-fragile clothes when possible. Use a box for shoes, coats, formalwear, or anything that needs shape protection."
      }
    ]
  },
  {
    slug: "ship-boxes-across-country",
    category: "shipping-moving",
    title: "Cheapest Way to Ship Boxes Across Country",
    h1: "Cheapest Way to Ship Boxes Across Country",
    description:
      "Compare postal services, parcel carriers, moving containers, bus freight alternatives, and luggage strategies for long-distance boxes.",
    primaryKeyword: "cheapest way to ship boxes across country",
    secondaryKeywords: [
      "cheapest way to ship boxes",
      "cheapest way to move boxes across country",
      "ship boxes when moving",
      "cheapest way to ship moving boxes"
    ],
    updated: "2026-04-25",
    verdict:
      "For a few smaller boxes, discounted parcel labels are usually easiest. For many heavy boxes, moving containers or freight-style services can become cheaper per box.",
    options: [
      {
        name: "Discounted parcel labels",
        cost: "Best for 1-5 boxes",
        bestFor: "Small moves and student moves",
        watchOut: "Dimensional weight can surprise you"
      },
      {
        name: "Moving container",
        cost: "Better for many boxes",
        bestFor: "Apartment moves and long-distance relocations",
        watchOut: "Not worth it for only one or two boxes"
      },
      {
        name: "Checked bags",
        cost: "Cheap if you already fly",
        bestFor: "Clothes, soft goods, college moves",
        watchOut: "Airline limits and extra bag fees"
      }
    ],
    faqs: [
      {
        question: "Is it cheaper to ship boxes or use a moving company?",
        answer:
          "Shipping is often cheaper for a few boxes. A moving company or container may be cheaper when you have furniture, many boxes, or need pickup and delivery."
      },
      {
        question: "How do I lower the cost of shipping boxes?",
        answer:
          "Use smaller boxes, avoid empty space, compare discounted label platforms, and split heavy items across boxes to avoid surcharges."
      }
    ]
  }
];

export const keywordBacklog = [
  "cheapest way to ship a bike",
  "cheapest way to ship shoes",
  "cheapest way to send luggage",
  "cheapest way to ship furniture",
  "cheapest way to move out of state",
  "cheapest way to replace car keys",
  "cheapest way to file taxes",
  "cheapest way to start an LLC",
  "cheapest way to get a passport fast",
  "cheapest way to heat a house",
  "cheapest way to learn coding",
  "cheapest way to get a CDL"
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesByCategory(categorySlug: string) {
  return guides.filter((guide) => guide.category === categorySlug);
}
