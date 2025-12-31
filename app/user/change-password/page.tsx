import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import PasswordInput from "@/components/ui/password-input";
import { Save } from "lucide-react";

export default function UserChangePasswordPage() {
  return (
    <div className="p-4 space-y-4">
      <header className="text-2xl font-semibold tracking-tighter">
        Change Password
      </header>
      <form className="space-y-4">
        <div className="flex flex-col gap-6 p-4 rounded-md bg-card">
          <Label className="flex items-center gap-4">
            <span className="w-60">Old password:</span>
            <PasswordInput className="w-1/2 bg-input/10!" />
          </Label>
          <Label className="flex items-center gap-4">
            <span className="w-60">New password:</span>
            <PasswordInput className="w-1/2 bg-input/10!" />
          </Label>
          <Label className="flex items-center gap-4">
            <span className="w-60">Re-enter new password:</span>
            <PasswordInput className="w-1/2 bg-input/10!" />
          </Label>
        </div>
        <Button type="submit" className="px-8!">
          <Save />
          Save
        </Button>
      </form>
    </div>
  );
}
