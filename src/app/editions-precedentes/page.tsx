import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Éditions précédentes — L'Affaire Tonnerresol",
  description:
    "Retrouvez les archives des éditions 2024 et 2025 de L'Affaire Tonnerresol, Festival International de Bandes Dessinées à Tonnerre.",
};

const editions = [
  {
    numero: "2e édition",
    annee: "2025",
    href: "https://laffairetonnerresol.fr/accueil-2025/",
    description:
      "La deuxième édition du festival, avec une programmation élargie, de nouveaux auteurs internationaux et le lancement du Prix CurioSophie.",
  },
  {
    numero: "1re édition",
    annee: "2024",
    href: "https://laffairetonnerresol.fr/accueil-2024/",
    description:
      "La naissance de L'Affaire Tonnerresol — le premier festival international de bandes dessinées à Tonnerre, ancré dans l'Yonne.",
  },
];

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

export default function EditionsPrecedentes() {
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
              ← Retour à l&apos;édition 2026
            </Link>
            <div className="inline-flex items-center gap-2 bg-festival/15 border border-festival/30 rounded-full px-4 py-1.5 mb-5">
              <span className="font-bangers text-festival text-base tracking-widest uppercase">
                Archives du festival
              </span>
            </div>
            <h1 className="font-bangers text-festival text-6xl md:text-8xl leading-none mb-4">
              Éditions précédentes
            </h1>
            <p className="font-body text-festival/70 text-lg max-w-xl">
              Deux ans d&apos;aventure bande dessinée à Tonnerre — retrouvez toutes les archives sur le site d&apos;origine.
            </p>
          </div>
        </section>

        {/* Cartes éditions */}
        <section className="bg-cream border-b border-gray-200">
          <SectionBand>
            <h2 className="font-bangers text-xl md:text-2xl text-festival uppercase tracking-widest">
              Archives 2024 &amp; 2025
            </h2>
          </SectionBand>

          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {editions.map((ed) => (
                <div
                  key={ed.annee}
                  className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden"
                >
                  <div className="bg-festival px-6 py-4">
                    <p className="font-bangers text-navy text-sm tracking-widest uppercase">
                      {ed.numero}
                    </p>
                    <p className="font-bangers text-navy text-4xl leading-none">{ed.annee}</p>
                  </div>
                  <div className="px-6 py-6">
                    <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
                      {ed.description}
                    </p>
                    <a
                      href={ed.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-sm text-festival/70 hover:text-festival transition-colors"
                    >
                      Voir l&apos;édition {ed.annee}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bloc principal vers le site WordPress */}
            <div className="bg-navy rounded-2xl shadow-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-bangers text-festival text-2xl mb-1">
                  Site des éditions précédentes
                </p>
                <p className="font-body text-festival/60 text-sm">
                  laffairetonnerresol.fr — programme, photos, auteurs des éditions 2024 et 2025
                </p>
              </div>
              <a
                href="https://laffairetonnerresol.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-festival text-navy font-bangers text-lg px-7 py-3.5 rounded-xl hover:bg-festival-dark transition-colors duration-200 whitespace-nowrap"
              >
                Visiter le site
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Retour */}
        <section className="bg-white py-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-navy text-festival font-bangers text-lg px-8 py-4 rounded-xl shadow-card hover:shadow-card-lg hover:bg-navy-dark transition-all duration-200"
          >
            ← Découvrir l&apos;édition 2026
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
