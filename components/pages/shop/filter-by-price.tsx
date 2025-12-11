"use client";

import FilterWrapper from "@/components/pages/shop/filter-wrapper";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { formatPrice } from "@/lib/utils";
import { DollarSign } from "lucide-react";
import { useState } from "react";

const MIN = 0;
const MAX = 300;

const clamp = (n: number, a = MIN, b = MAX) => Math.min(Math.max(a, n), b);

export default function FilterByPrice() {
  const [prices, setPrices] = useState([0, 300]);

  const onChange =
    (index: 0 | 1) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const parsed = Number(raw);
      if (Number.isNaN(parsed)) return;

      let newPrices = [...prices];
      newPrices[index] = clamp(Math.round(parsed));

      if (newPrices[0] > newPrices[1]) {
        return index === 0
          ? (newPrices[1] = newPrices[0])
          : (newPrices[0] = newPrices[1]);
      }

      setPrices(newPrices);
    };

  return (
    <FilterWrapper icon={DollarSign} label="Price range">
      <div className="mt-1">
        <Slider
          defaultValue={prices}
          value={prices}
          min={MIN}
          max={MAX}
          step={10}
          onValueChange={(vals) => {
            if (!Array.isArray(vals)) return;
            const [a = MIN, b = MAX] = vals.map((v) => clamp(Math.round(v)));
            const low = Math.min(a, b);
            const high = Math.max(a, b);
            setPrices([low, high]);
          }}
        />
        <p className="text-muted-foreground text-xs mt-3">
          Set your budget range (${prices[0]} - ${prices[1]})
        </p>
      </div>
    </FilterWrapper>
  );
}
