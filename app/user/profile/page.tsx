import BasicInfoField from "@/components/pages/user/profile/basic-info-field";
import DobField from "@/components/pages/user/profile/dob-field";
import EmailField from "@/components/pages/user/profile/email-field";
import GenderField from "@/components/pages/user/profile/gender-field";
import PhoneField from "@/components/pages/user/profile/phone-field";
import { Button } from "@/components/ui/button";
import { Save, Trash } from "lucide-react";

export default function UserProfilePage() {
  return (
    <div className="p-4 space-y-4">
      <header className="text-2xl font-semibold tracking-tighter">
        Personal Profile
      </header>
      <form className="space-y-4">
        <div className="flex flex-col gap-6 p-4 rounded-md bg-card">
          <BasicInfoField />
          <PhoneField />
          <EmailField />
          <GenderField />
          <DobField />
        </div>
        <div className="flex items-center gap-2">
          <Button type="submit" className="px-8!">
            <Save />
            Save
          </Button>
          <Button type="button" variant="ghost" className="px-6! text-red-600">
            <Trash />
            Delete my account
          </Button>
        </div>
      </form>
    </div>
  );
}
