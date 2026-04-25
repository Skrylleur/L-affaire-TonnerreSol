import Image from "next/image";

const photos = [
  { src: "/equipe_photo_1.jpg", alt: "L'équipe bénévole" },
  { src: "/equipe_photo_2.jpg", alt: "L'équipe bénévole" },
  { src: "/equipe_photo_3.jpg", alt: "L'équipe bénévole" },
  { src: "/equipe_photo_4.jpg", alt: "L'équipe bénévole" },
];

export default function Editorial() {
  return (
    <section className="bg-white border-b border-gray-100">
      {/* Section band */}
      <div className="bg-navy">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3">
          <svg width="12" height="16" viewBox="0 0 12 16" className="fill-festival flex-shrink-0" aria-hidden="true">
            <polygon points="9,0 0,10 6,10 5,16 12,7 7,7" />
          </svg>
          <h2 className="font-bangers text-xl md:text-2xl text-festival uppercase tracking-widest">
            Le mot de l&apos;équipe
          </h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Photo grid */}
        <div className="grid grid-cols-4 gap-3 mb-10">
          {photos.map((photo, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl shadow-card">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Editorial text — two columns on large */}
        <div className="bg-cream rounded-2xl overflow-hidden shadow-card">
          <div className="bg-navy px-8 py-4 flex items-center gap-3">
            <span className="font-bangers text-festival text-base tracking-widest uppercase">
              ✦ 3e édition — 2026
            </span>
          </div>

          <div className="px-8 py-8 md:columns-2 md:gap-10 font-body text-gray-700 text-base leading-relaxed space-y-4">
            <p>
              Comme le dit la philosophe espagnole Marina Garcés, &laquo;&nbsp;la promesse charge de
              futur le présent&nbsp;&raquo;. Ce n&apos;est pas un simple souhait, un &laquo;&nbsp;éventuellement&nbsp;&raquo;
              négociable, c&apos;est un pacte fondé sur la conviction, la volonté, le désir et la mise en
              œuvre de moyens pour rendre cette chose possible.
            </p>
            <p>
              Voilà, le festival Tonnerresol c&apos;est ça : cette promesse que notre équipe
              de bénévoles, fous et acharnés, se fait et vous fait de continuer malgré
              tout à créer <strong className="text-navy">un espace de culture, d&apos;échanges et de joie</strong> autour de
              la bande dessinée. Donc, nous revoici pour la troisième année consécutive ;
              comme le chantait Renaud : &laquo;&nbsp;Toujours la banane, toujours debout&nbsp;&raquo;&nbsp;!
            </p>
            <p>
              Les éditeurs indépendants connaissent une crise sans précédent, qui met en
              danger un bon nombre d&apos;entre eux. Pourtant, une dizaine d&apos;éditeurs de BD indépendants
              nous feront l&apos;honneur d&apos;être présents au festival pour vous faire découvrir
              leurs catalogues, qui défendent la biodiversité culturelle.
            </p>
            <p>
              Les auteur·e·s de BD sont de plus en plus paupérisé·e·s. Pourtant, plus d&apos;une vingtaine
              d&apos;artistes de 5 nationalités différentes seront là en mai pour vous
              présenter leurs univers.
            </p>
            <p>
              Les musiciens sont dangereusement déstabilisés par l&apos;utilisation de
              l&apos;IA dans le marché de la musique. Pourtant, une talentueuse contrebassiste
              et un fabuleux trompettiste vous offriront un concert jazz — gratuit.
            </p>
            <p>
              Bref, <strong className="text-navy">œuvrer ensemble</strong> est la solution. Et à Tonnerresol on a la chance
              d&apos;être très très bien entourés ! Rendez-vous donc le 16 et 17 mai à Tonnerre.
            </p>
            <p className="font-bangers text-navy text-lg pt-2">
              — L&apos;équipe Tonnerresol
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
