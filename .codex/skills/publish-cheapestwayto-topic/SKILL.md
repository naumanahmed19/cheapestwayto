---
name: publish-cheapestwayto-topic
description: Research, write, validate, commit, and git-push new CheapestWayTo cost-comparison articles. Use when asked to create or publish a new CheapestWayTo topic, expand the keyword backlog into a guide, find a hot "cheapest way to..." topic, add a fact-checked article, or push a newly published guide for this Next.js project.
---

# Publish CheapestWayTo Topic

## Workflow

1. Confirm you are at the CheapestWayTo repo root. Inspect `git status --short` before editing and preserve user changes.
2. If the user provided a topic, use it. If not, pick one from `keywordBacklog`, category examples, current search demand, and timely consumer-cost trends.
3. Run the duplicate helper before researching:

```bash
node .codex/skills/publish-cheapestwayto-topic/scripts/check-topic.mjs "<topic>"
```

If the helper reports an existing slug or equivalent keyword, stop and report the existing URL instead of creating a duplicate.

4. Read `references/article-workflow.md` for the research standard, guide shape, and publishing checklist.
5. Browse for current facts and figures. Prefer primary sources, official price pages, public agencies, and recent reputable comparisons. Capture source URLs for the final response.
6. Add or update only the required project files. New articles usually mean appending one `Guide` object in `data/site-content.ts`, adding matching `guideDetailContent[slug]` when that map exists, and removing the topic from `keywordBacklog` if it was there.
7. Validate with `bun run lint` and `bun run build` when feasible.
8. Publish through git: review the diff, stage only relevant files, commit with a concise message, and `git push` the current branch. If push requires approval or a remote is unavailable, report that clearly.

## Project Rules

- Route for a guide: `/cheapest-way-to/<slug>`.
- Primary content source: `data/site-content.ts`.
- Before writing content, read the local `Guide` and `GuideDetailContent` TypeScript types because the schema may evolve.
- Use an existing category unless the topic genuinely needs a new one. If adding a category, also import a suitable `lucide-react` icon.
- Keep `updated` as an ISO date using the local current date.
- Keep guide text concise, useful, and backed by real numbers. Do not invent fees, prices, timeframes, limits, or rankings.
- Avoid publishing a guide when the cheapest answer depends on regulated, medical, legal, tax, or financial advice without current authoritative sources and clear caveats.

## Quality Bar

A published topic must include:

- a clean slug without the leading `cheapest-way-to`;
- one primary keyword and several natural secondary keywords;
- a relevant image URL and short `listingMeta` when those fields exist;
- a direct verdict that names the cheapest likely option and when it changes;
- 3-6 comparison options with specific cost signals, best-fit scenarios, and watch-outs;
- a decision tool, cost drivers, cheapest path, red flags, and source list when the schema requires them;
- detail content with tools, hidden fees, examples, and confidence notes when `guideDetailContent` exists;
- 3-5 FAQs drawn from real search intent;
- source-backed facts and figures that are summarized in the final answer with links.
