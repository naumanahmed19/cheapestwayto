#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const topic = process.argv.slice(2).join(" ").trim();

if (!topic) {
  console.error('Usage: node .codex/skills/publish-cheapestwayto-topic/scripts/check-topic.mjs "<topic>"');
  process.exit(1);
}

function findRepoRoot(startDir) {
  let current = path.resolve(startDir);
  while (true) {
    if (fs.existsSync(path.join(current, "data", "site-content.ts"))) {
      return current;
    }
    const parent = path.dirname(current);
    if (parent === current) return null;
    current = parent;
  }
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/^cheapest\s+way\s+to\s+/i, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeKeyword(value) {
  return value
    .toLowerCase()
    .replace(/^what\s+is\s+the\s+/i, "")
    .replace(/^the\s+/i, "")
    .replace(/^cheapest\s+way\s+to\s+/i, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

const repoRoot = findRepoRoot(process.cwd());
if (!repoRoot) {
  console.error("Could not find data/site-content.ts from the current directory.");
  process.exit(1);
}

const contentPath = path.join(repoRoot, "data", "site-content.ts");
const content = fs.readFileSync(contentPath, "utf8");
const guideSectionMatch = content.match(/export const guides:\s*Guide\[\]\s*=\s*\[([\s\S]*?)\];\s*export const keywordBacklog/);
const guideContent = guideSectionMatch ? guideSectionMatch[1] : content;
const suggestedSlug = slugify(topic);
const normalizedTopic = normalizeKeyword(topic);

const slugs = unique([...guideContent.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
const keywords = unique(
  [...guideContent.matchAll(/"(cheapest way to [^"]+)"/gi)].map((match) => match[1])
);
const backlogMatch = content.match(/export const keywordBacklog\s*=\s*\[([\s\S]*?)\];/);
const backlog = backlogMatch
  ? unique([...backlogMatch[1].matchAll(/"([^"]+)"/g)].map((match) => match[1]))
  : [];

const existingSlugMatches = slugs.filter((slug) => slug === suggestedSlug);
const exactKeywordMatches = keywords.filter((keyword) => normalizeKeyword(keyword) === normalizedTopic);
const backlogMatches = backlog.filter((keyword) => normalizeKeyword(keyword) === normalizedTopic);
const closeSlugMatches = slugs.filter(
  (slug) => slug.includes(suggestedSlug) || suggestedSlug.includes(slug)
);
const closeKeywordMatches = keywords.filter((keyword) => {
  const normalized = normalizeKeyword(keyword);
  return normalized.includes(normalizedTopic) || normalizedTopic.includes(normalized);
});

const status =
  existingSlugMatches.length || exactKeywordMatches.length
    ? "duplicate"
    : backlogMatches.length
      ? "backlog"
      : "clear";

const report = {
  topic,
  suggestedSlug,
  suggestedPath: `/cheapest-way-to/${suggestedSlug}`,
  status,
  existingSlugMatches,
  exactKeywordMatches,
  backlogMatches,
  closeSlugMatches: unique(closeSlugMatches).slice(0, 10),
  closeKeywordMatches: unique(closeKeywordMatches).slice(0, 10)
};

console.log(JSON.stringify(report, null, 2));
