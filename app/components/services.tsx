export default function Services() {
  return (
    <section id="sluzby" className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-sm text-[#7b6a58] mb-4">
            Služby
          </p>

          <h2 className="text-5xl font-semibold">
            Dopřejte si péči
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#efe6da] p-10 rounded-[2rem] hover:-translate-y-2 transition duration-300">

            <h3 className="text-3xl font-semibold mb-6">
              Relaxační masáže
            </h3>

            <p className="text-[#5f5246] leading-relaxed">
              Hluboké uvolnění stresu, napětí a regenerace těla v klidném prostředí.
            </p>

          </div>

          <div className="bg-[#efe6da] p-10 rounded-[2rem] hover:-translate-y-2 transition duration-300">

            <h3 className="text-3xl font-semibold mb-6">
              Těhotenské masáže
            </h3>

            <p className="text-[#5f5246] leading-relaxed">
              Jemná a bezpečná péče pro nastávající maminky a jejich pohodlí.
            </p>

          </div>

          <div className="bg-[#efe6da] p-10 rounded-[2rem] hover:-translate-y-2 transition duration-300">

            <h3 className="text-3xl font-semibold mb-6">
              Maderoterapie
            </h3>

            <p className="text-[#5f5246] leading-relaxed">
              Přírodní metoda formování postavy a regenerace pomocí dřevěných nástrojů.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}