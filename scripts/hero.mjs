export const hero = (button, arrow) => `
<section class="hero hero-v3"><div class="wrap">
  <p class="eyebrow">Diseño · Estrategia · Movimiento</p>
  <div class="hero-opening"><h1>Haz que te vean.<br><span>Haz que te elijan.</span></h1>
  <div class="hero-lead"><p>Tu negocio tiene mucho que ofrecer.<br>Hagamos que se note.</p>${button('Hablemos de tu negocio','#contacto')}<span class="hero-location">Desde Monterrey. Cerca de tu negocio.</span></div></div>
  <div class="brand-reel" aria-label="Nuestra marca en acción" role="region" data-reel>
    <div class="reel-bar"><span><i aria-hidden="true"></i> MATANGAZO EN ACCIÓN</span><span>DISEÑO QUE CONECTA ↗</span></div>
    <div class="reel-stage">
      <div class="reel-scene scene-web is-active" data-scene="0" aria-hidden="false">
        <div class="reel-note reel-piece"><span class="reel-number">01 / DISEÑO WEB</span><strong>Una buena<br>primera<br><em>impresión.</em></strong><span class="reel-fine">Tu negocio, en su mejor versión.</span></div>
        <div class="reel-browser reel-piece"><div class="reel-browser-bar"><span>● ● ●</span><span>tu próxima web ↗</span></div><div class="reel-browser-logo"><img src="/assets/matangazo-logo-horizontal.png" width="800" height="127" alt=""></div><div class="reel-web-content"><div><span class="reel-micro">TU MARCA TIENE ALGO QUE DECIR.</span><strong>Se ve bien.<br><em>Se siente tuyo.</em></strong><span class="reel-demo-button">Conoce lo que hacemos ↗</span></div><img src="/assets/marca-aplicada.webp" alt="Taza con la identidad de Matangazo" width="459" height="347" fetchpriority="high"></div><div class="reel-web-bottom"><span>Tu esencia.</span><span>Tu oferta.</span><span>Tu siguiente paso.</span></div></div>
        <span class="reel-stamp reel-piece" aria-hidden="true">Hecha para<br><b>conectar.</b><span>↗</span></span>
      </div>
      <div class="reel-scene scene-identity" data-scene="1" aria-hidden="true" hidden>
        <div class="identity-word reel-piece" aria-hidden="true">Muy<br><em>tu marca.</em></div>
        <div class="identity-mug reel-piece"><img src="/assets/marca-aplicada.webp" alt="Identidad de Matangazo aplicada a una taza" width="459" height="347"></div>
        <div class="identity-shirt reel-piece"><img src="/assets/identidad-matangazo.webp" alt="Identidad de Matangazo en una prenda" width="400" height="548" loading="lazy"></div>
        <div class="identity-sign reel-piece"><img src="/assets/matangazo-logo-horizontal.png" alt="Matangazo" width="800" height="127"><span>UNA IDENTIDAD. MUCHAS FORMAS DE EXPRESARLA.</span></div>
        <span class="identity-colors reel-piece" aria-label="Azul, rojo y blanco"><i></i><i></i><i></i></span>
      </div>
      <div class="reel-scene scene-social" data-scene="2" aria-hidden="true" hidden>
        <div class="social-word reel-piece"><span class="reel-number">03 / COMUNICACIÓN</span><strong>Algo bueno<br>está pasando<br><em>en tu negocio.</em></strong><span class="reel-fine">Démosle una voz propia.</span></div>
        <div class="reel-post post-one reel-piece"><img src="/assets/matangazo-logo-horizontal.png" alt="" width="800" height="127"><strong>Buenas<br>ideas.<br><em>Mejores<br>conexiones.</em></strong><span>DISEÑO CON INTENCIÓN ↗</span></div>
        <div class="reel-post post-two reel-piece"><span class="post-spark" aria-hidden="true">✳</span><strong>Hazte<br>notar.</strong><span>MATANGAZO / TU MARCA EN MOVIMIENTO</span></div>
      </div>
    </div>
    <div class="reel-controls"><div class="reel-choices" role="group" aria-label="Explorar muestras de la marca"><button type="button" data-reel-select="0" aria-pressed="true">01 <span>Web</span></button><button type="button" data-reel-select="1" aria-pressed="false">02 <span>Identidad</span></button><button type="button" data-reel-select="2" aria-pressed="false">03 <span>Comunicación</span></button></div><button type="button" class="reel-pause" data-reel-pause hidden><span data-pause-icon aria-hidden="true">Ⅱ</span> <span data-pause-label>Pausar</span></button></div>
    <p class="sr-only" data-reel-status aria-live="polite"></p>
  </div>
  <div class="hero-closing"><p>Una web que te presente.<br>Una marca que te distinga.<br><span>Una estrategia que te acerque a tus clientes.</span></p><a class="text-link" href="#servicios">Conoce lo que hacemos <span aria-hidden="true">↓</span></a></div>
</div></section>
<section class="goal-guide" aria-labelledby="goal-title"><div class="wrap goal-layout">
  <div><p class="eyebrow">Comencemos por ti</p><h2 id="goal-title">¿Qué quieres<br>mover hoy?</h2><p>Elige tu punto de partida.</p></div>
  <div class="goal-tool"><div class="goal-options" role="group" aria-label="Elige el objetivo de tu negocio">
    <button type="button" data-goal="web" aria-pressed="true" aria-controls="goal-result">Necesito una web <span aria-hidden="true">↗</span></button>
    <button type="button" data-goal="consultas" aria-pressed="false" aria-controls="goal-result">Quiero más consultas <span aria-hidden="true">↗</span></button>
    <button type="button" data-goal="marca" aria-pressed="false" aria-controls="goal-result">Quiero mejorar mi imagen <span aria-hidden="true">↗</span></button>
  </div><div class="goal-result" id="goal-result" aria-live="polite" aria-atomic="true"><p class="goal-kicker">TU PUNTO DE PARTIDA</p><h3 id="goal-heading">Una web que presente bien tu negocio.</h3><p id="goal-description">Explica lo que haces, muestra tu oferta y facilita que las personas te contacten.</p><a id="goal-link" class="text-link" href="/servicios/diseno-web/">Explorar diseño web ${arrow}</a></div></div>
</div></section>`;
