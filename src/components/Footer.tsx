import Image from "next/image";

const partners = [
  { src: "/Partenaire1.jpg", alt: "Partenaire 1" },
  { src: "/Partenaire2.png", alt: "Partenaire 2" },
  { src: "/Partenaire3.png", alt: "Partenaire 3" },
  { src: "/Partenaire4.png", alt: "Partenaire 4" },
];

export default function Footer() {
  return (
    <footer className="bg-festival pt-12 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Partners */}
        <div className="mb-10">
          <p className="font-bangers text-navy text-sm tracking-widest uppercase mb-6 text-center">
            Nos partenaires
          </p>
          <div className="flex flex-wrap justify-center items-center gap-5">
            {partners.map((p, i) => (
              <div key={i} className="bg-white rounded-xl px-4 py-3">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-bangers text-navy text-2xl">L&apos;Affaire Tonnerresol</p>
            <p className="font-body text-navy/60 text-xs mt-1">
              Festival International de Bandes Dessinées · Tonnerre
            </p>
          </div>
          <div className="text-right">
            <p className="font-body text-navy/40 text-xs">© 2026 L&apos;Affaire Tonnerresol</p>
            <p className="font-body text-navy/30 text-xs mt-0.5">
              Site réalisé par Antonin Gourinchas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
