"use client";

import { useMemo, useState } from "react";
import { Calculator, CheckCircle2, PackageCheck, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

function formatRange(low: number, high: number) {
  return `$${Math.round(low)}-${Math.round(high)}`;
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
    <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-[#ff385c]/10 text-[#ff385c]">
          <Calculator className="size-5" />
        </span>
        <div>
          <h2 className="text-xl font-semibold text-zinc-950">Clothes shipping cost planner</h2>
          <p className="text-sm text-zinc-600">Planning ranges to help decide which rates to check first.</p>
        </div>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          Total weight, lb
          <input
            type="number"
            min="1"
            value={weight}
            onChange={(event) => setWeight(Number(event.target.value) || 1)}
            className="h-11 rounded-lg border border-zinc-300 bg-white px-3 text-zinc-950 outline-none focus:border-zinc-950"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          Boxes or mailers
          <input
            type="number"
            min="1"
            value={boxes}
            onChange={(event) => setBoxes(Number(event.target.value) || 1)}
            className="h-11 rounded-lg border border-zinc-300 bg-white px-3 text-zinc-950 outline-none focus:border-zinc-950"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          Packaging
          <select
            value={packaging}
            onChange={(event) => setPackaging(event.target.value)}
            className="h-11 rounded-lg border border-zinc-300 bg-white px-3 text-zinc-950 outline-none focus:border-zinc-950"
          >
            <option value="mailer">Poly mailer</option>
            <option value="box">Cardboard box</option>
            <option value="suitcase">Suitcase</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          Route
          <select
            value={distance}
            onChange={(event) => setDistance(event.target.value)}
            className="h-11 rounded-lg border border-zinc-300 bg-white px-3 text-zinc-950 outline-none focus:border-zinc-950"
          >
            <option value="local">Same region</option>
            <option value="another-state">Another state</option>
            <option value="international">International</option>
          </select>
        </label>
        <label className="flex items-end gap-3 rounded-lg border border-zinc-200 bg-[#f7f7f7] px-3 py-2 text-sm font-medium text-zinc-800">
          <input
            type="checkbox"
            checked={traveling}
            onChange={(event) => setTraveling(event.target.checked)}
            className="mb-1 size-4 accent-[#ff385c]"
          />
          I am flying too
        </label>
      </div>
      <div className="mt-5 rounded-lg bg-[#f7f7f7] p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex gap-2 text-sm font-medium text-zinc-950">
            <Sparkles className="mt-0.5 size-4 shrink-0 text-[#ff385c]" />
            <span>
              Check <strong>{recommendation.name}</strong> first, then compare the next two closest options.
            </span>
          </p>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setWeight(8);
              setBoxes(1);
              setDistance("another-state");
              setPackaging("box");
              setTraveling(false);
            }}
          >
            <RotateCcw className="size-4" />
            Reset
          </Button>
        </div>
        <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-white text-zinc-500">
              <tr>
                <th className="p-3 font-medium">Option</th>
                <th className="p-3 font-medium">Planning range</th>
                <th className="p-3 font-medium">Fit</th>
                <th className="p-3 font-medium">Why check it</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {estimates.map((estimate, index) => (
                <tr key={estimate.name} className="align-top">
                  <td className="p-3 font-semibold text-zinc-950">
                    <span className="flex items-center gap-2">
                      {index === 0 ? <PackageCheck className="size-4 text-[#ff385c]" /> : null}
                      {estimate.name}
                    </span>
                  </td>
                  <td className="p-3 text-zinc-700">{estimate.range}</td>
                  <td className="p-3 text-zinc-700">
                    <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-700">
                      <CheckCircle2 className="size-3.5 text-emerald-600" />
                      {estimate.fit}
                    </span>
                  </td>
                  <td className="p-3 text-zinc-700">{estimate.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs leading-5 text-zinc-500">
          These are rough planning ranges, not live carrier quotes. Always verify final prices with current carrier calculators using exact ZIP codes, dimensions, and packed weight.
        </p>
      </div>
    </section>
  );
}
