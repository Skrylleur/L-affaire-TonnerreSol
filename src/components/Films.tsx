const films = [
  { titre: "Les Enfants de la Résistance", jour: "Samedi 16 mai", heure: "15h00", emoji: "⚔️" },
  { titre: "Arco",                         jour: "Dimanche 17 mai", heure: "16h00", emoji: "🏹" },
  { titre: "Sukkwan Island",               jour: "Dimanche 17 mai", heure: "18h00", emoji: "🌲" },
];

export default function Films() {
  return (
    <section id="cinema" className="bg-cream border-b border-gray-200">
      {/* Section band */}
      <div className="bg-navy">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3">
          <svg width="12" height="16" viewBox="0 0 12 16" className="fill-festival flex-shrink-0" aria-hidden="true">
            <polygon points="9,0 0,10 6,10 5,16 12,7 7,7" />
          </svg>
          <h2 className="font-bangers text-xl md:text-2xl text-festival uppercase tracking-widest">
            Le Cyclope se met au diapason
          </h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
          <p className="font-body text-gray-600 text-base">
            Films présentés par <strong className="text-navy">Christian Marmonnier</strong>, conférencier et critique littéraire.
          </p>
          <div className="flex-shrink-0 bg-navy rounded-lg px-4 py-2">
            <p className="font-bangers text-festival text-sm">🎬 Cinéma Le Cyclope</p>
            <p className="font-body text-festival/60 text-xs">Rue de l&apos;Hôtel de ville</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {films.map((film, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-card border border-gray-100 hover:shadow-card-lg transition-shadow duration-200">
              <div className="text-4xl mb-4">{film.emoji}</div>
              <h3 className="font-bangers text-navy text-xl mb-4 leading-tight">{film.titre}</h3>
              <p className="font-body text-gray-500 text-sm">{film.jour}</p>
              <p className="font-bangers text-navy text-3xl">{film.heure}</p>
            </div>
          ))}
        </div>

        <p className="font-body text-gray-400 text-xs text-center mt-6">
          Entrée aux conditions habituelles du cinéma
        </p>
      </div>
    </section>
  );
}
