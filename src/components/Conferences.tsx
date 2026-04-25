const conferences = [
  {
    jour: "Sam. 16 mai",
    heure: "14h30",
    nom: "Jean-Paul Jennequin",
    titre: "Gay Comix : de l'underground au mainstream",
    bio: "Traducteur de From Hell, Black Hole, La Grande Guerre de Charlie. Co-fondateur du magazine Scarce, animateur de la revue LGBT-BD depuis dix ans. Encyclopédie vivante des comics et référence en matière de BD queer.",
    emoji: "🌈",
  },
  {
    jour: "Sam. 16 mai",
    heure: "16h30",
    nom: "Bernard Joubert",
    titre: "Hara-Kiri, le rire mordant",
    bio: "Journaliste et historien, expert mondial de la censure dans la BD. Auteur de Dictionnaire des livres et journaux interdits, Images interdites (avec Frémion) et Flatulences en cases (Dynamite, 2023). Conférencier à Angoulême depuis des décennies.",
    emoji: "✂️",
  },
  {
    jour: "Dim. 17 mai",
    heure: "11h00",
    nom: "Yves Frémion",
    titre: "Vas faire la guerre, je dessine à ta place — 14-18, l'émergence des dessinatrices",
    bio: "Écrivain, critique BD, iconologue. Régent du Collège de Pataphysique (dont furent membres Boris Vian, Queneau, Ionesco, Prévert). Spécialiste de la censure, fondateur de fanzines, ancien collaborateur de Fluide Glacial.",
    emoji: "🕊️",
  },
];

export default function Conferences() {
  return (
    <section id="conferences" className="bg-cream border-b border-gray-200">
      {/* Section band */}
      <div className="bg-navy">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3">
          <svg width="12" height="16" viewBox="0 0 12 16" className="fill-festival flex-shrink-0" aria-hidden="true">
            <polygon points="9,0 0,10 6,10 5,16 12,7 7,7" />
          </svg>
          <h2 className="font-bangers text-xl md:text-2xl text-festival uppercase tracking-widest">
            Conférences
          </h2>
          <span className="ml-2 font-body text-festival/50 text-sm">Chez Kaz21 — 21 rue Saint-Pierre</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {conferences.map((conf, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100 flex">
              {/* Time column */}
              <div className="bg-navy w-32 flex-shrink-0 flex flex-col items-center justify-center p-5 gap-1">
                <span className="text-2xl">{conf.emoji}</span>
                <span className="font-body text-festival/60 text-xs text-center leading-tight mt-2">{conf.jour}</span>
                <span className="font-bangers text-festival text-3xl leading-none">{conf.heure}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1">
                <p className="font-bangers text-navy text-xl mb-1">{conf.nom}</p>
                <p className="font-body text-gray-500 text-sm italic mb-3">
                  &laquo; {conf.titre} &raquo;
                </p>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{conf.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Christian Marmonnier */}
        <div className="mt-4 bg-white rounded-xl p-5 border border-gray-100 shadow-card flex gap-4">
          <span className="text-3xl flex-shrink-0">🎬</span>
          <div>
            <p className="font-bangers text-navy text-lg mb-1">Christian Marmonnier — Présentations de films au Cyclope</p>
            <p className="font-body text-gray-600 text-sm leading-relaxed">
              Conférencier et critique littéraire, auteur de <em>Métal Hurlant, la machine à rêver</em> (Denoël Graphic). Co-créateur du lieu culturel Kaz21 à Tonnerre. Il présentera les trois films projetés au Cyclope tout le week-end.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-navy rounded-xl p-4 text-center">
          <p className="font-bangers text-festival text-lg">
            📍 Kaz21 · 21 rue Saint-Pierre, Tonnerre · Entrée gratuite
          </p>
        </div>
      </div>
    </section>
  );
}
