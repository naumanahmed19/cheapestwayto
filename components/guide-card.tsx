import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Guide } from "@/data/site-content";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/cheapest-way-to/${guide.slug}`}
      className="group block rounded-lg border border-zinc-200 bg-white p-5 transition hover:border-zinc-400"
    >
      <p className="text-sm font-medium text-emerald-700">{guide.primaryKeyword}</p>
      <h3 className="mt-2 text-lg font-semibold text-zinc-950">{guide.h1}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{guide.description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-950">
        Compare options <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
