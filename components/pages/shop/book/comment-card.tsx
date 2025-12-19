import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function CommentCard() {
  return (
    <div className="p-2 rounded-md border-2 border-transparent hover:border-foreground transition-colors duration-300 flex gap-4">
      <Avatar className="size-10">
        <AvatarImage />
        <AvatarFallback>VN</AvatarFallback>
      </Avatar>

      <div className="flex-1 flex flex-col gap-2">
        <header className="">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Username</p>
            <ul className="flex items-center gap-1">
              {[...Array(5)].map((_, id) => (
                <Star
                  key={id}
                  className="size-3.5 fill-yellow-500 text-yellow-500"
                />
              ))}
            </ul>
          </div>
          <p className="text-xs text-muted-foreground">Just now</p>
        </header>

        <div className="bg-card p-2 rounded-md line-clamp-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nisi
          alias facere, debitis quibusdam totam reiciendis error soluta quo
          perspiciatis consectetur doloremque atque repudiandae commodi quod
          unde in. Magnam ipsam dicta sequi earum voluptatibus ea culpa ut error
          exercitationem facere. Unde ab mollitia illo nesciunt at ad dolorum
          animi consequatur?
        </div>
      </div>
    </div>
  );
}
