import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords,
  image,
  imageAlt,
  type = "website"
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const socialImage = image || absoluteUrl("/opengraph-image");
  const socialImageAlt = imageAlt || title;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
      images: [
        {
          url: socialImage,
          alt: socialImageAlt,
          width: 1200,
          height: 630
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage]
    }
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c")
  };
}
