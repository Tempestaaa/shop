import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="col-span-3 h-120 bg-card p-4 rounded-md relative overflow-hidden">
      <Image src="/test.jpg" alt="Book's cover" fill />
    </section>
  );
}
