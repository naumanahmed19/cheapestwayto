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

Read the local `Guide` and `GuideDetailContent` type definitions in `data/site-content.ts` before writing. The current schema usually requires:

- `Guide`: slug, category, title, h1, description, keywords, image, listingMeta, updated, verdict, options, decisionTool, costDrivers, cheapestPath, redFlags, sources, and FAQs.
- `guideDetailContent[slug]`: tools, quoteChecklist, hiddenFees, examples, and confidence.

Use nearby guides as the formatting template. Keep each field useful rather than decorative: options should compare real routes, the decision tool should choose among common user situations, sources should link to primary references, and detail content should help users quote or verify the cost.

## Publishing Checklist

Before committing:

- Run the duplicate helper and confirm there is no existing equivalent guide.
- Confirm the guide category exists.
- Add both the `guides` entry and matching `guideDetailContent` entry when the current schema includes detail content.
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
