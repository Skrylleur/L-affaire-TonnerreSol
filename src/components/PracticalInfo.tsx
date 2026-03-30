const infos = [
  {
    icon: "🚌",
    title: "Transport",
    desc: "Accès facile en transports en commun depuis les villes voisines.",
  },
  {
    icon: "🚗",
    title: "Parking",
    desc: "Parking gratuit à proximité immédiate du site.",
  },
  {
    icon: "🍽️",
    title: "Restauration",
    desc: "Food trucks et stands gourmands tout le week-end.",
  },
  {
    icon: "🎟️",
    title: "Billetterie",
    desc: "Entrée libre et gratuite — réservation optionnelle en ligne.",
  },
];

export default function PracticalInfo() {
  return (
    <section id="infos" className="py-16 px-6 bg-festival border-b-4 border-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bangers text-4xl md:text-5xl text-black mb-12 text-center">
          Infos pratiques
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infos.map((info, i) => (
            <div
              key={i}
              className="bg-white border-4 border-black rounded-2xl p-6 text-center shadow-comic-lg hover:-translate-y-1 hover:shadow-comic-xl transition-all duration-200"
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="font-bangers text-xl text-black mb-2">{info.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{info.desc}</p>
            </div>
          ))}
        </div>

        {/* Location callout */}
        <div className="mt-8 bg-black border-4 border-black rounded-xl p-5 text-center shadow-comic-xl">
          <p className="font-bangers text-festival text-2xl">
            📍 Tonnerre (89700) — 17 &amp; 18 mai 2025
          </p>
        </div>
      </div>
    </section>
  );
}
