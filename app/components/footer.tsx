import { FaInstagram, FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="border-t border-[#d8cfc2] py-10 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

       <div className="text-[#7b6a58]">
  <p>📞 735 958 842</p>
  <p>✉️ rezervace@masazemichelle.cz</p>
</div>

 <div className="flex items-center gap-6 text-[#7b6a58]">

  <a
    href="https://www.instagram.com/_masazemichelle/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#2f3e34] transition"
  >
    <FaInstagram size={28} />
  </a>

  <a
    href="https://www.facebook.com/p/Mas%C3%A1%C5%BEe-Michelle-61577443034560/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#2f3e34] transition"
  >
    <FaFacebook size={28} />
  </a>

<p className="text-[10px] text-[#7b6a58] text-center mt-12">
  © 2026 Masáže Michelle
</p>

</div>

      </div>

    </footer>
  );
}