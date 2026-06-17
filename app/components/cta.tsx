export default function CTA() {
  return (
    <section id="kontakt" className="px-6 pb-28">

      <div className="max-w-5xl mx-auto bg-[#2f3e34] text-[#f5efe6] rounded-[3rem] p-16 text-center">

        <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#d7c9b8]">
          Rezervace
        </p>

        <h2 className="text-5xl font-semibold mb-8">
          Udělejte si čas pro sebe
        </h2>

        <p className="mb-8 text-[#d7c9b8]">
          Objednejte se online nebo mě kontaktujte.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
  href="/rezervace"
  className="inline-block bg-[#f5efe6] text-[#2f3e34] px-8 py-4 rounded-full text-lg hover:opacity-90 transition"
>
  Rezervovat online
</a>

          <a
            href="tel:+420735958842"
            className="border border-[#f5efe6] px-8 py-4 rounded-full text-lg hover:bg-white hover:text-[#2f3e34] transition"
          >
            📞 +420 735 958 842
          </a>

        </div>

      </div>

    </section>
  );
}