const cafeLogo = '<span class="offer-demo-logo"><span>☕</span> Café Nube</span>';

const tabs = [
  ['Inicio', 'Café de barrio', 'Un buen día empieza con café.'],
  ['Menú', 'Cafés y pan dulce', 'Conoce lo que preparamos.'],
  ['Nosotros', 'Sobre Café Nube', 'Café hecho con calma.'],
  ['Galería', 'Conoce el espacio', 'Un rincón para hacer una pausa.'],
  ['Ubicación', 'Cómo llegar', 'Encuentra la sucursal en el mapa.'],
  ['Contacto', 'Hablemos por WhatsApp', 'Pregunta por tu bebida favorita.']
];

export function presenceDemo() {
  const labels = tabs.map(([label], index) =>
    `<span style="--scene-delay:${index * 1.5}s">${label}</span>`
  ).join('');
  const banners = tabs.map(([, title, copy], index) =>
    `<div class="offer-scene presence-demo-banner" style="--scene-delay:${index * 1.5}s">
       <strong>${title}</strong><span>${copy}</span>
     </div>`
  ).join('');
  return `
    <figure class="offer-demo motion-canvas" data-motion tabindex="0" aria-label="Demostración de Presencia Web: logo, banner y recorrido por seis pestañas">
      <div class="offer-demo-screen" aria-hidden="true">
        <div class="offer-demo-header">${cafeLogo}<span>Sitio de ejemplo</span></div>
        <div class="presence-demo-tabs">${labels}</div>
        <div class="offer-demo-scenes">${banners}</div>
      </div>
    </figure>`;
}

export function ordersDemo() {
  return `
    <figure class="offer-demo orders-demo motion-canvas" data-motion tabindex="0" aria-label="Demostración de Pedidos Web: del menú al carrito y de ahí a un mensaje simulado en WhatsApp">
      <div class="offer-demo-screen" aria-hidden="true">
        <div class="offer-demo-header">${cafeLogo}<span>Pedido de ejemplo</span></div>
        <div class="offer-demo-scenes">
          <div class="offer-scene orders-demo-stage" style="--scene-delay:0s">
            <strong>Menú</strong>
            <div class="orders-item"><span>☕ Latte</span><span class="orders-add">＋</span></div>
            <div class="orders-item"><span>🥐 Croissant</span><span class="orders-add">＋</span></div>
          </div>
          <div class="offer-scene orders-demo-stage" style="--scene-delay:2.5s">
            <strong>Carrito</strong>
            <div class="orders-item"><span>Latte</span><span>× 1</span></div>
            <div class="orders-item"><span>Croissant</span><span>× 1</span></div>
            <span class="orders-whatsapp">Enviar por WhatsApp</span>
          </div>
          <div class="offer-scene orders-message" style="--scene-delay:5s">
            <strong>WhatsApp · Simulación</strong>
            <div class="orders-bubble">Hola, Café Nube. Quiero pedir un latte y un croissant. <span>✓✓</span></div>
          </div>
        </div>
      </div>
    </figure>`;
}
