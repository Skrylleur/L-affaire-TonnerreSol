import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prix CurioSophie — L'Affaire Tonnerresol",
  description:
    "Le Prix CurioSophie récompense une bande dessinée audacieuse d'artistes émergents. 24 ouvrages en lice pour l'édition 2026.",
};

// Les 24 couvertures seront fournies par Lolo (graphiste)
// À remplacer par les vrais fichiers image quand ils seront disponibles
const NOMBRE_COUVERTURES = 24;

export default function PrixCurioSophie() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Header simplifié avec retour */}
      <header className="bg-festival border-b-4 border-black px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <Link
            href="/"
            className="font-bangers text-lg text-black bg-black text-festival px-4 py-2 rounded-full border-2 border-black hover:bg-white hover:text-black transition-colors shadow-comic"
          >
            ← Retour
          </Link>
          <h1 className="font-bangers text-2xl md:text-3xl text-black">
            L&apos;Affaire Tonnerresol
          </h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Titre */}
        <div className="text-center mb-12">
          <div className="inline-block bg-black text-festival font-bangers text-xl px-6 py-2 rounded-full border-2 border-black mb-6 shadow-comic">
            ✦ Prix littéraire ✦
          </div>
          <h2 className="font-bangers text-5xl md:text-7xl text-black mb-4">
            Prix CurioSophie
          </h2>
          <p className="font-bangers text-2xl text-festival bg-black inline-block px-6 py-2 rounded-xl border-4 border-black shadow-comic-lg">
            24 ouvrages en lice — édition 2026
          </p>
        </div>

        {/* Texte de présentation */}
        <div className="bg-cream border-4 border-black rounded-2xl shadow-comic-xl overflow-hidden mb-12">
          <div className="bg-festival border-b-4 border-black px-8 py-4">
            <span className="font-bangers text-xl text-black">
              ✦ Présentation du prix
            </span>
          </div>
          <div className="px-8 py-8 space-y-5 font-body text-lg text-black leading-relaxed">
            <p>
              Témoignage d&apos;une reconnaissance et preuve d&apos;une installation de
              L&apos;Affaire Tonnerresol dans le paysage de la bande dessinée francophone,
              le Prix CurioSophie connaît une augmentation régulière de ses candidatures.
              Avec cette année 24 ouvrages en lice présentés par 12 éditeurs différents,
              dont la majorité est l&apos;œuvre d&apos;autrices, il devient de plus en plus
              représentatif de la jeune création en bande dessinée.
            </p>
            <p>
              C&apos;est justement l&apos;ambition du Prix : mettre en lumière des créations
              audacieuses d&apos;artistes émergents.
            </p>
            <p>
              Avec la curiosité pour philosophie, le Prix s&apos;affirme également comme un
              porte-voix de la lecture comme exploration. Le Prix CurioSophie ne
              récompense pas la &laquo;&nbsp;meilleure&nbsp;&raquo; bande dessinée, mais
              l&apos;ouvrage qui aura le plus interpellé le jury par son originalité, ses
              prises de risques et ses nouveautés graphiques ou scénaristiques. Il
              n&apos;est pas à la recherche de la BD la plus &laquo;&nbsp;populaire&nbsp;&raquo;
              ou &laquo;&nbsp;célèbre&nbsp;&raquo;, mais refuse le formatage et prône
              l&apos;inventivité. Pour que la lecture demeure une expérience à part entière.
            </p>
            <blockquote className="border-l-4 border-festival pl-6 italic text-gray-700">
              — Frédéric Hojlo, président du jury
            </blockquote>
            <p>
              L&apos;association, via son mécène Xavier Bernard, en mémoire de Sophie
              Chopin-Bernard, offrira à l&apos;éditeur de la BD gagnante 500 étiquettes
              autocollantes &laquo;&nbsp;Prix CurioSophie&nbsp;&raquo; et invitera
              l&apos;auteur·e gagnant·e à l&apos;édition 2027.
            </p>
          </div>
        </div>

        {/* Grille des 24 couvertures */}
        <div className="mb-8">
          <h3 className="font-bangers text-3xl md:text-4xl text-black mb-3 text-center">
            Les 24 ouvrages en lice
          </h3>
          <p className="font-body text-gray-500 text-center text-sm mb-8">
            Présentés par 12 éditeurs indépendants
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {Array.from({ length: NOMBRE_COUVERTURES }).map((_, i) => (
              <div
                key={i}
                className="aspect-[2/3] bg-cream border-4 border-black rounded-lg shadow-comic flex items-center justify-center overflow-hidden"
              >
                {/* Placeholder — remplacer par <Image> quand les visuels seront fournis par Lolo */}
                <div className="text-center p-2">
                  <span className="text-2xl opacity-30">📚</span>
                  <p className="font-bangers text-xs text-black/40 mt-1">#{i + 1}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-gray-400 text-center text-xs mt-4">
            Visuels des couvertures à venir
          </p>
        </div>

        {/* CTA retour */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block bg-festival border-4 border-black font-bangers text-xl px-8 py-4 rounded-xl shadow-comic-lg hover:-translate-y-1 hover:shadow-comic-xl transition-all duration-200 text-black"
          >
            ← Retour au festival
          </Link>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="bg-black py-6 px-6 border-t-4 border-black mt-12">
        <p className="font-bangers text-festival text-center text-xl">
          © 2026 L&apos;Affaire Tonnerresol
        </p>
      </footer>
    </div>
  );
}
