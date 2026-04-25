import Link from "next/link";
import { categories } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="text-base font-semibold text-white">CheapestWayTo</p>
          <p className="mt-3 max-w-sm text-sm leading-6">
            Practical cost comparisons for everyday decisions, built around transparent assumptions and useful tools.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 8).map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} className="text-sm hover:text-white">
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
