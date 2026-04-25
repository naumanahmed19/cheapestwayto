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
  image: string;
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
  image: string;
  listingMeta: string;
  updated: string;
  verdict: string;
  options: {
    name: string;
    cost: string;
    bestFor: string;
    watchOut: string;
  }[];
  decisionTool: {
    title: string;
    prompt: string;
    situations: {
      id: string;
      label: string;
      summary: string;
      recommendation: string;
      why: string;
      nextSteps: string[];
      watchOut: string[];
    }[];
  };
  costDrivers: string[];
  cheapestPath: string[];
  redFlags: string[];
  sources: {
    label: string;
    url: string;
    note: string;
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
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    examples: ["ship clothes", "ship boxes", "move out of state", "send luggage", "ship a bike"]
  },
  {
    slug: "cars",
    name: "Cars",
    description: "Find cheaper paths for insurance, repairs, keys, registration, charging, renting, and transporting vehicles.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    examples: ["insure a car", "replace car keys", "ship a car", "fix a windshield", "rent long term"]
  },
  {
    slug: "home-repairs",
    name: "Home & Repairs",
    description: "Compare DIY, local service, and marketplace options for common home costs and repairs.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    examples: ["heat a house", "replace windows", "remove junk", "fix a roof leak", "insulate attic"]
  },
  {
    slug: "travel",
    name: "Travel",
    description: "Plan cheaper routes for hotels, flights, airport parking, car rentals, pets, luggage, and destination trips.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    examples: ["book hotels", "rent a car", "visit Disney World", "fly with pets", "travel Europe"]
  },
  {
    slug: "money",
    name: "Money",
    description: "Compare costs for taxes, currency exchange, debt payoff, borrowing, insurance, and sending money.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=80",
    examples: ["file taxes", "send money internationally", "exchange currency", "build credit", "borrow money"]
  },
  {
    slug: "legal-admin",
    name: "Legal & Admin",
    description: "Break down cheaper options for LLCs, wills, divorces, trademarks, passports, and document tasks.",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
    examples: ["start an LLC", "make a will", "get a passport fast", "trademark a name", "notarize documents"]
  },
  {
    slug: "education-career",
    name: "Education & Career",
    description: "Compare affordable certification, career training, textbooks, degree paths, and job-skill routes.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    examples: ["learn coding", "get a CDL", "become a nurse", "get IT certified", "learn Spanish"]
  },
  {
    slug: "business",
    name: "Small Business",
    description: "Estimate cheaper ways to launch, insure, market, equip, and operate common small businesses.",
    icon: BriefcaseBusiness,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    listingMeta: "Light packages, moving boxes, and mailers",
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
    decisionTool: {
      title: "Choose the right shipping path",
      prompt: "What are you sending?",
      situations: [
        {
          id: "few-light-items",
          label: "A few light items",
          summary: "One mailer or a small box under about 5 lb.",
          recommendation: "Start with discounted USPS Ground Advantage in a poly mailer.",
          why: "Soft clothes do not need much protection, and USPS is usually strongest on smaller domestic packages when you buy postage online.",
          nextSteps: [
            "Pack in the smallest poly mailer or box that fits without bulging.",
            "Weigh after packing, then compare USPS online postage against one discounted carrier label.",
            "Skip flat rate unless the clothes are dense and fill the box."
          ],
          watchOut: [
            "Round up weight before comparing.",
            "Large lightweight boxes can trigger dimensional pricing."
          ]
        },
        {
          id: "moving-box",
          label: "A moving box",
          summary: "One or more boxes with coats, shoes, jeans, or mixed clothes.",
          recommendation: "Compare discounted UPS or FedEx labels against USPS flat rate.",
          why: "Once boxes get heavy or bulky, parcel discounts and dimensional rules matter more than the carrier name.",
          nextSteps: [
            "Measure each packed box before buying a label.",
            "Price USPS, UPS, and FedEx using the same dimensions and weight.",
            "Split very heavy boxes if it avoids surcharges or makes carrying safer."
          ],
          watchOut: [
            "Retail counter rates can be much higher than online labels.",
            "Shoes and coats can make a box bulky faster than expected."
          ]
        },
        {
          id: "moving-while-flying",
          label: "Flying too",
          summary: "You are traveling on the same route as the clothes.",
          recommendation: "Price an extra checked bag before shipping boxes.",
          why: "If you are already flying, baggage fees can beat parcel shipping for dense clothing, especially when delivery speed is not the issue.",
          nextSteps: [
            "Check your airline's extra-bag and overweight fees.",
            "Keep each bag under the airline weight limit.",
            "Ship only what cannot travel well as luggage."
          ],
          watchOut: [
            "Overweight bags can erase the savings.",
            "Airlines may charge more at the airport than online."
          ]
        }
      ]
    },
    costDrivers: [
      "Packed weight, rounded up to the carrier's pricing tier.",
      "Box dimensions, especially if the box is large but light.",
      "Distance zone and whether you buy postage online or at a retail counter.",
      "Insurance, pickup, label printing, and signature add-ons."
    ],
    cheapestPath: [
      "Remove items you can replace cheaply at the destination.",
      "Use a poly mailer for soft clothes and the smallest box for shoes or coats.",
      "Weigh and measure the final package, not the empty packaging.",
      "Compare at least one USPS price and one discounted UPS/FedEx price before paying.",
      "Use checked luggage only when you are already flying and can stay under limits."
    ],
    redFlags: [
      "A quote that does not ask for dimensions.",
      "A box with lots of empty space.",
      "Buying postage at the counter without checking online discounts first.",
      "Using flat rate for bulky, lightweight clothes."
    ],
    sources: [
      {
        label: "USPS Ground Advantage",
        url: "https://www.usps.com/ship/ground-advantage.htm",
        note: "Use for current USPS rules, included tracking/insurance, weight limits, and current starting prices."
      },
      {
        label: "USPS price calculator",
        url: "https://postcalc.usps.com/",
        note: "Use the calculator with your exact ZIP codes, dimensions, and packed weight before buying postage."
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
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80",
    listingMeta: "Cross-country boxes and small moves",
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
    decisionTool: {
      title: "Pick a moving-box strategy",
      prompt: "How many boxes are you moving?",
      situations: [
        {
          id: "one-to-three",
          label: "1-3 boxes",
          summary: "A small student move, closet cleanout, or a few household boxes.",
          recommendation: "Use discounted parcel labels and avoid a moving service minimum.",
          why: "For only a few boxes, the fixed minimums on freight, containers, or movers often cost more than parcel shipping.",
          nextSteps: [
            "Pack into standard-size boxes and avoid oversized cartons.",
            "Measure and weigh each box separately.",
            "Compare online USPS, UPS, and FedEx labels before choosing."
          ],
          watchOut: [
            "Large boxes can cost more even when they are not heavy.",
            "Books and tools can make a box unsafe to lift."
          ]
        },
        {
          id: "many-boxes",
          label: "6+ boxes",
          summary: "Enough boxes that per-box parcel pricing starts to feel painful.",
          recommendation: "Price a moving container or freight-style service against parcel shipping.",
          why: "At higher volume, a container can reduce per-box cost and simplify pickup, even if the headline price is higher.",
          nextSteps: [
            "Count only the boxes you truly need to move.",
            "Get one parcel estimate for the full set and one container quote.",
            "Check pickup windows, storage days, and delivery access before booking."
          ],
          watchOut: [
            "Container quotes may exclude parking permits or long-carry fees.",
            "Parcel carriers may add surcharges for oversized boxes."
          ]
        },
        {
          id: "flying",
          label: "Flying there",
          summary: "You can bring some items on the same trip.",
          recommendation: "Use checked bags for clothes and ship only rigid or leftover boxes.",
          why: "Checked bags can be cheaper for soft goods, but they are not ideal for fragile household items.",
          nextSteps: [
            "Put dense clothing in checked bags first.",
            "Use parcel shipping for boxes that are awkward but not furniture-sized.",
            "Keep essentials with you in a carry-on."
          ],
          watchOut: [
            "Extra baggage fees vary by airline and route.",
            "Lost luggage risk is different from carrier delivery risk."
          ]
        }
      ]
    },
    costDrivers: [
      "Number of boxes and whether a service has a minimum charge.",
      "Dimensional weight for large, lightweight cartons.",
      "Pickup, stairs, elevator access, storage, and delivery windows.",
      "Whether your route is common or remote."
    ],
    cheapestPath: [
      "Cut the shipment down before pricing anything.",
      "Pack smaller boxes that stay easy to lift.",
      "Compare parcel labels for the first few boxes.",
      "Once the shipment grows, compare a container quote against the parcel total.",
      "Use luggage for clothes if you are already flying."
    ],
    redFlags: [
      "A moving quote that does not ask about access, stairs, or parking.",
      "Very large boxes filled with light items.",
      "Paying for a container when you only have a few boxes.",
      "Shipping low-value bulky items that cost less to replace."
    ],
    sources: [
      {
        label: "USPS price calculator",
        url: "https://postcalc.usps.com/",
        note: "Use exact dimensions and packed weights when comparing parcel shipping."
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
  },
  {
    slug: "send-luggage",
    category: "shipping-moving",
    title: "Cheapest Way to Send Luggage",
    h1: "Cheapest Way to Send Luggage",
    description:
      "Compare checked bags, luggage shipping services, parcel labels, and moving-box alternatives before sending suitcases ahead.",
    primaryKeyword: "cheapest way to send luggage",
    secondaryKeywords: [
      "cheapest way to ship luggage",
      "cheapest way to send suitcases",
      "send luggage ahead cheaply",
      "cheapest luggage shipping option"
    ],
    image: "https://images.unsplash.com/photo-1763380064985-6c99cbb9955d?auto=format&fit=crop&w=1200&q=80",
    listingMeta: "Suitcases, checked bags, and travel moves",
    updated: "2026-04-25",
    verdict:
      "If you are flying on the same trip, an extra checked bag is often the cheapest place to start. If you need pickup, tracking, or door-to-door delivery, compare luggage shippers against discounted UPS and FedEx labels before booking.",
    options: [
      {
        name: "Extra checked bag",
        cost: "Often cheapest when you are flying too",
        bestFor: "Clothes, soft goods, student travel, simple moves",
        watchOut: "Weight limits, oversize fees, and airport handling"
      },
      {
        name: "Discounted parcel label",
        cost: "Can beat specialty services for boxed luggage",
        bestFor: "One suitcase or duffel packed in a box",
        watchOut: "Suitcases may need boxing to avoid damage or surcharges"
      },
      {
        name: "Luggage shipping service",
        cost: "Convenient but usually not the lowest baseline",
        bestFor: "Door-to-door pickup, sports gear, hands-off travel",
        watchOut: "Convenience fees and delivery windows"
      },
      {
        name: "Moving box or container",
        cost: "Better when luggage is part of a larger move",
        bestFor: "Multiple bags plus household items",
        watchOut: "Minimum shipment sizes can make it expensive for one bag"
      }
    ],
    decisionTool: {
      title: "Decide whether to check or ship",
      prompt: "What matters most for this luggage?",
      situations: [
        {
          id: "traveling",
          label: "I am flying too",
          summary: "You can bring the bag on your own flight.",
          recommendation: "Check an extra bag first, then compare shipping only if the bag is oversized or inconvenient.",
          why: "When you are already on the route, an extra bag often avoids door-to-door service fees.",
          nextSteps: [
            "Check the airline's first, second, and overweight bag fees.",
            "Weigh the packed bag at home.",
            "Compare shipping only if the bag is over the airline limit or you cannot carry it."
          ],
          watchOut: [
            "Oversize and overweight fees can stack.",
            "Some basic economy fares have stricter baggage rules."
          ]
        },
        {
          id: "not-traveling",
          label: "I am not traveling",
          summary: "The bag needs to go without you.",
          recommendation: "Compare a boxed parcel label against luggage shipping services.",
          why: "Specialty luggage shippers add convenience, but boxed parcel labels can be cheaper for straightforward bags.",
          nextSteps: [
            "Check whether the carrier requires the suitcase to be boxed.",
            "Measure the bag or box after packing.",
            "Compare pickup, tracking, insurance, and delivery-date guarantees."
          ],
          watchOut: [
            "Unboxed luggage may be damaged or rejected by some services.",
            "Door-to-door pickup can add convenience fees."
          ]
        },
        {
          id: "sports-gear",
          label: "Sports gear",
          summary: "Skis, golf clubs, instruments, or other specialty luggage.",
          recommendation: "Price specialty shipping and airline sports-equipment fees side by side.",
          why: "Specialty carriers may handle awkward gear better, but airlines can still be cheaper on some routes.",
          nextSteps: [
            "Check size limits before assuming it is oversized.",
            "Use a hard case or proper box.",
            "Compare insurance coverage, not just shipping price."
          ],
          watchOut: [
            "Replacement value may justify a more protective service.",
            "Delivery timing matters more for event-based travel."
          ]
        }
      ]
    },
    costDrivers: [
      "Whether you are already flying the same route.",
      "Bag weight, oversize status, and number of bags.",
      "Door-to-door pickup versus drop-off.",
      "Insurance needs and delivery deadline."
    ],
    cheapestPath: [
      "If flying, check airline baggage fees first.",
      "Weigh the packed bag and remove low-value heavy items.",
      "Compare boxed parcel shipping against luggage services.",
      "Choose the cheapest option that still meets your arrival deadline.",
      "Add insurance only when the contents justify it."
    ],
    redFlags: [
      "Booking a luggage shipper before checking airline fees.",
      "Sending an unboxed suitcase without confirming carrier rules.",
      "Ignoring overweight fees until airport check-in.",
      "Shipping valuables without checking claim limits."
    ],
    sources: [
      {
        label: "USPS price calculator",
        url: "https://postcalc.usps.com/",
        note: "Useful for comparing boxed luggage as a parcel shipment."
      }
    ],
    faqs: [
      {
        question: "Is it cheaper to ship luggage or check a bag?",
        answer:
          "If you are already flying, checking an extra bag is often cheaper. Shipping can make sense when you need door-to-door delivery, cannot carry the bag, or are sending luggage without traveling."
      },
      {
        question: "Can I ship a suitcase without a box?",
        answer:
          "Some services allow it, but boxing the suitcase can reduce damage risk and make carrier rules simpler. Always check the carrier's packaging requirements before buying a label."
      }
    ]
  },
  {
    slug: "replace-car-keys",
    category: "cars",
    title: "Cheapest Way to Replace Car Keys",
    h1: "Cheapest Way to Replace Car Keys",
    description:
      "Compare locksmiths, dealerships, online blanks, key programming, roadside coverage, and insurance options for replacing lost car keys.",
    primaryKeyword: "cheapest way to replace car keys",
    secondaryKeywords: [
      "cheapest way to get a car key made",
      "cheap car key replacement",
      "replace lost car key cheaply",
      "cheapest way to program a car key"
    ],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    listingMeta: "Lost keys, fobs, programming, and locksmiths",
    updated: "2026-04-25",
    verdict:
      "For basic keys, a hardware store or locksmith is usually the cheapest. For smart keys and fobs, compare an automotive locksmith against the dealership, and check whether roadside assistance or insurance includes key replacement before paying out of pocket.",
    options: [
      {
        name: "Hardware store key copy",
        cost: "Lowest for simple metal keys",
        bestFor: "Older vehicles and spare basic keys",
        watchOut: "Usually cannot handle advanced fobs or immobilizer programming"
      },
      {
        name: "Automotive locksmith",
        cost: "Often cheaper than a dealership for programmed keys",
        bestFor: "Lost keys, transponder keys, mobile service",
        watchOut: "Pricing varies by vehicle, location, and emergency timing"
      },
      {
        name: "Dealer replacement",
        cost: "Reliable but often higher",
        bestFor: "Newer smart keys, warranty situations, hard-to-source fobs",
        watchOut: "May require towing the vehicle or waiting for parts"
      },
      {
        name: "Online blank plus local programming",
        cost: "Can be cheaper if compatible",
        bestFor: "Planned spare keys when you can verify part numbers",
        watchOut: "Wrong blanks, locked fobs, and programming incompatibility"
      }
    ],
    decisionTool: {
      title: "Find the cheapest safe key replacement",
      prompt: "What kind of key do you need?",
      situations: [
        {
          id: "basic-spare",
          label: "Basic spare",
          summary: "You still have a working key and need a copy.",
          recommendation: "Use a hardware store or local locksmith for a simple duplicate.",
          why: "When no immobilizer programming is needed, the cheapest option is usually a straightforward cut key.",
          nextSteps: [
            "Bring the working key and vehicle details.",
            "Ask whether the copy is a plain metal key or transponder key.",
            "Test the copy in the door and ignition before leaving."
          ],
          watchOut: [
            "A copied metal key may unlock the door but not start newer cars.",
            "Some kiosk copies cannot handle worn keys well."
          ]
        },
        {
          id: "lost-all-keys",
          label: "Lost all keys",
          summary: "The car is locked or cannot start.",
          recommendation: "Call an automotive locksmith before towing to a dealership.",
          why: "A mobile locksmith can often cut and program a key on site, avoiding towing and dealer labor.",
          nextSteps: [
            "Have your VIN, proof of ownership, and location ready.",
            "Ask for an all-in quote including programming and trip fees.",
            "Compare dealership pricing only after you know whether towing is required."
          ],
          watchOut: [
            "Emergency or after-hours calls cost more.",
            "Very new vehicles may still require dealer equipment."
          ]
        },
        {
          id: "smart-fob",
          label: "Smart key or fob",
          summary: "Push-button start, proximity key, or remote fob.",
          recommendation: "Compare an automotive locksmith with the dealership and verify part compatibility.",
          why: "The fob itself, programming, and emergency blade can all be separate charges.",
          nextSteps: [
            "Find the exact part number before buying a blank online.",
            "Ask whether used or aftermarket fobs can be programmed for your car.",
            "Check roadside assistance, warranty, or insurance benefits."
          ],
          watchOut: [
            "Some used fobs are locked to a previous vehicle.",
            "Cheap online blanks can become wasted money if incompatible."
          ]
        }
      ]
    },
    costDrivers: [
      "Key type: plain metal, transponder, remote fob, or smart key.",
      "Whether you still have a working key.",
      "Programming requirements and mobile-service fees.",
      "Towing, emergency timing, and proof-of-ownership delays."
    ],
    cheapestPath: [
      "Identify the key type before calling around.",
      "Check roadside assistance, warranty, and insurance benefits.",
      "Get an automotive locksmith quote with programming included.",
      "Use the dealer only when the locksmith cannot source or program the key.",
      "Make a spare once the immediate replacement is solved."
    ],
    redFlags: [
      "A quote that excludes programming.",
      "A locksmith who will not give a business name or license details where required.",
      "Buying a fob online without matching the part number.",
      "Paying for a tow before checking mobile locksmith availability."
    ],
    sources: [
      {
        label: "FTC auto repair basics",
        url: "https://consumer.ftc.gov/node/77132",
        note: "Useful consumer guidance for written estimates, authorization, and repair-shop red flags."
      }
    ],
    faqs: [
      {
        question: "Is a locksmith cheaper than a dealership for car keys?",
        answer:
          "For many transponder keys and fobs, an automotive locksmith is cheaper than a dealership. The dealership may still be best for some newer vehicles, warranty cases, or specialty keys."
      },
      {
        question: "Can I buy a car key online and program it myself?",
        answer:
          "Sometimes, but it depends on the vehicle and key type. Many modern keys require professional programming, so verify compatibility before buying a blank."
      }
    ]
  },
  {
    slug: "heat-a-house",
    category: "home-repairs",
    title: "Cheapest Way to Heat a House",
    h1: "Cheapest Way to Heat a House",
    description:
      "Compare thermostat changes, sealing drafts, space heaters, heat pumps, fuel switching, and insulation upgrades for lowering home heating costs.",
    primaryKeyword: "cheapest way to heat a house",
    secondaryKeywords: [
      "cheapest way to heat a home",
      "cheapest way to heat a room",
      "how to lower heating costs",
      "cheap home heating options"
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    listingMeta: "Drafts, thermostats, rooms, and whole-home heat",
    updated: "2026-04-25",
    verdict:
      "The cheapest first step is usually reducing heat loss: seal drafts, lower the thermostat, and heat only occupied rooms when safe. Bigger upgrades like insulation or heat pumps can save more over time, but they need a payback check before you spend.",
    options: [
      {
        name: "Seal drafts and weatherstrip",
        cost: "Low upfront cost",
        bestFor: "Doors, windows, attic hatches, older homes",
        watchOut: "Does not fix undersized or failing heating systems"
      },
      {
        name: "Thermostat schedule",
        cost: "Free to low cost",
        bestFor: "Homes empty during work or school hours",
        watchOut: "Overly aggressive setbacks can feel uncomfortable"
      },
      {
        name: "Room heating strategy",
        cost: "Cheap for one occupied area",
        bestFor: "Working from one room, mild climates, short sessions",
        watchOut: "Space heaters need clearance and safe electrical use"
      },
      {
        name: "Insulation or heat pump upgrade",
        cost: "Higher upfront, better long-term potential",
        bestFor: "High bills, poor comfort, long-term homeowners",
        watchOut: "Payback depends on climate, fuel prices, rebates, and install quality"
      }
    ],
    decisionTool: {
      title: "Choose your heating savings move",
      prompt: "What problem are you solving?",
      situations: [
        {
          id: "bill-too-high",
          label: "Bill is too high",
          summary: "The house is warm enough, but heating costs feel painful.",
          recommendation: "Start with thermostat schedule, air sealing, and utility-rate checks.",
          why: "The cheapest savings usually come from using less heat and losing less heat before buying equipment.",
          nextSteps: [
            "Lower the thermostat during sleep or away hours if comfortable.",
            "Seal obvious drafts around doors, windows, and attic access.",
            "Check utility rebates for audits, insulation, and smart thermostats."
          ],
          watchOut: [
            "Extreme setbacks can make the home uncomfortable.",
            "Do not block vents or create combustion-safety issues."
          ]
        },
        {
          id: "one-cold-room",
          label: "One cold room",
          summary: "Most of the home is okay, but one space needs help.",
          recommendation: "Fix drafts and use targeted room heating before raising the whole-house temperature.",
          why: "Heating one occupied room can be cheaper than heating the full home higher for hours.",
          nextSteps: [
            "Check window leaks, door gaps, and blocked registers.",
            "Use a safe space heater only while the room is occupied.",
            "Consider a ductless mini-split if the room is used often."
          ],
          watchOut: [
            "Space heaters need clearance and a safe outlet.",
            "A cold room can signal duct, insulation, or moisture problems."
          ]
        },
        {
          id: "long-term-home",
          label: "Staying long term",
          summary: "You own the home and want durable lower bills.",
          recommendation: "Price insulation and heat-pump upgrades after an energy audit.",
          why: "Bigger upgrades can save more over time, but only if they are sized and sequenced correctly.",
          nextSteps: [
            "Get an energy audit or blower-door assessment if available.",
            "Seal and insulate before replacing HVAC where practical.",
            "Compare rebates, tax credits, and operating costs before signing."
          ],
          watchOut: [
            "Oversized systems can cost more and perform worse.",
            "Cheap installation can erase equipment savings."
          ]
        }
      ]
    },
    costDrivers: [
      "Climate, insulation, air leakage, and fuel type.",
      "How many rooms are occupied and for how many hours.",
      "Utility rates, rebates, and whether you rent or own.",
      "Equipment age, maintenance, and installation quality."
    ],
    cheapestPath: [
      "Start with thermostat changes that do not hurt comfort or safety.",
      "Seal the easiest drafts first.",
      "Use targeted room heat only when occupied.",
      "Check rebates before buying thermostats, insulation, or HVAC equipment.",
      "Run a payback check before major upgrades."
    ],
    redFlags: [
      "Replacing HVAC before checking insulation and air leaks.",
      "Running a space heater unattended.",
      "Blocking vents or using ovens for heat.",
      "Accepting a big upgrade quote without rebate and operating-cost math."
    ],
    sources: [
      {
        label: "Department of Energy heat pumps",
        url: "https://www.energy.gov/heat-pumps",
        note: "Current federal guidance on heat pump types, use cases, and efficiency basics."
      },
      {
        label: "ENERGY STAR home improvement",
        url: "https://www.energystar.gov/saveathome",
        note: "Useful starting point for home efficiency projects and rebate-aware upgrades."
      }
    ],
    faqs: [
      {
        question: "What is the cheapest way to heat one room?",
        answer:
          "If the room is occupied for a limited time, closing drafts and using a safe, efficient room heater can be cheaper than raising the whole-house thermostat."
      },
      {
        question: "Should I insulate before replacing my heater?",
        answer:
          "Often yes. Reducing heat loss can lower bills immediately and may let you choose a smaller or more efficient system later."
      }
    ]
  },
  {
    slug: "book-hotels",
    category: "travel",
    title: "Cheapest Way to Book Hotels",
    h1: "Cheapest Way to Book Hotels",
    description:
      "Compare hotel direct rates, booking sites, loyalty programs, flexible dates, bundles, and last-minute deals before reserving a room.",
    primaryKeyword: "cheapest way to book hotels",
    secondaryKeywords: [
      "cheapest way to get a hotel room",
      "cheap hotel booking tips",
      "book hotels cheaper",
      "best way to compare hotel prices"
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    listingMeta: "Hotels, flexible dates, loyalty, and fees",
    updated: "2026-04-25",
    verdict:
      "Start with a broad comparison site to find the market rate, then check the hotel's direct price before booking. The cheapest final choice depends on taxes, resort fees, cancellation rules, loyalty perks, and whether your dates are flexible.",
    options: [
      {
        name: "Comparison booking site",
        cost: "Good for finding the baseline",
        bestFor: "Scanning many hotels quickly",
        watchOut: "Displayed prices may exclude taxes, resort fees, or stricter cancellation rules"
      },
      {
        name: "Hotel direct booking",
        cost: "Often matches or beats after perks",
        bestFor: "Loyalty points, easier changes, special requests",
        watchOut: "Direct rates are not always the lowest headline price"
      },
      {
        name: "Flexible date search",
        cost: "Often the biggest savings lever",
        bestFor: "Leisure trips and road trips",
        watchOut: "Events and peak weekends can erase savings"
      },
      {
        name: "Mystery or last-minute deal",
        cost: "Can be cheap with tradeoffs",
        bestFor: "Flexible travelers who care more about price than exact hotel",
        watchOut: "Limited refunds, fewer details, and location surprises"
      }
    ],
    decisionTool: {
      title: "Choose how to book the room",
      prompt: "What kind of trip is this?",
      situations: [
        {
          id: "flexible-leisure",
          label: "Flexible leisure",
          summary: "You can shift dates, neighborhood, or hotel tier.",
          recommendation: "Use flexible-date comparison first, then check the hotel's direct total.",
          why: "Moving the stay by a day or two often beats small promo codes, especially around events and weekends.",
          nextSteps: [
            "Search a date grid or map to find the cheapest nights.",
            "Compare the all-in total with taxes and mandatory fees.",
            "Check direct member rates before booking the final room."
          ],
          watchOut: [
            "The cheapest room may have stricter cancellation rules.",
            "Parking and resort fees can beat the nightly discount."
          ]
        },
        {
          id: "fixed-dates",
          label: "Fixed dates",
          summary: "You cannot change the dates or location much.",
          recommendation: "Compare total price, cancellation terms, and perks, not just nightly rate.",
          why: "When dates are fixed, the cheapest true option is often the room with fewer add-on costs.",
          nextSteps: [
            "Filter by the exact area you need.",
            "Sort by total stay cost where available.",
            "Check direct booking for breakfast, parking, points, or easier changes."
          ],
          watchOut: [
            "Taxes and mandatory fees may appear late in checkout.",
            "Nonrefundable rates can be expensive if plans change."
          ]
        },
        {
          id: "last-minute",
          label: "Last minute",
          summary: "You need a room soon and can accept tradeoffs.",
          recommendation: "Use last-minute and mystery deals only when location risk is acceptable.",
          why: "Opaque deals can save money, but they trade certainty and refund flexibility for price.",
          nextSteps: [
            "Set a hard maximum total price.",
            "Check the map radius and guest rating carefully.",
            "Avoid prepaid deals if arrival time or plans are uncertain."
          ],
          watchOut: [
            "Mystery hotels may be farther from your real destination.",
            "Resort, parking, and pet fees still matter."
          ]
        }
      ]
    },
    costDrivers: [
      "Dates, local events, and neighborhood.",
      "Taxes, resort/destination fees, parking, breakfast, and pet fees.",
      "Cancellation rules and whether the booking is prepaid.",
      "Loyalty benefits, points value, and member rates."
    ],
    cheapestPath: [
      "Search broadly to learn the market price.",
      "Switch dates if you can.",
      "Compare the all-in total, not the nightly rate.",
      "Check the hotel direct price before booking.",
      "Choose the cheapest option that still gives enough cancellation flexibility."
    ],
    redFlags: [
      "A low nightly rate with mandatory fees added later.",
      "Nonrefundable booking before travel plans are stable.",
      "A room far from transit or parking when those costs matter.",
      "A third-party deal that makes changes harder for a small saving."
    ],
    sources: [
      {
        label: "FTC fee disclosure rule",
        url: "https://www.ftc.gov/node/86973",
        note: "Explains the U.S. rule requiring clearer total-price disclosure for short-term lodging and live-event tickets."
      }
    ],
    faqs: [
      {
        question: "Is it cheaper to book hotels direct or through a site?",
        answer:
          "Use booking sites to compare, then check direct. Direct can be cheaper after member rates, points, breakfast, parking, or better cancellation terms are included."
      },
      {
        question: "What hotel fees should I check before booking?",
        answer:
          "Check taxes, resort fees, destination fees, parking, pet fees, breakfast, Wi-Fi, and cancellation deadlines before deciding which room is actually cheapest."
      }
    ]
  },
  {
    slug: "file-taxes",
    category: "money",
    title: "Cheapest Way to File Taxes",
    h1: "Cheapest Way to File Taxes",
    description:
      "Compare free filing programs, tax software, volunteer tax help, and paid preparers for simple and more complex tax returns.",
    primaryKeyword: "cheapest way to file taxes",
    secondaryKeywords: [
      "file taxes for free",
      "cheap tax filing options",
      "cheapest tax software",
      "free tax preparation help"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    listingMeta: "Free filing, software, and tax prep help",
    updated: "2026-04-25",
    verdict:
      "For simple returns, free filing programs or free tiers from reputable tax software are usually cheapest. If you have self-employment income, rental property, multiple states, or tax notices, paying for qualified help can be cheaper than fixing mistakes later.",
    options: [
      {
        name: "Free filing program",
        cost: "Free if you qualify",
        bestFor: "Simple federal returns and eligible taxpayers",
        watchOut: "State returns, income limits, and form restrictions vary"
      },
      {
        name: "Tax software free tier",
        cost: "Free to low cost for simple returns",
        bestFor: "W-2 income, standard deduction, straightforward credits",
        watchOut: "Upsells can appear when your return gets more complex"
      },
      {
        name: "Volunteer tax help",
        cost: "Free through qualifying programs",
        bestFor: "Eligible taxpayers who want in-person or guided help",
        watchOut: "Appointment availability and scope limits"
      },
      {
        name: "Paid tax preparer",
        cost: "Higher upfront, useful for complexity",
        bestFor: "Business income, rental income, prior-year issues, notices",
        watchOut: "Choose credentials carefully and ask for pricing before sharing documents"
      }
    ],
    decisionTool: {
      title: "Pick the cheapest filing route",
      prompt: "How complicated is your return?",
      situations: [
        {
          id: "simple-w2",
          label: "Simple W-2",
          summary: "W-2 income, standard deduction, and no major complications.",
          recommendation: "Start with IRS Free File or a reputable free software tier.",
          why: "Simple returns often qualify for no-cost federal filing, and some providers include state filing depending on eligibility.",
          nextSteps: [
            "Check IRS Free File eligibility first.",
            "Confirm whether your state return is free before starting.",
            "Avoid upgrades unless a form you truly need is unsupported."
          ],
          watchOut: [
            "Software upsells can appear mid-flow.",
            "Free federal filing does not always mean free state filing."
          ]
        },
        {
          id: "eligible-help",
          label: "Need guided help",
          summary: "You qualify for free tax help or prefer assisted filing.",
          recommendation: "Look for VITA/TCE, MilTax, or other free preparation programs before paying.",
          why: "Free assisted programs can be better than struggling through software when your situation fits their scope.",
          nextSteps: [
            "Check appointment availability early.",
            "Gather tax forms, ID, prior-year AGI, and bank details.",
            "Confirm the program handles your forms before booking."
          ],
          watchOut: [
            "Free help programs have scope limits.",
            "Appointments can fill up near the filing deadline."
          ]
        },
        {
          id: "complex",
          label: "Business or rental",
          summary: "Self-employment, rental property, multiple states, notices, or messy records.",
          recommendation: "Pay for qualified help after asking for a clear price range.",
          why: "For complex returns, the cheapest option can be the one that avoids penalties, missed deductions, or amended returns.",
          nextSteps: [
            "Ask whether the preparer has experience with your exact situation.",
            "Request pricing before sharing all documents.",
            "Keep copies of everything filed."
          ],
          watchOut: [
            "Preparers who base fees on refund size.",
            "Anyone who will not sign the return or provide a PTIN."
          ]
        }
      ]
    },
    costDrivers: [
      "Federal versus state filing and number of states.",
      "Forms for investments, self-employment, rental income, or credits.",
      "Whether you qualify for IRS Free File, VITA/TCE, or MilTax.",
      "Audit support, live help, and amended-return needs."
    ],
    cheapestPath: [
      "Check IRS Free File first.",
      "Confirm state filing costs before entering all data.",
      "Use free volunteer help if you qualify and want guidance.",
      "Pay for a credentialed preparer when complexity creates real risk.",
      "Keep your final return and source documents organized for next year."
    ],
    redFlags: [
      "A free option that turns paid only after you enter everything.",
      "A preparer who promises a huge refund before seeing documents.",
      "Fees based on a percentage of your refund.",
      "A preparer who will not sign the return."
    ],
    sources: [
      {
        label: "IRS free filing options",
        url: "https://www.irs.gov/file-your-taxes-for-free/",
        note: "IRS page for current Free File, Fillable Forms, and free filing resources."
      },
      {
        label: "IRS Free File 2026 reminder",
        url: "https://www.irs.gov/newsroom/2026-tax-filing-season-opens-with-several-free-filing-options-available",
        note: "IRS 2026 filing-season note with eligibility and free-help options."
      }
    ],
    faqs: [
      {
        question: "Can I really file taxes for free?",
        answer:
          "Many people with simple returns can file for free, but eligibility depends on the program, income, state return needs, and the forms required."
      },
      {
        question: "When is paying a tax preparer worth it?",
        answer:
          "It can be worth it when your return has business income, rental property, multiple states, stock complications, tax notices, or decisions that could trigger penalties."
      }
    ]
  },
  {
    slug: "start-an-llc",
    category: "legal-admin",
    title: "Cheapest Way to Start an LLC",
    h1: "Cheapest Way to Start an LLC",
    description:
      "Compare DIY state filing, formation services, registered agents, operating agreements, and tax setup steps for starting an LLC cheaply.",
    primaryKeyword: "cheapest way to start an LLC",
    secondaryKeywords: [
      "cheapest way to form an LLC",
      "start LLC yourself",
      "cheap LLC formation",
      "do I need an LLC service"
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    listingMeta: "State filing, registered agents, and setup fees",
    updated: "2026-04-25",
    verdict:
      "The cheapest way to start an LLC is usually filing directly with your state and avoiding unnecessary add-ons. A formation service can be worth it if it saves time, but watch for registered-agent subscriptions, compliance packages, and upsells.",
    options: [
      {
        name: "DIY state filing",
        cost: "Usually lowest unavoidable cost",
        bestFor: "Simple single-member LLCs and founders comfortable with forms",
        watchOut: "You still need to understand state fees, renewals, and tax registration"
      },
      {
        name: "Basic formation service",
        cost: "Low service fee plus state fees",
        bestFor: "People who want guided filing",
        watchOut: "Add-ons can turn a cheap package expensive"
      },
      {
        name: "Registered agent service",
        cost: "Useful but often recurring",
        bestFor: "Privacy, out-of-state LLCs, consistent mail handling",
        watchOut: "Annual renewals and bundled packages"
      },
      {
        name: "Attorney or accountant",
        cost: "Higher but valuable for complexity",
        bestFor: "Multiple owners, investors, regulated work, tax questions",
        watchOut: "Overkill for many simple LLC filings"
      }
    ],
    decisionTool: {
      title: "Choose an LLC setup path",
      prompt: "What kind of LLC are you forming?",
      situations: [
        {
          id: "simple-single",
          label: "Simple single-member",
          summary: "One owner, one state, straightforward business.",
          recommendation: "File directly with your state and skip bundled add-ons.",
          why: "For simple LLCs, the state fee is usually the unavoidable cost. Services mainly add convenience.",
          nextSteps: [
            "Confirm the correct state filing office.",
            "Check name availability and registered-agent requirements.",
            "File articles of organization directly if you are comfortable with forms."
          ],
          watchOut: [
            "Formation services may bundle recurring registered-agent plans.",
            "Annual report or franchise tax costs can matter more than the initial filing."
          ]
        },
        {
          id: "privacy-or-out-of-state",
          label: "Privacy or out-of-state",
          summary: "You need a registered agent or do business in more than one state.",
          recommendation: "Use a registered agent only where it solves a real privacy, address, or compliance need.",
          why: "A registered agent can be useful, but recurring fees should be intentional rather than bundled by default.",
          nextSteps: [
            "Decide whether your own address can be public.",
            "Check foreign qualification rules if operating in another state.",
            "Compare annual registered-agent renewals, not just first-year offers."
          ],
          watchOut: [
            "Free first-year agent offers can renew at higher prices.",
            "Forming in a cheap state can still require registration where you actually operate."
          ]
        },
        {
          id: "multiple-owners",
          label: "Multiple owners",
          summary: "Partners, investors, profit splits, or higher legal risk.",
          recommendation: "Spend on an operating agreement or professional advice before filing blindly.",
          why: "Ownership disputes, tax choices, and exit rules can cost far more than formation fees.",
          nextSteps: [
            "Write down ownership, contributions, roles, and exit rules.",
            "Ask a lawyer or accountant targeted questions before filing.",
            "Make sure the operating agreement matches how money will actually move."
          ],
          watchOut: [
            "Generic templates may not fit partner economics.",
            "Tax elections and payroll questions can change the cheapest structure."
          ]
        }
      ]
    },
    costDrivers: [
      "State filing fee, annual reports, and franchise taxes.",
      "Registered-agent privacy or out-of-state needs.",
      "Operating agreement complexity and number of owners.",
      "Business licenses, permits, tax registration, and ongoing compliance."
    ],
    cheapestPath: [
      "Confirm whether an LLC is actually needed yet.",
      "Find your state filing office and current fee.",
      "Avoid add-ons you do not understand.",
      "Create a basic operating agreement, especially with more than one owner.",
      "Calendar annual reports and tax deadlines immediately."
    ],
    redFlags: [
      "A service advertising a low fee while hiding state fees.",
      "Recurring compliance packages selected by default.",
      "Forming in another state without understanding foreign qualification.",
      "No written agreement between multiple owners."
    ],
    sources: [
      {
        label: "SBA register your business",
        url: "https://www.sba.gov/business-guide/launch-your-business/register-your-business",
        note: "Explains state registration, registered agents, and that fees vary by state and structure."
      },
      {
        label: "SBA choose a business structure",
        url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure",
        note: "Useful for deciding whether an LLC is the right structure before paying to form one."
      }
    ],
    faqs: [
      {
        question: "Do I need a service to start an LLC?",
        answer:
          "No. In many states you can file directly yourself. A service mainly adds convenience, reminders, and optional extras."
      },
      {
        question: "What LLC costs should I watch for?",
        answer:
          "Watch for state filing fees, annual reports, franchise taxes, registered-agent renewals, business licenses, and paid compliance packages."
      }
    ]
  },
  {
    slug: "learn-coding",
    category: "education-career",
    title: "Cheapest Way to Learn Coding",
    h1: "Cheapest Way to Learn Coding",
    description:
      "Compare free courses, project-based learning, community college, bootcamps, books, and mentorship for learning to code affordably.",
    primaryKeyword: "cheapest way to learn coding",
    secondaryKeywords: [
      "learn coding for free",
      "cheap coding courses",
      "best low cost way to learn programming",
      "coding bootcamp alternatives"
    ],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    listingMeta: "Free courses, projects, bootcamp alternatives",
    updated: "2026-04-25",
    verdict:
      "The cheapest effective path is a free structured course plus small projects, then targeted feedback from communities or low-cost mentorship. Paid bootcamps can help with accountability, but they are rarely the cheapest first step.",
    options: [
      {
        name: "Free structured curriculum",
        cost: "Free",
        bestFor: "Beginners who can study consistently",
        watchOut: "No automatic feedback or career support"
      },
      {
        name: "Project-based practice",
        cost: "Free to low cost",
        bestFor: "Building proof of skill and portfolio pieces",
        watchOut: "Easy to choose projects that are too big too early"
      },
      {
        name: "Community college or low-cost class",
        cost: "Lower than most bootcamps",
        bestFor: "Learners who want structure and instructor access",
        watchOut: "Pacing may be slower than self-study"
      },
      {
        name: "Bootcamp",
        cost: "Highest upfront among common options",
        bestFor: "Career switchers needing structure, deadlines, and coaching",
        watchOut: "Outcomes vary, and financing can be expensive"
      }
    ],
    decisionTool: {
      title: "Choose a learning path",
      prompt: "What do you need most?",
      situations: [
        {
          id: "testing-interest",
          label: "Testing interest",
          summary: "You are not sure coding is for you yet.",
          recommendation: "Use a free structured course and build tiny projects before paying.",
          why: "The cheapest mistake is discovering your preferences before signing up for an expensive program.",
          nextSteps: [
            "Pick one beginner-friendly track and finish the first module.",
            "Build a small project that solves a real annoyance.",
            "Track whether you enjoy debugging, not just watching lessons."
          ],
          watchOut: [
            "Course hopping can feel productive without building skill.",
            "Certificates alone rarely prove job readiness."
          ]
        },
        {
          id: "needs-structure",
          label: "Needs structure",
          summary: "You learn better with deadlines and feedback.",
          recommendation: "Try a low-cost class or community college option before a bootcamp.",
          why: "You can get structure and instructor access without taking on high bootcamp tuition first.",
          nextSteps: [
            "Compare syllabus, instructor access, and project requirements.",
            "Choose a course that forces weekly coding practice.",
            "Ask where you will get feedback on your code."
          ],
          watchOut: [
            "A cheap class without projects can still waste time.",
            "Slow pacing can be frustrating if you already know the basics."
          ]
        },
        {
          id: "career-switch",
          label: "Career switch",
          summary: "You want a job path and accountability.",
          recommendation: "Exhaust free proof-of-fit first, then compare bootcamps by outcomes and financing risk.",
          why: "Bootcamps can help with momentum, but they are only worth considering once you know you can stick with coding.",
          nextSteps: [
            "Build two portfolio projects before applying.",
            "Ask for audited outcomes, refund rules, and financing terms.",
            "Talk to recent graduates in your market."
          ],
          watchOut: [
            "Income-share or loan terms can be expensive.",
            "Job guarantees often have strict fine print."
          ]
        }
      ]
    },
    costDrivers: [
      "Need for feedback, accountability, and career services.",
      "Time available each week and how quickly you need results.",
      "Portfolio quality, mentorship, and local job market.",
      "Financing terms, refunds, and opportunity cost."
    ],
    cheapestPath: [
      "Start with one free curriculum.",
      "Build small projects instead of only watching tutorials.",
      "Get feedback from communities or low-cost mentors.",
      "Pay for structure only after you know what kind of support you need.",
      "Compare outcomes and financing before any expensive bootcamp."
    ],
    redFlags: [
      "Paying for a bootcamp before trying coding for free.",
      "Programs that sell certificates without portfolio work.",
      "Vague job-placement claims.",
      "Financing terms that are hard to understand."
    ],
    sources: [
      {
        label: "CareerOneStop training finder",
        url: "https://www.careeronestop.org/FindTraining/find-training.aspx",
        note: "A practical place to compare local training options and programs."
      }
    ],
    faqs: [
      {
        question: "Can I learn coding for free?",
        answer:
          "Yes. Free courses and documentation can teach the fundamentals, but you still need projects, practice, and feedback to become job-ready."
      },
      {
        question: "Is a coding bootcamp worth it?",
        answer:
          "It can be worth it for structure and career support, but compare outcomes, refund rules, financing terms, and whether you have already tested coding through free resources."
      }
    ]
  },
  {
    slug: "start-a-cleaning-business",
    category: "business",
    title: "Cheapest Way to Start a Cleaning Business",
    h1: "Cheapest Way to Start a Cleaning Business",
    description:
      "Compare lean startup supplies, insurance, licensing, local marketing, booking tools, and first-customer strategies for a cleaning business.",
    primaryKeyword: "cheapest way to start a cleaning business",
    secondaryKeywords: [
      "start a cleaning business cheaply",
      "cleaning business startup costs",
      "cheap way to get cleaning clients",
      "cleaning business supplies on a budget"
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    listingMeta: "Supplies, insurance, licenses, and first clients",
    updated: "2026-04-25",
    verdict:
      "The cheapest path is starting narrow: basic supplies, local licensing checks, simple insurance, and direct outreach to first customers. Delay expensive software, branding packages, and broad ad campaigns until you have repeatable jobs.",
    options: [
      {
        name: "Basic supply kit",
        cost: "Low upfront if you start with essentials",
        bestFor: "Residential cleaning and small first jobs",
        watchOut: "Specialty jobs may require separate products or equipment"
      },
      {
        name: "Local direct outreach",
        cost: "Very low cost",
        bestFor: "Neighbors, local groups, referrals, small offices",
        watchOut: "Requires consistent follow-up and clear service boundaries"
      },
      {
        name: "Simple insurance and licensing",
        cost: "Necessary baseline in many areas",
        bestFor: "Trust, compliance, and larger clients",
        watchOut: "Requirements vary by city, state, and services offered"
      },
      {
        name: "Paid ads or lead platforms",
        cost: "Can scale, but not the cheapest first move",
        bestFor: "Markets where you already know your close rate",
        watchOut: "Lead costs can burn cash before pricing is proven"
      }
    ],
    decisionTool: {
      title: "Plan the cheapest launch",
      prompt: "Where are you starting from?",
      situations: [
        {
          id: "first-clients",
          label: "Need first clients",
          summary: "You have time and a small budget, but no steady demand yet.",
          recommendation: "Start narrow with direct outreach and referrals before paid lead platforms.",
          why: "The cheapest first customers usually come from trust, proximity, and clear offers, not broad ads.",
          nextSteps: [
            "Choose one service package and a clear starting price.",
            "Ask neighbors, local groups, and small offices for trial jobs.",
            "Request reviews and referrals after every good job."
          ],
          watchOut: [
            "Underpricing can trap you in unprofitable work.",
            "Lead platforms can charge before you know your close rate."
          ]
        },
        {
          id: "supplies",
          label: "Need supplies",
          summary: "You are deciding what to buy first.",
          recommendation: "Buy an essential kit only and add specialty products after a paid job requires them.",
          why: "A narrow service menu keeps startup cost low and prevents unused supplies from eating cash.",
          nextSteps: [
            "List products needed for standard residential cleaning only.",
            "Use durable basics before buying specialty tools.",
            "Track supply cost per job from the beginning."
          ],
          watchOut: [
            "Too many chemicals can create storage and safety issues.",
            "Specialty surfaces may require separate products."
          ]
        },
        {
          id: "commercial",
          label: "Commercial work",
          summary: "You want offices, rentals, or larger clients.",
          recommendation: "Check insurance, licensing, and contract requirements before marketing heavily.",
          why: "Larger clients may require proof of coverage, invoices, and consistent scheduling.",
          nextSteps: [
            "Check city and state licensing requirements.",
            "Price basic insurance before bidding jobs.",
            "Create a simple scope checklist for recurring work."
          ],
          watchOut: [
            "Commercial jobs can require night hours and higher reliability.",
            "Contracts may include supply, key access, and liability requirements."
          ]
        }
      ]
    },
    costDrivers: [
      "Supplies, transportation, insurance, and licensing.",
      "Residential versus commercial scope.",
      "Paid leads, ads, booking tools, and payment processing.",
      "Your close rate, repeat rate, and travel time between jobs."
    ],
    cheapestPath: [
      "Start with one clear service package.",
      "Buy only essential supplies for that package.",
      "Check local licensing and basic insurance needs.",
      "Get first customers through direct outreach and referrals.",
      "Add software, branding, and paid ads only after repeat jobs are working."
    ],
    redFlags: [
      "Buying equipment before you know your service mix.",
      "Paying for leads without tracking close rate.",
      "Skipping insurance for clients who require it.",
      "Taking jobs outside your scope just to get revenue."
    ],
    sources: [
      {
        label: "SBA register your business",
        url: "https://www.sba.gov/business-guide/launch-your-business/register-your-business",
        note: "Starting point for business registration, licenses, and state/local requirements."
      }
    ],
    faqs: [
      {
        question: "How can I start a cleaning business with little money?",
        answer:
          "Start with a narrow service, buy only essential supplies, check local licensing, get basic coverage if needed, and sell directly to nearby customers before spending on ads."
      },
      {
        question: "What should I avoid buying at the beginning?",
        answer:
          "Avoid expensive branding packages, too many specialty chemicals, paid lead platforms, and complex software until you know which jobs and customers are profitable."
      }
    ]
  }
];

export const keywordBacklog = [
  "cheapest way to ship a bike",
  "cheapest way to ship shoes",
  "cheapest way to ship furniture",
  "cheapest way to move out of state",
  "cheapest way to get a passport fast",
  "cheapest way to get a CDL",
  "cheapest way to send money internationally",
  "cheapest way to rent a car",
  "cheapest way to get business insurance",
  "cheapest way to notarize documents",
  "cheapest way to replace windows",
  "cheapest way to buy textbooks",
  "cheapest way to print flyers"
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
