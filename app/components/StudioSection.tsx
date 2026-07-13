import Image from "next/image";

const images = [
  "/studio/studio1.jpeg",
  "/studio/studio2.jpeg",
  "/studio/studio3.jpeg",
  "/studio/studio4.jpeg",
  "/studio/studio5.jpeg",
  "/studio/studio6.jpeg",
  "/studio/studio7.jpeg",
  "/studio/studio8.jpeg",
  "/studio/studio9.jpeg",
  "/studio/studio10.jpeg",
  "/studio/studio11.jpeg",
  "/studio/studio12.jpeg",
  "/studio/studio13.jpeg",
  "/studio/studio14.jpeg",
  "/studio/studio15.jpeg",
  "/studio/studio16.jpeg",
];

export default function StudioSection() {
  return (
    <section
      id="studio"
      className="bg-[#f5efe6] py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#2f3e34] md:text-4xl">
            Prostředí studia
          </h2>

          <p className="mt-4 text-[#5b665f]">
            Příjemné prostředí, klidná atmosféra a maximální soukromí pro váš odpočinek.
          </p>
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