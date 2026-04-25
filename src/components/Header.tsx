"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#programmation", text: "Programme" },
  { href: "#auteurs", text: "Auteurs" },
  { href: "#concert", text: "Concert" },
  { href: "#expositions", text: "Expos" },
  { href: "/prix-curiosophie", text: "Prix CurioSophie" },
  { href: "#infos", text: "Infos pratiques" },
  { href: "#contact", text: "Contact" },
  { href: "/editions-precedentes", text: "Éditions précédentes" },
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
      className={`sticky top-0 z-50 bg-navy transition-shadow duration-300 ${
        scrolled ? "shadow-card-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center gap-4">
        {/* Logo + title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-white rounded-full overflow-hidden ring-2 ring-festival/60">
            <Image
              src="/Logo.jpg"
              alt="Logo L'Affaire Tonnerresol"
              width={56}
              height={56}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="min-w-0">
            <p className="font-bangers text-festival text-xs tracking-widest uppercase leading-none mb-0.5 hidden sm:block">
              Festival International de BD
            </p>
            <h1 className="font-bangers text-xl sm:text-2xl md:text-3xl tracking-wide text-festival leading-tight truncate">
              L&apos;AFFAIRE TONNERRESOL
            </h1>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-festival/80 font-body text-sm rounded-lg hover:bg-festival/10 hover:text-white transition-colors duration-150 whitespace-nowrap"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex-shrink-0 text-festival/80 hover:text-white p-2 rounded-lg hover:bg-festival/10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
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
        <div className="lg:hidden bg-navy-dark border-t border-festival/15 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-2.5 text-festival/80 font-body text-base rounded-lg hover:bg-festival/10 hover:text-white transition-colors"
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
