"use client";

import { useState } from "react";

const auteurs = [
  {
    nom: "Alex Baladi",
    nat: "Suisse",
    flag: "🇨🇭",
    bio: "Prix Töpffer pour Frankenstein encore et toujours, Auto-portrait, Décris-ravage T2. Prix BD alternative à Angoulême 2019. Très actif dans l'OuBaPo, collectif qui crée sous contrainte artistique volontaire.",
    tags: [],
  },
  {
    nom: "Benoît Barale",
    nat: "France",
    flag: "🇫🇷",
    bio: "Auteur de La bande dessinée, ou comment j'ai raté ma vie (PLG, 2018) — une auto-fiction décapante. Également des Identités remarquables (PLG, 2012). Bande dessinée ou muerte !",
    tags: [],
  },
  {
    nom: "Edmond Baudoin",
    nat: "France",
    flag: "🇫🇷",
    bio: "Auteur de plus de 80 ouvrages, 50 ans de carrière, 84 ans et toujours debout. Cette année sur scène avec Robin Mansanti et Solène Cairoli pour un concert de dessins live.",
    tags: ["🎺 Concert"],
  },
  {
    nom: "Mathieu Blanchin",
    nat: "France",
    flag: "🇫🇷",
    bio: "Auteur de Quand vous pensiez que j'étais mort, récit singulier de son cancer du cerveau et de ses 10 jours de coma. Deux nouveautés : Naufrage en Patagonie (Futuropolis) et À tue-tête (Le Lézard).",
    tags: [],
  },
  {
    nom: "Emile Bravo",
    nat: "Belgique",
    flag: "🇧🇪",
    bio: "Prix René Goscinny, multiple primé à Angoulême. Maître de la ligne claire, auteur de L'espoir malgré tout — Spirou dans la Seconde Guerre Mondiale. Exposition au Mémorial de la Shoah en 2023.",
    tags: [],
  },
  {
    nom: "Nicolas Desrues",
    nat: "France",
    flag: "🇫🇷",
    bio: "Fasciné par la fantasy et la féerie. Collectifs BD autour des contes de Normandie, histoire courte pour Métal Hurlant. Prépare un nouveau projet d'héroïc fantasy — à découvrir à l'édition 2027 !",
    tags: [],
  },
  {
    nom: "Federico Ferniani",
    nat: "Italie",
    flag: "🇮🇹",
    bio: "Illustrateur au réalisme époustouflant, maître du noir et blanc. A sorti Civilisations : Rome (Delcourt) avec l'historienne France Richemond. Partage l'accent florentin avec Alberto Pagliaro.",
    tags: [],
  },
  {
    nom: "Germano Giorgiani",
    nat: "Italie",
    flag: "🇮🇹",
    bio: "Dessinateur réaliste hors pair, noir et blanc affirmé et truffé de détails. Vient de sortir Sinisterra (Oxymore), un western sur scénario de Christophe Bec, rendu complexe par les secrets des personnages.",
    tags: [],
  },
  {
    nom: "Dominique Hérody",
    nat: "France",
    flag: "🇫🇷",
    bio: "Débuts dans les années 1970 avec Charlie Mensuel, Pilote, Tintin, Métal Hurlant. Commissaire de nombreuses expositions BD. Vient de sortir Régime d'averses et d'éclaircies chez Le Lézard.",
    tags: [],
  },
  {
    nom: "Madd",
    nat: "France",
    flag: "🇫🇷",
    bio: "Le dessinateur de Poltron Minet a des attaches dans la région. La dernière fois, table basse inadaptée à son 1m95 — on est mieux préparés ! On a hâte de retrouver ses magnifiques aquarelles.",
    tags: [],
  },
  {
    nom: "Mathilde Marlot",
    nat: "France",
    flag: "🇫🇷",
    bio: "Née en 1980 en Normandie, attirée par les mondes de l'Imaginaire. Illustratrice régulière de Casus Belli, collaboratrice de Black Book Éditions, Chaosium Inc. Son univers : Monstres & Merveilles.",
    tags: [],
  },
  {
    nom: "Alberto Pagliaro",
    nat: "Italie",
    flag: "🇮🇹",
    bio: "30 ans sur le marché BD, thèmes politiquement engagés : Hitler est mort (Glénat), La mano (Dargaud). Participe au numéro 16 de la nouvelle version de Métal Hurlant. Partage l'accent florentin avec Ferniani.",
    tags: [],
  },
  {
    nom: "Gabriele Parma",
    nat: "Italie",
    flag: "🇮🇹",
    bio: "Spécialisé en BD historiques (Champs d'honneur, L'histoire de France pour les nuls, Catherine Sforza). Vit dans un hameau en Ligurie, a dessiné l'affiche de l'édition 2024. Connu pour son interj. fétiche : « bélin ».",
    tags: [],
  },
  {
    nom: "Isa Python",
    nat: "France",
    flag: "🇫🇷",
    bio: "Son sujet : les femmes fortes. Du collectif sur Nina Simone aux Mémoires de Marie-Antoinette, en passant par Mal tournée (Glénat) et Jeu des dames — une intrigue au cœur de la Bourgogne médiévale (La Muse).",
    tags: [],
  },
  {
    nom: "Val Reiyel",
    nat: "France",
    flag: "🇫🇷",
    bio: "Autrice d'Irineï (premier roman jeunesse avec le patronage de la Commission nationale française pour l'UNESCO) et Victor le pigeon de Notre-Dame (Tredaniel). Milite pour l'équité envers tous les animaux !",
    tags: [],
  },
  {
    nom: "Rurik Sallé",
    nat: "France",
    flag: "🇫🇷",
    bio: "Acteur (Groland), musicien rock, compositeur. Rédacteur 15 ans dans des magazines de cinéma de genre. Auteur de Neige de sang, Seul l'ombre, et de la série Le cinéma français c'est de la merde.",
    tags: [],
  },
  {
    nom: "Nicolas Sauge",
    nat: "France",
    flag: "🇫🇷",
    bio: "Auteur de l'affiche de cette 3e édition ! Anime le CLEA à l'école des Près-Hauts, faisant découvrir aux enfants l'histoire de la pierre calcaire de Tonnerre via le personnage Calcaro.",
    tags: ["🎨 Affiche"],
  },
  {
    nom: "Vincent Vanoli",
    nat: "France",
    flag: "🇫🇷",
    bio: "Carrière à L'Association, sélection officielle Angoulême 2024 pour La boucle. À l'occasion de la réédition du Décaméron, The Hoochie Coochie expose ses superbes planches originales au festival.",
    tags: ["🖼️ Expo"],
  },
  {
    nom: "Joff Winterhart",
    nat: "Royaume-Uni",
    flag: "🇬🇧",
    bio: "De Bristol. L'Été des Bagnold (çà et là, 2013, adapté au cinéma 2019), Courtes Distances (sélection officielle Angoulême 2019). Vient de sortir Chère historienne. Zadie Smith : « un des auteurs les plus talentueux du Royaume-Uni ».",
    tags: [],
  },
  {
    nom: "Eléonore Zuber",
    nat: "France",
    flag: "🇫🇷",
    bio: "En 10 titres dans la série Lorsque (Cambourakis), elle peint avec humour décalé sa vie de jeune femme : amoureuse, déprimée, fait un régime... C'est un peu nous tous·toutes. Elle a aussi eu une Famille Zombie !",
    tags: [],
  },
];

export default function Auteurs() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="auteurs" className="bg-white border-b border-gray-100">
      {/* Section band */}
      <div className="bg-navy">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3">
          <svg width="12" height="16" viewBox="0 0 12 16" className="fill-festival flex-shrink-0" aria-hidden="true">
            <polygon points="9,0 0,10 6,10 5,16 12,7 7,7" />
          </svg>
          <h2 className="font-bangers text-xl md:text-2xl text-festival uppercase tracking-widest">
            Nos invités
          </h2>
          <span className="ml-2 font-body text-festival/50 text-sm">
            20 auteurs · 5 nationalités
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-3">
          {auteurs.map((a, i) => (
            <button
              key={i}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`text-left rounded-xl p-5 transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-navy/30 ${
                expanded === i
                  ? "bg-navy border-navy shadow-card-lg"
                  : "bg-white border-gray-200 hover:border-navy/30 hover:shadow-card"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xl flex-shrink-0">{a.flag}</span>
                  <div className="min-w-0">
                    <h3 className={`font-bangers text-xl leading-tight truncate ${
                      expanded === i ? "text-festival" : "text-navy"
                    }`}>
                      {a.nom}
                    </h3>
                    <p className={`font-body text-xs mt-0.5 ${
                      expanded === i ? "text-festival/50" : "text-gray-400"
                    }`}>
                      {a.nat}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 flex-shrink-0">
                  {a.tags.map((tag, j) => (
                    <span key={j} className="bg-festival text-navy font-bangers text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {expanded === i && (
                <p className="font-body text-sm leading-relaxed mt-4 text-festival/80">
                  {a.bio}
                </p>
              )}

              {expanded !== i && (
                <p className="font-body text-xs mt-2 text-gray-400">
                  ↓ En savoir plus
                </p>
              )}
            </button>
          ))}
        </div>

        <div className="mt-6 bg-cream rounded-xl p-5 border border-gray-200">
          <p className="font-body text-gray-600 text-sm text-center">
            <strong className="text-navy">Dédicaces gratuites</strong> · Priorité aux albums achetés sur place · 2 albums maximum par auteur d&apos;affilée
          </p>
        </div>
      </div>
    </section>
  );
}
