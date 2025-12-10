import FilterByFormat from "@/components/pages/shop/filter-by-format";
import FilterByGenre from "@/components/pages/shop/filter-by-genre";
import FilterByLanguage from "@/components/pages/shop/filter-by-language";
import FilterByPrice from "@/components/pages/shop/filter-by-price";
import FilterByPublisher from "@/components/pages/shop/filter-by-publisher";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ListFilter } from "lucide-react";

export default function FilterButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          Filters <span className="text-muted-foreground text-xs">(3)</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl!">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <ListFilter />
            <span>Filters</span>
          </DialogTitle>
          <DialogDescription className="flex items-center gap-2">
            {[...Array(4)].map((_, id) => (
              <Badge
                key={id}
                className="cursor-pointer hover:bg-muted-foreground transition-colors duration-300"
              >
                Filter {id + 1}
              </Badge>
            ))}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[calc(100dvh-10rem)]">
          <div className="space-y-6">
            <FilterByGenre />
            <FilterByPrice />
            <FilterByFormat />
            <FilterByPublisher />
            <FilterByLanguage />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
