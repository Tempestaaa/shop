import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export default function SalesCard() {
  return (
    <section className="col-span-5 bg-card p-4 rounded-md min-h-[300px] flex flex-col items-start gap-4">
      <Badge variant="outline">
        <BookOpen />
        Member exclusive
      </Badge>

      <div className="flex flex-col gap-4 h-full">
        <h1 className="text-4xl font-bold tracking-tighter">
          Join Our Literary Circle
        </h1>
        <p className="text-muted-foreground">
          Discover curated book recommendations, exclusive author events, and
          connect with fellow readers. Get 20% off your first purchase when you
          join today.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <Button className="px-6! group">
            Start your Journey
            <ArrowRight className="group-hover:translate-x-1.5 transition-all duration-300" />
          </Button>
          <Button variant="secondary" className="px-6!">
            Browse Collection
          </Button>
        </div>
        <div className="flex items-center gap-2 mt-auto">
          <div className="-space-x-2 flex items-center">
            {[...Array(3)].map((_, id) => (
              <Avatar key={id} className="border-2 border-muted-foreground">
                <AvatarImage />
                <AvatarFallback>{id + 1}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-muted-foreground font-medium">
            500+ members
          </span>
        </div>
      </div>
    </section>
  );
}
