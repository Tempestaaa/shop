import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
};

export default function FilterWrapper({ icon, label, children }: Props) {
  const Icon = icon;

  return (
    <section className="flex flex-col gap-2">
      <header className="flex items-center gap-2">
        <Icon className="size-4" />
        <span className="font-semibold">{label}</span>
      </header>

      {children}
    </section>
  );
}
