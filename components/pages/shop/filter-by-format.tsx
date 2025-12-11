import FilterWrapper from "@/components/pages/shop/filter-wrapper";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const bookFormats = ["EBook", "Hardcover", "Paperback", "Textbook"];

export default function FilterByFormat() {
  return (
    <FilterWrapper icon={BookOpen} label="Format">
      <ul className="flex flex-wrap gap-2">
        {bookFormats.map((format) => (
          <Button key={format} variant="secondary">
            {format}
          </Button>
        ))}
      </ul>
    </FilterWrapper>
  );
}
