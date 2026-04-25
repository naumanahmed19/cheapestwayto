"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ClothesShippingEstimator() {
  const [weight, setWeight] = useState(8);
  const [boxes, setBoxes] = useState(1);
  const [distance, setDistance] = useState("another-state");

  const recommendation = useMemo(() => {
    if (weight <= 5 && boxes === 1) return "Start with discounted USPS Ground Advantage or a poly mailer.";
    if (weight >= 20 || boxes >= 3) return "Compare discounted UPS/FedEx labels and checked luggage if you are traveling.";
    if (distance === "international") return "Compare postal international services with luggage forwarding before choosing.";
    return "Compare USPS flat rate against discounted UPS/FedEx labels before buying postage.";
  }, [weight, boxes, distance]);

  return (
    <section className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-md bg-emerald-100 text-emerald-800">
          <Calculator className="size-5" />
        </span>
        <div>
          <h2 className="text-xl font-semibold text-zinc-950">Quick Clothes Shipping Estimator</h2>
          <p className="text-sm text-zinc-600">A simple rule-of-thumb helper for choosing what to compare first.</p>
        </div>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          Total weight
          <input
            type="number"
            min="1"
            value={weight}
            onChange={(event) => setWeight(Number(event.target.value))}
            className="h-10 rounded-md border border-zinc-300 bg-white px-3 text-zinc-950"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          Boxes or mailers
          <input
            type="number"
            min="1"
            value={boxes}
            onChange={(event) => setBoxes(Number(event.target.value))}
            className="h-10 rounded-md border border-zinc-300 bg-white px-3 text-zinc-950"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          Route
          <select
            value={distance}
            onChange={(event) => setDistance(event.target.value)}
            className="h-10 rounded-md border border-zinc-300 bg-white px-3 text-zinc-950"
          >
            <option value="local">Same region</option>
            <option value="another-state">Another state</option>
            <option value="international">International</option>
          </select>
        </label>
      </div>
      <div className="mt-5 flex flex-col gap-3 rounded-md bg-white p-4 ring-1 ring-zinc-200 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-zinc-950">{recommendation}</p>
        <Button type="button" variant="secondary">Save comparison</Button>
      </div>
    </section>
  );
}
