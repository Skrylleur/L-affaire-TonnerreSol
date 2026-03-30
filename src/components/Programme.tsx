const items = [
  {
    emoji: "🎤",
    title: "Concert dessiné live",
    desc: "Un moment unique où la musique et le dessin se rencontrent sur scène pour émerveiller petits et grands.",
    bg: "bg-festival",
    text: "text-black",
    descColor: "text-black/70",
  },
  {
    emoji: "🖊️",
    title: "Dédicaces d'auteurs",
    desc: "Venez rencontrer des auteurs venus de 5 pays, découvrir leurs univers et repartir avec un souvenir unique.",
    bg: "bg-white",
    text: "text-black",
    descColor: "text-gray-600",
  },
  {
    emoji: "🎨",
    title: "Ateliers & expos",
    desc: "Ateliers créatifs, expositions de planches originales, animations enfants, fanzones et auto-édités !",
    bg: "bg-black",
    text: "text-festival",
    descColor: "text-gray-300",
  },
];

export default function Programme() {
  return (
    <section id="programmation" className="py-16 px-6 bg-white border-b-4 border-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bangers text-4xl md:text-5xl text-black mb-3 text-center">
          Un week-end de rencontres,<br className="hidden sm:block" /> de partage et de découvertes !
        </h2>
        <p className="font-body text-gray-500 text-center text-lg mb-12">
          Plein programme — zéro ennui.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} border-4 border-black rounded-2xl p-8 shadow-comic-lg hover:-translate-y-1 hover:shadow-comic-xl transition-all duration-200`}
            >
              <div className="text-5xl mb-6">{item.emoji}</div>
              <h3 className={`font-bangers text-2xl mb-3 ${item.text}`}>
                {item.title}
              </h3>
              <p className={`font-body text-base leading-relaxed ${item.descColor}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info strip */}
        <div className="mt-8 bg-cream border-4 border-black rounded-xl p-5 text-center shadow-comic">
          <p className="font-body text-gray-700 text-base">
            Animations enfants · Fanzones · Auto-édités · Grande buvette · Et bien plus…
          </p>
        </div>
      </div>
    </section>
  );
}
