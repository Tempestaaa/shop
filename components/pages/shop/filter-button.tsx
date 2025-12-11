import FilterByFormat from "@/components/pages/shop/filter-by-format";
import FilterByGenre from "@/components/pages/shop/filter-by-genre";
import FilterByLanguage from "@/components/pages/shop/filter-by-language";
import FilterByPrice from "@/components/pages/shop/filter-by-price";
import FilterByPublisher from "@/components/pages/shop/filter-by-publisher";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function FilterButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">Filters</Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-xs flex flex-col gap-4">
        <FilterByGenre />
        <FilterByPrice />
        <FilterByFormat />
        <FilterByPublisher />
        <FilterByLanguage />
      </PopoverContent>
    </Popover>
  );
}
