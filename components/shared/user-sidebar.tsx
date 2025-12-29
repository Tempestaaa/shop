import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { userMeta } from "@/lib/meta";
import { Bell, BookOpen, Medal } from "lucide-react";
import Link from "next/link";

export default function UserSidebar() {
  const extended = [
    {
      icon: Bell,
      href: "/user/notification",
      label: "Notification",
      isProtected: true,
    },
    {
      icon: BookOpen,
      href: "/user/reviews",
      label: "Reviews",
      isProtected: true,
    },
  ];
  const extendedUserMeta = [...userMeta, ...extended];

  return (
    <aside className="basis-1/4 bg-card rounded-md">
      <section className="flex flex-col items-center justify-center gap-1 p-4">
        <Avatar className="size-20 outline">
          <AvatarImage />
          <AvatarFallback className="text-2xl">VN</AvatarFallback>
        </Avatar>
        <p className="font-semibold text-base mt-1">Username</p>
        <Badge variant="outline" className="bg-amber-800">
          <Medal />
          Bronze Member
        </Badge>
        <p className="text-muted-foreground text-xs w-3/4 text-center mt-1">
          Accumulate 100 points to be promoted to Silver rank.
        </p>
      </section>
      <Separator />
      <menu className="py-4">
        {extendedUserMeta.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.href}
              key={item.href}
              className="flex items-center gap-2 py-2 px-6 hover:bg-muted rounded-md"
            >
              <Icon className="size-3.5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </menu>
    </aside>
  );
}
