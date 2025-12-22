import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const menu = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop", isDropdown: true },
  { label: "About", href: "/about" },
];

const legal = ["Privacy Policy", "Terms of Services", "FAQ", "Support"];

export default function AppFooter() {
  return (
    <footer className="py-8 mt-8 border-t">
      <div className="container mx-auto">
        <div className="flex justify-between gap-8">
          <section className="flex flex-col gap-2">
            <Link
              href="/"
              className="font-bold text-2xl tracking-tighter w-fit"
            >
              Next Shop
            </Link>
            <p className="text-muted-foreground w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              voluptates nam doloribus deserunt omnis enim voluptatibus amet
              fugit iure doloremque sequi, optio, id adipisci! Obcaecati vitae
              odit placeat sequi dignissimos?
            </p>
            <div className="flex items-center text-muted-foreground mt-2">
              <Button variant="ghost">
                <Facebook />
              </Button>
              <Button variant="ghost">
                <Instagram />
              </Button>
              <Button variant="ghost">
                <Youtube />
              </Button>
              <Button variant="ghost">
                <Linkedin />
              </Button>
              <Button variant="ghost">
                <Twitter />
              </Button>
            </div>
          </section>

          <section className="basis-1/5 space-y-2">
            <header className="text-base font-bold">Navigation</header>
            <menu className="flex flex-col">
              {menu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-1 text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </menu>
          </section>
          <section className="basis-1/5 space-y-2">
            <header className="text-base font-bold">Legal</header>
            <ul className="flex flex-col">
              {legal.map((item) => (
                <li
                  key={item}
                  className="py-1 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <Separator className="mt-4 mb-2" />
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
