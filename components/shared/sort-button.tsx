"use client";

import * as Icons from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { iSortOption } from "@/types/sort-option.type";

export default function SortButton({
  sortOptions,
}: {
  sortOptions: iSortOption[];
}) {
  const [activeValue, setActiveValue] = useState(sortOptions[0]);

  useEffect(() => {
    setActiveValue(sortOptions[0]);
  }, [sortOptions]);

  const handleValueChange = (newValue: string) => {
    const selected = sortOptions.find((opt) => opt.value === newValue);
    if (selected) setActiveValue(selected);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">
          Sort by: {activeValue.shortcut || activeValue.label}
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-60 p-2">
        <RadioGroup
          value={activeValue.value}
          onValueChange={handleValueChange}
          className="gap-0"
        >
          {sortOptions.map((opt) => {
            const Icon =
              (Icons as any)[opt.icon || "ListFilter"] || Icons.HelpCircle;
            const isActive = opt.value === activeValue.value;

            return (
              <Label
                key={opt.value}
                className={`flex items-center gap-3 p-2 rounded-md border-2 border-transparent hover:bg-muted cursor-pointer ${
                  isActive && "border-foreground bg-muted"
                }`}
              >
                <RadioGroupItem value={opt.value} className="sr-only" />
                <Icon className="size-4" />
                <span>{opt.label}</span>
                {isActive && <Icons.Check className="ml-auto size-4" />}
              </Label>
            );
          })}
        </RadioGroup>
      </PopoverContent>
    </Popover>
  );
}
