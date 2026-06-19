export default function Contact() {
  return (
    <section id="kontakt" className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[#7b6a58] mb-4">
          Kontakt
        </p>

        <h2 className="text-5xl font-semibold mb-12">
          Jsme tu pro vás
        </h2>

        <div className="bg-[#efe6da] p-12 rounded-[2rem]">
          <div className="space-y-6 text-lg">

            <p>
              📞 <strong>735 958 842</strong>
            </p>

            <p>
              ✉️ <strong>rezervace@masazemichelle.cz</strong>
            </p>

            <div className="flex justify-center gap-6 pt-4">
              <a
                href="https://www.instagram.com/_masazemichelle/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/p/Mas%C3%A1%C5%BEe-Michelle-61577443034560/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                Facebook
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}