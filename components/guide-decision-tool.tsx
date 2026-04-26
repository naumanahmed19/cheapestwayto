"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, MousePointer2, TriangleAlert } from "lucide-react";
import type { Guide } from "@/data/site-content";
import { cn } from "@/lib/utils";

type GuideDecisionToolProps = {
  guide: Pick<Guide, "decisionTool">;
};

export function GuideDecisionTool({ guide }: GuideDecisionToolProps) {
  const situations = guide.decisionTool.situations;
  const [selectedId, setSelectedId] = useState(situations[0]?.id ?? "");
  const selected = useMemo(
    () => situations.find((situation) => situation.id === selectedId) ?? situations[0],
    [selectedId, situations]
  );

  if (!selected) return null;

  return (
    <section className="border-y border-zinc-200 py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-[#ff385c]">
            <MousePointer2 className="size-4" />
            Interactive chooser
          </div>
          <h2 className="mt-2 text-xl font-semibold text-zinc-950">{guide.decisionTool.title}</h2>
          <p className="mt-1 text-sm leading-6 text-zinc-600">{guide.decisionTool.prompt}</p>
        </div>
        <p className="max-w-xs text-sm leading-6 text-zinc-500">
          Pick the situation closest to yours and use the result as your shortlist, not the final quote.
        </p>
      </div>

      <div className="mt-5 grid gap-2 md:grid-cols-3">
        {situations.map((situation) => {
          const isSelected = situation.id === selected.id;
          return (
            <button
              key={situation.id}
              type="button"
              onClick={() => setSelectedId(situation.id)}
              className={cn(
                "min-h-28 border-l-4 p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff385c]",
                isSelected
                  ? "border-[#ff385c] bg-[#fff8fa]"
                  : "border-zinc-200 bg-zinc-50 hover:border-zinc-400 hover:bg-white"
              )}
            >
              <span className="flex items-center justify-between gap-3">
                <span className="font-semibold text-zinc-950">{situation.label}</span>
                {isSelected ? <CheckCircle2 className="size-4 shrink-0 text-[#ff385c]" /> : null}
              </span>
              <span className="mt-2 block text-sm leading-6 text-zinc-600">{situation.summary}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid gap-5 bg-[#f7f7f7] p-5 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Best starting point</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">{selected.recommendation}</h3>
          <p className="mt-3 leading-7 text-zinc-700">{selected.why}</p>
        </div>
        <div className="grid gap-4">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-zinc-950">
              <ArrowRight className="size-4 text-[#ff385c]" />
              Do next
            </p>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-zinc-700">
              {selected.nextSteps.map((step) => (
                <li key={step} className="flex gap-2">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-600" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-zinc-200 pt-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-zinc-950">
              <TriangleAlert className="size-4 text-amber-600" />
              Check before paying
            </p>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-zinc-700">
              {selected.watchOut.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
