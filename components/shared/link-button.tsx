import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  variant?:
    | "default"
    | "ghost"
    | "outline"
    | "secondary"
    | "destructive"
    | "link";
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  children?: ReactNode;
  className?: string;
  showArrow?: boolean;
  disableTransition?: boolean;
};

export default function LinkButton({
  href,
  variant = "default",
  size = "default",
  children,
  className,
  showArrow = false,
  disableTransition = false,
}: Props) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn("rounded-full", !disableTransition && "group", className)}
      asChild
    >
      <Link href={href}>
        {children}
        {showArrow && (
          <ArrowRight
            className={
              "group-hover:translate-x-1.5 transition-all duration-300"
            }
          />
        )}
      </Link>
    </Button>
  );
}
