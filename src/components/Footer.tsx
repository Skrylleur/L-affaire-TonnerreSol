import Image from "next/image";

const partners = [
  { src: "/partenaire1.jpg", alt: "Partenaire 1" },
  { src: "/partenaire2.png", alt: "Partenaire 2" },
  { src: "/partenaire3.png", alt: "Partenaire 3" },
  { src: "/partenaire4.png", alt: "Partenaire 4" },
];

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-6 border-t-4 border-black">
      <div className="max-w-4xl mx-auto">
        {/* Partners section */}
        <div className="mb-10">
          <p className="font-bangers text-festival text-center text-xl mb-6 tracking-wide">
            Nos partenaires
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {partners.map((p, i) => (
              <div
                key={i}
                className="bg-white border-2 border-festival rounded-xl p-3 shadow-comic"
              >
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
        <div className="border-t border-gray-700 pt-8 text-center space-y-2">
          <p className="font-bangers text-festival text-2xl">
            © 2025 L&apos;Affaire Tonnerresol
          </p>
          <p className="font-body text-gray-400 text-sm">
            Site réalisé par Antonin Gourinchas
          </p>
        </div>
      </div>
    </footer>
  );
}
