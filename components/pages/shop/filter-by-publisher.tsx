"use client";

import FilterWrapper from "@/components/pages/shop/filter-wrapper";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, Printer } from "lucide-react";
import { useState } from "react";

const bookPublishers = [
  "Penguin Random House",
  "HarperCollins Publishers",
  "Hachette Livre",
  "Simon & Schuster",
  "Macmillan Publishers",
  "RELX Group",
  "Thomson Reuters",
  "Pearson",
  "Oxford University Press",
  "Springer Nature",
  "Scholastic Corporation",
  "Bloomsbury Publishing",
  "Wiley",
];

export default function FilterByPublisher() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <FilterWrapper icon={Printer} label="Publisher">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {value
              ? bookPublishers.find((publisher) => publisher === value)
              : "Select publisher..."}

            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Search publisher..." className="h-9" />
            <CommandList>
              <CommandEmpty>No publishers found.</CommandEmpty>
              <CommandGroup>
                {bookPublishers.map((genre) => (
                  <CommandItem
                    key={genre}
                    value={genre}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setIsOpen(false);
                    }}
                  >
                    {genre}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === genre ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </FilterWrapper>
  );
}
