import type { MetadataRoute } from "next";
import { categories, guides } from "@/data/site-content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteConfig.url}/search`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7
    },
    ...categories.map((category) => ({
      url: `${siteConfig.url}/category/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...guides.map((guide) => ({
      url: `${siteConfig.url}/cheapest-way-to/${guide.slug}`,
      lastModified: new Date(guide.updated),
      changeFrequency: "monthly" as const,
      priority: 0.9
    }))
  ];
}
