import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const chooses = [
  {
    label: "Expertly Curated",
    content:
      "Every title hand-selected by our team of passionate readers and literary experts.",
  },
  {
    label: "Author Events",
    content:
      "Regular meet-and-greets, book signings, and intimate conversations with renowned authors.",
  },
  {
    label: "Cozy Reading Space",
    content:
      "A comfortable café where you can browse, read, and enjoy artisan coffee and pastries.",
  },
  {
    label: "Book Clubs",
    content:
      "Join our vibrant community of readers through diverse book clubs and discussion groups.",
  },
  {
    label: "Personal Recommendations",
    content:
      "Get tailored book suggestions from our knowledgeable staff who know your taste.",
  },
  {
    label: "Special Orders",
    content:
      "Can't find what you're looking for? We'll track down any book, anywhere.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-4 space-y-12">
      <section className="py-24 px-16 flex flex-col items-center justify-center gap-4 rounded-md bg-card">
        <header className="text-4xl font-bold">Our Mission</header>
        <div className="text-base text-muted-foreground w-2/3 text-center space-y-4">
          <p>
            We believe books have the power to change lives, spark
            conversations, and build bridges between diverse perspectives. Our
            mission is to curate exceptional reading experiences and create a
            welcoming space where every reader finds their story.
          </p>
          <p>
            From bestsellers to hidden gems, classics to cutting-edge
            contemporary works, we're passionate about connecting readers with
            books that inspire, challenge, and delight.
          </p>
        </div>
        <Button size="lg" className="mt-2 px-6! rounded-full group">
          Explore Our Collections
          <ArrowRight className="group-hover:translate-x-1.5 transition-all duration-300" />
        </Button>
      </section>

      <section className="flex flex-col gap-6">
        <header className="text-4xl font-bold text-center">
          Why Choose Us
        </header>
        <ul className="grid grid-cols-3 gap-4">
          {chooses.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-center justify-center gap-2 rounded-md bg-card py-6 px-12 text-center outline-2 outline-transparent hover:outline-foreground transition-colors duration-300"
            >
              <p className="text-base">{item.label}</p>
              <p className="text-muted-foreground">{item.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
