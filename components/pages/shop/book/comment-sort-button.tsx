"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Calendar,
  Check,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";

const sortOptions = [
  {
    label: "Most Helpful",
    value: "helpful",
    icon: ThumbsUp,
  },
  {
    label: "Newest",
    value: "newest",
    icon: Calendar,
  },
  {
    label: "Highest Rating",
    value: "rating_high",
    icon: ArrowUpCircle,
  },
  {
    label: "Lowest Rating",
    value: "rating_low",
    icon: ArrowDownCircle,
  },
];

export default function CommentSortButton() {
  const [activeValue, setActiveValue] = useState(sortOptions[1]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">Sort by</Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-60 p-2">
        <RadioGroup defaultValue="" className="gap-0">
          {sortOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <Label
                key={opt.value}
                onClick={() => setActiveValue(opt)}
                className={`flex items-center gap-3 p-2 rounded-md border-2 border-transparent hover:bg-muted transition-colors duration-300 cursor-pointer ${
                  opt.value === activeValue.value &&
                  "border-foreground bg-muted"
                }`}
              >
                <RadioGroupItem value={opt.value} hidden />
                <Icon className="size-4" />
                <span>{opt.label}</span>
                {opt.value === activeValue.value && (
                  <Check className="ml-auto size-4" />
                )}
              </Label>
            );
          })}
        </RadioGroup>
      </PopoverContent>
    </Popover>
  );
}
