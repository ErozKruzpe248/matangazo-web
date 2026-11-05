export const hero = (button, arrow) => `
<section class="hero hero-v2"><div class="wrap hero-grid">
  <div class="hero-intro"><p class="eyebrow">Diseño web · Identidad · Marketing digital</p>
  <h1>Diseño que <span>conecta.</span><br>Marketing que <em>mueve.</em></h1>
  <p class="hero-copy">Tu negocio tiene mucho que ofrecer. Hagamos que se note con una web, una marca y una estrategia pensadas para tus próximos clientes.</p>
  <div class="actions">${button('Hablemos de tu negocio','#contacto')}<a class="text-link" href="#servicios">Conoce lo que hacemos <span aria-hidden="true">↓</span></a></div>
  <p class="hero-note"><span aria-hidden="true">↗</span> Desde Monterrey. Cerca de tu negocio.</p></div>
  <div class="hero-art" role="img" aria-label="Composición ilustrativa de diseño web e identidad usando aplicaciones de la marca Matangazo">
    <div class="art-backdrop"></div>
    <svg class="hero-spark" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 0 58 35 85 15 65 42 100 50 65 58 85 85 58 65 50 100 42 65 15 85 35 58 0 50 35 42 15 15 42 35Z" fill="currentColor"/></svg>
    <div class="browser-art"><div class="browser-chrome"><i></i><i></i><i></i><span>UNA NUEVA FORMA DE PRESENTARTE</span></div><div class="browser-brand"><img src="/assets/matangazo-logo-horizontal.png" width="800" height="127" alt=""><span>Tu marca. Tu siguiente paso. ↗</span></div><div class="browser-content"><div><span class="micro">DISEÑO CON INTENCIÓN</span><h2>Una gran<br>marca.<br><span>Una mejor<br>impresión.</span></h2><span class="mock-button">Hablemos de tu proyecto ↗</span></div><img src="/assets/marca-aplicada.webp" alt="" width="459" height="347" fetchpriority="high"></div><div class="browser-bottom"><span>Identidad propia</span><span>Una oferta clara</span><span>Contacto directo</span></div></div>
    <div class="art-label"><span>01 / TU MARCA EN ACCIÓN</span><strong>Que se vea.<br>Que se sienta.<br>Que conecte.</strong>${arrow}</div>
    <div class="art-tag"><span class="tag-dot"></span>Buenas ideas.<strong>Un siguiente paso claro.</strong></div>
    <span class="art-caption">APLICACIONES DE LA MARCA MATANGAZO</span>
  </div>
</div></section>
<section class="goal-guide" aria-labelledby="goal-title"><div class="wrap goal-layout">
  <div><p class="eyebrow">Comencemos por ti</p><h2 id="goal-title">¿Qué quieres<br>mover hoy?</h2><p>Elige tu punto de partida.</p></div>
  <div class="goal-tool"><div class="goal-options" role="group" aria-label="Elige el objetivo de tu negocio">
    <button type="button" data-goal="web" aria-pressed="true" aria-controls="goal-result">Necesito una web <span aria-hidden="true">↗</span></button>
    <button type="button" data-goal="consultas" aria-pressed="false" aria-controls="goal-result">Quiero más consultas <span aria-hidden="true">↗</span></button>
    <button type="button" data-goal="marca" aria-pressed="false" aria-controls="goal-result">Quiero mejorar mi imagen <span aria-hidden="true">↗</span></button>
  </div><div class="goal-result" id="goal-result" aria-live="polite" aria-atomic="true"><p class="goal-kicker">TU PUNTO DE PARTIDA</p><h3 id="goal-heading">Una web que presente bien tu negocio.</h3><p id="goal-description">Explica lo que haces, muestra tu oferta y facilita que las personas te contacten.</p><a id="goal-link" class="text-link" href="/servicios/diseno-web/">Explorar diseño web ${arrow}</a></div></div>
</div></section>`;
