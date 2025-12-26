import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function SocialIcons() {
  return (
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
  );
}
