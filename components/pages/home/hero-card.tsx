import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function HeroCard() {
  return (
    <section className="col-span-8 h-[400px]! bg-linear-to-tr from-card to-muted-foreground/70 p-4 rounded-md flex flex-col justify-between gap-4">
      <div className="flex flex-col items-start">
        <Badge variant="secondary">
          <Clock />
          {dayjs().format("DD MMMM YYYY")}
        </Badge>
        <h1 className="text-6xl font-bold tracking-tighter mt-4 mb-4">
          Read More. <br />
          <span className="ml-20">Live Better.</span>
        </h1>
        <p className="text-muted-foreground max-w-120">
          Hand-picked bestsellers, hidden gems, and literary classics. Fast
          shipping and personalized recommendations. Everything a reader needs,
          all in one place.
        </p>
        <Button size="lg" className="mt-6 px-6! rounded-full group">
          Explore New Arrivals
          <ArrowRight className="group-hover:translate-x-1.5 transition-all duration-300" />
        </Button>
      </div>

      <div className="flex items-center *:text-muted-foreground *:hover:text-foreground *:transition-colors *:duration-300">
        <Button variant="ghost">
          <Youtube />
        </Button>
        <Button variant="ghost">
          <Instagram />
        </Button>
        <Button variant="ghost">
          <Facebook />
        </Button>
        <Button variant="ghost">
          <Linkedin />
        </Button>
        <Button variant="ghost">
          <Twitter />
        </Button>
      </div>
    </section>
  );
}
