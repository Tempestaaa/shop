import NotificationCard from "@/components/shared/notification-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import dayjs from "dayjs";
import { Bell, Clock } from "lucide-react";
import Image from "next/image";

export default function NotificationButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative">
          <Bell />
          <div className="absolute top-1.5 right-2.5 size-2 bg-red-600 rounded-full" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-96 p-0">
        <header className="flex items-center justify-between py-2 px-4">
          <p className="font-semibold text-base">
            Notifications{" "}
            <span className="text-muted-foreground text-xs">(4)</span>
          </p>
          <Button variant="ghost">See All</Button>
        </header>
        <Separator />
        <ScrollArea className="h-96 p-2">
          <ul className="flex flex-col gap-4">
            {[...Array(5)].map((_, id) => (
              <NotificationCard key={id} />
            ))}
          </ul>
          <ScrollBar />
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
