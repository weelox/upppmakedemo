(function () {
  const STORAGE_KEY = 'uppmake_content_v1';

  const defaultContent = {
    brand: 'Uppmake · Curator & Consulting',
    topNote: 'Vi prioriterar projekt där kapitalet gör störst skillnad först',
    ctaLabel: 'Boka strategisamtal',
    ctaUrl: 'contact.html',
    footer: '© Uppmake · Curator & Consulting · Förberedda för seriösa investerare',
    slides: [
      {
        image: 'https://gilabase.com/wp-content/uploads/2025/08/light-2.jpg',
        imageAlt: 'Projektvisualisering för strategi',
        kicker: 'Case 01 · Investeringspipeline',
        title: 'Från idé till styrning',
        text: 'Vi hjälper er att prioritera projekt efter effekt, risk och tidplan, så att kapitalet hamnar där sannolikheten att lyckas är högst.',
        metrics: [
          { value: '12', label: 'projekt identifierade' },
          { value: '4', label: 'prioriterades direkt' },
          { value: '8', label: 'beslutspunkter per kvartal' }
        ],
        caseData: {
          title: 'Pilot: Portfolio Flow',
          focus: 'Urval av tre högprioriterade projekt i ny finansieringsrunda',
          before: 'Otydliga beslutsregler och oklara genomförandeansvar.',
          delivery: 'Implementerade investeringsramverk, mötesstruktur och uppföljningspunkter per vecka.',
          kpi: 'Minskad omförhandlingstid: 24 dagar → 11 dagar',
          risk: 'Minskad osäkerhet i beslutskedjan genom tydliga go/no-go-gates'
        }
      },
      {
        image: 'https://gilabase.com/wp-content/uploads/2025/08/look-at-me2.jpg',
        imageAlt: 'Finansieringsanalys och due diligence',
        kicker: 'Case 02 · Kvalitetssäkring',
        title: 'Curatorial due diligence',
        text: 'Varje projekt värderas utifrån genomförbarhet, varumärkesrelevans och förväntad avkastning i relation till risknivå.',
        metrics: [
          { value: '12', label: 'försiktiga ansökningar/kvartal' },
          { value: '10', label: 'objektiva jämförelsekriterier' },
          { value: '6', label: 'veckors snabbdue-diligence' }
        ],
        caseData: {
          title: 'Due diligence för sceniska projekt',
          focus: 'Kvalitetsgranskning med kombinerad estetisk och kommersiell score',
          before: 'Brist på tydlig jämförelse mellan ansökta projekt och faktisk kapacitet.',
          delivery: 'Levererade intern scorecard-modell för risk, kostnad, timing och distributionsstyrka.',
          kpi: '10-veckors beslutsfönster i stället för 6 veckor',
          risk: 'Lägre budgetavvikelse genom förhandsgranskad genomförbarhet'
        }
      },
      {
        image: 'https://gilabase.com/wp-content/uploads/2025/08/Humanoid-308room-view4.jpg',
        imageAlt: 'Kreativ rådgivning för tillväxt',
        kicker: 'Case 03 · Tillväxt',
        title: 'Consulting som skalar',
        text: 'Vi styr från idé till leverans med en process där kreativ kvalitet mäts mot ekonomisk hållbarhet i varje steg.',
        metrics: [
          { value: '3', label: 'styrningsråd' },
          { value: '18', label: 'operativa förbättringar' },
          { value: '24', label: 'procent snabbare go-to-market' }
        ],
        caseData: {
          title: 'Skalbar rådgivning i tillväxtfas',
          focus: 'Koppling mellan curatoriska mål och kommersiell plan',
          before: 'Många beslut men låg utförandehastighet mellan besluten.',
          delivery: 'Införde governance board och projektkoordinator med mätbara leveransmål.',
          kpi: '24 % snabbare go-to-market',
          risk: 'Ökad tydlighet minskade omstarter i produktion'
        }
      },
      {
        image: 'https://gilabase.com/wp-content/uploads/2025/08/Terra-Nova_room-5d.jpg',
        imageAlt: 'Nätverk och partners',
        kicker: 'Case 04 · Nätverk',
        title: 'Stark projektledning för investerare',
        text: 'Nätverk och leveranspartners organiseras i kontrollerade spår för att minska osäkerhet och öka genomförandestyrka.',
        metrics: [
          { value: '7', label: 'nya partnerskap' },
          { value: '1', label: 'central styrmodell' },
          { value: '100 %', label: 'spårbar ansvarsfördelning' }
        ],
        caseData: {
          title: 'Nätverksekosystem för projektägare',
          focus: 'Snabbare leverans genom specialistnätverk och partnerlogik',
          before: 'Projektteam arbetade isolerat utan synk mot externa leverantörer.',
          delivery: 'Införde central kontaktplan med tydlig ansvarsfördelning mellan partnernätverket.',
          kpi: '3 veckor till första pilotavtal',
          risk: 'Lägre beroenderisk mellan projektledare och partner'
        }
      },
      {
        image: 'https://gilabase.com/wp-content/uploads/2025/08/Think-Sensual-4-scaled.jpg',
        imageAlt: 'Resultatrapportering',
        kicker: 'Case 05 · Rapportering',
        title: 'Transparens i varje fas',
        text: 'Investorerna får tydliga beslutsunderlag via enhetliga rapporter med risk, kostnad och kvalitetsindikatorer per fas.',
        metrics: [
          { value: '4', label: 'månatliga statusmöten' },
          { value: '0.8 %', label: 'felrapportering i kvartal' },
          { value: '16', label: 'kontroller per projekt' }
        ],
        caseData: {
          title: 'Transparensmodul för finansiärer',
          focus: 'Minskade informationsluckor mellan styrgrupp och projektledning',
          before: 'Spridd rapportering och otydlig kostnadslogg gjorde uppföljning osäker.',
          delivery: 'Byggde digital rapportstruktur med milstolpekort och ansvarshistorik.',
          kpi: 'Mindre än 0.8 % felrapportering i kvartalsrapport',
          risk: 'Minskat missförstånd i statusmöten'
        }
      },
      {
        image: 'https://gilabase.com/wp-content/uploads/2023/01/batterypack-1.jpg',
        imageAlt: 'Affärsförslag för nästa kapitel',
        kicker: 'Case 06 · Kapacitetsanalys',
        title: 'Bygger nästa investeringskapital',
        text: 'Teamets styrka blir investerbar genom att kombinera kreativ expertis med tydliga processer, KPI:er och rapporteringsstruktur.',
        metrics: [
          { value: '88 %', label: 'projekt når definierad slutfas' },
          { value: '12', label: 'månader till första milstolpe' },
          { value: '8', label: 'förvaltade roller i pipeline' }
        ],
        caseData: {
          title: 'Komplett kompetenspaket',
          focus: 'Helhetssyn mellan curatorisk kvalitet och kapitaldisciplin',
          before: 'Hög kompetens i teamet men saknade samordnad struktur.',
          delivery: 'Lanserade konsult-modell med leveransfaser, KPI-ramverk och exitförberedelse.',
          kpi: '88 % projekt uppnår definierad slutfas',
          risk: 'Mindre beroende av enskilda individer i kritiska beslut'
        }
      }
    ]
  };

  function sanitizeContent(input) {
    const clone = JSON.parse(JSON.stringify(defaultContent));
    if (!input || typeof input !== 'object') return clone;

    clone.brand = input.brand || clone.brand;
    clone.topNote = input.topNote || clone.topNote;
    clone.ctaLabel = input.ctaLabel || clone.ctaLabel;
    clone.ctaUrl = input.ctaUrl || clone.ctaUrl;
    clone.footer = input.footer || clone.footer;

    if (Array.isArray(input.slides)) {
      clone.slides = input.slides.map((slide, index) => {
        const base = clone.slides[index] ? JSON.parse(JSON.stringify(clone.slides[index])) : {};
        const result = {
          ...base,
          image: slide.image || base.image || '',
          imageAlt: slide.imageAlt || base.imageAlt || '',
          kicker: slide.kicker || base.kicker || '',
          title: slide.title || base.title || '',
          text: slide.text || base.text || '',
          metrics: Array.isArray(slide.metrics) ? slide.metrics.slice(0, 3).map((metric, i) => ({
            value: metric && metric.value !== '' ? metric.value : (base.metrics && base.metrics[i] ? base.metrics[i].value : ''),
            label: metric && metric.label !== '' ? metric.label : (base.metrics && base.metrics[i] ? base.metrics[i].label : '')
          })) : base.metrics || [],
          caseData: {
            ...base.caseData,
            ...(slide.caseData || {})
          }
        };
        return result;
      });
    }

    return clone;
  }

  function loadContent() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return sanitizeContent(parsed);
    } catch (error) {
      return sanitizeContent(null);
    }
  }

  function saveContent(content) {
    const normalized = sanitizeContent(content);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  }

  function resetContent() {
    localStorage.removeItem(STORAGE_KEY);
    return sanitizeContent(null);
  }

  window.UppmakeContent = {
    loadContent,
    saveContent,
    resetContent,
    defaultContent
  };
})();
