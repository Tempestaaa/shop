import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { iNotification } from "@/types/notification.type";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Clock } from "lucide-react";

dayjs.extend(relativeTime);

type Props = {
  data: iNotification;
};

export default function NotificationCard({ data }: Props) {
  if (!data) return null;

  return (
    <li className="p-2 rounded-md hover:bg-muted transition-colors duration-300 space-y-2 group">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="size-3.5" />
          <span>{dayjs(data.createdAt).fromNow()}</span>
        </div>
        <Badge variant="default" className="capitalize">
          {data.type}
        </Badge>
      </div>
      <div className="flex gap-4">
        <Avatar className="size-10 outline-2 outline-transparent group-hover:outline-border">
          <AvatarImage />
          <AvatarFallback>VN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <p className="font-semibold">{data.title}</p>
          <p className="text-muted-foreground line-clamp-3">
            {data.description}
          </p>
        </div>
      </div>
    </li>
  );
}
