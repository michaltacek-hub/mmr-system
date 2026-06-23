"use client";

import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  const logoScale = useTransform(scrollY, [0, 500], [1, 0.45]);
  const logoY = useTransform(scrollY, [0, 500], [0, -11]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f5efe6]">
      <div className="w-full flex items-center justify-end px-20 h-24">
       <motion.div
style={{
  scale: logoScale,
  y: logoY,
}}
  className="absolute left-2 top-2 md:left-20 md:top-4 z-50 origin-top-left"
>
  <Image
    src="/navbar2.png"
    alt="Masáže Michelle"
    width={2000}
    height={2000}
    className="h-32 md:h-48 w-auto"
  />
</motion.div>
          <div className="md:hidden">
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="text-3xl text-[#58794B]"
  >
    {isOpen ? "✕" : "☰"}
  </button>
</div>
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">

          <a href="#o-michelle" className="hover:text-[#58794B] transition">
            O Michelle
          </a>

          <a href="#sluzby" className="hover:text-[#58794B] transition">
            Služby
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

    <div className="fixed top-30 left-0 w-full bg-[#f5efe6] border-t border-[#d8cec2] px-8 py-8 z-50">
    <div className="flex flex-col gap-6 uppercase tracking-wider text-lg">
      <a
        href="#o-michelle"
        onClick={() => setIsOpen(false)}
      >
        O Michelle
      </a>

      <a
        href="#sluzby"
        onClick={() => setIsOpen(false)}
      >
        Služby
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