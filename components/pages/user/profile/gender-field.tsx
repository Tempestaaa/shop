import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function GenderField() {
  return (
    <div className="flex items-center gap-4">
      <span className="w-60 font-medium">Gender:</span>
      <RadioGroup defaultValue="male" className="flex items-center gap-8">
        <Label className="flex items-center gap-2">
          <RadioGroupItem value="male" />
          <span>Male</span>
        </Label>
        <Label className="flex items-center gap-2">
          <RadioGroupItem value="female" />
          <span>Female</span>
        </Label>
      </RadioGroup>
    </div>
  );
}
