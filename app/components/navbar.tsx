"use client";

import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const navigationLeft = [
  { label: "Úvod", href: "#hero", id: "uvod" },
  { label: "O mně", href: "#o-mne", id: "o-mne" },
  { label: "Služby", href: "#sluzby", id: "sluzby" },
];

const navigationRight = [
  { label: "Studio", href: "#studio", id: "studio" },
  { label: "Ceník", href: "#cenik", id: "cenik" },
  { label: "Kontakt", href: "#kontakt", id: "kontakt" },
];

const instagramUrl = "https://www.instagram.com/_masazemichelle/";

const facebookUrl =
  "https://www.facebook.com/p/Mas%C3%A1%C5%BEe-Michelle-61577443034560/";

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [...navigationLeft, ...navigationRight];
      let currentSection = "";

      sections.forEach((item) => {
        if (item.id === "uvod") return;

        const section = document.getElementById(item.id);

        if (section && section.getBoundingClientRect().top <= 190) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const renderLinks = (items: typeof navigationLeft) =>
    items.map((item) => {
      const isActive =
        activeSection === item.id ||
        (item.id === "uvod" && !activeSection);

      return (
        <a
          key={item.id}
          href={item.href}
          onClick={closeMenu}
          className={`relative py-3 font-serif italic text-[15px] xl:text-[16px] font-medium tracking-wide
           isActive
            ? "text-[#24432B]"
            : "text-[#65563F] hover:text-[#24432B]"
          }`}
        >
          {item.label}

          <span
            className={`absolute left-0 bottom-1 h-[1px] bg-[#B58A43] transition-all duration-300 ${
              isActive ? "w-full" : "w-0"
            }`}
          />
        </a>
      );
    });

  return (
    <header
   className="fixed top-0 left-0 right-0 z-50 grid grid-rows-[36px_68px] lg:grid-rows-[36px_82px] overflow-visible"
    >
      {/* HORNÍ INFORMAČNÍ LIŠTA */}

      <div className="min-h-0 overflow-hidden">
        <div className="h-9 bg-[#24432B]/95 backdrop-blur-md text-[#F7F0E2] border-b border-[#DCC69A]/20">
          <div className="max-w-[1600px] mx-auto h-full px-5 md:px-10 xl:px-16 flex items-center justify-center md:justify-end">
            <div className="flex items-center gap-3 md:gap-5 lg:gap-7 text-[10px] md:text-[11px] tracking-wide translate-x-2 md:translate-x-0">
              <a
                href="tel:+420735958842"
                className="flex items-center gap-2 hover:text-[#DCC69A] transition-colors whitespace-nowrap"
              >
                <FaPhoneAlt size={10} />
                (+420) 735 958 842
              </a>

              <a
                href="mailto:rezervace@masazemichelle.cz"
                className="hidden sm:flex items-center gap-2 hover:text-[#DCC69A] transition-colors whitespace-nowrap"
              >
                <FaEnvelope size={12} />
                rezervace@masazemichelle.cz
              </a>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <FaClock size={11} className="text-[#DCC69A]" />
                <span>PO–PA · DLE OBJEDNÁNÍ</span>
              </div>

              <div className="hidden lg:flex items-center gap-4 border-l border-[#DCC69A]/30 pl-4">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#E4405F] hover:opacity-75 transition-opacity"
                >
                  <FaInstagram size={15} />
                </a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-[#1877F2] hover:opacity-75 transition-opacity"
                >
                  <FaFacebook size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HLAVNÍ NAVIGACE */}

      <div className="relative h-full min-h-0 bg-[#E9DCC4]/75 backdrop-blur-lg shadow-[0_4px_25px_rgba(36,67,43,0.06)]">
        {/* VYKROJENÝ TVAR NAVIGACE */}

        <div className="relative max-w-[1600px] mx-auto h-full px-5 md:px-10 xl:px-16">
          {/* DESKTOP */}

          <div className="hidden lg:grid grid-cols-[1fr_150px_1fr] items-center h-full">
            <div className="flex items-center justify-end gap-7 xl:gap-10 pr-10">
              {renderLinks(navigationLeft)}
            </div>

            {/* CENTRÁLNÍ LOGO */}

            <div className="relative h-full flex justify-center">
              <div
                className="absolute left-1/2 -translate-x-1/2 top-[-23px] flex h-[132px] w-[132px] items-center justify-center rounded-full bg-[#E9DCC4] border border-[#BDA77F] shadow-[0_5px_20px_rgba(36,67,43,0.12)]"
              >
                <a
                  href="/"
                  aria-label="Masáže Michelle – úvodní stránka"
                  className="block w-[92%] h-[92%] rounded-full overflow-hidden"
                >
                  <img
                    src="/logo-kulate.png"
                    alt="Masáže Michelle"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-start gap-7 xl:gap-10 pl-10">
              {renderLinks(navigationRight)}
            </div>
          </div>

          {/* MOBILNÍ NAVIGACE */}

          <div className="lg:hidden h-full flex items-center justify-between">
            <a
  href="/"
  aria-label="Masáže Michelle – úvodní stránka"
className="block -translate-x-3 md:translate-x-0"
>
  <img
    src="/logo-horizont.png"
    alt="Masáže Michelle"
    className="block w-[155px] h-auto md:hidden"
  />

  <img
    src="/logo-kulate.png"
    alt="Masáže Michelle"
    className="hidden md:block w-[74px] h-auto"
  />
</a>

            <div className="flex items-center gap-5">

              <button
  type="button"
  onClick={() => setIsOpen((prev) => !prev)}
  aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
  aria-expanded={isOpen}
  className="relative z-[70] pointer-events-auto cursor-pointer w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
  >
  <span
    className={`h-[1.5px] bg-[#24432B] transition-all duration-300 ${
      isOpen
        ? "w-7 translate-y-[7.5px] rotate-45"
        : "w-7"
    }`}
  />

  <span
    className={`h-[1.5px] bg-[#24432B] transition-all duration-300 ${
      isOpen
        ? "w-7 opacity-0"
        : "w-[19px]"
    }`}
  />

  <span
    className={`h-[1.5px] bg-[#24432B] transition-all duration-300 ${
      isOpen
        ? "w-7 -translate-y-[7.5px] -rotate-45"
        : "w-[23px]"
    }`}
  />
</button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILNÍ MENU */}

      <div
       className={`lg:hidden fixed inset-0 top-[104px] bg-[#F7F0E2] z-[60] transition-all duration-500 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <div className="h-full flex flex-col px-8 pt-10 pb-10">
          <div className="flex flex-col">
            {[...navigationLeft, ...navigationRight].map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between py-5 border-b border-[#D8C9AA]/70"
              >
                <span className="flex items-center gap-5">
                  <span className="text-xs text-[#B58A43] font-serif">
                    0{index + 1}
                  </span>

                  <span className="font-serif text-2xl text-[#24432B]">
                    {item.label}
                  </span>
                </span>

                <span className="text-[#B58A43] text-xl">→</span>
              </a>
            ))}
          </div>

          <div className="mt-auto">
            <a
              href="/reservation"
              onClick={closeMenu}
              className="block text-center rounded-full bg-[#24432B] text-[#F7F0E2] py-5 uppercase tracking-[0.15em] text-sm"
            >
              Poptat termín
            </a>

            <div className="flex justify-center gap-8 mt-8">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#E4405F]"
              >
                <FaInstagram size={24} />
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#1877F2]"
              >
                <FaFacebook size={23} />
              </a>
            </div>

            <p className="text-center text-[10px] tracking-[0.25em] text-[#8A806E] mt-7">
              MASÁŽE MICHELLE
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}