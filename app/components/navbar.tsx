"use client";

import { useEffect, useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 120);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
   <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-[#f5efe6]/95 backdrop-blur-md shadow-md"
      : "bg-[#f5efe6]"
  }`}
>
   <div className="w-full flex items-center justify-end px-5 md:px-20 h-24">
  
          <div className="md:hidden">
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="flex items-center gap-2 text-[#58794B] font-medium"
    aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
  >
    {isOpen ? (
      <>
        <span className="text-base uppercase tracking-wider">Zavřít</span>
        <span className="text-3xl leading-none">✕</span>
      </>
    ) : (
      <>
        <span className="text-base uppercase tracking-wider">Menu</span>
        <span className="text-3xl leading-none">☰</span>
      </>
    )}
  </button>
</div>
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">

          <a href="#o-mne" className="hover:text-[#58794B] transition">
            O mně
          </a>

          <a href="#sluzby" className="hover:text-[#58794B] transition">
            Služby
          </a>
          
          <a href="#studio" className="hover:text-[#58794B] transition">
            Studio
          </a>

          <a href="#cenik" className="hover:text-[#58794B] transition">
            Ceník
          </a>

          <a href="#kontakt" className="hover:text-[#58794B] transition">
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
            className="rounded-full bg-[#58794B] px-6 py-3 text-white font-medium hover:opacity-90 transition"
          >
            Rezervovat online
          </a>
        </div>
      </div>
{isOpen && (
  <>
    <div
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
      onClick={() => setIsOpen(false)}
    />

    <div className="fixed top-36 left-0 w-full bg-[#f5efe6] border-t border-[#d8cec2] px-8 py-8 z-50">
    <div className="flex flex-col gap-6 uppercase tracking-wider text-lg">
      <a
        href="#o-mne"
        onClick={() => setIsOpen(false)}
      >
        O mně
      </a>

      <a
        href="#sluzby"
        onClick={() => setIsOpen(false)}
      >
        Služby
      </a>

      <a
        href="#studio"
        onClick={() => setIsOpen(false)}
      >
        Studio
      </a>

      <a
        href="#cenik"
        onClick={() => setIsOpen(false)}
      >
        Ceník
      </a>

      <a
        href="#kontakt"
        onClick={() => setIsOpen(false)}
      >
        Kontakt
      </a>

      <div className="flex gap-5 pt-2">

  <a
    href="https://www.instagram.com/_masazemichelle/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram
      size={24}
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
      size={24}
      className="text-blue-600 hover:scale-110 transition"
    />
  </a>

</div>

      <a
        href="/reservation"
        onClick={() => setIsOpen(false)}
        className="mt-2 rounded-full bg-[#58794B] px-6 py-3 text-white text-center"
      >
        Rezervovat online
      </a>

      </div>
    </div>
  </>
)}
    </nav>
  );
}