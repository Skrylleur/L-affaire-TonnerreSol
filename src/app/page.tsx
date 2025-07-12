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
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 bg-gradient-to-br from-[#dbc414] via-yellow-400 to-orange-400 border-b-8 border-black overflow-hidden">
        {/* Animated background with flowing gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#dbc414] via-yellow-400 to-orange-400 animate-gradient-flow"></div>
        
        {/* Enhanced halftone background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="halftone-hero" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="6" cy="6" r="1" fill="black"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#halftone-hero)"/>
          </svg>
        </div>

        {/* Animated decorative stars */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Star 1 */}
          <svg className="absolute top-10 left-8 w-16 h-16 sm:w-20 sm:h-20 animate-float-slow" viewBox="0 0 100 100">
            <path d="M50 5 L65 25 L85 35 L65 45 L50 75 L35 45 L15 35 L35 25 Z" fill="white" stroke="black" strokeWidth="3"/>
            <path d="M50 15 L60 30 L70 35 L60 40 L50 55 L40 40 L30 35 L40 30 Z" fill="black"/>
            <circle cx="50" cy="35" r="2" fill="white"/>
          </svg>
          
          {/* Star 2 */}
          <svg className="absolute top-20 right-12 w-12 h-12 sm:w-16 sm:h-16 animate-float-slow" style={{animationDelay: '1s'}} viewBox="0 0 100 100">
            <path d="M50 10 L70 30 L90 40 L70 50 L50 80 L30 50 L10 40 L30 30 Z" fill="white" stroke="black" strokeWidth="3"/>
            <path d="M50 20 L65 35 L75 40 L65 45 L50 60 L35 45 L25 40 L35 35 Z" fill="black"/>
          </svg>
          
          {/* Star 3 */}
          <svg className="absolute bottom-20 left-1/4 w-14 h-14 sm:w-18 sm:h-18 animate-float-slow" style={{animationDelay: '2s'}} viewBox="0 0 100 100">
            <path d="M50 8 L68 28 L88 38 L68 48 L50 78 L32 48 L12 38 L32 28 Z" fill="white" stroke="black" strokeWidth="3"/>
            <circle cx="50" cy="45" r="2" fill="black"/>
          </svg>

          {/* Lightning bolt */}
          <svg className="absolute top-1/3 right-1/4 w-12 h-12 sm:w-16 sm:h-16 animate-pulse" viewBox="0 0 100 100">
            <path d="M20 10 L35 25 L25 35 L40 50 L30 60 L50 80 L70 60 L60 50 L75 35 L65 25 L80 10 Z" fill="white" stroke="black" strokeWidth="2"/>
          </svg>

          {/* Onomatopoeia effects */}
          <div className="absolute top-1/4 left-1/6 transform -rotate-12 animate-bounce-slow">
            <div className="bg-white border-3 border-black rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-comic-lg">
              <span className="font-bangers text-lg sm:text-2xl font-bold text-black">BOOM!</span>
            </div>
          </div>

          <div className="absolute bottom-1/3 right-1/6 transform rotate-12 animate-bounce-slow" style={{animationDelay: '0.5s'}}>
            <div className="bg-white border-3 border-black rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-comic-lg">
              <span className="font-bangers text-lg sm:text-2xl font-bold text-black">POW!</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Main title with optimized comic panel */}
          <div className="relative mb-12 sm:mb-16 animate-fade-in-up">
            <div className="relative inline-block">
              {/* Responsive explosion background */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 280" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <filter id="shadow-hero" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="4" dy="4" stdDeviation="2" floodColor="black"/>
                  </filter>
                </defs>
                <path d="M50 40 L80 20 L120 30 L150 15 L180 30 L220 20 L250 40 L270 70 L250 110 L220 130 L180 110 L150 130 L120 110 L80 130 L50 110 L30 70 Z" 
                      fill="white" stroke="black" strokeWidth="6" filter="url(#shadow-hero)"/>
                <path d="M50 110 L70 140 L50 170 L30 140 Z" fill="white" stroke="black" strokeWidth="3"/>
              </svg>
              
              <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                {/* Optimized title structure for mobile */}
                <div className="space-y-2 sm:space-y-4">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bangers uppercase text-black drop-shadow-text-comic leading-none animate-bounce-in">
                    L&apos;AVENTURE
                  </h1>
                  
                  {/* Animated "BD" bubble */}
                  <div className="relative inline-block animate-zoom-in" style={{animationDelay: '0.3s'}}>
                    <div className="bg-black border-4 sm:border-6 border-white rounded-full px-6 py-3 sm:px-8 sm:py-4 shadow-comic-xl transform rotate-1 sm:rotate-2">
                      <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bangers uppercase text-white drop-shadow-text-comic leading-none font-black animate-bd-pulse">
                        BD
                      </h2>
                    </div>
                    {/* Comic burst accent */}
                    <svg className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 animate-pulse" viewBox="0 0 100 100">
                      <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="#dbc414" stroke="black" strokeWidth="2"/>
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bangers uppercase text-black drop-shadow-text-comic leading-none animate-bounce-in" style={{animationDelay: '0.6s'}}>
                    COMMENCE ICI !
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Optimized subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-body font-bold text-black mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{animationDelay: '0.9s'}}>
            Un festival explosif pour les amoureux de la bande dessinée !
          </p>

          {/* Enhanced CTA buttons with cartoon effects */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 animate-fade-in-up px-4" style={{animationDelay: '1.2s'}}>
            <a 
              href="#programmation" 
              className="group relative px-8 py-4 sm:px-12 sm:py-6 bg-black text-white border-4 sm:border-6 border-white rounded-full shadow-comic-xl hover:shadow-comic-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 font-bangers text-lg sm:text-xl lg:text-2xl font-bold focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
              style={{
                textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
                boxShadow: '6px 6px 0px rgba(0,0,0,1), inset -2px -2px 0px rgba(255,255,255,0.3)'
              }}
            >
              <span className="relative z-10">Voir la programmation</span>
              <div className="absolute inset-0 bg-[#dbc414] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            
            <a 
              href="#" 
              className="group relative px-8 py-4 sm:px-12 sm:py-6 bg-white text-black border-4 sm:border-6 border-black rounded-full shadow-comic-xl hover:shadow-comic-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 font-bangers text-lg sm:text-xl lg:text-2xl font-bold focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-50"
              style={{
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                boxShadow: '6px 6px 0px rgba(0,0,0,1), inset -2px -2px 0px rgba(0,0,0,0.2)'
              }}
            >
              <span className="relative z-10">Réserver mes billets</span>
              <div className="absolute inset-0 bg-[#dbc414] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>

          {/* Responsive stats grid */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto animate-fade-in-up px-4" style={{animationDelay: '1.5s'}}>
            {[
              { number: "1200+", label: "Participants", icon: "👥" },
              { number: "50+", label: "Artistes", icon: "🎨" },
              { number: "3", label: "Jours", icon: "📅" }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="bg-white border-4 sm:border-6 border-black rounded-2xl p-4 sm:p-6 shadow-comic-xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                  <div className="font-bangers text-3xl sm:text-4xl md:text-5xl text-[#dbc414] mb-2">{stat.number}</div>
                  <div className="font-body font-bold text-black text-sm sm:text-base">{stat.label}</div>
                </div>
                {/* Comic burst accent */}
                <svg className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
                  <path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z" fill="#dbc414" stroke="black" strokeWidth="2"/>
                </svg>
              </div>
            ))}
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
      <section id="programmation" className="py-24 px-6 bg-gradient-to-br from-yellow-50 to-orange-50 relative">
        {/* Zigzag divider */}
        <div className="absolute top-0 left-0 right-0 h-8">
          <svg className="w-full h-full" viewBox="0 0 1000 100">
            <path d="M0 50 L50 0 L100 50 L150 0 L200 50 L250 0 L300 50 L350 0 L400 50 L450 0 L500 50 L550 0 L600 50 L650 0 L700 50 L750 0 L800 50 L850 0 L900 50 L950 0 L1000 50" 
                  stroke="#dbc414" strokeWidth="8" fill="none"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bangers text-center mb-16 text-black drop-shadow-text-comic">
            Aperçu de la programmation
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🎤", title: "Concert dessiné", desc: "Une performance live unique entre musique et illustrations" },
              { icon: "🖊️", title: "Dédicaces d'auteurs", desc: "Venez rencontrer vos auteurs de BD préférés" },
              { icon: "🎨", title: "Ateliers créatifs", desc: "Pour petits et grands : initiation au dessin, fanzine et plus encore" }
            ].map((event, index) => (
              <div key={index} className="group relative">
                <div className="bg-white border-6 border-black p-8 rounded-2xl shadow-comic-lg transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">{event.icon}</div>
                  <h4 className="text-3xl font-bangers mb-4 text-black">{event.title}</h4>
                  <p className="text-lg font-body text-gray-700">{event.desc}</p>
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
    </div>
  );
}