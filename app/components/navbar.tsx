import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f5efe6]/80 backdrop-blur-md border-b border-[#d8cfc2]">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

<Image
  src="/navbar.png"
  alt="Masáže Michelle"
  width={1000}
  height={500}
  className="h-20 w-auto object-contain"
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