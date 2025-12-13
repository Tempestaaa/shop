import FilterWrapper from "@/components/pages/shop/filter-wrapper";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";

const bookFormats = ["EBook", "Hardcover", "Paperback", "Textbook"];

export default function FilterByFormat() {
  return (
    <FilterWrapper icon={BookOpen} label="Format">
      <ul className="flex flex-wrap gap-2">
        {bookFormats.map((format) => (
          <Button
            key={format}
            variant="secondary"
            className="border-2 border-transparent has-aria-checked:bg-muted-foreground/30 has-aria-checked:border-foreground cursor-pointer"
            asChild
          >
            <Label>
              <Checkbox name="format" className="sr-only" />
              <span>{format}</span>
            </Label>
          </Button>
        ))}
      </ul>
    </FilterWrapper>
  );
}
