export default function Pricing() {
  return (
    <section id="cenik" className="py-28 px-6 bg-[#efe6da]">
      <div className="max-w-5xl mx-auto lg:max-w-2xl">

      <div className="text-center mb-16 md:mb-20">
          <p className="uppercase tracking-[0.3em] text-sm text-[#7b6a58] mb-4">
            Ceník
          </p>
        </div>
          <h2 className="text-5xl font-semibold text-[#58794B] text-center">
            Ceník služeb
          </h2>
        </div>

        <div className="grid gap-8">

          {/* Klasické masáže */}
          <div className="bg-[#f5efe6] rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#58794B] mb-6">
              Klasické masáže
            </h3>

            <div className="space-y-4">
              <PriceRow
  service="Klasická masáž"
  duration="90 minut"
  price="1000 Kč"
/>
             <PriceRow
  service="Relaxační masáž"
  duration="60 minut"
  price="800 Kč"
/>
            </div>
          </div>

          {/* Těhotenské masáže */}
          <div className="bg-[#f5efe6] rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#58794B] mb-6">
              Těhotenské masáže
            </h3>

            <div className="space-y-4">
              <PriceRow
  service="Kompletní relax"
  duration="90 minut"
  price="950 Kč"
/>
              <PriceRow
  service="Základní uvolnění"
  duration="60 minut"
  price="700 Kč"
/>
            </div>
          </div>

          {/* Maderoterapie */}
          <div className="bg-[#f5efe6] rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#58794B] mb-6">
              Maderoterapie
            </h3>

            <div className="space-y-4">
              <PriceRow
  service="Maderoterapie"
  duration="60 min"
  price="700 Kč"
/>

<PriceRow
  service="Maderoterapie"
  duration="90 min"
  price="1000 Kč"
/>

<PriceRow
  service="Maderoterapie + zábal"
  duration="90 minut"
  price="1000 Kč"
/>

<PriceRow
  service="Anticelulitidní zábal"
  duration="30 minut"
  price="450 Kč"
/>

<PriceRow
  service="5× Maderoterapie"
  duration="Permanentka"
  price="3250 Kč"
/>
            </div>
          </div>

          {/* Doplňkové procedury */}
          <div className="bg-[#f5efe6] rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#58794B] mb-6">
              Doplňkové procedury
            </h3>

            <div className="space-y-4">
             <PriceRow
  service="Masáž zad a šíje"
  duration="45 minut"
  price="550 Kč"
/>

<PriceRow
  service="Baňky k masáži"
  duration="Dle domluvy"
  price="300 Kč"
/>
          </div>

        </div>

      </div>
    </section>
  );
}

type PriceRowProps = {
  service: string;
  duration: string;
  price: string;
};

function PriceRow({ service, duration, price }: PriceRowProps) {
  return (
   <div className="flex justify-between items-center border-b border-[#ddd2c6] py-5">
     <div className="flex flex-col">
  <span className="text-lg text-[#5f5246]">
    {service}
  </span>

  <span className="text-sm text-[#8a7a69] mt-1">
    {duration}
  </span>
</div>

      <span className="text-2xl font-bold text-[#58794B] whitespace-nowrap">
        {price}
      </span>
    </div>
  );
}