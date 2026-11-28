import {webPreview,socialPreview} from './motion.mjs';
export const hero = (button, arrow) => `
<section class="hero hero-v3"><div class="wrap">
  <p class="eyebrow">Diseño · Estrategia · Movimiento</p>
  <div class="hero-opening"><h1>Haz que te vean.<br><span>Haz que te elijan.</span></h1>
  <div class="hero-lead"><p>Tu negocio tiene mucho que ofrecer.<br>Hagamos que se note.</p>${button('Hablemos de tu negocio','#contacto')}<span class="hero-location">Desde Monterrey. Cerca de tu negocio.</span></div></div>
  <div class="brand-reel" aria-label="Nuestra marca en acción" role="region" data-reel>
    <div class="reel-bar"><span><i aria-hidden="true"></i> MATANGAZO EN ACCIÓN</span><span>DEMOSTRACIÓN DE DISEÑO</span></div>
    <div class="reel-stage">
      <div class="reel-scene scene-web is-active" data-scene="0" aria-hidden="false">
        <div class="reel-note reel-piece"><span class="reel-number">PRESENCIA WEB</span><strong>Una buena<br>primera<br><em>impresión.</em></strong><span class="reel-fine">Tu negocio, en su mejor versión.</span></div>
        <div class="hero-web-demo motion-canvas" data-motion tabindex="0" role="group" aria-label="Muestra animada de Presencia Web"><div class="hero-devices">${webPreview()}</div></div>
        <span class="reel-stamp reel-piece" aria-hidden="true">Hecha para<br><b>conectar.</b><span>↗</span></span>
      </div>
      <div class="reel-scene scene-identity" data-scene="1" aria-hidden="true" hidden>
        <div class="identity-word reel-piece" aria-hidden="true">Muy<br><em>tu marca.</em></div>
        <div class="identity-mug identity-vehicle reel-piece"><img src="/assets/marca-vehiculo.webp" alt="Aplicación de la marca Matangazo en un vehículo" width="1000" height="414" loading="lazy"></div>
        <div class="identity-shirt reel-piece"><img src="/assets/identidad-matangazo.webp" alt="Identidad de Matangazo en una prenda" width="400" height="548" loading="lazy"></div>
        <div class="identity-sign reel-piece"><img src="/assets/matangazo-logo-horizontal.png" alt="Matangazo" width="800" height="127"><span>UNA IDENTIDAD. MUCHAS FORMAS DE EXPRESARLA.</span></div>
        <span class="identity-colors reel-piece" aria-label="Azul, rojo y amarillo"><i></i><i></i><i></i></span>
      </div>
      <div class="reel-scene scene-social" data-scene="2" aria-hidden="true" hidden>
        <div class="social-word reel-piece"><span class="reel-number">COMUNICACIÓN</span><strong>Algo bueno<br>está pasando<br><em>en tu negocio.</em></strong><span class="reel-fine">Démosle una voz propia.</span></div>
        <div class="hero-social-demo motion-canvas" data-motion>${socialPreview()}</div>
      </div>
    </div>
    <div class="reel-controls"><div class="reel-choices" role="group" aria-label="Explorar muestras de la marca"><button type="button" data-reel-select="0" aria-pressed="true"><span>Web</span></button><button type="button" data-reel-select="1" aria-pressed="false"><span>Identidad</span></button><button type="button" data-reel-select="2" aria-pressed="false"><span>Comunicación</span></button></div><button type="button" class="reel-pause" data-reel-pause hidden><span data-pause-icon aria-hidden="true">Ⅱ</span> <span data-pause-label>Pausar</span></button></div>
    <p class="sr-only" data-reel-status aria-live="polite"></p>
  </div>
  <div class="hero-closing"><p>Una web que te presente.<br>Una marca que te distinga.<br><span>Una estrategia que te acerque a tus clientes.</span></p><a class="text-link" href="#servicios">Conoce lo que hacemos <span aria-hidden="true">↓</span></a></div>
</div></section>
<section class="goal-guide" aria-labelledby="goal-title"><div class="wrap goal-layout">
  <div><p class="eyebrow">Comencemos por ti</p><h2 id="goal-title">¿Qué quieres mover hoy?</h2><p>Elige tu punto de partida.</p></div>
  <div class="goal-tool"><div class="goal-options" role="group" aria-label="Elige el objetivo de tu negocio">
    <button type="button" data-goal="web" aria-pressed="true" aria-controls="goal-result">Necesito una web <span aria-hidden="true">↗</span></button>
    <button type="button" data-goal="consultas" aria-pressed="false" aria-controls="goal-result">Quiero más consultas <span aria-hidden="true">↗</span></button>
    <button type="button" data-goal="marca" aria-pressed="false" aria-controls="goal-result">Quiero mejorar mi imagen <span aria-hidden="true">↗</span></button>
  </div><div class="goal-result" id="goal-result" aria-live="polite" aria-atomic="true"><p class="goal-kicker">TU PUNTO DE PARTIDA</p><h3 id="goal-heading">Una web que presente bien tu negocio.</h3><p id="goal-description">Explica lo que haces, muestra tu oferta y facilita que las personas te contacten.</p><a id="goal-link" class="text-link" href="/servicios/diseno-web/">Explorar Presencia Web ${arrow}</a></div></div>
</div></section>`;
