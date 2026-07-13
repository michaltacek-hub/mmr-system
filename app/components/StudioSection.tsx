import Image from "next/image";

const images = [
  "/studio/studio8.jpeg",
  "/studio/studio9.jpeg",
  "/studio/studio10.jpeg",
  "/studio/studio11.jpeg",
  "/studio/studio7.jpeg",
  "/studio/studio12.jpeg",
  "/studio/studio16.jpeg",
];

export default function StudioSection() {
  return (
    <section
      id="studio"
      className="bg-[#f5efe6] py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

       <div className="mx-auto mb-12 max-w-3xl text-center">
  <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-[#7b6a58]">
    Studio
  </p>

  <h2 className="text-3xl font-bold text-[#58794B] md:text-4xl">
    Klid, pohoda a relax.
  </h2>
</div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
  src={src}
  alt="Masážní studio Michelle"
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover transition-transform duration-300 hover:scale-105"
/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}