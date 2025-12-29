import UserSidebar from "@/components/shared/user-sidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 py-4">
      <UserSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
