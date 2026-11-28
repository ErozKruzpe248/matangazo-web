export const customWeb = {
  slug: 'desarrollo-web-a-medida',
  name: 'Desarrollo de Páginas Web a Medida',
  short: 'Tu negocio es único. Tu página web también debería serlo.',
  intro: 'Desarrollamos páginas web a medida, desde sitios corporativos personalizados hasta plataformas con funcionalidades avanzadas, diseñadas para adaptarse a las necesidades de tu empresa.'
};

const capabilities = [
  { title: 'Diseño y experiencia digital', icon: '◫', items: [
    'Diseño personalizado para tu negocio', 'Identidad visual y estructura a medida',
    'Adaptación a computadoras, tablets y celulares', 'Navegación intuitiva',
    'Animaciones e interacciones', 'Galerías de imágenes y multimedia'
  ] },
  { title: 'Presencia comercial', icon: '↗', items: [
    'Presentación de productos y servicios', 'Catálogos digitales', 'Formularios de contacto',
    'Integración con WhatsApp', 'Botones para impulsar consultas y ventas', 'Mapas y ubicaciones',
    'Optimización para buscadores', 'Optimización de velocidad y rendimiento'
  ] },
  { title: 'Funcionalidades avanzadas', icon: '✳', items: [
    'Catálogos que puedes administrar', 'Cotizadores interactivos', 'Citas y reservaciones',
    'Cuentas de usuario', 'Paneles administrativos', 'Bases de datos',
    'Integración de pagos', 'Automatizaciones', 'Conexión con servicios externos',
    'Funciones desarrolladas para tu negocio'
  ] }
];

const steps = [
  ['Cuéntanos sobre tu negocio', 'Conocemos tus necesidades y objetivos.'],
  ['Definimos tu proyecto', 'Identificamos las características y funcionalidades necesarias.'],
  ['Recibe tu cotización', 'Elaboramos una propuesta personalizada.'],
  ['Desarrollamos tu página', 'Diseñamos y construimos la solución acordada.'],
  ['Publicamos tu proyecto', 'Preparamos tu página para recibir visitantes y clientes.']
];

function developmentVisual() {
  return `<div class="development-visual" aria-hidden="true">
    <div class="development-screen">
      <div class="development-toolbar"><i></i><i></i><i></i></div>
      <div class="development-layout"><div class="development-banner"></div><div class="development-blocks"><span></span><span></span><span></span></div></div>
    </div>
    <div class="development-tools"><span>◫ <b>Catálogo</b></span><span>✓ <b>Reservas</b></span><span>↗ <b>Pagos</b></span></div>
  </div>`;
}

export function customWebCard(arrow) {
  return `<a class="service-main service-showcase development-card" href="/servicios/${customWeb.slug}/" aria-label="Conocer ${customWeb.name}">
    <div class="service-top"><span class="service-num">${customWeb.name}</span><span class="service-icon" aria-hidden="true">↗</span></div>
    <h3>Una web diseñada para lo que tu negocio necesita.</h3>
    <p>Desde sitios corporativos hasta plataformas con funciones e integraciones a medida.</p>
    ${developmentVisual()}
    <span class="text-link">Explorar desarrollo web ${arrow}</span>
  </a>`;
}

export function customWebPage(breadcrumbs, href, button) {
  return `<section class="detail-hero development-hero"><div class="wrap">
    ${breadcrumbs}
    <div class="detail-hero-grid">
      <div><h1>${customWeb.short}</h1><p>${customWeb.intro}</p>${button('Solicitar cotización', href)}</div>
      ${developmentVisual()}
    </div>
  </div></section>
  <section class="section"><div class="wrap">
    <div class="section-head"><div><h2>Qué podemos construir.</h2></div><p>Cada propuesta define las funciones, la implementación, el mantenimiento y el soporte según tu proyecto.</p></div>
    <div class="development-capabilities">${capabilities.map(({ title, icon, items }) => `<article class="development-capability"><span aria-hidden="true">${icon}</span><h3>${title}</h3><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul></article>`).join('')}</div>
  </div></section>
  <section class="section soft-section"><div class="wrap">
    <h2 class="section-title">Cómo trabajamos contigo.</h2>
    <ol class="steps development-steps">${steps.map(([title, description]) => `<li class="step"><h3>${title}</h3><p>${description}</p></li>`).join('')}</ol>
  </div></section>
  <section class="contact"><div class="wrap section-head development-contact">
    <div><h2>Imagina lo que tu negocio podría hacer con una página web diseñada especialmente para él.</h2></div>
    <div><p>Cuéntanos tu idea y te ayudaremos a convertirla en una solución digital.</p>${button('Solicitar mi cotización', href)}</div>
  </div></section>`;
}
