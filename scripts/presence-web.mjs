import { webPreview } from './motion.mjs';

export function presenceWeb(service, breadcrumbs) {
  const benefits = service.benefits.map(([title, description]) => `
    <article class="presence-benefit">
      <h3>${title}</h3>
      <p>${description}</p>
    </article>`).join('');
  const scope = service.scope.map(item => `<li>${item}</li>`).join('');
  const limits = service.limits.map(item => `<li>${item}</li>`).join('');

  return `
  <section class="presence-hero">
    <div class="wrap">
      ${breadcrumbs}
      <div class="presence-opening">
        <div class="presence-copy">
          <h1>Todo tu negocio <em>en un solo enlace.</em></h1>
          <p>Presencia Web reúne lo que ofreces, dónde encontrarte y cómo contactarte en una página profesional con tu logo y tus colores.</p>
          <a class="button" href="#alcance">Ver qué incluye</a>
        </div>
        <figure class="presence-example" aria-label="Presencia Web en computadora y celular">
          <div class="presence-stage">
            <div class="presence-devices motion-canvas" data-motion aria-hidden="true">
              ${webPreview()}
            </div>
          </div>
        </figure>
      </div>
    </div>
  </section>
  <section class="section presence-benefits">
    <div class="wrap">
      <h2 class="section-title">Qué es Presencia Web</h2>
      <div class="presence-benefit-grid">${benefits}</div>
    </div>
  </section>
  <section class="section presence-details" id="alcance">
    <span id="plantilla-1" aria-hidden="true"></span>
    <div class="wrap">
      <h2 class="section-title">Alcance de Presencia Web</h2>
      <p class="presence-lead">${service.scopeIntro}</p>
      <div class="presence-scope">
        <article class="presence-panel presence-includes">
          <h3>Qué incluye</h3>
          <ul>${scope}</ul>
        </article>
        <article class="presence-panel presence-limits">
          <h3>Qué queda fuera</h3>
          <ul>${limits}</ul>
          <p>Si tus clientes necesitan armar un carrito y enviarlo por WhatsApp, conoce <a class="presence-inline-link" href="#pedidos-web">Pedidos Web</a>.</p>
          <p>Para vender con pagos en línea o incorporar funciones a medida, podemos cotizar una página personalizada.</p>
        </article>
      </div>
    </div>
  </section>`;
}
