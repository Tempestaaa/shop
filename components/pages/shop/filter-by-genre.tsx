import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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
  return (
    <section className="space-y-2">
      <header className="text-base font-semibold">Genres</header>
      <ul className="grid grid-cols-5 gap-2">
        {bookGenres.map((genre) => (
          <Label
            key={genre}
            className="grid place-items-center text-center rounded-md border-2 border-transparent hover:border-foreground hover:bg-muted transition-colors duration-300 cursor-pointer has-aria-checked:border-foreground has-aria-checked:bg-muted"
          >
            <Checkbox className="sr-only" />
            <span className="p-2">{genre}</span>
          </Label>
        ))}
      </ul>
    </section>
  );
}
