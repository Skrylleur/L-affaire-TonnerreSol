export default function Concert() {
  return (
    <section id="concert" className="bg-navy border-b border-festival/15">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Title block */}
        <div className="mb-12">
          <p className="font-bangers text-festival text-sm tracking-widest uppercase mb-2 flex items-center gap-2">
            <svg width="10" height="14" viewBox="0 0 12 16" className="fill-festival flex-shrink-0" aria-hidden="true">
              <polygon points="9,0 0,10 6,10 5,16 12,7 7,7" />
            </svg>
            Concert dessiné
          </p>
          <h2 className="font-bangers text-festival leading-none mb-4">
            <span className="block text-4xl md:text-6xl">Robin Mansanti</span>
            <span className="block text-4xl md:text-6xl">&amp; Solène Cairoli</span>
          </h2>
          <p className="font-bangers text-festival/60 text-xl md:text-2xl mb-2">
            accompagnent en live la performance dessinée d&apos;
          </p>
          <p className="font-bangers text-festival text-3xl md:text-4xl">
            Edmond Baudoin
          </p>
        </div>

        {/* Info strip */}
        <div className="flex flex-wrap gap-4 mb-12">
          <div className="bg-festival rounded-xl px-6 py-4 text-center">
            <p className="font-bangers text-navy text-lg leading-none">Samedi 16 mai</p>
            <p className="font-bangers text-navy text-4xl leading-none mt-1">18h45</p>
          </div>
          <div className="bg-festival/10 rounded-xl px-6 py-4 text-center">
            <p className="font-body text-festival/60 text-xs uppercase tracking-widest mb-1">Lieu</p>
            <p className="font-bangers text-festival text-lg leading-tight">Cinéma Théâtre<br />de Tonnerre</p>
          </div>
          <div className="bg-festival/10 rounded-xl px-6 py-4 text-center">
            <p className="font-body text-festival/60 text-xs uppercase tracking-widest mb-1">Accès</p>
            <p className="font-bangers text-festival text-xl">Entrée gratuite</p>
            <p className="font-body text-festival/50 text-xs mt-1">réservation conseillée</p>
          </div>
        </div>

        {/* Artists */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: "🎺",
              nom: "Robin Mansanti",
              role: "Trompette & chant",
              bio: "Tonnerrois d'origine, Prix du meilleur soliste aux Trophées du Sunside. Trompettiste, chanteur et compositeur de jazz, il s'est produit au Zénith de Paris et vante des collaborations internationales.",
            },
            {
              icon: "🎸",
              nom: "Solène Cairoli",
              role: "Contrebasse",
              bio: "Pluridiplômée en France et aux États-Unis, coqueluche des scènes jazz parisiennes. Produite dans les clubs de Brooklyn et Manhattan, « représentante d'une nouvelle génération investie dans l'évolution du jazz contemporain ».",
            },
            {
              icon: "✏️",
              nom: "Edmond Baudoin",
              role: "Dessin live",
              bio: "Artiste qui a marqué la BD française. 60 ans de carrière, dizaines d'albums et récompenses. Il dessine en direct sur scène pendant toute la durée du concert, créant sous les yeux du public.",
            },
          ].map((artist, i) => (
            <div key={i} className="bg-festival/10 rounded-xl p-6 border border-festival/15">
              <div className="text-4xl mb-3">{artist.icon}</div>
              <p className="font-bangers text-festival text-xs tracking-widest uppercase mb-1">{artist.role}</p>
              <h3 className="font-bangers text-festival text-xl mb-3">{artist.nom}</h3>
              <p className="font-body text-festival/60 text-sm leading-relaxed">{artist.bio}</p>
            </div>
          ))}
        </div>

        <p className="font-body text-festival/40 text-xs text-center mt-8">
          Réservation fortement conseillée auprès du cinéma ou de la librairie Maïpiu
        </p>
      </div>
    </section>
  );
}
