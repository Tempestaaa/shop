import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";
import { Clock } from "lucide-react";
import Image from "next/image";

export default function NotificationCard() {
  return (
    <li className="p-2 rounded-md hover:bg-muted transition-colors duration-300 space-y-2">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="size-3.5" />
          <span>{dayjs().format("HH:MM DD/MM/YYYY")}</span>
        </div>
        <Badge variant="outline">Unseen</Badge>
      </div>
      <div className="flex gap-4">
        <figure className="relative w-14 h-20 rounded overflow-hidden shrink-0">
          <Image src="/test.jpg" alt="Book's cover" fill />1
        </figure>
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Notification name</p>
          <p className="text-muted-foreground line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor
            blanditiis quibusdam iure atque eveniet vero. Mollitia, atque
            nostrum! Illo cupiditate ipsam, doloremque accusantium sunt cumque
            est numquam esse quibusdam!
          </p>
        </div>
      </div>
    </li>
  );
}
