import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

export default function EmailField() {
  return (
    <Label className="flex items-center gap-4">
      <span className="w-60">Email:</span>
      <InputGroup className="w-1/2 bg-input/10!">
        <InputGroupInput placeholder="Email" className="" />
        <InputGroupButton className="text-xs mr-1 text-blue-600 transition-colors duration-300">
          Change
        </InputGroupButton>
      </InputGroup>
    </Label>
  );
}
