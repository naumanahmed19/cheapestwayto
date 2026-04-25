import Link from "next/link";
import { Search } from "lucide-react";
import { categories } from "@/data/site-content";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-950">
          CheapestWayTo
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-zinc-600 md:flex">
          {categories.slice(0, 5).map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} className="hover:text-zinc-950">
              {category.name}
            </Link>
          ))}
        </nav>
        <Button variant="secondary" size="sm" aria-label="Search">
          <Search className="size-4" />
          <span className="hidden sm:inline">Search</span>
        </Button>
      </div>
    </header>
  );
}
