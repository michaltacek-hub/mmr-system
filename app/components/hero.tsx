import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section
  id="hero"
  className="relative h-screen pt-10 flex items-start justify-center text-center px-6"
>
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


       <h1
  className="text-white text-6xl md:text-8xl font-semibold leading-tight mb-8"
  style={{ textShadow: "0 2px 20px rgba(0,0,0,0.35)" }}
>
  Přijď si odpočinout <br /> ulevit tělu i mysli
</h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">

        <Link
  href="/reservation"
  className="bg-[#58794B] text-white px-8 py-4 rounded-full text-lg hover:opacity-90 transition"
>
  Rezervovat online
</Link>

<a
  href="#sluzby"
  className="bg-white/10 backdrop-blur-sm border border-white text-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-[#6F8F63] transition"
>
  Zobrazit služby
</a>
        </div>

      </div>

    </section>
  );
}