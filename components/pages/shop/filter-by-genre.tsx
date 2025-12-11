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
import { Check, ChevronsUpDown, Tag } from "lucide-react";
import { useState } from "react";

const bookGenres = [
  "Fiction",
  "Nonfiction",
  "Fantasy",
  "Children's Literature",
  "Science Fiction",
  "Mystery",
  "Thriller",
  "Architecture",
  "Religion & Spirituality",
  "Horror",
  "Romance",
  "Historical Fiction",
  "Literary Fiction",
  "Young Adult",
  "Poetry",
  "Photography",
  "Drama",
  "Biography",
  "Cookbooks, Food & Wine",
  "History",
  "Science & Technology",
  "Philosophy",
  "Self-Help",
  "Travel",
  "True Crime",
  "Graphic Novel",
];

export default function FilterByGenre() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <FilterWrapper icon={Tag} label="Genres">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {value
              ? bookGenres.find((genre) => genre === value)
              : "Select genre..."}

            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Search genre..." className="h-9" />
            <CommandList>
              <CommandEmpty>No genres found.</CommandEmpty>
              <CommandGroup>
                {bookGenres.map((genre) => (
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
