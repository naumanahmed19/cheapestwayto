import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Bookmark } from "lucide-react";
import type { Guide } from "@/data/site-content";

export function GuideCard({ guide, priority = false }: { guide: Guide; priority?: boolean }) {
  return (
    <Link
      href={`/cheapest-way-to/${guide.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100">
        <Image
          src={guide.image}
          alt={guide.h1}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-zinc-950 shadow-sm">
          {guide.options.length} options
        </span>
        <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/95 text-zinc-950 shadow-sm">
          <Bookmark className="size-4" />
        </span>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-zinc-950">{guide.h1}</p>
          <p className="mt-1 text-sm text-zinc-500">{guide.listingMeta}</p>
          <p className="mt-1 text-sm text-zinc-500">Updated {guide.updated}</p>
        </div>
        <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-zinc-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-950" />
      </div>
    </Link>
  );
}
