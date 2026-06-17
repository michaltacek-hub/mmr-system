import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#d8cfc2] py-10 px-6">

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">

        <div className="text-[#7b6a58] text-center">
          <p>📞 735 958 842</p>
          <p>✉️ rezervace@masazemichelle.cz</p>
        </div>

        <div className="flex items-center gap-6">

          <a
            href="https://www.instagram.com/_masazemichelle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} color="#E4405F" />
          </a>

          <a
            href="https://www.facebook.com/p/Mas%C3%A1%C5%BEe-Michelle-61577443034560/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} color="#1877F2" />
          </a>

        </div>

        <p className="text-[10px] text-[#7b6a58]">
          © 2026 Masáže Michelle
        </p>

      </div>

    </footer>
  );
}