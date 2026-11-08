"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLeaf,
  FaSpa,
  FaHeart,
  FaHandHoldingHeart,
} from "react-icons/fa";

const benefits = [
  { icon: FaLeaf, title: "Uvolnění", description: "od napětí" },
  { icon: FaSpa, title: "Podpora", description: "prokrvení" },
  { icon: FaHeart, title: "Úleva", description: "od bolesti" },
  {
    icon: FaHandHoldingHeart,
    title: "Harmonie",
    description: "těla a mysli",
  },
];

export default function Hero() {
  return (
    <section
  id="hero"
  className="
   relative isolate min-h-[calc(100svh-190px)]
    overflow-hidden
    bg-[#F7F0E2]
    pt-[118px]
    pb-[15px]
  "
>
      {/* POZADÍ */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#D9DCC6]/25 blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#E7D8BB]/30 blur-[110px]" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#F7F0E2] via-[#F7F0E2]/95 to-[#EFE6D4]/60" />
      </div>

      {/* BOTANIKA – LEVÝ HORNÍ ROH */}

      <div className="pointer-events-none absolute left-[-25px] top-[125px] z-[2] w-[340px] md:left-[-40px] md:top-[100px] md:w-[500px]">
        <Image
          src="/hero-dekorace/botanika%205.png"
          alt=""
          width={1536}
          height={1024}
          className="h-auto w-full"
        />
      </div>

      {/* HLAVNÍ ROZLOŽENÍ */}

      <div
        className=" 
          relative z-10 mx-auto grid
          min-h-[calc(100svh-308px)]
          max-w-[1600px]
          grid-cols-1
          items-center
          gap-12
          px-6 py-12
          md:px-12
          min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]
          min-[900px]:gap-12
          min-[900px]:px-16
          min-[900px]:py-10
          xl:px-20
        "
      >
        {/* LEVÁ ČÁST */}
<div className="relative z-10 flex flex-col items-center text-center min-[900px]:translate-x-16 min-[900px]:translate-y-12 min-[900px]:items-start min-[900px]:text-left">


          {/* NADPIS */}

          <h1 className="mb-4 font-serif text-[34px] leading-[1.04] tracking-tight text-[#17351F] sm:text-4xl xl:text-[56px]">
            Dopřejte si chvíli
            <br />
            <span className="italic text-[#8A7048]">
              jen pro sebe.
            </span>
          </h1>

          {/* DEKORATIVNÍ LINKA */}

          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-14 bg-[#B58A43]" />
            <FaSpa className="text-lg text-[#24432B]" />
            <span className="h-px w-14 bg-[#B58A43]" />
          </div>

          {/* PODNADPIS */}

          <p className="mb-6 max-w-xl text-xs leading-relaxed text-[#625D4E] md:text-sm xl:text-base">
            Péče, relaxace a harmonie v každém doteku.
            Zastavte se, uvolněte napětí a dopřejte
            svému tělu zasloužený odpočinek.
          </p>

          {/* BENEFITY */}

          <div className="mb-7 grid w-full max-w-xl grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#24432B]/50 bg-[#F7F0E2]/80">
                    <Icon className="text-lg text-[#24432B]" />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-[#24432B] md:text-[10px]">
                      {benefit.title}
                    </p>

                    <p className="text-[10px] text-[#766E5E]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TLAČÍTKA */}

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/reservation"
              className="group flex items-center justify-center gap-3 rounded-full bg-[#24432B] px-7 py-3 text-xs text-[#F7F0E2] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#35583A]"
            >
              Poptat termín

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <a
              href="#sluzby"
              className="flex items-center justify-center rounded-full border border-[#24432B]/60 px-7 py-3 text-xs text-[#24432B] transition-all duration-300 hover:bg-[#24432B] hover:text-white"
            >
              Zobrazit služby
            </a>
          </div>
        </div>

        {/* PRAVÁ ČÁST – SPOLEČNÁ BOTANICKÁ KOMPOZICE */}

       <div
  className="
    relative isolate mx-auto
    flex w-full max-w-[560px]
    items-center justify-center
    lg:ml-auto"
>

          {/* BOTANIKA – PRAVÝ HORNÍ ROH */}

          <div
            className="
              pointer-events-none absolute
              -right-[38%] -top-[-55%]
              z-[11]
              w-[clamp(190px,65%,350px)]
            "
          >
            <Image
              src="/hero-dekorace/botanika%201.png"
              alt=""
              width={1536}
              height={1024}
        className="h-auto w-full rotate-300 -scale-x-100"
            />
          </div>


         {/* BOTANIKA – LEVÝ DOLNÍ ROH */}

<div
  className="
    pointer-events-none absolute
    left-[-60%] bottom-[-16%]
    z-[4]
    w-[clamp(190px,68%,360px)]
  "
>
  <Image
    src="/hero-dekorace/botanika%206.png"
    alt=""
    width={1536}
    height={1024}
    className="h-auto w-full"
  />
</div>

          {/* HLAVNÍ FOTOGRAFIE + ZLATÝ RÁMEČEK */}

<div className="relative w-full max-w-[496px]">

  {/* FOTOGRAFIE */}

  <div
    className="
      relative z-10
      h-[min(68svh,620px)]
      w-full
      min-h-[400px]
      overflow-hidden
      rounded-t-[48%]
      rounded-b-[32px]
      shadow-[0_25px_70px_rgba(36,67,43,0.18)]
    "
  >
    <Image
      src="/hero-michaela-original.jpg"
      alt="Michaela při masáži"
      fill
      priority
      sizes="(max-width: 1024px) 90vw, 45vw"
      className="object-cover object-center"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#17351F]/15 via-transparent to-transparent" />
  </div>

  {/* ZLATÝ RÁMEČEK – POD FOTOGRAFIÍ A BOTANIKOU */}

<div
  className="
    pointer-events-none absolute
    inset-[-10px]
    z-[1]
    rounded-t-[48%]
    rounded-b-[38px]
    border-[5px] border-[#B58A43]/80
  "
/>

</div>

        {/* PANEL MASÁŽNÍCH POMŮCEK */}

<div className="absolute -bottom-5 -left-12 z-20 w-[42%] -rotate-3 overflow-hidden rounded-2xl border-[5px] border-[#F7F0E2] shadow-xl sm:-left-14 lg:-left-16">
  <div className="relative aspect-square">
    <Image
      src="/hero-tools-scene.png"
      alt="Masážní pomůcky a přírodní oleje"
      fill
      sizes="220px"
      className="object-cover"
    />

    </div>
  </div>
</div>
        </div>

      {/* SPODNÍ LINKA */}

      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[2px] w-full bg-gradient-to-r from-transparent via-[#B58A43]/60 to-transparent" />
    </section>
  );
}