const stats = [
  { number: "20+", label: "auteurs", sub: "5 nationalités" },
  { number: "9", label: "éditeurs", sub: "indépendants" },
  { number: "6", label: "conférences", sub: "" },
  { number: "3", label: "expositions", sub: "" },
  { number: "1", label: "concert jazz", sub: "" },
  { number: "1", label: "prix littéraire", sub: "" },
];

export default function Hero() {
  return (
    <section className="relative bg-festival border-b-4 border-black overflow-hidden">
      {/* Comic dot pattern background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Main hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-14 md:py-20 text-center">
        {/* "3e édition" badge */}
        <div className="inline-block animate-bounce-in bg-black text-festival font-bangers text-xl px-6 py-2 rounded-full border-2 border-black mb-8 shadow-comic">
          ✦ 3e édition ✦
        </div>

        {/* Main title */}
        <h2 className="font-bangers text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black leading-none mb-6">
          L&apos;aventure BD<br />
          recommence ici !
        </h2>

        {/* Subtitle */}
        <p className="font-body text-lg sm:text-xl text-black mb-8 max-w-xl mx-auto leading-relaxed opacity-90">
          Toujours la banane, toujours debout — pour la troisième année consécutive !
        </p>

        {/* Date + location */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 mb-8">
          <span className="bg-black text-festival font-bangers text-2xl sm:text-3xl px-8 py-3 rounded-xl border-4 border-black shadow-comic-lg">
            16 &amp; 17 MAI 2026
          </span>
          <span className="bg-white text-black font-bangers text-xl px-6 py-3 rounded-xl border-4 border-black shadow-comic">
            📍 Tonnerre
          </span>
        </div>

        {/* Free entry */}
        <p className="font-bangers text-xl sm:text-2xl text-black">
          🎟️ Entrée gratuite — concerts, conférences et tout le reste !
        </p>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 bg-black border-t-4 border-black">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`py-5 px-3 text-center ${
                i < stats.length - 1 ? "border-r-2 border-festival/40" : ""
              }`}
            >
              <div className="font-bangers text-festival text-4xl leading-none">
                {stat.number}
              </div>
              <div className="font-bangers text-white text-base leading-tight mt-0.5">
                {stat.label}
              </div>
              {stat.sub && (
                <div className="font-body text-festival/70 text-xs mt-1">
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
