import MetaRow from "@/components/pages/shop/book/meta-row";

const meta = [
  {
    label: "Literary awards",
    value: "Manga Taisho Award (2021)",
  },
  {
    label: "Original Title",
    value: "葬送のフリーレン 1",
  },
  {
    label: "Format",
    value: "188 pages, Paperback",
  },
  {
    label: "Published Date",
    value: "November 9, 2021 by VIZ Media LLC",
  },
  {
    label: "ASIN",
    value: "1974725766",
  },
  {
    label: "Language",
    value: "English",
  },
];

export default function MetaSection() {
  return (
    <section className="col-span-6 p-4 rounded-md">
      <header className="text-base font-bold">Information</header>
      <ul className="mt-2 bg-card rounded-md p-2">
        {meta.map((item) => (
          <MetaRow key={item.label} label={item.label} value={item.value} />
        ))}
      </ul>
    </section>
  );
}
