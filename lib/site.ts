const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cheapestwayto.net";

export const siteConfig = {
  name: "CheapestWayTo",
  domain: new URL(siteUrl).hostname,
  url: siteUrl,
  description:
    "Compare the cheapest ways to ship, move, travel, repair, and handle everyday costs with practical calculators and transparent tradeoffs."
};
