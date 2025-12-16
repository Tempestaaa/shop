type Props = {
  label: string;
  value: string;
};

export default function MetaRow({ label, value }: Props) {
  return (
    <li className="rounded-md border-2 border-transparent hover:bg-muted hover:border-foreground transition-colors duration-300 cursor-pointer px-4 py-2 grid grid-cols-[10rem_1fr]">
      <p>{label}</p>
      <p className="text-muted-foreground">{value}</p>
    </li>
  );
}
