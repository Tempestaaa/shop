import FilterWrapper from "@/components/pages/shop/filter-wrapper";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Globe } from "lucide-react";

const bookLanguages = ["English", "Japanese", "Chinese"];

export default function FilterByLanguage() {
  return (
    <FilterWrapper icon={Globe} label="Language">
      <ul className="flex flex-wrap gap-2">
        {bookLanguages.map((language) => (
          <Button
            key={language}
            variant="secondary"
            className="border-2 border-transparent has-aria-checked:bg-muted-foreground/30 has-aria-checked:border-foreground cursor-pointer"
            asChild
          >
            <Label>
              <Checkbox name="language" className="sr-only" />
              <span>{language}</span>
            </Label>
          </Button>
        ))}
      </ul>
    </FilterWrapper>
  );
}
