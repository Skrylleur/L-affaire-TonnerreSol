"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#programmation", text: "Programme" },
  { href: "/prix-curiosophie", text: "Prix CurioSophie" },
  { href: "#infos", text: "Infos pratiques" },
  { href: "#galerie", text: "Galerie" },
  { href: "#contact", text: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-festival border-b-4 border-black transition-shadow duration-300 ${
        scrolled ? "shadow-comic-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center gap-4">
        {/* Logo + title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 bg-white border-4 border-black rounded-full overflow-hidden shadow-comic">
            <Image
              src="/Logo.jpg"
              alt="Logo L'Affaire Tonnerresol"
              width={64}
              height={64}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="font-bangers text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide text-black leading-tight truncate">
            L&apos;AFFAIRE TONNERRESOL
          </h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 bg-black text-festival font-bangers text-lg rounded-full border-2 border-black hover:bg-white hover:text-black transition-colors duration-200 shadow-comic whitespace-nowrap"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex-shrink-0 bg-black text-white rounded-lg p-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t-4 border-black px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-5 py-3 bg-festival text-black font-bangers text-xl rounded-xl border-2 border-festival text-center hover:bg-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
