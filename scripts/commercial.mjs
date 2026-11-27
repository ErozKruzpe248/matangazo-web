import { presenceDemo, ordersDemo } from './web-offer-demos.mjs';

export const commercialTerms = {
  'diseno-web': [
    {
      name: 'Presencia Web',
      demo: presenceDemo,
      rates: [
        {label: 'Implementación', amount: 3500},
        {label: 'Mensualidad', amount: 250}
      ]
    },
    {
      name: 'Pedidos Web',
      id: 'pedidos-web',
      demo: ordersDemo,
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

const serviceImages = {
  'redes-sociales': {file: 'servicios/redes-sociales.webp', description: 'Composición de publicaciones para redes sociales en un celular y en tarjetas.'},
  'identidad-de-marca': {file: 'marca-aplicada.webp', description: 'Identidad de Matangazo aplicada a una taza azul con el símbolo en rojo.', width: 459, height: 347},
  'posicionamiento-seo': {file: 'servicios/posicionamiento-seo.webp', description: 'Una lupa destaca uno de los resultados de una búsqueda.'},
  'google-ads': {file: 'servicios/google-ads.webp', description: 'Un cursor señala el botón de un anuncio patrocinado.'},
  'automatizacion': {file: 'servicios/automatizacion.webp', description: 'Un flujo conecta un mensaje, un documento y una confirmación.'}
};

function offerVisual({file, description, width = 840, height = 560}) {
  return `<div class="price-card-visual"><img src="/assets/${file}" alt="${description}" width="${width}" height="${height}" loading="lazy" decoding="async"></div>`;
}

function offerContent(offer) {
  const rates = (offer.rates || []).map(rate =>
    `<div class="price-line"><span>${rate.label}</span><b>${money(rate.amount)}</b></div>`
  ).join('');
  const duration = offer.duration ? `<div class="price-note">Duración del servicio · ${offer.duration}</div>` : '';
  const installments = offer.installmentAmount ? `<div class="price-note">Pago en dos parcialidades de ${money(offer.installmentAmount)}.</div>` : '';
  const advertising = offer.advertisingExcluded ? '<div class="price-note">No incluye inversión publicitaria.</div>' : '';
  return `<h3 class="price-name">${offer.name}</h3>${offer.demo?.() || ''}${rates}${duration}${installments}${advertising}`;
}

export function pricingSection(service, href) {
  const offers = commercialTerms[service.slug];
  const image = serviceImages[service.slug];
  const cards = offers.map(offer => {
    const details = `${offerContent(offer)}<a class="button" href="${href}">Solicitar cotización</a>`;
    const content = image ? `<div class="price-card-copy">${details}</div>${offerVisual(image)}` : details;
    return `<article class="price-card${image ? ' price-card-illustrated' : ''}"${offer.id ? ` id="${offer.id}"` : ''}>${content}</article>`;
  }).join('');
  return `<section class="section" id="precios"><div class="wrap"><h2 class="section-title">${offers.every(offer => offer.quote) ? 'Solicita una cotización.' : 'Servicios e inversión.'}</h2><div class="price-grid" data-price-service="${service.slug}">${cards}</div></div></section>`;
}
