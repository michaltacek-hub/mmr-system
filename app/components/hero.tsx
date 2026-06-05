import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative h-screen pt-32 flex items-center justify-center text-center px-6">
<div className="absolute inset-0">

  <Image
    src="/hero2.png"
    alt="Masáže Michelle"
    fill
    className="object-cover object-top"
    priority
  />

  <div className="absolute inset-0 bg-black/30" />

</div>
      {/* Decorative blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#7b8b75]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#a1866f]/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">


        <h1 className="text-6xl md:text-8xl font-semibold leading-tight mb-8">
          Péče o tělo <br /> i mysl
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white leading-relaxed mb-10">
          Elegantní masáže v přírodním minimalistickém stylu.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">

         <Link
href="/reservation"
  className="bg-[#2f3e34] text-[#f5efe6] px-8 py-4 rounded-full text-lg hover:opacity-90 transition"
>
Rezervovat termín
</Link>

          <button className="border border-[#2f3e34] px-8 py-4 rounded-full text-lg hover:bg-[#2f3e34] hover:text-white transition">
            Zobrazit služby
          </button>

        </div>

      </div>

    </section>
  );
}