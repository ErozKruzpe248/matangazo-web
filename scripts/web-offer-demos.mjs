const assets = '/assets/demos/';

const renderTabs = labels => `<div class="offer-tabs">${labels.map(label => `<span>${label}</span>`).join('')}</div>`;

function windowDemo(className, description, content) {
  return `
    <figure class="offer-demo ${className} motion-canvas" data-motion tabindex="0" aria-label="${description}">
      <div class="offer-window" aria-hidden="true">
        <div class="offer-chrome"><i></i><i></i><i></i></div>
        <div class="offer-viewport">${content}</div>
      </div>
    </figure>`;
}

export function presenceDemo() {
  return windowDemo('workshop-demo', 'Taller El Moreno: de la portada a los servicios y al mapa de ubicación', `
    <div class="offer-scroll">
      <section class="offer-panel offer-landing">
        <div class="offer-site-header"><img src="${assets}moreno-logo.webp" alt="" loading="lazy"></div>
        <div class="offer-photo-banner">
          <img src="${assets}moreno-taller.webp" alt="" loading="lazy">
          <div><strong>Taller El Moreno</strong><span>Mecánica y mantenimiento en Monterrey</span></div>
        </div>
      </section>
      <section class="offer-panel workshop-services">
        <strong>Nuestros servicios</strong>
        ${renderTabs(['Todos', 'Diagnóstico', 'Afinación', 'Aceite', 'Polarizado', 'Revisión'])}
        <div class="workshop-feature">
          <img src="${assets}moreno-diagnostico.webp" alt="" loading="lazy">
          <strong>Diagnóstico y reparación general</strong>
        </div>
      </section>
      <section class="offer-panel workshop-location">
        <strong>Ubicación y contacto</strong>
        <div class="workshop-map">
          <img src="${assets}moreno-mapa.png" alt="" loading="lazy">
          <span class="workshop-pin"></span>
          <small>© OpenStreetMap contributors</small>
        </div>
      </section>
    </div>`);
}

const fillings = ['Deshebrada', 'Chicharrón rojo', 'Chicharrón verde', 'Nopalitos', 'Rajas con queso', 'Picadillo'];

const menuRows = fillings.map((name, index) => {
  const selected = index < 2;
  return `<div class="offer-menu-row${selected ? ' offer-adding' : ''}"${selected ? ` style="--add-at:${index ? 5.4 : 4.45}s"` : ''}>
    <span>${name}</span><span class="offer-quantity">0</span><span class="offer-add">+</span>
  </div>`;
}).join('');

export function ordersDemo() {
  return windowDemo('orders-demo', 'Gorditacos: de la portada al menú, dos productos agregados al carrito y el botón de WhatsApp', `
    <div class="offer-scroll">
      <section class="offer-panel offer-landing">
        <div class="offer-site-header"><img src="${assets}gorditacos.webp" alt="" loading="lazy"></div>
        <div class="offer-photo-banner">
          <img src="${assets}tacos.webp" alt="" loading="lazy">
          <div><strong>Gorditacos</strong><span>Menú y pedidos</span></div>
        </div>
      </section>
      <section class="offer-panel orders-menu">
        <div class="orders-menu-title"><strong>Gorditas doradas</strong>
          <span class="offer-cart">🛒 <span class="offer-count"><span>0</span><span>1</span><span>2</span></span></span>
        </div>
        <div class="offer-menu-body">
          <img src="${assets}gorditas.webp" alt="" loading="lazy">
          <div class="offer-menu-options">${menuRows}</div>
        </div>
      </section>
      <section class="offer-panel orders-review">
        <strong>Resumen del pedido</strong>
        <div class="offer-review-items">
          <div><span>Gordita de deshebrada</span><b>× 1</b></div>
          <div><span>Gordita de chicharrón rojo</span><b>× 1</b></div>
        </div>
        <span class="offer-whatsapp">Enviar a WhatsApp</span>
      </section>
    </div>`);
}
