type Props = {
  label: string;
  children: React.ReactNode;
};

export default function InfoSquare({ label, children }: Props) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[10px] text-muted-foreground">{label}</p>
      {children}
    </div>
  );
}
