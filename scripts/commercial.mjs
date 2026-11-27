export const commercialTerms = {
  'diseno-web': [
    {
      name: 'Presencia Web — Plantilla 1',
      rates: [
        {label: 'Implementación', amount: 3500},
        {label: 'Mensualidad', amount: 250}
      ]
    },
    {
      name: 'Presencia Web — Plantilla 2',
      rates: [
        {label: 'Implementación', amount: 4500},
        {label: 'Mensualidad', amount: 450}
      ]
    },
    {name: 'Página web personalizada', quote: true}
  ],
  'redes-sociales': [
    {
      name: 'Community Manager',
      rates: [{label: 'Precio total', amount: 26000}],
      duration: 'Tres meses',
      installmentAmount: 13000,
      advertisingExcluded: true
    }
  ],
  'identidad-de-marca': [
    {name: 'Diseño de marca', rates: [{label: 'Precio', amount: 6000}]}
  ],
  'posicionamiento-seo': [{name: 'Posicionamiento SEO', quote: true}],
  'google-ads': [{name: 'Google Ads', quote: true}],
  'automatizacion': [{name: 'Automatización', quote: true}]
};

export const communityManagerScope = [
  '12 Post Imagen',
  '8 videos reel',
  'Adaptación de cada publicación al formato Historia',
  'Calendario Semanal (Autorizado)',
  'Paleta de Colores y formatos establecidos',
  'Diseño y configuración de campaña (no incluye inversión)'
];

const money = amount => '$' + amount.toLocaleString('es-MX') + ' MXN';

function offerContent(offer, detailed) {
  const heading = detailed ? 'h3' : 'strong';
  const rates = (offer.rates || []).map(rate =>
    `<div class="price-line"><span>${rate.label}</span><b>${money(rate.amount)}</b></div>`
  ).join('');
  const duration = offer.duration ? `<div class="price-note">Duración del servicio · ${offer.duration}</div>` : '';
  const installments = offer.installmentAmount ? `<div class="price-note">Pago en dos parcialidades de ${money(offer.installmentAmount)}.</div>` : '';
  const advertising = offer.advertisingExcluded ? '<div class="price-note">No incluye inversión publicitaria.</div>' : '';
  const quote = offer.quote && !detailed ? '<div class="price-note">Solicitar cotización</div>' : '';
  return `<${heading} class="price-name">${offer.name}</${heading}>${rates}${duration}${installments}${advertising}${quote}`;
}

export function pricingSummary(slug) {
  return `<div class="service-pricing" data-price-service="${slug}">${commercialTerms[slug].map(offer =>
    `<div class="price-summary-offer">${offerContent(offer, false)}</div>`
  ).join('')}</div>`;
}

export function pricingSection(service, href) {
  const offers = commercialTerms[service.slug];
  const cards = offers.map(offer =>
    `<article class="price-card">${offerContent(offer, true)}<a class="button" href="${href}">Solicitar cotización</a></article>`
  ).join('');
  return `<section class="section" id="precios"><div class="wrap"><h2 class="section-title">${offers.every(offer => offer.quote) ? 'Solicita una cotización.' : 'Servicios e inversión.'}</h2><div class="price-grid" data-price-service="${service.slug}">${cards}</div></div></section>`;
}
