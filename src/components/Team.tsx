import Image from "next/image";

export default function Team() {
  return (
    <section className="py-16 px-6 bg-white border-b-4 border-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bangers text-4xl md:text-5xl text-black mb-12 text-center">
          L&apos;équipe du festival
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="border-4 border-black rounded-2xl overflow-hidden shadow-comic-xl bg-cream">
              <Image
                src="/Equipe.jpg"
                alt="L'équipe du festival L'Affaire Tonnerresol"
                width={420}
                height={315}
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-4">
            <p className="font-body text-xl text-black leading-relaxed">
              Une équipe de passionné·es, bénévoles et ami·es, réunie pour faire
              vivre la bande dessinée et la fête à Tonnerresol.
            </p>
            <p className="font-body text-lg text-gray-600 leading-relaxed">
              Chaque édition est le fruit de mois de travail collectif, de passion
              partagée et d&apos;un amour sincère pour la BD et la culture locale.
            </p>
            <div className="inline-block bg-festival border-4 border-black rounded-xl px-5 py-3 shadow-comic">
              <span className="font-bangers text-xl text-black">
                100% bénévoles — 100% passion
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
