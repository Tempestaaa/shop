import FilterWrapper from "@/components/pages/shop/filter-wrapper";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const bookLanguages = ["English", "Japanese", "Chinese"];

export default function FilterByLanguage() {
  return (
    <FilterWrapper icon={Globe} label="Language">
      <ul className="flex flex-wrap gap-2">
        {bookLanguages.map((language) => (
          <Button key={language} variant="secondary">
            {language}
          </Button>
        ))}
      </ul>
    </FilterWrapper>
  );
}
