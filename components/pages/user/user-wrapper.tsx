type Props = {
  header: string;
  children: React.ReactNode;
};

export default function UserWrapper({ header, children }: Props) {
  return (
    <div className="p-4 space-y-4">
      <header className="text-2xl font-semibold tracking-tighter">
        {header}
      </header>
      {children}
    </div>
  );
}
