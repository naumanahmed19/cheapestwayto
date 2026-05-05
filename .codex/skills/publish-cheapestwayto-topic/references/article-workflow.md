# CheapestWayTo Article Workflow

## Research Standard

Use current web research for every new guide, especially when the topic involves prices, fees, policies, schedules, rules, or product/service availability. Prefer:

- official price pages, carriers, agencies, banks, insurers, schools, venue operators, or product owners;
- government or public datasets for regulations, tax, passport, vehicle, education, energy, and consumer topics;
- recent reputable comparisons only as secondary context;
- primary source dates or access dates when prices change frequently.

Collect facts that answer real buying decisions: price ranges, fee names, weight or size limits, timelines, eligibility rules, hidden fees, cancellation rules, and when the cheapest option stops being cheapest. If a figure cannot be verified, write a cautious qualitative cost signal instead of a made-up number.

## Topic Selection

If the user does not provide a topic:

1. Review `keywordBacklog` in `data/site-content.ts`.
2. Look for timely consumer-cost topics in the existing categories: shipping, cars, home repairs, travel, money, legal/admin, education/career, and small business.
3. Choose a topic with strong "cheapest way to..." intent, enough verifiable facts, and a clear comparison table.
4. Avoid near-duplicates of existing slugs or keywords.

## Guide Data Shape

Add one object to the exported `guides` array in `data/site-content.ts`:

```ts
{
  slug: "ship-a-bike",
  category: "shipping-moving",
  title: "Cheapest Way to Ship a Bike in 2026",
  h1: "Cheapest Way to Ship a Bike",
  description: "Compare bike shipping boxes, parcel carriers, airline bike fees, local bike shops, and specialty shippers.",
  primaryKeyword: "cheapest way to ship a bike",
  secondaryKeywords: [
    "cheapest way to ship a bicycle",
    "bike shipping cost",
    "ship a bike across country"
  ],
  updated: "2026-05-05",
  verdict: "For a boxed bike, discounted parcel labels are often cheapest when dimensions stay under surcharge thresholds. Specialty bike shippers can be worth it when packing help and damage protection matter.",
  options: [
    {
      name: "Discounted parcel label",
      cost: "Often cheapest for a self-packed bike box",
      bestFor: "People who can pack the bike safely",
      watchOut: "Oversize and dimensional-weight fees can erase the savings"
    }
  ],
  faqs: [
    {
      question: "What is the cheapest way to ship a bike across the country?",
      answer: "Start with discounted parcel labels for a self-packed bike box, then compare specialty bike shippers if you need a box, pickup, or packing help."
    }
  ]
}
```

Use this shape exactly unless the app schema has changed. The current page renders `verdict`, `options`, keyword coverage, and FAQs automatically.

## Publishing Checklist

Before committing:

- Run the duplicate helper and confirm there is no existing equivalent guide.
- Confirm the guide category exists.
- Remove the topic from `keywordBacklog` when the new guide covers it.
- Ensure the route works through `generateStaticParams`; no route file should be needed for a standard guide.
- Run `bun run lint`.
- Run `bun run build`.
- Review `git diff -- data/site-content.ts` and any other touched files.

After validation:

- Stage only files related to the new article.
- Commit with a message like `Add guide for cheapest way to ship a bike`.
- Push the current branch with `git push`.
- In the final response, include the new URL path, commit hash if created, validation results, and source links used for the facts.
