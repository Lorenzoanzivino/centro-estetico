/**
 * ==========================================================================
 * DATA.JS - CENTRO ESTETICO DI LUSSO "AURA"
 * UNICO FILE DI CONFIGURAZIONE E CONTENUTO CENTRALE (DRY ARCHITECTURE)
 * 
 * Modifica testi, prezzi, offerte, orari e recapiti in questo singolo file
 * per aggiornare istantaneamente l'intero sito senza toccare l'HTML.
 * ==========================================================================
 */

const SITE_DATA = {
  // ------------------------------------------------------------------------
  // 1. DATI AZIENDALI PROFESSIONALI & RECAPITI (NEGOZIO REALE A NORMA DI LEGGE)
  // ------------------------------------------------------------------------
  business: {
    name: "Aura",
    legalName: "Aura Centro Benessere & Bellezza S.r.l.",
    tagline: "Boutique Spa & Centro Estetico Avanzato",
    shortDescription: "Un rifugio esclusivo dedicato al riequilibrio psicofisico, alla cura sartoriale della pelle e all'eccellenza dei rituali olistici.",
    
    // Contatti telefonici
    phone: "+39 06 8765 4321",
    phoneCallUrl: "tel:+390687654321",
    
    // Configurazione WhatsApp (prefisso internazionale senza '+' o spazi)
    whatsapp: {
      number: "393401234567",
      defaultMessage: "Buongiorno! Vorrei richiedere informazioni e fissare un appuntamento presso il vostro centro estetico.",
      floatingTooltip: "Prenota o richiedi info rapide su WhatsApp"
    },

    email: "info@aurabenessere.it",
    pec: "aurabenessere@pec.it",
    sdiCode: "M5UXCR1",
    
    // Sede fisica
    address: {
      street: "Via delle Camelie, 18",
      city: "00187 Roma (RM)",
      postalCode: "00187",
      zoneNote: "Zona Prati / Flaminio • Parcheggio convenzionato riservato ai clienti",
      directionsUrl: "https://maps.google.com/?q=Via+delle+Camelie+18+Roma"
    },

    // Iframe embed per Google Maps (responsive e con tonalità sobrie)
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.587823528416!2d12.4748118!3d41.9082329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60505193952d%3A0x6b77df2a6f3b0638!2sPiazza%20del%20Popolo!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit",

    // Orari di apertura al pubblico
    openingHours: [
      { days: "Lunedì", hours: "Chiuso (Giorno di riposo)", isClosed: true },
      { days: "Martedì - Venerdì", hours: "09:30 - 19:30 (Orario continuato)", isClosed: false },
      { days: "Sabato", hours: "09:00 - 18:30 (Orario continuato)", isClosed: false },
      { days: "Domenica", hours: "Chiuso", isClosed: true }
    ],

    // Profili Social con le etichette esatte richieste
    socialLinks: {
      instagram: {
        platform: "Instagram",
        handle: "@aura_benessere_roma",
        url: "https://instagram.com",
        heroLabel: "Esplora i nostri lavori su Instagram"
      },
      facebook: {
        platform: "Facebook",
        handle: "Aura Boutique Spa Roma",
        url: "https://facebook.com",
        heroLabel: "Segui la pagina Facebook"
      }
    },

    // Dati fiscali e societari a norma di legge italiana
    legal: {
      companyName: "Aura Centro Benessere & Bellezza S.r.l.",
      vatNumber: "15984721008",
      fiscalCode: "15984721008",
      reaNumber: "RM-1648293",
      shareCapital: "€ 10.000,00 i.v.",
      registeredOffice: "Via delle Camelie, 18 - 00187 Roma (RM)",
      technicalDirector: "Direzione Tecnica Estetica Qualificata (L. 1/90)",
      privacyPolicyUrl: "#orari",
      cookiePolicyUrl: "#orari",
      copyrightYear: 2026,
      rightsText: "Tutti i diritti riservati."
    }
  },

  // ------------------------------------------------------------------------
  // 2. NAVIGAZIONE (HOME, OFFERTE, TRATTAMENTI, ORARI + CTA PRENOTA)
  // ------------------------------------------------------------------------
  navigation: [
    { label: "Home", href: "#hero", isSpecial: false },
    { label: "Offerte", href: "#offerte", isSpecial: true },
    { label: "Trattamenti", href: "#trattamenti", isSpecial: false },
    { label: "Orari", href: "#orari", isSpecial: false }
  ],

  // Pulsante CTA rapido finale Navbar
  navCta: {
    label: "Prenota / Contatta",
    message: "Buongiorno! Vorrei richiedere informazioni e verificare la disponibilità per un appuntamento."
  },

  // ------------------------------------------------------------------------
  // 3. SEZIONE HERO (INDIPENDENTE, 100VH, BOTTONI SU 2 RIGHE)
  // ------------------------------------------------------------------------
  hero: {
    backgroundImage: "img/hero.jpg",
    badge: "✦ Oasi di Bellezza, Armonia & Rigenerazione",
    title: "Ritrova il tuo equilibrio naturale in un'atmosfera di puro benessere.",
    subtitle: "Trattamenti personalizzati viso e corpo, cosmeceutica organica d'avanguardia e rituali olistici per rigenerare corpo e spirito nel cuore della città.",
    
    // Riga 1: CTA Principale WhatsApp (Grande)
    primaryCta: {
      text: "Prenota subito su WhatsApp",
      message: "Salve! Vorrei prenotare un appuntamento per una consulenza e trattamento personalizzato."
    },

    // Riga 2: Due bottoni affiancati con diciture esatte
    socialRow: [
      {
        platform: "Instagram",
        label: "Esplora i nostri lavori su Instagram",
        url: "https://instagram.com"
      },
      {
        platform: "Facebook",
        label: "Segui la pagina Facebook",
        url: "https://facebook.com"
      }
    ],

    // Indicatori di fiducia traslucidi
    trustMetrics: [
      { value: "4.9 ★", label: "Oltre 230 recensioni verificate" },
      { value: "100%", label: "Consulenza e diagnosi su misura" },
      { value: "12+ Anni", label: "Di eccellenza ed esperienza estetica" }
    ]
  },

  // ------------------------------------------------------------------------
  // 4. SOTTOSEZIONE 2: OFFERTE E PACCHETTI DEL MESE (#offerte)
  // ------------------------------------------------------------------------
  specialOffersSection: {
    badge: "✦ Promozione Esclusiva del Mese",
    title: "Offerte e Pacchetti del Mese",
    subtitle: "Percorsi completi studiati per offrirti la massima efficacia a una tariffa speciale. Riservati alle prime prenotazioni del mese.",
    items: [
      {
        id: "offerta-rinascita-totale",
        isPopular: true,
        tag: "PACCHETTO PIÙ AMATO",
        title: "Rituale Rinascita Viso & Corpo 'Golden Glow'",
        subtitle: "L'esperienza sensoriale completa per una rigenerazione cellulare profonda e una luminosità senza eguali.",
        originalPrice: "€ 160",
        promoPrice: "€ 119",
        duration: "90 min di puro benessere",
        validity: "Valida su prenotazioni effettuate entro fine mese (solo 8 posti rimanenti)",
        benefits: [
          "Check-up cutaneo digitale con microcamera (incluso)",
          "Trattamento Viso Illuminante alla Vitamina C pura e Acido Ialuronico",
          "Massaggio Corpo Olistico Drenante con blend di oli caldi botanici",
          "Maschera contorno occhi decongestionante al collagene vegetale",
          "Tisana biologica rilassante servita nella Lounge Suite riservata"
        ],
        ctaText: "Richiedi l'Offerta su WhatsApp",
        bookingMessage: "Salve! Vorrei bloccare la promo del mese: 'Rituale Rinascita Viso & Corpo Golden Glow' a €119."
      },
      {
        id: "offerta-silhouette-dren",
        isPopular: false,
        tag: "PERCORSO RIDUCENTE INTENSIVO",
        title: "Carnet 'Gambe Leggere & Silhouette Perfetta'",
        subtitle: "Ciclo intensivo d'urto mirato a sgonfiare, rimodellare e defaticare i tessuti con tecnologie avanzate.",
        originalPrice: "€ 290",
        promoPrice: "€ 219",
        duration: "3 Sedute da 75 min ciascuna",
        validity: "Tariffa promozionale valida per i primi 10 pacchetti acquistati",
        benefits: [
          "3 Sedute combinate con scrub termale salino e bendaggi specifici",
          "3 Sessioni di pressoterapia sequenziale a compressione graduata",
          "Scheda personalizzata con consigli di idratazione e tisane drenanti",
          "Crema corpo drenante e defaticante formato domiciliare 200ml OMAGGIO"
        ],
        ctaText: "Blocca il Percorso Promozionale",
        bookingMessage: "Salve! Vorrei informazioni per aderire al carnet promozionale 'Gambe Leggere & Silhouette Perfetta' a €219."
      }
    ]
  },

  // ------------------------------------------------------------------------
  // 5. SOTTOSEZIONE 3: TUTTI I TRATTAMENTI CON FILTRI (#trattamenti)
  // ------------------------------------------------------------------------
  servicesSection: {
    badge: "Menu Benessere & Cura della Pelle",
    title: "Tutti i Trattamenti",
    subtitle: "Protocolli estetici personalizzati, cosmeceutica naturale ad alta concentrazione di attivi e manualità esperte per valorizzare la tua bellezza naturale.",
    categories: [
      { id: "all", label: "Tutti i Trattamenti" },
      { id: "viso", label: "Viso & Anti-Age" },
      { id: "corpo", label: "Corpo & Snellimento" },
      { id: "massaggi", label: "Massaggi Olistici" },
      { id: "sguardo", label: "Sguardo & Benessere" }
    ],
    items: [
      {
        id: "viso-gold-peptidi",
        category: "viso",
        title: "Rituale Viso Oro & Peptidi Biomimetici",
        duration: "75 min",
        price: "€ 85",
        badge: "Più Richiesto",
        description: "Trattamento d'eccellenza per stimolare collagene ed elastina. Include microdermoabrasione dolce, fiala liftante con oro colloidale e massaggio manuale Kobido.",
        highlights: ["Effetto lifting naturale immediato", "Incarnato radioso e compatto", "Massaggio Kobido giapponese"],
        bookingMessage: "Salve! Vorrei prenotare il trattamento 'Rituale Viso Oro & Peptidi Biomimetici'."
      },
      {
        id: "viso-deep-hydra",
        category: "viso",
        title: "Deep Hydra & Ossigeno Botanico",
        duration: "60 min",
        price: "€ 65",
        badge: "Pelle Sensibile",
        description: "Idratazione profonda multilivello con acido ialuronico a tre pesi molecolari ed infusione di siero botanico anti-inquinamento tramite manipolo a ultrasuoni.",
        highlights: ["Pulizia profonda non invasiva", "Idratazione profonda 72h", "Zero arrossamenti post seduta"],
        bookingMessage: "Salve! Vorrei prenotare una seduta di 'Deep Hydra & Ossigeno Botanico'."
      },
      {
        id: "corpo-dren-detox",
        category: "corpo",
        title: "Rimodellamento Body Detox & Salino",
        duration: "80 min",
        price: "€ 80",
        badge: "Drenante Intenso",
        description: "Bendaggio con sali termali del Mar Morto a effetto osmotico combinato a pressoterapia medicale sequenziale. Riapre i canali linfatici e alleggerisce le gambe.",
        highlights: ["Riduzione immediata dei liquidi", "Pelle liscia e vellutata", "Sollievo gambe pesanti"],
        bookingMessage: "Salve! Vorrei fissare una seduta per il 'Rimodellamento Body Detox & Salino'."
      },
      {
        id: "corpo-scrub-karite",
        category: "corpo",
        title: "Gommage Seta al Burro di Karitè Caldo",
        duration: "50 min",
        price: "€ 55",
        badge: "Nutriente",
        description: "Esfoliazione delicata corpo con cristalli di zucchero di canna biologico ed oli aromatici caldi, seguita da avvolgimento idratante al karitè puro.",
        highlights: ["Elimina le cellule morte", "Pelle morbida come seta", "Profumazione sensoriale avvolgente"],
        bookingMessage: "Buongiorno! Vorrei prenotare il 'Gommage Seta al Burro di Karitè Caldo'."
      },
      {
        id: "massaggio-hot-stone",
        category: "massaggi",
        title: "Rituale Stone & Olii Essenziali Caldi",
        duration: "60 min",
        price: "€ 70",
        badge: "Profondo Relax",
        description: "Massaggio decontratturante e riequilibrante con pietre basaltiche vulcaniche calde ed essenze pure di lavanda vera, arancio amaro e legno di cedro.",
        highlights: ["Distensione muscolare profonda", "Riduce stress e tensione nervosa", "Migliora la qualità del sonno"],
        bookingMessage: "Salve! Vorrei prenotare il 'Rituale Stone & Olii Essenziali Caldi'."
      },
      {
        id: "massaggio-linfodrenante",
        category: "massaggi",
        title: "Massaggio Linfodrenante Metodo Vodder",
        duration: "60 min",
        price: "€ 65",
        badge: "Terapeutico",
        description: "Movimenti ritmici lenti e delicatissimi che favoriscono il deflusso naturale della linfa, ideali per combattere cellulite, gonfiore e ristagno idrico.",
        highlights: ["Migliora il microcircolo", "Azione disintossicante profonda", "Tocco delicato e terapeutico"],
        bookingMessage: "Salve! Vorrei prenotare un 'Massaggio Linfodrenante Metodo Vodder'."
      },
      {
        id: "sguardo-laminazione",
        category: "sguardo",
        title: "Laminazione Ciglia & Botox alla Cheratina",
        duration: "55 min",
        price: "€ 60",
        badge: "Sguardo Intenso",
        description: "Trattamento curativo per sollevare, incurvare e nutrire le ciglia naturali con cheratina vegetale, acido ialuronico e tintura nera profonda.",
        highlights: ["Ciglia curve e sane per 6-8 settimane", "Nessun bisogno di mascara quotidiano", "Effetto occhi aperti e luminosi"],
        bookingMessage: "Buongiorno! Vorrei prenotare la 'Laminazione Ciglia & Botox alla Cheratina'."
      },
      {
        id: "sguardo-architettura",
        category: "sguardo",
        title: "Bio-Tattoo & Architettura Sopracciglia",
        duration: "45 min",
        price: "€ 40",
        badge: "Definizione Naturale",
        description: "Studio morfologico dell'arcata, epilazione di precisione con filo arabo e colorazione con henné organico per infoltire e dare carattere allo sguardo.",
        highlights: ["Studio personalizzato dei volumi", "Durata fino a 4 settimane", "Tintura 100% organica"],
        bookingMessage: "Salve! Vorrei fissare una seduta di 'Bio-Tattoo & Architettura Sopracciglia'."
      }
    ]
  },

  // ------------------------------------------------------------------------
  // 6. SOTTOSEZIONE 4: LUOGO, ORARI E CONTATTI (#orari)
  // ------------------------------------------------------------------------
  locationAndHours: {
    badge: "Dove Siamo & Quando Trovarci",
    title: "Luogo, Orari e Contatti",
    subtitle: "Un ambiente riservato e accogliente nel cuore della città. Prenota in anticipo per garantirti la cabina relax desiderata.",
    detailsTitle: "Orari di Apertura",
    contactsTitle: "Recapiti Diretti",
    locationNote: "Facilmente raggiungibile sia con mezzi pubblici che in auto. Parcheggio clienti riservato all'interno del cortile."
  },

  // ------------------------------------------------------------------------
  // 7. FOOTER ISTITUZIONALE PROFESSIONALE (NEGOZIO REALE A NORMA DI LEGGE)
  // ------------------------------------------------------------------------
  footer: {
    about: "Aura è uno spazio intimo dedicato a chi cerca una pausa rigenerante dai ritmi quotidiani. Coniughiamo competenza clinica, formulazioni botaniche d'eccellenza e cura minuziosa per ogni ospite.",
    legalNotice: "I trattamenti estetici sono eseguiti esclusivamente da personale qualificato nel rispetto della Legge 4 gennaio 1990 n. 1 e s.m.i. e dei protocolli igienico-sanitari ASL vigenti. Trattamento dati conforme GDPR (Regolamento UE 2016/679)."
  }
};

/**
 * ==========================================================================
 * MOTORE DI IDRATAZIONE E RENDERING DINAMICO (VANILLA JS)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  renderSite();
  initInteractions();
});

function renderSite() {
  const d = SITE_DATA;

  // Titolo della pagina nel browser
  document.title = `${d.business.name} | ${d.business.tagline}`;

  // 1. Navbar
  renderNavbar(d);

  // 2. Hero Section (Indipendente, 100vh)
  renderHero(d);

  // 3. Offerte del Mese (#offerte)
  renderOffers(d);

  // 4. Tutti i Trattamenti con filtri (#trattamenti)
  renderServices(d);

  // 5. Luogo, Orari e Contatti (#orari)
  renderLocationAndHours(d);

  // 6. Footer Professionale
  renderFooter(d);

  // 7. Pulsante Fluttuante WhatsApp
  renderFloatingWhatsApp(d);
}

/**
 * Helper per generare URL WhatsApp puliti ed encodati
 */
function createWhatsAppUrl(number, message) {
  const cleanNumber = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Helper per icone SVG minimali e definite
 */
function getIconSvg(name, className = "w-5 h-5") {
  const icons = {
    sparkles: `<svg class="${className}" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/></svg>`,
    whatsapp: `<svg class="${className}" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.78 14.07c-.24.67-1.39 1.28-1.92 1.36-.5.08-1.14.12-3.69-.93-3.26-1.35-5.36-4.66-5.52-4.88-.16-.22-1.33-1.77-1.33-3.37 0-1.6 1.05-2.39 1.42-2.71.37-.32.81-.4 1.08-.4.27 0 .54.01.78.02.25.02.58-.09.91.7.34.82 1.17 2.85 1.27 3.06.1.21.17.46.03.73-.13.27-.2.43-.4.66-.2.23-.42.51-.6.69-.2.2-.41.42-.18.82.23.4 1.03 1.7 2.21 2.75 1.52 1.35 2.8 1.77 3.2 1.97.4.2.64.17.88-.1.24-.28 1.02-1.19 1.29-1.6.27-.41.54-.34.91-.2.37.14 2.36 1.11 2.76 1.31.4.2.67.3.77.47.1.17.1.98-.14 1.65z"/></svg>`,
    instagram: `<svg class="${className}" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    facebook: `<svg class="${className}" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    check: `<svg class="${className}" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>`,
    clock: `<svg class="${className}" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    mapPin: `<svg class="${className}" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>`,
    phone: `<svg class="${className}" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>`,
    mail: `<svg class="${className}" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>`
  };
  return icons[name] || icons.sparkles;
}

// --------------------------------------------------------------------------
// COMPONENTI DI RENDERING
// --------------------------------------------------------------------------

function renderNavbar(d) {
  const brandNameEls = document.querySelectorAll(".nav-brand-name");
  brandNameEls.forEach(el => el.textContent = d.business.name);

  const brandTaglineEls = document.querySelectorAll(".nav-brand-tagline");
  brandTaglineEls.forEach(el => el.textContent = d.business.tagline);

  // Link Desktop (Home, Offerte, Trattamenti, Orari)
  const desktopLinksContainer = document.getElementById("desktop-nav-links");
  if (desktopLinksContainer) {
    desktopLinksContainer.innerHTML = d.navigation.map(item => `
      <a href="${item.href}" class="text-sm tracking-wide font-medium transition-colors duration-200 ${
        item.isSpecial 
          ? 'text-[#C26747] font-semibold hover:text-[#A85437] flex items-center gap-1.5' 
          : 'text-[#344636]/85 hover:text-[#273629]'
      }">
        ${item.isSpecial ? '<span class="inline-block w-1.5 h-1.5 rounded-full bg-[#C26747]"></span>' : ''}
        ${item.label}
      </a>
    `).join("");
  }

  // Link Mobile
  const mobileLinksContainer = document.getElementById("mobile-nav-links");
  if (mobileLinksContainer) {
    mobileLinksContainer.innerHTML = d.navigation.map(item => `
      <a href="${item.href}" class="mobile-nav-link text-base py-3 px-3.5 rounded-xl transition-colors duration-150 flex items-center justify-between ${
        item.isSpecial 
          ? 'text-[#C26747] font-semibold bg-[#C26747]/10' 
          : 'text-[#344636] hover:bg-[#FAF4F0]'
      }">
        <span>${item.label}</span>
        ${item.isSpecial ? '<span class="text-xs px-2.5 py-0.5 rounded-full bg-[#C26747] text-white">Promo</span>' : ''}
      </a>
    `).join("");
  }

  // Pulsante CTA finale Navbar: "Prenota / Contatta" (Terracotta caldo)
  const navCtaBtn = document.getElementById("nav-cta-btn");
  if (navCtaBtn) {
    navCtaBtn.href = createWhatsAppUrl(d.business.whatsapp.number, d.navCta.message);
    const navCtaLabel = navCtaBtn.querySelector(".nav-cta-label");
    if (navCtaLabel) navCtaLabel.textContent = d.navCta.label;
  }
}

function renderHero(d) {
  const heroBadge = document.getElementById("hero-badge");
  if (heroBadge) heroBadge.textContent = d.hero.badge;

  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) heroTitle.textContent = d.hero.title;

  const heroSubtitle = document.getElementById("hero-subtitle");
  if (heroSubtitle) heroSubtitle.textContent = d.hero.subtitle;

  // RIGA 1: WhatsApp CTA Principale (Grande, Terracotta caldo)
  const heroCtaPrimary = document.getElementById("hero-cta-primary");
  if (heroCtaPrimary) {
    heroCtaPrimary.href = createWhatsAppUrl(d.business.whatsapp.number, d.hero.primaryCta.message);
    const textSpan = heroCtaPrimary.querySelector(".cta-text");
    if (textSpan) textSpan.textContent = d.hero.primaryCta.text;
  }

  // RIGA 2: Due bottoni affiancati con le diciture esatte richieste
  const heroSocialRow = document.getElementById("hero-social-row");
  if (heroSocialRow) {
    heroSocialRow.innerHTML = d.hero.socialRow.map(btn => `
      <a 
        href="${btn.url}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="hero-social-btn flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-medium shadow-sm hover:shadow">
        ${getIconSvg(btn.platform.toLowerCase(), "w-4 h-4 text-white")}
        <span>${btn.label}</span>
      </a>
    `).join("");
  }

  // Trust Indicators (Valori di fiducia traslucidi)
  const trustMetricsContainer = document.getElementById("hero-trust-metrics");
  if (trustMetricsContainer) {
    trustMetricsContainer.innerHTML = d.hero.trustMetrics.map(metric => `
      <div class="flex flex-col text-center sm:text-left py-3 px-5 rounded-2xl bg-black/35 border border-white/20 backdrop-blur-md shadow-sm">
        <span class="text-xl sm:text-2xl font-bold text-white">${metric.value}</span>
        <span class="text-xs text-white/80 leading-snug mt-0.5">${metric.label}</span>
      </div>
    `).join("");
  }
}

function renderOffers(d) {
  const badge = document.getElementById("offers-badge");
  if (badge) badge.textContent = d.specialOffersSection.badge;

  const title = document.getElementById("offers-title");
  if (title) title.textContent = d.specialOffersSection.title;

  const subtitle = document.getElementById("offers-subtitle");
  if (subtitle) subtitle.textContent = d.specialOffersSection.subtitle;

  const container = document.getElementById("offers-container");
  if (container) {
    container.innerHTML = d.specialOffersSection.items.map(offer => {
      const waUrl = createWhatsAppUrl(d.business.whatsapp.number, offer.bookingMessage);

      return `
        <div class="card-luxury relative rounded-3xl p-8 sm:p-10 bg-white border-2 ${
          offer.isPopular ? 'border-[#C26747] shadow-xl' : 'border-[#CBD8CC]'
        } flex flex-col justify-between">
          
          ${offer.isPopular ? `
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span class="badge-terracotta text-xs uppercase tracking-wider font-semibold py-1.5 px-4 rounded-full shadow-md">
                ${offer.tag}
              </span>
            </div>
          ` : `
            <div class="mb-3">
              <span class="text-xs uppercase tracking-wider font-semibold py-1.5 px-3 rounded-full bg-[#EBF1EC] text-[#344636] border border-[#CBD8CC]">
                ${offer.tag}
              </span>
            </div>
          `}

          <div>
            <div class="mt-2 mb-4">
              <h3 class="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#273629] leading-tight mb-2">
                ${offer.title}
              </h3>
              <p class="text-sm text-[#5E7261] font-light leading-relaxed">
                ${offer.subtitle}
              </p>
            </div>

            <!-- Blocco Prezzo con eccellente contrasto -->
            <div class="p-5 rounded-2xl bg-[#FAF4F0] border border-[#E8DDD7] flex items-baseline justify-between mb-6">
              <div>
                <span class="text-xs text-[#5E7261]/80 line-through mr-2">Listino ${offer.originalPrice}</span>
                <span class="text-3xl sm:text-4xl font-serif-luxury font-extrabold text-[#C26747]">${offer.promoPrice}</span>
              </div>
              <span class="text-xs text-[#344636] font-medium bg-white px-3 py-1 rounded-full border border-[#CBD8CC] shadow-sm">
                ${offer.duration}
              </span>
            </div>

            <!-- Inclusi nel pacchetto -->
            <p class="text-xs font-semibold uppercase tracking-wider text-[#344636]/90 mb-3">
              Cosa include il rituale esclusivo:
            </p>
            <ul class="space-y-2.5 mb-6">
              ${offer.benefits.map(b => `
                <li class="flex items-start text-xs sm:text-sm text-[#273629]">
                  <span class="w-5 h-5 rounded-full bg-[#C26747] text-white flex items-center justify-center mr-2.5 mt-0.5 flex-shrink-0 shadow-sm">
                    ${getIconSvg("check", "w-3 h-3")}
                  </span>
                  <span class="leading-snug">${b}</span>
                </li>
              `).join("")}
            </ul>

            <p class="text-xs text-[#5E7261] italic mb-6">
              * ${offer.validity}
            </p>
          </div>

          <!-- CTA Offerta Terracotta -->
          <a 
            href="${waUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="w-full py-4 px-6 rounded-xl bg-[#C26747] hover:bg-[#A85437] text-white font-semibold text-sm sm:text-base text-center transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
            ${getIconSvg("whatsapp", "w-5 h-5")}
            <span>${offer.ctaText}</span>
          </a>
        </div>
      `;
    }).join("");
  }
}

function renderServices(d) {
  const badge = document.getElementById("services-badge");
  if (badge) badge.textContent = d.servicesSection.badge;

  const title = document.getElementById("services-title");
  if (title) title.textContent = d.servicesSection.title;

  const subtitle = document.getElementById("services-subtitle");
  if (subtitle) subtitle.textContent = d.servicesSection.subtitle;

  // Render Categorie Tabs
  const tabsContainer = document.getElementById("services-category-tabs");
  if (tabsContainer) {
    tabsContainer.innerHTML = d.servicesSection.categories.map((cat, idx) => `
      <button 
        type="button" 
        class="category-tab px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium border border-[#CBD8CC] bg-white text-[#344636] hover:bg-[#EBF1EC] ${idx === 0 ? 'active' : ''}"
        data-category="${cat.id}">
        ${cat.label}
      </button>
    `).join("");
  }

  // Render Grid iniziale
  renderServicesGrid("all");
}

function renderServicesGrid(activeCategory) {
  const gridContainer = document.getElementById("services-grid-container");
  if (!gridContainer) return;

  const allItems = SITE_DATA.servicesSection.items;
  const filtered = activeCategory === "all" 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);

  gridContainer.innerHTML = filtered.map(service => {
    const waUrl = createWhatsAppUrl(SITE_DATA.business.whatsapp.number, service.bookingMessage);

    return `
      <div class="card-luxury fade-in-item p-7 rounded-2xl bg-white border border-[#CBD8CC] flex flex-col justify-between shadow-sm" data-category="${service.category}">
        <div>
          <!-- Header card: badge durata & prezzo -->
          <div class="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E8DDD7]">
            <span class="inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-[#FAF4F0] text-[#344636] border border-[#CBD8CC] font-medium">
              ${service.badge}
            </span>
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center text-xs text-[#5E7261] font-light">
                ${getIconSvg("clock", "w-3.5 h-3.5 mr-1 text-[#C26747]")}
                ${service.duration}
              </span>
              <span class="text-base sm:text-lg font-bold text-[#273629]">
                ${service.price}
              </span>
            </div>
          </div>

          <!-- Titolo e descrizione -->
          <h3 class="text-xl sm:text-2xl font-serif-luxury font-semibold text-[#273629] mb-3 leading-snug">
            ${service.title}
          </h3>
          <p class="text-sm text-[#5E7261] leading-relaxed font-light mb-5">
            ${service.description}
          </p>

          <!-- Punti salienti / benefici -->
          <ul class="space-y-2 mb-6">
            ${service.highlights.map(h => `
              <li class="flex items-center text-xs sm:text-sm text-[#273629]/90">
                <span class="w-4 h-4 rounded-full bg-[#C26747]/15 text-[#C26747] flex items-center justify-center mr-2 flex-shrink-0">
                  ${getIconSvg("check", "w-2.5 h-2.5")}
                </span>
                <span>${h}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- CTA WhatsApp dedicato -->
        <a 
          href="${waUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="w-full py-3 px-4 rounded-xl border border-[#C26747] bg-[#FAF4F0] hover:bg-[#C26747] text-[#344636] hover:text-white font-medium text-xs sm:text-sm text-center transition-all duration-200 flex items-center justify-center gap-2 group shadow-sm">
          ${getIconSvg("whatsapp", "w-4 h-4 text-[#C26747] group-hover:text-white transition-colors")}
          <span>Prenota Trattamento</span>
        </a>
      </div>
    `;
  }).join("");
}

function renderLocationAndHours(d) {
  const badge = document.getElementById("location-badge");
  if (badge) badge.textContent = d.locationAndHours.badge;

  const title = document.getElementById("location-title");
  if (title) title.textContent = d.locationAndHours.title;

  const subtitle = document.getElementById("location-subtitle");
  if (subtitle) subtitle.textContent = d.locationAndHours.subtitle;

  // Dati di Contatto Rapidi
  const phoneEl = document.getElementById("footer-phone");
  if (phoneEl) {
    phoneEl.textContent = d.business.phone;
    phoneEl.href = d.business.phoneCallUrl;
  }

  const emailEl = document.getElementById("footer-email");
  if (emailEl) {
    emailEl.textContent = d.business.email;
    emailEl.href = `mailto:${d.business.email}`;
  }

  const pecEl = document.getElementById("footer-pec");
  if (pecEl) {
    pecEl.textContent = d.business.pec;
    pecEl.href = `mailto:${d.business.pec}`;
  }

  const addressEl = document.getElementById("footer-address");
  if (addressEl) {
    addressEl.textContent = `${d.business.address.street}, ${d.business.address.city}`;
    addressEl.href = d.business.address.directionsUrl;
  }

  const zoneNoteEl = document.getElementById("footer-zone-note");
  if (zoneNoteEl) {
    zoneNoteEl.textContent = d.business.address.zoneNote;
  }

  // Tabella Orari
  const hoursTable = document.getElementById("footer-hours-list");
  if (hoursTable) {
    hoursTable.innerHTML = d.business.openingHours.map(item => `
      <li class="flex items-center justify-between py-2 border-b border-[#CBD8CC]/50 text-xs sm:text-sm">
        <span class="font-medium text-[#273629]">${item.days}</span>
        <span class="${item.isClosed ? 'text-[#5E7261]/60 italic' : 'text-[#344636] font-medium'}">${item.hours}</span>
      </li>
    `).join("");
  }

  // Google Maps Iframe
  const mapIframe = document.getElementById("footer-map-iframe");
  if (mapIframe) {
    mapIframe.src = d.business.googleMapsEmbedUrl;
  }
}

function renderFooter(d) {
  const aboutEl = document.getElementById("footer-about");
  if (aboutEl) aboutEl.textContent = d.footer.about;

  // Dati Fiscali e Notizie Legali Italiane
  const companyInfoEl = document.getElementById("footer-company-legal");
  if (companyInfoEl) {
    const leg = d.business.legal;
    companyInfoEl.innerHTML = `
      <p class="font-semibold text-white/95 text-xs sm:text-sm mb-1">${leg.companyName}</p>
      <p class="text-xs text-white/70 leading-relaxed">
        Sede Legale: ${leg.registeredOffice}<br>
        P.IVA: ${leg.vatNumber} • Cod. Fiscale: ${leg.fiscalCode} • Iscr. Registro Imprese RM (${leg.reaNumber})<br>
        Capitale Sociale: ${leg.shareCapital} • Codice Destinatario SDI: ${d.business.sdiCode}<br>
        PEC: <a href="mailto:${d.business.pec}" class="underline hover:text-[#C26747]">${d.business.pec}</a> • ${leg.technicalDirector}
      </p>
    `;
  }

  // Nota Deontologica e Privacy
  const legalNoteEl = document.getElementById("footer-legal-note");
  if (legalNoteEl) {
    legalNoteEl.textContent = d.footer.legalNotice;
  }

  // Copyright
  const copyrightEl = document.getElementById("footer-copyright");
  if (copyrightEl) {
    copyrightEl.textContent = `© ${d.business.legal.copyrightYear} ${d.business.legal.companyName}. ${d.business.legal.rightsText}`;
  }
}

function renderFloatingWhatsApp(d) {
  const floatingBtn = document.getElementById("floating-whatsapp-btn");
  if (floatingBtn) {
    floatingBtn.href = createWhatsAppUrl(d.business.whatsapp.number, d.business.whatsapp.defaultMessage);
  }

  const tooltipEl = document.getElementById("floating-whatsapp-tooltip");
  if (tooltipEl) {
    tooltipEl.textContent = d.business.whatsapp.floatingTooltip;
  }
}

// --------------------------------------------------------------------------
// GESTIONE EVENTI & MICRO-INTERAZIONI (FILTRI, MENU MOBILE, SCROLL NAVBAR)
// --------------------------------------------------------------------------

function initInteractions() {
  // 1. Filtro categorie trattamenti
  const tabsContainer = document.getElementById("services-category-tabs");
  if (tabsContainer) {
    tabsContainer.addEventListener("click", (e) => {
      const button = e.target.closest(".category-tab");
      if (!button) return;

      const category = button.getAttribute("data-category");
      document.querySelectorAll(".category-tab").forEach(tab => tab.classList.remove("active"));
      button.classList.add("active");

      renderServicesGrid(category);
    });
  }

  // 2. Toggle Menu Mobile
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");
  const mobileMenuBackdrop = document.getElementById("mobile-menu-backdrop");

  function closeMobileMenu() {
    if (mobileMenuDrawer) mobileMenuDrawer.classList.add("translate-x-full");
    if (mobileMenuBackdrop) mobileMenuBackdrop.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  function openMobileMenu() {
    if (mobileMenuDrawer) mobileMenuDrawer.classList.remove("translate-x-full");
    if (mobileMenuBackdrop) mobileMenuBackdrop.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", openMobileMenu);
  }

  const mobileCloseBtn = document.getElementById("mobile-menu-close-btn");
  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener("click", closeMobileMenu);
  }

  if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener("click", closeMobileMenu);
  }

  // Chiusura al click sui link del drawer
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Chiusura con tasto ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileMenu();
  });

  // 3. Ombreggiatura fluida navbar durante lo scroll
  const header = document.getElementById("main-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.classList.add("shadow-sm", "bg-[#F7EFEA]/95");
        header.classList.remove("bg-[#F7EFEA]/85");
      } else {
        header.classList.remove("shadow-sm", "bg-[#F7EFEA]/95");
        header.classList.add("bg-[#F7EFEA]/85");
      }
    }, { passive: true });
  }
}
