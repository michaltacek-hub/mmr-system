import Image from "next/image";
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

        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wider">

          <a href="#" className="hover:text-[#7b6a58] transition">
            Služby
          </a>

          <a href="#" className="hover:text-[#7b6a58] transition">
            O nás
          </a>

          <a href="#" className="hover:text-[#7b6a58] transition">
            Kontakt
          </a>

        </div>

      </div>

    </nav>
  );
}