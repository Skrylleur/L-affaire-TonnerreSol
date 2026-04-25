import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Prix CurioSophie — L'Affaire Tonnerresol",
  description:
    "Le Prix CurioSophie récompense une bande dessinée audacieuse d'artistes émergents. 24 ouvrages en lice pour l'édition 2026.",
};

const NOMBRE_COUVERTURES = 24;

function SectionBand({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-navy">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3">
        <svg width="12" height="16" viewBox="0 0 12 16" className="fill-festival flex-shrink-0" aria-hidden="true">
          <polygon points="9,0 0,10 6,10 5,16 12,7 7,7" />
        </svg>
        {children}
      </div>
    </div>
  );
}

export default function PrixCurioSophie() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-navy">
          <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-body text-festival/60 text-sm hover:text-festival mb-8 transition-colors"
            >
              ← Retour au festival
            </Link>
            <div className="inline-flex items-center gap-2 bg-festival/15 border border-festival/30 rounded-full px-4 py-1.5 mb-5">
              <span className="font-bangers text-festival text-base tracking-widest uppercase">
                Prix littéraire · Édition 2026
              </span>
            </div>
            <h1 className="font-bangers text-festival text-6xl md:text-8xl leading-none mb-4">
              Prix CurioSophie
            </h1>
            <p className="font-body text-festival/70 text-lg max-w-xl">
              24 ouvrages en lice présentés par 12 éditeurs indépendants — dont la majorité est l&apos;œuvre d&apos;autrices.
            </p>
          </div>
        </section>

        {/* Présentation */}
        <section className="bg-cream border-b border-gray-200">
          <SectionBand>
            <h2 className="font-bangers text-xl md:text-2xl text-festival uppercase tracking-widest">
              Présentation du prix
            </h2>
          </SectionBand>

          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 md:p-10 space-y-5 font-body text-base text-gray-700 leading-relaxed max-w-3xl">
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
              <blockquote className="border-l-4 border-navy pl-6 italic text-gray-500">
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
        </section>

        {/* Les 24 ouvrages */}
        <section className="bg-white border-b border-gray-200">
          <SectionBand>
            <h2 className="font-bangers text-xl md:text-2xl text-festival uppercase tracking-widest">
              Les 24 ouvrages en lice
            </h2>
          </SectionBand>

          <div className="max-w-5xl mx-auto px-6 py-12">
            <p className="font-body text-gray-400 text-sm text-center mb-8">
              Présentés par 12 éditeurs indépendants · Visuels à venir
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {Array.from({ length: NOMBRE_COUVERTURES }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[2/3] bg-cream rounded-xl shadow-card border border-gray-100 flex items-center justify-center overflow-hidden"
                >
                  <div className="text-center p-2">
                    <span className="text-2xl opacity-20">📚</span>
                    <p className="font-bangers text-xs text-gray-300 mt-1">#{i + 1}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-navy text-festival font-bangers text-lg px-8 py-4 rounded-xl shadow-card hover:shadow-card-lg hover:bg-navy-dark transition-all duration-200"
              >
                ← Retour au festival
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
