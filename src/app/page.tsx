import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-[#fffbea] to-orange-50 text-black overflow-x-hidden">
      {/* Comic-style background pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="comic-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="#000"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#comic-dots)"/>
        </svg>
      </div>

      {/* Header - Comic Style */}
      <header className="relative bg-[#dbc414] border-b-4 border-black py-6 px-6 shadow-comic-lg">
        {/* Comic explosion behind header */}
        
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-6">
            {/* Logo with comic burst */}
            <div className="relative group">
              <div className="w-20 h-20 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-comic-lg transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img 
                  src="/Logo.jpg" 
                  alt="L'Affaire Tonnerresol Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Comic burst around logo supprimé */}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bangers tracking-wider text-black drop-shadow-text-comic">
              L&apos;AFFAIRE TONNERRESOL
            </h1>
          </div>
          
          {/* Comic-style navigation */}
          <nav className="hidden md:flex space-x-4">
            {[
              { href: "#programmation", text: "Programmation" },
              { href: "#infos", text: "Infos" },
              { href: "#galerie", text: "Galerie" },
              { href: "#contact", text: "Contact" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative group px-6 py-3 bg-white border-3 border-black rounded-full shadow-comic hover:shadow-comic-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-bangers text-lg"
              >
                <span className="relative z-10">{link.text}</span>
                <div className="absolute inset-0 bg-[#dbc414] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section - Optimized Comic Style */}
      <section className="relative min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 bg-gradient-to-br from-[#dbc414] via-yellow-400 to-orange-400 border-b-8 border-black overflow-hidden text-center">
        <div className="absolute top-8 left-8 bg-black text-white font-bangers px-6 py-2 rounded-full border-4 border-white text-xl shadow-comic-xl z-20 animate-bounce-in">2e édition</div>
        <div className="max-w-4xl mx-auto z-10">
            <div className="relative flex justify-center items-center mb-6">
              <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                viewBox="0 0 1200 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ maxWidth: '100%' }}
                preserveAspectRatio="xMidYMid meet"
              >
                <ellipse
                  cx="600"
                  cy="150"
                  rx="570"
                  ry="130"
                  fill="white"
                  stroke="black"
                  strokeWidth="10"
                />
              </svg>
              <h1 className="relative z-10 w-full px-8 py-6 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bangers uppercase text-black drop-shadow-text-comic leading-tight text-center">
                L&apos;aventure BD<br className="hidden sm:block"/> recommence ici !
              </h1>
            </div>
          <div className="flex justify-center mb-2">
            <div className="mt-2 inline-block bg-black text-[#dbc414] px-5 py-2 text-lg md:text-xl font-bold rounded-xl shadow-lg">
              17 ET 18 MAI 2025
            </div>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-body font-bold text-black mb-8 animate-fade-in-up">On ne croyait déjà pas arriver à réaliser la première, et nous revoici pour une autre !</p>
        </div>
        {/* Chiffres clés */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black rounded-xl p-4 font-bangers text-lg sm:text-xl shadow-comic-xl">22 auteurs<br/><span className="text-xs font-body">5 nationalités</span></div>
          <div className="bg-white border-4 border-black rounded-xl p-4 font-bangers text-lg sm:text-xl shadow-comic-xl">7 éditeurs<br/><span className="text-xs font-body">indépendants</span></div>
          <div className="bg-white border-4 border-black rounded-xl p-4 font-bangers text-lg sm:text-xl shadow-comic-xl">6 conférences</div>
          <div className="bg-white border-4 border-black rounded-xl p-4 font-bangers text-lg sm:text-xl shadow-comic-xl">3 expos</div>
          <div className="bg-white border-4 border-black rounded-xl p-4 font-bangers text-lg sm:text-xl shadow-comic-xl">1 concert live</div>
          <div className="bg-white border-4 border-black rounded-xl p-4 font-bangers text-lg sm:text-xl shadow-comic-xl">1 prix littéraire</div>
        </div>
        <div className="mt-6 flex flex-col items-center">
          <span className="bg-[#dbc414] border-4 border-black rounded-full px-6 py-2 font-bangers text-xl shadow-comic-xl">Entrée gratuite, même pour les conférences et le concert</span>
          <span className="mt-2 text-black font-body text-base">Animations enfants, auto-édités, fanzones, grande buvette…</span>
        </div>
      </section>

      {/* Section équipe */}
      <section className="py-16 px-4 sm:px-8 bg-white border-b-8 border-black">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bangers text-black mb-6 drop-shadow-text-comic">L&apos;équipe du festival</h2>
          <img src="/Equipe.jpg" alt="L'équipe du festival" className="max-w-xs sm:max-w-sm md:max-w-md w-full border-4 border-black rounded-2xl shadow-comic-xl bg-[#fffbea] mb-6" />
          <p className="font-body text-lg text-black text-center">Une équipe de passionné·es, bénévoles et ami·es, réunie pour faire vivre la bande dessinée et la fête à Tonnerresol !</p>
        </div>
      </section>

      {/* Édito - Mot de l'équipe */}
      <section className="py-16 px-4 sm:px-8 bg-white border-b-8 border-black">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bangers text-black mb-6 drop-shadow-text-comic">Pourquoi on continue ?</h2>
            <div className="bg-[#fffbea] border-4 border-black rounded-2xl shadow-comic-xl p-6 sm:p-8 space-y-4 text-lg sm:text-xl font-body text-black leading-relaxed">
              <p>Quand on regarde derrière nous et on voit toute la route parcourue, on s’en étonne nous-mêmes. On vous avoue que, ingénus enthousiastes que nous sommes, nous nous attendions à une deuxième édition plus facile à monter que la toute première, forts du succès remporté par le festival en 2024.</p>
              <p>C’était sans compter sur l’ironie du sort… Cette année fut assez dure pour tous, dans un contexte international anxiogène et tendu ; à niveau plus pratique, pour les associations et les événements, ce fut le parcours du combattant entre des coupes budgétaires à tout va, à partir de la part collective du PassCulture, ainsi qu’en général une mise en second plan de la culture.</p>
              <p>Il y a eu quelques moments de découragement. Et puis, on a fait ce qu’il faut toujours faire dans ces cas-là: parier sur la force du collectif, sur les valeurs du partage, de la réflexion, de la recherche du sens, sur le pouvoir des livres.</p>
              <p>On a voulu contribuer malgré tout, à notre micro-micro-échelle, à la beauté du monde, apportant le temps d’un week-end un petit peu de joie dans notre ville et dans les esprits des festivaliers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Comic Panel Style with angled divider */}
      <section className="py-24 px-6 bg-white relative">
        {/* Angled divider */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#dbc414] via-yellow-400 to-[#dbc414] transform skew-y-2"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Comic panel frame */}
          <div className="relative bg-[#fffbea] border-8 border-black rounded-3xl p-12 shadow-comic-xl">
            {/* Comic burst corners */}
            <svg className="absolute -top-4 -left-4 w-12 h-12" viewBox="0 0 100 100">
              <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="#dbc414" stroke="black" strokeWidth="3"/>
            </svg>
            <svg className="absolute -top-4 -right-4 w-12 h-12" viewBox="0 0 100 100">
              <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="#dbc414" stroke="black" strokeWidth="3"/>
            </svg>
            <svg className="absolute -bottom-4 -left-4 w-12 h-12" viewBox="0 0 100 100">
              <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="#dbc414" stroke="black" strokeWidth="3"/>
            </svg>
            <svg className="absolute -bottom-4 -right-4 w-12 h-12" viewBox="0 0 100 100">
              <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="#dbc414" stroke="black" strokeWidth="3"/>
            </svg>
            
            <div className="text-center relative z-10">
              <h3 className="text-5xl md:text-6xl font-bangers mb-8 text-black drop-shadow-text-comic">
                Un univers graphique haut en couleur
              </h3>
              
              <div className="flex justify-center mb-8 space-x-8">
                {/* Comic icons with SVG */}
                <div className="w-16 h-16 bg-[#dbc414] border-4 border-black rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 100 100">
                    <path d="M20 80 L80 80 L80 20 L20 20 Z" fill="black"/>
                    <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="white"/>
                    <circle cx="40" cy="40" r="3" fill="black"/>
                    <circle cx="60" cy="40" r="3" fill="black"/>
                    <path d="M35 55 Q50 65 65 55" stroke="black" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="w-16 h-16 bg-[#dbc414] border-4 border-black rounded-full flex items-center justify-center transform hover:-rotate-12 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 100 100">
                    <circle cx="50" cy="35" r="8" fill="black"/>
                    <path d="M30 60 Q50 80 70 60" fill="black"/>
                    <circle cx="40" cy="45" r="3" fill="white"/>
                    <circle cx="60" cy="45" r="3" fill="white"/>
                  </svg>
                </div>
                <div className="w-16 h-16 bg-[#dbc414] border-4 border-black rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 100 100">
                    <path d="M20 80 L80 80 L80 20 L20 20 Z" fill="black"/>
                    <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="white"/>
                    <path d="M40 40 L60 40 L60 60 L40 60 Z" fill="black"/>
                    <circle cx="45" cy="45" r="2" fill="white"/>
                    <circle cx="55" cy="45" r="2" fill="white"/>
                    <circle cx="45" cy="55" r="2" fill="white"/>
                    <circle cx="55" cy="55" r="2" fill="white"/>
                  </svg>
                </div>
              </div>
              
              <p className="text-xl font-body leading-relaxed max-w-4xl mx-auto text-black">
                Chaque année, le festival L&apos;Affaire Tonnerresol transforme la ville en planche vivante : 
                ateliers, expositions, concerts dessinés, rencontres… Une expérience BD immersive à vivre 
                en famille ou entre passionnés !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmation Section - Comic Strip Style */}
      <section id="programmation" className="py-24 px-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-b-8 border-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bangers text-center mb-16 text-black drop-shadow-text-comic">Un week-end de rencontres, de partage et de découvertes !</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="bg-white border-6 border-black p-8 rounded-2xl shadow-comic-lg transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">🎤</div>
                <h4 className="text-3xl font-bangers mb-4 text-black">Concert dessiné live</h4>
                <p className="text-lg font-body text-gray-700">Un moment unique où la musique et le dessin se rencontrent sur scène pour émerveiller petits et grands.</p>
              </div>
            </div>
            <div className="group relative">
              <div className="bg-white border-6 border-black p-8 rounded-2xl shadow-comic-lg transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">🖊️</div>
                <h4 className="text-3xl font-bangers mb-4 text-black">Dédicaces d&apos;auteurs</h4>
                <p className="text-lg font-body text-gray-700">Venez rencontrer des auteurs exceptionnels venus de 5 pays, découvrir leurs univers et repartir avec un souvenir unique.</p>
              </div>
            </div>
            <div className="group relative">
              <div className="bg-white border-6 border-black p-8 rounded-2xl shadow-comic-lg transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">🎨</div>
                <h4 className="text-3xl font-bangers mb-4 text-black">Ateliers & expos</h4>
                <p className="text-lg font-body text-gray-700">Ateliers créatifs, expositions de planches originales, animations pour enfants, fanzones, auto-édités et plus encore !</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infos pratiques - Comic Grid with angled sections */}
      <section id="infos" className="py-24 px-6 bg-white relative">
        {/* Angled section divider */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-[#dbc414] via-yellow-400 to-[#dbc414] transform -skew-y-1"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h3 className="text-5xl md:text-6xl font-bangers text-center mb-16 text-black drop-shadow-text-comic">
            Infos pratiques
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🚌", title: "Transport", desc: "Accès facile en transports en commun" },
              { icon: "🚗", title: "Parking", desc: "Parking gratuit à proximité" },
              { icon: "🍽️", title: "Restauration", desc: "Food trucks et stands gourmands" },
              { icon: "🎟️", title: "Billetterie", desc: "Réservation en ligne ou sur place" }
            ].map((info, index) => (
              <div key={index} className="group relative">
                <div className="bg-[#fffbea] border-6 border-black p-8 rounded-2xl shadow-comic-lg text-center transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{info.icon}</div>
                  <h4 className="text-2xl font-bangers mb-4 text-black">{info.title}</h4>
                  <p className="text-lg font-body text-gray-700">{info.desc}</p>
                </div>
                {/* Comic burst accent */}
                <svg className="absolute -top-3 -right-3 w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
                  <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="#dbc414" stroke="black" strokeWidth="2"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie - Comic Style with dynamic layout */}
      <section id="galerie" className="py-24 px-6 bg-gradient-to-br from-yellow-50 to-orange-50 relative">
        {/* Comic panel divider */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-black"></div>
        
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bangers text-center mb-16 text-black drop-shadow-text-comic">
            Galerie photos
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Édition précédente", desc: "Photo 1" },
              { title: "Ateliers créatifs", desc: "Photo 2" },
              { title: "Concert dessiné", desc: "Photo 3" }
            ].map((photo, index) => (
              <div key={index} className="group relative">
                <div className="bg-white border-6 border-black p-6 rounded-2xl shadow-comic-lg transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                  <div className="w-full h-48 bg-[#dbc414] rounded-xl flex items-center justify-center mb-6 border-4 border-black">
                    <span className="text-black font-bangers text-2xl">{photo.desc}</span>
                  </div>
                  <p className="text-lg font-body text-center font-bold">{photo.title}</p>
                </div>
                {/* Comic burst accent */}
                <svg className="absolute -top-3 -right-3 w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
                  <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="#dbc414" stroke="black" strokeWidth="2"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Comic Style */}
      <section id="contact" className="py-24 px-6 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bangers text-center mb-16 text-black drop-shadow-text-comic">
            Contact
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="bg-[#fffbea] border-6 border-black p-8 rounded-2xl shadow-comic-lg transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                <h4 className="text-3xl font-bangers mb-6 text-black">📧 Email</h4>
                <p className="text-xl font-body">contact@laffairetonnerresol.fr</p>
              </div>
              {/* Comic burst accent */}
              <svg className="absolute -top-3 -right-3 w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
                <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="#dbc414" stroke="black" strokeWidth="2"/>
              </svg>
            </div>
            
            <div className="group relative">
              <div className="bg-[#fffbea] border-6 border-black p-8 rounded-2xl shadow-comic-lg transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                <h4 className="text-3xl font-bangers mb-6 text-black">📱 Réseaux sociaux</h4>
                <div className="flex justify-center space-x-6">
                  <span className="text-3xl transform hover:scale-110 transition-transform">📘</span>
                  <span className="text-3xl transform hover:scale-110 transition-transform">📷</span>
                  <span className="text-3xl transform hover:scale-110 transition-transform">🐦</span>
                </div>
              </div>
              {/* Comic burst accent */}
              <svg className="absolute -top-3 -right-3 w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
                <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="#dbc414" stroke="black" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Comic Style */}
      <footer className="bg-[#dbc414] py-16 border-t-8 border-black relative">
        {/* Comic burst accents */}
        <svg className="absolute top-4 left-10 w-12 h-12" viewBox="0 0 100 100">
          <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="white" stroke="black" strokeWidth="3"/>
        </svg>
        <svg className="absolute top-4 right-10 w-12 h-12" viewBox="0 0 100 100">
          <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="white" stroke="black" strokeWidth="3"/>
        </svg>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-2xl font-bangers text-black mb-4">© 2025 L&apos;Affaire Tonnerresol</p>
          <p className="text-lg font-body text-black">Site réalisé par Antonin Gourinchas</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
}