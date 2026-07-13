import { FaInstagram, FaFacebook } from "react-icons/fa";
export default function Contact() {
  return (
    <section id="kontakt" className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[#7b6a58] mb-4">
          Kontakt
        </p>

        <h2 className="text-5xl font-semibold mb-12 text-[#58794B]">
          Jsem tu pro vás
        </h2>

        <div className="bg-[#efe6da] p-12 rounded-[2rem]">
          <div className="space-y-6 text-lg">

  <div className="flex items-center justify-center gap-3">
    <span className="text-2xl">📧</span>
    <strong className="break-all text-center">
      rezervace@masazemichelle.cz
    </strong>
  </div>

  <div className="flex items-center justify-center gap-3">
    <span className="text-2xl">📞</span>
    <strong>
      +420 735 958 842
    </strong>
  </div>

  <div className="flex justify-center gap-6 pt-4">
  <a
    href="https://www.instagram.com/_masazemichelle/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram
      size={32}
      className="text-pink-500 hover:scale-110 transition"
    />
  </a>

  <a
    href="https://www.facebook.com/p/Mas%C3%A1%C5%BEe-Michelle-61577443034560/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebook
      size={32}
      className="text-blue-600 hover:scale-110 transition"
    />
  </a>
</div>

          </div>
        </div>

      </div>
    </section>
  );
}