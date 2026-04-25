const items = [
  {
    emoji: "🎤",
    title: "Concert dessiné live",
    desc: "Robin Mansanti et Solène Cairoli accompagnent en direct la performance dessinée d'Edmond Baudoin — samedi 16 mai à 18h45 au Cinéma Théâtre.",
    accent: "bg-festival",
    textAccent: "text-navy",
    textDesc: "text-navy/70",
  },
  {
    emoji: "🖊️",
    title: "Dédicaces d'auteurs",
    desc: "Rencontrez plus de 20 auteurs venus de 5 pays, découvrez leurs univers et repartez avec un souvenir unique. Accès gratuit pour tous.",
    accent: "bg-navy",
    textAccent: "text-festival",
    textDesc: "text-gray-700",
  },
  {
    emoji: "🎨",
    title: "Ateliers & expositions",
    desc: "3 expositions dans différents lieux, ateliers créatifs, planches originales, animations enfants, fanzines et auto-édités !",
    accent: "bg-cream",
    textAccent: "text-navy",
    textDesc: "text-gray-700",
  },
  {
    emoji: "🎙️",
    title: "Conférences",
    desc: "3 conférences par des experts : censure dans la BD, Gay Comix, dessinatrices de 14-18 — chez Kaz21, 21 rue Saint-Pierre.",
    accent: "bg-white",
    textAccent: "text-navy",
    textDesc: "text-gray-700",
  },
  {
    emoji: "🎬",
    title: "Films au Cyclope",
    desc: "3 films présentés par Christian Marmonnier au Cinéma Le Cyclope : Les Enfants de la Résistance, Arco, Sukkwan Island.",
    accent: "bg-navy",
    textAccent: "text-festival",
    textDesc: "text-gray-700",
  },
  {
    emoji: "🏆",
    title: "Prix CurioSophie",
    desc: "24 ouvrages d'artistes émergents en lice pour le prix littéraire du festival, présentés par 12 éditeurs indépendants.",
    accent: "bg-festival",
    textAccent: "text-navy",
    textDesc: "text-navy/70",
  },
];

export default function Programme() {
  return (
    <section id="programmation" className="bg-cream border-b border-gray-200">
      {/* Section band */}
      <div className="bg-navy">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3">
          <svg width="12" height="16" viewBox="0 0 12 16" className="fill-festival flex-shrink-0" aria-hidden="true">
            <polygon points="9,0 0,10 6,10 5,16 12,7 7,7" />
          </svg>
          <h2 className="font-bangers text-xl md:text-2xl text-festival uppercase tracking-widest">
            Au programme
          </h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="font-body text-gray-500 text-lg mb-10 max-w-2xl">
          Un week-end de rencontres, de partage et de découvertes — zéro ennui, tout gratuit.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`${item.accent} rounded-xl p-6 shadow-card hover:shadow-card-lg transition-shadow duration-200 border border-black/5`}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className={`font-bangers text-xl mb-2 ${item.textAccent}`}>
                {item.title}
              </h3>
              <p className={`font-body text-sm leading-relaxed ${item.textDesc}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-navy rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-festival/70 text-sm">
            Animations enfants · Fanzones · Auto-édités · Buvette · Food trucks · Et bien plus…
          </p>
          <span className="font-bangers text-festival text-lg whitespace-nowrap">
            🎟️ Tout gratuit
          </span>
        </div>
      </div>
    </section>
  );
}
