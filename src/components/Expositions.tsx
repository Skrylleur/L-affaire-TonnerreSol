const expos = [
  {
    titre: "Le Décaméron",
    auteur: "Vincent Vanoli",
    editeur: "The Hoochie Coochie",
    lieu: "Atelier Beatiho",
    adresse: "4 bis rue du Grenier à sel",
    date: "Vernissage vendredi 15 mai à 18h45",
    desc: "À l'occasion de la réédition de ce classique, les éditions The Hoochie Coochie exposent les superbes planches originales de Vincent Vanoli. L'aspect médiéval de l'œuvre de Boccace se retrouve magnifiquement dans le paysage urbain de Tonnerre.",
    emoji: "📜",
    accent: "border-l-4 border-navy",
  },
  {
    titre: "La BD s'affiche",
    auteur: "Divers dessinateurs",
    editeur: "Ça Presse !",
    lieu: "Ça Presse !",
    adresse: "4 rue du Grenier à sel",
    date: "Tout le week-end",
    desc: "Chez Ça Presse !, Vincent Chavanes regroupe un panel d'affiches réalisées par des dessinateurs de BD — notamment quelques grosses pointures de la profession. Une expo dédiée à l'affiche comme art BD.",
    emoji: "🖼️",
    accent: "border-l-4 border-festival",
  },
  {
    titre: "Originaux XIXe–XXe siècle",
    auteur: "Victor de la Fuente, Manara, Forest, Pichard, Gillon…",
    editeur: "Galerie Alfred Grévin",
    lieu: "Galerie Alfred Grévin",
    adresse: "33 rue de l'Hôpital",
    date: "Tout le week-end",
    desc: "Alfred Grévin (1827–1892), originaire du Tonnerrois, fut un célèbre dessinateur humoristique et créateur de costumes. La galerie présente une quarantaine d'originaux de BD issus de deux siècles d'illustration.",
    emoji: "🎨",
    accent: "border-l-4 border-navy",
  },
];

export default function Expositions() {
  return (
    <section id="expositions" className="bg-white border-b border-gray-100">
      {/* Section band */}
      <div className="bg-navy">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3">
          <svg width="12" height="16" viewBox="0 0 12 16" className="fill-festival flex-shrink-0" aria-hidden="true">
            <polygon points="9,0 0,10 6,10 5,16 12,7 7,7" />
          </svg>
          <h2 className="font-bangers text-xl md:text-2xl text-festival uppercase tracking-widest">
            Les expositions
          </h2>
          <span className="ml-2 font-body text-festival/50 text-sm">3 lieux · tout le week-end</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {expos.map((expo, i) => (
            <div key={i} className={`bg-cream rounded-xl p-6 shadow-card hover:shadow-card-lg transition-shadow duration-200 ${expo.accent}`}>
              <div className="text-4xl mb-4">{expo.emoji}</div>
              <h3 className="font-bangers text-navy text-2xl mb-1">{expo.titre}</h3>
              <p className="font-body text-gray-500 text-xs italic mb-4">{expo.auteur}</p>
              <p className="font-body text-gray-700 text-sm leading-relaxed mb-6">{expo.desc}</p>
              <div className="border-t border-gray-200 pt-4 space-y-1">
                <p className="font-bangers text-navy text-base">📍 {expo.lieu}</p>
                <p className="font-body text-gray-500 text-xs">{expo.adresse}</p>
                <p className="font-body text-festival-dark text-xs font-semibold">{expo.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
