# SEO Action Plan

## Completed Fixes

1. Removed restricted `FAQPage` JSON-LD from guide pages.
2. Added security headers in `next.config.ts`.
3. Added `/llms.txt` with markdown links, description, policy links, and key pages.
4. Added `/llms-full.txt` with expanded guide context.
5. Replaced generated robots metadata with an explicit `/robots.txt` route.
6. Explicitly allowed AI crawlers including GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bytespider, CCBot, anthropic-ai, FacebookBot, and Amazonbot.
7. Shortened the homepage title to `CheapestWayTo - Compare Cheap Cost Guides`.
8. Added `og:image:width`, `og:image:height`, and `og:locale`.
9. Expanded homepage copy from 441 to 643 rendered words.
10. Added `/methodology` and `/contact` pages.
11. Added methodology/contact links to footer, sitemap, and guide sidebars.
12. Added editorial author/reviewer signals to Article schema.
13. Updated the privacy policy so it matches Google Analytics usage.

## Verification Completed

- `bun run build` passed.
- Build now generates 36 static pages.
- Sitemap contains 27 URLs.
- `llms.txt` checker score is 100/100.
- `llms-full.txt` is found.
- Robots checker shows tracked AI crawlers explicitly allowed.
- Social metadata score is 85/100 and Open Graph is 7/7.
- Homepage rendered word count is 643.
- Sample guide schema contains Article, BreadcrumbList, and ItemList only.
- Local header probe confirms HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy are emitted.

## Remaining Operational Follow-ups

1. Deploy the changes and rerun live security checks against `https://cheapestwayto.net`.
2. Rerun PageSpeed Insights or CrUX once the Google API rate limit resets.
3. Recheck external provider/source links from production or CI.
4. Add real social handles later if CheapestWayTo creates official social profiles.

## Longer-Term SEO Opportunities

1. Expand the highest-priority guides toward 1,500+ words with more examples, current-source notes, and scenario-specific comparison detail.
2. Add named individual author/reviewer bios if the site develops a public editorial team.
3. Use Google Search Console data to prioritize pages by impressions, CTR, indexing status, and query opportunity.
