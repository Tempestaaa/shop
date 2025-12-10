import { Label } from "@/components/ui/label";
import { Globe } from "lucide-react";

const languages = ["English", "Japanese", "Chinese"];

export default function FilterByLanguage() {
  return (
    <section className="space-y-2">
      <header className="text-base font-semibold flex items-center gap-2">
        <Globe className="size-4" />
        <span>Language</span>
      </header>
      <ul className="flex flex-wrap gap-2">
        {languages.map((language) => (
          <Label
            key={language}
            className="grid place-items-center text-center rounded-md border-2 border-transparent hover:border-foreground hover:bg-muted transition-colors duration-300 cursor-pointer text-muted-foreground has-checked:border-foreground has-checked:bg-muted has-checked:text-foreground"
          >
            <input type="radio" name="language" className="sr-only" />
            <span className="px-4 py-2">{language}</span>
          </Label>
        ))}
      </ul>
    </section>
  );
}
