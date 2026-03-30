import Image from "next/image";

const photos = [
  { src: "/equipe_photo_1.jpg", alt: "L'équipe bénévole — été" },
  { src: "/equipe_photo_2.jpg", alt: "L'équipe bénévole — Noël" },
  { src: "/equipe_photo_3.jpg", alt: "L'équipe bénévole — plantes" },
  { src: "/equipe_photo_4.jpg", alt: "L'équipe bénévole — soupe" },
];

export default function Editorial() {
  return (
    <section className="py-16 px-6 bg-cream border-b-4 border-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bangers text-4xl md:text-5xl text-black mb-10 text-center">
          Le mot de l&apos;équipe
        </h2>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="border-4 border-black rounded-xl overflow-hidden shadow-comic aspect-square"
            >
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

        {/* Text */}
        <div className="bg-white border-4 border-black rounded-2xl shadow-comic-xl overflow-hidden">
          <div className="bg-festival border-b-4 border-black px-8 py-4">
            <span className="font-bangers text-xl text-black">
              ✦ 3e édition — 2026
            </span>
          </div>

          <div className="px-8 py-8 space-y-5 font-body text-lg text-black leading-relaxed">
            <p>
              Comme le dit la philosophe espagnole Marina Garcés, &quot;la promesse charge de
              futur le présent&quot;. Ce n&apos;est pas un simple souhait, un
              &quot;éventuellement&quot; négociable, c&apos;est un pacte fondé sur la conviction,
              la volonté, le désir et la mise en œuvre de moyens pour rendre cette
              chose possible.
            </p>
            <p>
              Voilà, le festival Tonnerresol c&apos;est ça : cette promesse que notre équipe
              de bénévoles, fous et acharnés, se fait et vous fait de continuer malgré
              tout à créer{" "}
              <strong>un espace de culture, d&apos;échanges et de joie</strong> autour de
              la bande dessinée. Donc, nous revoici pour la troisième année consécutive ;
              comme le chantait Renaud : &quot;Toujours la banane, toujours debout&quot; !
            </p>
            <p>
              Les éditeurs indépendants connaissent une crise sans précédent, qui met en
              danger un bon nombre d&apos;entre eux. Pourtant, 9 éditeurs de BD indépendants
              nous feront l&apos;honneur d&apos;être présents au festival pour vous faire découvrir
              leurs catalogues, qui défendent la biodiversité culturelle.
            </p>
            <p>
              Les auteur·e·s de BD sont de plus en plus paupérisé·e·s (lire les états
              généraux de la BD de mars 2026). Pourtant, plus d&apos;une vingtaine
              d&apos;artistes de 5 nationalités différentes seront là en mai pour vous
              présenter leurs univers.
            </p>
            <p>
              Les musiciens sont dangereusement déstabilisés par l&apos;utilisation de
              l&apos;IA dans le marché de la musique. Pourtant, une talentueuse contrebassiste
              et un fabuleux trompettiste vous offriront un concert jazz. Dont l&apos;accès,
              comme à toutes les activités du festival, sera <strong>gratuit.</strong>
            </p>
            <p>
              Les commerçants sont de plus en plus fragilisés, dans un contexte économique
              international secoué par les guerres et l&apos;instabilité. Pourtant, nos
              commerces locaux continuent à nous accompagner avec des dons.
            </p>
            <p>
              Bref, <strong>œuvrer ensemble</strong> est la solution.{" "}
              Et à Tonnerresol on a la chance d&apos;être très très bien entourés !
              Cette année encore, on va passer un excellent moment. Rendez-vous donc
              le 16 et 17 mai à Tonnerre.
            </p>
            <p className="font-bangers text-xl text-black pt-2">
              — L&apos;équipe Tonnerresol
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
