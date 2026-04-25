export default function Gallery() {
  return (
    <section id="programme-pdf" className="bg-cream border-b border-gray-200">
      {/* Section band */}
      <div className="bg-navy">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3">
          <svg width="12" height="16" viewBox="0 0 12 16" className="fill-festival flex-shrink-0" aria-hidden="true">
            <polygon points="9,0 0,10 6,10 5,16 12,7 7,7" />
          </svg>
          <h2 className="font-bangers text-xl md:text-2xl text-festival uppercase tracking-widest">
            Programme complet
          </h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            {/* Icône PDF */}
            <div className="flex-shrink-0 w-24 h-32 bg-navy rounded-xl flex flex-col items-center justify-center shadow-card">
              <svg className="w-10 h-10 text-festival mb-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
                <path d="M8.5 13.5h1.5v1h-1.5v1.5H8v-4h2.5v1H8.5v.5zm3 2.5v-4H13c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-1.5zm1-3v2h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5H12.5zm3 3v-4h2v1h-1v.75h1v1h-1V16h1v1h-2z"/>
              </svg>
              <span className="font-bangers text-festival text-xs tracking-widest">PDF</span>
            </div>

            {/* Texte */}
            <div className="flex-1 text-center md:text-left">
              <p className="font-bangers text-festival text-3xl md:text-4xl mb-2">
                Programme 2026
              </p>
              <p className="font-body text-gray-500 text-base mb-1">
                L&apos;Affaire Tonnerresol · 16 &amp; 17 mai 2026
              </p>
              <p className="font-body text-gray-400 text-sm mb-6">
                Auteurs, éditeurs, horaires, lieux — tout le festival en un document.
              </p>
              <a
                href="/Programme-2026.pdf"
                download
                className="inline-flex items-center gap-3 bg-navy text-festival font-bangers text-xl px-8 py-4 rounded-xl shadow-card hover:shadow-card-lg hover:bg-navy-dark transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v11" />
                </svg>
                Télécharger le programme
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
