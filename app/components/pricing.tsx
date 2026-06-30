export default function Pricing() {
  return (
    <section id="cenik" className="py-28 px-6 bg-[#efe6da]">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-[#7b6a58] mb-4">
            Ceník
          </p>

          <h2 className="text-5xl font-semibold text-[#58794B]">
            Přehled služeb a cen
          </h2>
        </div>

        <div className="grid gap-8">

          {/* Klasické masáže */}
          <div className="bg-[#f5efe6] rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#58794B] mb-6">
              Klasické masáže
            </h3>

            <div className="space-y-4">
              <PriceRow service="Klasická masáž (90 min)" price="1000 Kč" />
              <PriceRow service="Relaxační masáž (60 min)" price="800 Kč" />
            </div>
          </div>

          {/* Těhotenské masáže */}
          <div className="bg-[#f5efe6] rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#58794B] mb-6">
              Těhotenské masáže
            </h3>

            <div className="space-y-4">
              <PriceRow service="Kompletní relax" price="950 Kč" />
              <PriceRow service="Základní uvolnění" price="700 Kč" />
            </div>
          </div>

          {/* Maderoterapie */}
          <div className="bg-[#f5efe6] rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#58794B] mb-6">
              Maderoterapie
            </h3>

            <div className="space-y-4">
              <PriceRow service="Maderoterapie" price="700 Kč" />
              <PriceRow service="Maderoterapie + zábal" price="1000 Kč" />
              <PriceRow service="Anticelulitidní zábal" price="450 Kč" />
              <PriceRow service="5× Maderoterapie" price="3250 Kč" />
            </div>
          </div>

          {/* Doplňkové procedury */}
          <div className="bg-[#f5efe6] rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#58794B] mb-6">
              Doplňkové procedury
            </h3>

            <div className="space-y-4">
              <PriceRow service="Masáž zad a šíje" price="550 Kč" />
              <PriceRow service="Baňky k masáži" price="300 Kč" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

type PriceRowProps = {
  service: string;
  price: string;
};

function PriceRow({ service, price }: PriceRowProps) {
  return (
   <div className="flex justify-between items-center border-b border-[#ddd2c6] py-5">
      <span className="text-lg text-[#5f5246]">
        {service}
      </span>

      <span className="text-2xl font-bold text-[#58794B] whitespace-nowrap">
        {price}
      </span>
    </div>
  );
}