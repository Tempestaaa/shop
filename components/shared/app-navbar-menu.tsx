"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop", isDropdown: true },
  { label: "About", href: "/about" },
];

export default function AppNavbarMenu() {
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menu.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              className={`${isActive(item.href) && "bg-muted"}`}
              asChild
            >
              <Link href={item.href}>{item.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
