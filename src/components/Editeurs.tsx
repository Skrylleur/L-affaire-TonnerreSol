const editeurs = [
  { nom: "PLG",               emoji: "📚", url: "plg-editions.com",             desc: "Depuis 1978, spécialisé dans les ouvrages critiques sur la BD." },
  { nom: "Tanibis",           emoji: "🦏", url: "tanibis.net",                  desc: "Lyonnais depuis 2000, formes inusitées de BD. Prix Alph'Art fanzine Angoulême 2003." },
  { nom: "Éditions Cornaline",emoji: "🌱", url: null,                           desc: "Toute jeune maison familiale (2023), engagée pour l'environnement." },
  { nom: "Rouquemoute",       emoji: "🍺", url: "rouquemoute-editions.fr",      desc: "Nantaise, axée humour. Locaux dans une librairie-bar, La Flibuste." },
  { nom: "Ça et Là",          emoji: "🤝", url: "caetla.fr",                    desc: "Créée en 2005, devenue Scop pour leurs 20 ans. Plusieurs sélections Angoulême." },
  { nom: "Castel Comix",      emoji: "🏰", url: null,                           desc: "So L'Air et Lo Canal, fanzinistes depuis 40 ans, basés en Bourgogne." },
  { nom: "Des Ronds dans l'O",emoji: "♀️", url: "desrondsdanslo.com",           desc: "21 ans d'édition engagée, BD féministe et ados-adultes." },
  { nom: "Le Lézard",         emoji: "🦎", url: "editionlelezard.fr",           desc: "Créé en 1989, retour triomphal en 2025 avec À tue-tête de Blanchin." },
  { nom: "The Hoochie Coochie",emoji: "🎸", url: "thehoochiecoochie.com",       desc: "Impressions artisanales depuis 2002. Prix BD Alternative Angoulême 2008 et 2009." },
  { nom: "Oblique Art",       emoji: "🖼️", url: "obliqueartproduction.com",    desc: "Commissariat d'expositions BD. Pierre-Marie Jamet, co-créateur des revues PLG et Le Lézard." },
];

export default function Editeurs() {
  return (
    <section id="editeurs" className="bg-navy border-b border-festival/15">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="flex items-center gap-3 mb-4">
          <svg width="12" height="16" viewBox="0 0 12 16" className="fill-festival flex-shrink-0" aria-hidden="true">
            <polygon points="9,0 0,10 6,10 5,16 12,7 7,7" />
          </svg>
          <h2 className="font-bangers text-festival text-xl md:text-2xl uppercase tracking-widest">
            Les éditeurs indépendants
          </h2>
          <div className="flex-1 h-px bg-festival/20" />
        </div>
        <p className="font-body text-festival/50 text-sm mb-10">
          10 maisons d&apos;édition qui défendent la biodiversité culturelle
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {editeurs.map((ed, i) => (
            <div
              key={i}
              className="bg-festival/10 rounded-xl p-5 border border-festival/15 hover:bg-festival/15 transition-colors duration-150"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{ed.emoji}</span>
                <h3 className="font-bangers text-festival text-lg leading-tight">{ed.nom}</h3>
              </div>
              <p className="font-body text-festival/60 text-sm leading-relaxed mb-3">{ed.desc}</p>
              {ed.url && (
                <a
                  href={`https://${ed.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-body text-festival/60 text-xs hover:text-festival transition-colors duration-150"
                >
                  🔗 {ed.url}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
