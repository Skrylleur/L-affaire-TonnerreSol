const lieux = [
  { num: "1", nom: "Espace Marland",      adresse: "10, rue François Mitterrand", emoji: "🏛️" },
  { num: "2", nom: "Espace Bouchez",      adresse: "Rue François Mitterrand",     emoji: "🏠" },
  { num: "3", nom: "Cinéma Le Cyclope",   adresse: "Rue de l'Hôtel de ville",     emoji: "🎬" },
  { num: "4", nom: "Atelier Beatiho",     adresse: "4 bis rue du Grenier de sel", emoji: "🎨" },
  { num: "5", nom: "Ça Presse !",         adresse: "4 bis rue du Grenier de sel", emoji: "📰" },
  { num: "6", nom: "Galerie Alfred Grévin", adresse: "33, rue de l'Hôpital",      emoji: "🖼️" },
];

const transports = [
  { icon: "🚆", titre: "Par le train",      desc: "Au départ de Paris Bercy ou Lyon Part Dieu via Dijon. La gare est à 350 mètres du festival !" },
  { icon: "🚗", titre: "En voiture",        desc: "A6 sortie Auxerre Nord (depuis Paris) ou sortie Nitry (depuis Lyon/Dijon)." },
  { icon: "🚲", titre: "Véloroute",         desc: "Le long du canal de Bourgogne. C'est plus long mais c'est plus joli !" },
  { icon: "🅿️", titre: "Parkings gratuits", desc: "3 parkings : Place de la République, Place du Champ de foire, Place Marguerite de Bourgogne." },
];

const regles = [
  { emoji: "🎟️", titre: "Dédicaces",     desc: "Accès gratuit. Priorité aux albums achetés sur place. Max 2 albums par auteur d'affilée. Pas de sac pour garder sa place." },
  { emoji: "🍽️", titre: "Restauration", desc: "Buvettes et food-trucks (y compris végétariens). Nourriture et boissons proscrites à l'intérieur." },
  { emoji: "🐕", titre: "Toutous",       desc: "Interdits en intérieur. Autorisés en laisse à l'extérieur." },
  { emoji: "♿", titre: "PMR",           desc: "Le marché couvert, l'Espace Marland et le cinéma sont accessibles aux personnes à mobilité réduite." },
  { emoji: "🚽", titre: "Toilettes",     desc: "10 toilettes à disposition sur le site du festival." },
  { emoji: "ℹ️", titre: "Office du tourisme", desc: "61 rue de l'Hôpital · 03 86 55 14 48 · escales-en-bourgogne.fr" },
];

export default function PracticalInfo() {
  return (
    <section id="infos" className="bg-white border-b border-gray-100">
      {/* Section band */}
      <div className="bg-navy">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3">
          <svg width="12" height="16" viewBox="0 0 12 16" className="fill-festival flex-shrink-0" aria-hidden="true">
            <polygon points="9,0 0,10 6,10 5,16 12,7 7,7" />
          </svg>
          <h2 className="font-bangers text-xl md:text-2xl text-festival uppercase tracking-widest">
            Infos pratiques
          </h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Lieux */}
        <div className="mb-12">
          <h3 className="font-bangers text-navy text-xl mb-5">📍 Les lieux du festival</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {lieux.map((lieu) => (
              <div key={lieu.num} className="bg-cream rounded-xl p-4 flex items-start gap-3 border border-gray-200">
                <span className="bg-navy text-festival font-bangers text-sm w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                  {lieu.num}
                </span>
                <div>
                  <p className="text-lg leading-none mb-1">{lieu.emoji}</p>
                  <p className="font-bangers text-navy text-base leading-tight">{lieu.nom}</p>
                  <p className="font-body text-xs text-gray-500 mt-0.5">{lieu.adresse}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transports */}
        <div className="mb-12">
          <h3 className="font-bangers text-navy text-xl mb-5">🗺️ Venir à Tonnerre</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {transports.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 shadow-card flex gap-4">
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <div>
                  <p className="font-bangers text-navy text-lg mb-1">{t.titre}</p>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Règles */}
        <div className="mb-8">
          <h3 className="font-bangers text-navy text-xl mb-5">📋 Sur le site du festival</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {regles.map((r, i) => (
              <div key={i} className="bg-cream rounded-xl p-4 border border-gray-200">
                <span className="text-2xl">{r.emoji}</span>
                <p className="font-bangers text-navy text-base mt-2 mb-1">{r.titre}</p>
                <p className="font-body text-gray-600 text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy rounded-xl p-5 text-center">
          <p className="font-bangers text-festival text-2xl">
            Tonnerre (89700) · 16 &amp; 17 mai 2026
          </p>
          <p className="font-body text-festival/50 text-sm mt-2">
            Entrée gratuite à toutes les activités du festival
          </p>
        </div>
      </div>
    </section>
  );
}
