import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f5efe6]">
      <div className="w-full flex items-center justify-end px-20 h-24">
        <Image
          src="/navbar2.png"
          alt="Masáže Michelle"
          width={2000}
          height={2000}
          className="absolute left-2 top-2 h-32 md:left-20 md:top-4 md:h-60 w-auto z-50"
        />

        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          <a href="#o-michelle" className="hover:text-[#7b6a58] transition">
            O Michelle
          </a>

          <a href="#sluzby" className="hover:text-[#7b6a58] transition">
            Služby
          </a>

          <a href="#cenik" className="hover:text-[#7b6a58] transition">
            Ceník
          </a>

          <a href="#kontakt" className="hover:text-[#7b6a58] transition">
            Kontakt
          </a>

          <div className="flex items-center gap-4 border-l border-[#d8cec2] pl-4">
            <a
  href="https://www.instagram.com/_masazemichelle/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <FaInstagram
    size={22}
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
    size={22}
    className="text-blue-600 hover:scale-110 transition"
  />
</a>
          </div>

          <a
            href="/reservation"
            className="rounded-full bg-[#7b6a58] px-6 py-3 text-white font-medium hover:opacity-90 transition"
          >
            Rezervovat online
          </a>
        </div>
      </div>
    </nav>
  );
}