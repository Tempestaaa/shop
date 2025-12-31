"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordInput({
  ...props
}: React.ComponentProps<"input">) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <InputGroup {...props}>
      <InputGroupInput
        type={isVisible ? "text" : "password"}
        placeholder="******"
      />
      <InputGroupAddon
        align="inline-end"
        className="cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? <EyeOff /> : <Eye />}
      </InputGroupAddon>
    </InputGroup>
  );
}
