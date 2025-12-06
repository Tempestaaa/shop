import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const menu = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop", isDropdown: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const genres = [
  "Fiction",
  "Nonfiction",
  "Fantasy",
  "Science Fiction",
  "Mystery",
  "Thriller",
  "Horror",
  "Romance",
  "Historical Fiction",
  "Literary Fiction",
  "Young Adult",
  "Children's Literature",
  "Poetry",
  "Drama",
  "Biography",
  "Self-Help",
  "History",
  "Science & Technology",
  "Philosophy",
  "Religion & Spirituality",
  "Art, Architecture & Photography",
  "Cookbooks, Food & Wine",
  "Travel",
  "True Crime",
  "Graphic Novel",
];

export default function AppNavbarMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menu.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.isDropdown ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
