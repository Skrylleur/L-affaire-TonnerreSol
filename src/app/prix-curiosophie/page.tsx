import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Prix CurioSophie — L'Affaire Tonnerresol",
  description:
    "Le Prix CurioSophie récompense une bande dessinée audacieuse d'artistes émergents. 24 ouvrages en lice pour l'édition 2026.",
};

const ouvrages = [
  "Ariane rêve.jpg",
  "BARAKA GRAFIKA.jpg",
  "Des filles normales.jpg",
  "Démontagner.jpg",
  "Déraciné.jpg",
  "Elsa & the Haters.jpg",
  "Ici au quartier.jpg",
  "La Maison des hystériques.jpg",
  "La Timidité des arbres.jpg",
  "La Trace.jpg",
  "La dent de liguanodon.jpg",
  "Le Procès des affamés.jpg",
  "Les Apprenties.jpg",
  "Lettres à Blue-Bird.jpg",
  "Love Machine.jpg",
  "Nous sommes la voix de celles qui nen ont plus.jpg",
  "Retour à Carmélites.jpg",
  "Rock'nroll Suicide.jpg",
  "Rouge Signal.jpg",
  "The Mops.jpg",
  "Toc Toc.jpg",
  "Tous Derriere et eux devant.jpg",
  "Trop Tard.jpg",
  "Week-end Texas Ranger .jpg",
];

function titre(filename: string) {
  return filename.replace(/\.jpg$/i, "");
}

function srcPath(filename: string) {
  return `/curiosophie/${encodeURIComponent(filename).replace(/'/g, "%27")}`;
}

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
              Présentés par 12 éditeurs indépendants
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {ouvrages.map((file) => (
                <div
                  key={file}
                  className="group relative aspect-[2/3] bg-cream rounded-xl overflow-hidden shadow-card hover:shadow-card-lg transition-shadow duration-200"
                >
                  <Image
                    src={srcPath(file)}
                    alt={titre(file)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-festival/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-2">
                    <p className="font-bangers text-navy text-xs leading-tight">{titre(file)}</p>
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
