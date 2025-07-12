"use client";

export default function ScrollToTopButton() {
  return (
    <button
      aria-label="Remonter en haut de la page"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-6 z-50 bg-[#dbc414] border-4 border-black rounded-full w-16 h-16 flex items-center justify-center shadow-comic-xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-50"
    >
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
} 