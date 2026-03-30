const placeholders = [
  "Édition précédente",
  "Ateliers créatifs",
  "Concert dessiné",
  "Expositions",
  "Auteurs invités",
  "Ambiance festival",
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-16 px-6 bg-white border-b-4 border-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bangers text-4xl md:text-5xl text-black mb-3 text-center">
          Galerie photos
        </h2>
        <p className="font-body text-gray-500 text-center text-base mb-12">
          Photos de la précédente édition — nouvelles photos à venir !
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((label, i) => (
            <div
              key={i}
              className="group relative aspect-square bg-cream border-4 border-black rounded-xl overflow-hidden shadow-comic hover:-translate-y-1 hover:shadow-comic-lg transition-all duration-200"
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="text-4xl opacity-30">🖼️</span>
              </div>

              {/* Label overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-black px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                <p className="font-bangers text-festival text-sm text-center">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
