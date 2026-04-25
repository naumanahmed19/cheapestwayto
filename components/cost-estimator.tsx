"use client";

import { useMemo, useState } from "react";
import { Calculator, CheckCircle2, Plane, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function formatRange(low: number, high: number) {
  return `$${Math.round(low)}-${Math.round(high)}`;
}

const packagingOptions = [
  { value: "mailer", label: "Mailer", description: "Soft clothes" },
  { value: "box", label: "Box", description: "Mixed items" },
  { value: "suitcase", label: "Suitcase", description: "Travel bag" }
];

const routeOptions = [
  { value: "local", label: "Same region" },
  { value: "another-state", label: "Another state" },
  { value: "international", label: "International" }
];

function fitClass(fit: string) {
  if (fit === "Strong fit") return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  if (fit === "Weak fit" || fit === "Not applicable") return "bg-zinc-100 text-zinc-500 ring-zinc-200";
  return "bg-amber-50 text-amber-700 ring-amber-200";
}

export function ClothesShippingEstimator() {
  const [weight, setWeight] = useState(8);
  const [boxes, setBoxes] = useState(1);
  const [distance, setDistance] = useState("another-state");
  const [packaging, setPackaging] = useState("box");
  const [traveling, setTraveling] = useState(false);

  const estimates = useMemo(() => {
    const safeWeight = Math.max(1, weight);
    const safeBoxes = Math.max(1, boxes);
    const poundsPerBox = safeWeight / safeBoxes;
    const distanceFee = distance === "local" ? 0 : distance === "another-state" ? 5 : 20;
    const bulkFee = packaging === "mailer" ? 0 : packaging === "box" ? safeBoxes * 3 : safeBoxes * 6;
    const heavyBoxFee = poundsPerBox > 20 ? safeBoxes * 8 : 0;
    const uspsLow = safeBoxes * 7.3 + safeWeight * 0.85 + distanceFee + bulkFee;
    const carrierLow = safeBoxes * 8.5 + safeWeight * 0.75 + distanceFee * 0.8 + bulkFee + heavyBoxFee;
    const flatRateLow = safeBoxes * (poundsPerBox > 10 ? 18 : 10);
    const bagLow = traveling ? Math.ceil(safeWeight / 40) * 35 : Number.POSITIVE_INFINITY;

    return [
      {
        name: "Discounted USPS Ground Advantage",
        range: formatRange(uspsLow, uspsLow * 1.45),
        fit: packaging === "mailer" || safeWeight <= 8 ? "Strong fit" : "Compare",
        note: "Best first check for light domestic clothing shipments."
      },
      {
        name: "USPS Flat Rate",
        range: formatRange(flatRateLow, flatRateLow * 1.35),
        fit: poundsPerBox >= 8 && packaging !== "suitcase" ? "Possible fit" : "Weak fit",
        note: "Only attractive when dense clothes fit tightly in the box."
      },
      {
        name: "Discounted UPS/FedEx label",
        range: formatRange(carrierLow, carrierLow * 1.55),
        fit: safeWeight >= 15 || safeBoxes >= 2 ? "Strong fit" : "Compare",
        note: "Often worth checking for heavier boxes and multi-box moves."
      },
      {
        name: "Extra checked bag",
        range: traveling ? formatRange(bagLow, bagLow * 1.8) : "Only if flying",
        fit: traveling ? "Compare" : "Not applicable",
        note: "Can win when you are already flying and stay under baggage limits."
      }
    ].sort((a, b) => {
      const aValue = a.range.startsWith("$") ? Number(a.range.split("-")[0].replace("$", "")) : 9999;
      const bValue = b.range.startsWith("$") ? Number(b.range.split("-")[0].replace("$", "")) : 9999;
      return aValue - bValue;
    });
  }, [boxes, distance, packaging, traveling, weight]);

  const recommendation = estimates[0];

  return (
    <section className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-200 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#ff385c]/10 text-[#ff385c]">
          <Calculator className="size-5" />
            </span>
            <div>
              <h2 className="text-xl font-semibold text-zinc-950">Clothes shipping cost planner</h2>
              <p className="text-sm leading-6 text-zinc-600">Enter rough details to rank the options worth checking first.</p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => {
              setWeight(8);
              setBoxes(1);
              setDistance("another-state");
              setPackaging("box");
              setTraveling(false);
            }}
            className="shrink-0"
          >
            <RotateCcw className="size-4" />
            Reset
          </Button>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-zinc-200 p-5 lg:border-b-0 lg:border-r">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              Total weight
              <div className="flex h-12 items-center rounded-lg border border-zinc-300 bg-white px-3 focus-within:border-zinc-950">
                <input
                  type="number"
                  min="1"
                  value={weight}
                  onChange={(event) => setWeight(Number(event.target.value) || 1)}
                  className="w-full bg-transparent text-lg font-semibold text-zinc-950 outline-none"
                />
                <span className="text-sm font-semibold text-zinc-500">lb</span>
              </div>
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              Packages
              <div className="flex h-12 items-center rounded-lg border border-zinc-300 bg-white px-3 focus-within:border-zinc-950">
                <input
                  type="number"
                  min="1"
                  value={boxes}
                  onChange={(event) => setBoxes(Number(event.target.value) || 1)}
                  className="w-full bg-transparent text-lg font-semibold text-zinc-950 outline-none"
                />
                <span className="text-sm font-semibold text-zinc-500">count</span>
              </div>
            </label>
          </div>

          <div className="mt-5">
            <p className="text-sm font-medium text-zinc-800">Packaging</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              {packagingOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={packaging === option.value}
                  onClick={() => setPackaging(option.value)}
                  className={cn(
                    "rounded-lg border p-3 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff385c]",
                    packaging === option.value
                      ? "border-[#ff385c] bg-[#fff8fa]"
                      : "border-zinc-200 bg-white hover:border-zinc-400"
                  )}
                >
                  <span className="block text-sm font-semibold text-zinc-950">{option.label}</span>
                  <span className="mt-1 block text-xs text-zinc-500">{option.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm font-medium text-zinc-800">Route</p>
            <div className="mt-2 grid gap-2">
              {routeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={distance === option.value}
                  onClick={() => setDistance(option.value)}
                  className={cn(
                    "flex h-11 items-center justify-between rounded-lg border px-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff385c]",
                    distance === option.value
                      ? "border-[#ff385c] bg-[#fff8fa] text-zinc-950"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
                  )}
                >
                  {option.label}
                  {distance === option.value ? <CheckCircle2 className="size-4 text-[#ff385c]" /> : null}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-pressed={traveling}
            onClick={() => setTraveling((value) => !value)}
            className={cn(
              "mt-5 flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff385c]",
              traveling ? "border-[#ff385c] bg-[#fff8fa]" : "border-zinc-200 bg-[#f7f7f7] hover:border-zinc-400"
            )}
          >
            <span className="flex items-center gap-3">
              <Plane className={cn("size-5", traveling ? "text-[#ff385c]" : "text-zinc-500")} />
              <span>
                <span className="block text-sm font-semibold text-zinc-950">I am flying too</span>
                <span className="mt-0.5 block text-xs text-zinc-500">Include checked-bag comparison</span>
              </span>
            </span>
            <span
              className={cn(
                "flex size-5 items-center justify-center rounded-full border",
                traveling ? "border-[#ff385c] bg-[#ff385c]" : "border-zinc-300 bg-white"
              )}
            >
              {traveling ? <CheckCircle2 className="size-4 text-white" /> : null}
            </span>
          </button>
        </div>

        <div className="bg-[#f7f7f7] p-5">
          <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-zinc-200">
            <p className="flex items-center gap-2 text-sm font-semibold text-[#ff385c]">
              <Sparkles className="size-4" />
              Start here
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">{recommendation.name}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{recommendation.note}</p>
              </div>
              <p className="text-3xl font-semibold tracking-tight text-zinc-950">{recommendation.range}</p>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-zinc-200">
            {estimates.map((estimate, index) => (
              <div key={estimate.name} className="border-b border-zinc-200 p-4 last:border-b-0">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-3">
                    <span
                      className={cn(
                        "flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                        index === 0 ? "bg-[#ff385c] text-white" : "bg-zinc-100 text-zinc-600"
                      )}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-zinc-950">{estimate.name}</p>
                      <p className="mt-1 text-sm leading-6 text-zinc-600">{estimate.note}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
                    <span className="font-semibold text-zinc-950">{estimate.range}</span>
                    <span className={cn("rounded-full px-2 py-1 text-xs font-semibold ring-1", fitClass(estimate.fit))}>
                      {estimate.fit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs leading-5 text-zinc-500">
            Planning ranges only. Verify final prices with exact ZIP codes, dimensions, and packed weight.
          </p>
        </div>
      </div>
    </section>
  );
}
