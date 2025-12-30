import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BasicInfoField() {
  return (
    <>
      <Label className="flex items-center gap-4">
        <span className="w-60">First name:</span>
        <Input placeholder="First name" className="w-1/2 bg-input/10!" />
      </Label>
      <Label className="flex items-center gap-4">
        <span className="w-60">Last name:</span>
        <Input placeholder="Last name" className="w-1/2 bg-input/10!" />
      </Label>
    </>
  );
}
