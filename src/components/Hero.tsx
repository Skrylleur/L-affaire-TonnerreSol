const stats = [
  { number: "20+", label: "auteurs", sub: "5 nationalités" },
  { number: "10", label: "éditeurs", sub: "indépendants" },
  { number: "3", label: "conférences", sub: "" },
  { number: "3", label: "expositions", sub: "" },
  { number: "1", label: "concert jazz", sub: "" },
  { number: "1", label: "prix littéraire", sub: "" },
];

export default function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #1f4074 0, #1f4074 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Main hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end gap-10">
          {/* Left: title block */}
          <div className="flex-1">
            {/* Edition badge */}
            <div className="inline-flex items-center gap-2 bg-festival/15 border border-festival/30 rounded-full px-4 py-1.5 mb-6 animate-bounce-in">
              <span className="w-2 h-2 rounded-full bg-festival inline-block" />
              <span className="font-bangers text-festival text-base tracking-widest uppercase">
                3e édition · 2026
              </span>
            </div>

            {/* Main title */}
            <h2 className="font-bangers text-festival leading-none mb-6">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                L&apos;aventure BD
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-festival">
                recommence ici !
              </span>
            </h2>

            <p className="font-body text-festival/70 text-lg max-w-md leading-relaxed mb-8">
              Toujours la banane, toujours debout — pour la troisième année consécutive à Tonnerre.
            </p>

            <p className="font-body text-festival/60 text-sm">
              🎟️ Entrée gratuite — concerts, conférences, dédicaces et tout le reste
            </p>
          </div>

          {/* Right: date block */}
          <div className="md:pb-2 flex-shrink-0">
            <div className="bg-festival rounded-2xl px-8 py-6 text-center">
              <p className="font-bangers text-navy text-xl tracking-widest uppercase mb-1">
                Festival International de BD
              </p>
              <p className="font-bangers text-navy text-5xl md:text-6xl leading-none mb-1">
                16 &amp; 17
              </p>
              <p className="font-bangers text-navy text-3xl md:text-4xl leading-none mb-3">
                MAI 2026
              </p>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-navy/70" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-bangers text-navy text-xl">Tonnerre</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-festival/20 bg-navy-dark">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`py-5 px-3 text-center ${
                i < stats.length - 1 ? "border-r border-festival/20" : ""
              }`}
            >
              <div className="font-bangers text-festival text-4xl leading-none">
                {stat.number}
              </div>
              <div className="font-bangers text-festival text-base leading-tight mt-0.5">
                {stat.label}
              </div>
              {stat.sub && (
                <div className="font-body text-festival/40 text-xs mt-1">
                  {stat.sub}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
