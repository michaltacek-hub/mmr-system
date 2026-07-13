import Image from "next/image";

export default function About() {
  return (
    <section id="o-mne" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-[#7b6a58] mb-4">
            O mně
          </p>

          <h2 className="text-5xl font-semibold text-[#58794B]">
            Masáže s individuálním přístupem
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#efe6da]">

 <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#efe6da]">
  <Image
    src="/studio/studio6.jpeg"
    alt="Michaela Zemánková při masáži"
    fill
    priority
    sizes="(max-width: 1024px) 100vw, 50vw"
    className="object-cover"
  />
</div>

          </div>

          <div className="space-y-6 text-lg leading-relaxed text-[#5f5246]">

            <p>
              Jmenuji se Michaela Zemánková a vítám Vás na svých webových stránkách.
            </p>

            <p>
              Masážím jsem se nejprve věnovala ve svém volném čase a poskytovala je
              rodině, přátelům i známým. Postupně se tato činnost stala nejen mým
              koníčkem, ale také skutečnou vášní. Právě proto jsem se rozhodla
              věnovat masážím naplno a v roce 2025 jsem otevřela svůj masážní salon.
            </p>

            <p>
              Mým cílem je poskytovat klientům kvalitní a profesionální péči v
              příjemném a klidném prostředí. Každé návštěvě věnuji individuální
              přístup, protože věřím, že každý člověk potřebuje jiný druh péče a
              pozornosti.
            </p>

            <p>
              Masáže vnímám jako cestu k uvolnění těla i mysli. Pomáhají zmírnit
              napětí, podpořit regeneraci a přinést chvíli klidu v dnešní uspěchané
              době.
            </p>

            <p>
              Největší odměnou je pro mě spokojený klient, který odchází odpočatý,
              s pocitem úlevy a nové energie.
            </p>

            <p className="font-medium text-[#5f5246]">
              Těším se na Vaši návštěvu.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}